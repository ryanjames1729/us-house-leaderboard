'use server'

import Image from 'next/image'
import { gql, GraphQLClient } from 'graphql-request'
import { redirect } from 'next/dist/server/api-utils'
import { Alert } from 'react-alert'

async function getHouses() {
    const GRAPHCMS_URL_ENDPOINT = 'https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clrjkusf007bv01vx43bnq4kz/master'
    const graphcms = new GraphQLClient(GRAPHCMS_URL_ENDPOINT)
  
    const { houseEntries } = await graphcms.request(
      `
      query HouseEntries {
        houseEntries {
          houseName
          housePoints
        }
      }
      `
    )
  
    // console.log('async function getHouses()')
    // console.log(houseEntries)
   
  
    return houseEntries
  }

export async function updatePoints(formData) {
    

    console.log('updatePoints action called with:', formData);

    const data = JSON.stringify(Object.fromEntries(formData));
    console.log('data:', data)
    const dataObject = JSON.parse(data);
    console.log('dataObject:', dataObject)
    console.log('dataObject:', dataObject['bellPointsAdded'])

    const houseEntries = await getHouses()
    const houseNames = houseEntries.map(entry => entry.houseName)
    const housePointsList = houseEntries.map(entry => entry.housePoints)
    
    console.log('houseNames:', houseNames)
    console.log('housePoints:', housePointsList)

    housePointsList[0] += parseFloat(dataObject['pinesPointsAdded']? dataObject['pinesPointsAdded'] : 0);
    housePointsList[1] += parseFloat(dataObject['cardinalPointsAdded']? dataObject['cardinalPointsAdded'] : 0);
    housePointsList[2] += parseFloat(dataObject['bellPointsAdded']? dataObject['bellPointsAdded'] : 0);
    housePointsList[3] += parseFloat(dataObject['highlanderPointsAdded']? dataObject['highlanderPointsAdded'] : 0);

    console.log('housePoints:', housePointsList)

    const bellPoints = housePointsList[2];
    const cardinalPoints = housePointsList[1];
    const pinesPoints = housePointsList[0];
    const highlanderPoints = housePointsList[3];

   
    const graphqlAPI = process.env.GRAPHCMS_URL_ENDPOINT;
    const graphqlToken = process.env.HYGRAPH_TOKEN;

    // need to update the following to match the correct mutation

    const graphQLClient = new GraphQLClient(graphqlAPI, {
        headers: {
          authorization: `Bearer ${graphqlToken}`,
        }
      });
    
    const query = gql`
    mutation($bellPoints: Float!, $cardinalPoints: Float!, $pinesPoints: Float!, $highlanderPoints: Float!) {
    updateHouseEntry (
        data: {houseName: "Bell", housePoints: $bellPoints}
        where: {houseName: "Bell"}
    ) {
        id
    }
    updateHouseEntry (
        data: {houseName: "Cardinal", housePoints: $cardinalPoints}
        where: {houseName: "Cardinal"}
    ) {
        id
    }
    updateHouseEntry (
        data: {houseName: "Highlander", housePoints: $highlanderPoints}
        where: {houseName: "Highlander"}
    ) {
        id
    }
    updateHouseEntry (
        data: {houseName: "Pines", housePoints: $pinesPoints}
        where: {houseName: "Pines"}
    ) {
        id
    }
    publishHouseEntry(where: {houseName: "Bell"}) {
        id
    }
    publishHouseEntry(where: {houseName: "Cardinal"}) {
        id
    }
    publishHouseEntry(where: {houseName: "Highlander"}) {
        id
    }
    publishHouseEntry(where: {houseName: "Pines"}) {
        id
    }
    }
`

    
    try{
        const result = await graphQLClient.request(query, {bellPoints, cardinalPoints, pinesPoints, highlanderPoints});
        // redirect user to "/" after mutation
        console.log('result:', result);
        Alert.success('Points updated successfully');



      } catch (error) {
        console.log('error 500: ' + error);
        
      }
    


    return {
        type: 'UPDATE_POINTS',
        payload: formData
    }
}