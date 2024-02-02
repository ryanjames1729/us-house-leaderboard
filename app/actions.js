'use server'

import Image from 'next/image'
import { GraphQLClient } from 'graphql-request'

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
    const housePoints = houseEntries.map(entry => entry.housePoints)
    
    console.log('houseNames:', houseNames)
    console.log('housePoints:', housePoints)

    housePoints[0] += parseFloat(dataObject['pinesPointsAdded']);
    housePoints[1] += parseFloat(dataObject['cardinalPointsAdded']);
    housePoints[2] += parseFloat(dataObject['bellPointsAdded']);
    housePoints[3] += parseFloat(dataObject['highlanderPointsAdded']);

    console.log('housePoints:', housePoints)


    return {
        type: 'UPDATE_POINTS',
        payload: formData
    }
}