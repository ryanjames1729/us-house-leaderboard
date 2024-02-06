

import { updatePoints } from "../../app/actions";

import React, { FormEvent, useRef, useState } from 'react'

import { GraphQLClient } from 'graphql-request'

import Link from 'next/link'

async function getHouses() {
    const GRAPHCMS_URL_ENDPOINT = 'https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clrjkusf007bv01vx43bnq4kz/master'
    const graphcms = new GraphQLClient(GRAPHCMS_URL_ENDPOINT)
  
    const { houseEntries }: { houseEntries: Array<{ houseName: string, housePoints: number }> } = await graphcms.request(
      `
      query HouseEntries {
        houseEntries {
          houseName
          housePoints
        }
      }
      `
    )
    return houseEntries
}

export default async function Form() {

    const houseData: Array<{ houseName: string, housePoints: number }> = await getHouses();
  //const houseData = houses;
  // console.log("house data")
  // console.log(houseData);
  // console.log(houseData[0].houseName);
  // console.log(houseData[0].housePoints);

    const houseName1 = houseData[0].houseName.replace(/\s/g, '');
    const housePoints1 = houseData[0].housePoints;
    const houseName2 = houseData[1].houseName;
    const housePoints2 = houseData[1].housePoints;
    const houseName3 = houseData[2].houseName;
    const housePoints3 = houseData[2].housePoints;
    const houseName4 = houseData[3].houseName;
    const housePoints4 = houseData[3].housePoints;
    

    return (
       
        
        <form action={updatePoints} className="lg:px-0 px-2 mx-auto grid grid-cols-1">
            <div className="mb-5 grid grid-cols-3">
                <label htmlFor="bell" className="text-xl lg:text-3xl">Bell:</label>
                <input 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="text" id="bellPointsAdded" name="bellPointsAdded"/>
                <label className="text-xl lg:text-3xl">{houseName3}: {housePoints3}</label>
            </div>
            <div className="mb-5 grid grid-cols-3">
                <label htmlFor="Cardinal" className="text-xl lg:text-3xl">Cardinal:</label>
                <input 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="text" id="cardinalPointsAdded" name="cardinalPointsAdded"/>
                <label className="text-xl lg:text-3xl">{houseName2}: {housePoints2}</label>
            </div>
            <div className="mb-5 grid grid-cols-3">
                <label htmlFor="Highlander" className="text-xl lg:text-3xl">Highlander:</label>
                <input 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="text" id="highlanderPointsAdded" name="highlanderPointsAdded"/>
                <label className="text-xl lg:text-3xl">{houseName4}: {housePoints4}</label>
            </div>
            <div className="mb-5 grid grid-cols-3">
                <label htmlFor="Pines" className="text-xl lg:text-3xl">Pines:</label>
                <input 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="text" id="pinesPointsAdded" name="pinesPointsAdded"/>
                <label className="text-xl lg:text-3xl">{houseName1}: {housePoints1}</label>
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            <br/>
            <br/>
            {/* button to send to home */}
            <Link href="/" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Home</Link>
            
           
    

            

        </form>
    )
}
