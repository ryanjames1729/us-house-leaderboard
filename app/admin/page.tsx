'use client'
import React, { useRef, useState } from 'react'
import Image from 'next/image'
import { GraphQLClient } from 'graphql-request'
import { UserButton } from '@clerk/nextjs'
import { User } from '@clerk/nextjs/server'
import Form from '../../components/Form/index'
import { Protect } from "@clerk/nextjs";

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

  // console.log('async function getHouses()')
  // console.log(houseEntries)
 

  return houseEntries
}

// article to help: https://medium.com/@harshil25patel/how-to-use-next-js-14-app-router-fetching-data-with-an-async-function-and-utilizing-react-hooks-ac02b71124cb


export default async function Home() {
  // const houses: Array<string> = getHouses();

//   const houseData: Array<{ houseName: string, housePoints: number }> = await getHouses();
//   //const houseData = houses;
//   // console.log("house data")
//   // console.log(houseData);
//   // console.log(houseData[0].houseName);
//   // console.log(houseData[0].housePoints);

//   const houseName1 = houseData[0].houseName.replace(/\s/g, '');
//   const housePoints1 = houseData[0].housePoints;
//   const houseName2 = houseData[1].houseName;
//   const housePoints2 = houseData[1].housePoints;
//   const houseName3 = houseData[2].houseName;
//   const housePoints3 = houseData[2].housePoints;
//   const houseName4 = houseData[3].houseName;
//   const housePoints4 = houseData[3].housePoints;

//   houseData.map((house) => {
//     console.log(house.houseName);
//     console.log(house.housePoints);
//   })

  

  
  
  return (
    
<main className="font-primary bg-secondary text-primary flex min-h-screen flex-col items-center justify-between lg:p-24 py-24">
      <div className="relative flex place-items-center flex-col -mt-12 w-96 lg:w-auto">
      <h1 className={`mb-3 lg:text-6xl text-2xl text-center text-slate-500`}>Upper School House Leaderboard</h1>
      <h2 className={`mb-3 lg:text-8xl text-4xl font-semibold text-center`}>ADMIN WINDOW</h2>
      <div className="h-screen">
        <UserButton afterSignOutUrl="/"/> Click My Icon to Sign Out
        <Protect
    role="org:admin"
    fallback={<p>You do not have the permissions to add points.</p>}
    >
        <Form />
        </Protect>
      </div>
      </div>

      


      <p className="lg:mt-20 lg:text-lg text-sm text-center w-96 px-0 pt-20 mb-0 text-slate-400">This page was built by Ryan James.</p>
    </main>
    
    
  )
}
