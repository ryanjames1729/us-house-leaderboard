'use client'

import Image from 'next/image'
import { GraphQLClient } from 'graphql-request'

import { Bar } from 'react-chartjs-2'
import { Chart, CategoryScale, LinearScale, BarElement } from "chart.js"
Chart.register(CategoryScale);
Chart.register(LinearScale);
Chart.register(BarElement);

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

  const houseData: Array<{ houseName: string, housePoints: number }> = await getHouses();
  //const houseData = houses;
  // console.log("house data")
  // console.log(houseData);
  console.log(houseData[0].houseName);
  console.log(houseData[0].housePoints);

  const houseName1 = houseData[0].houseName.replace(/\s/g, '');
  const housePoints1 = houseData[0].housePoints;
  const houseName2 = houseData[1].houseName;
  const housePoints2 = houseData[1].housePoints;
  const houseName3 = houseData[2].houseName;
  const housePoints3 = houseData[2].housePoints;
  const houseName4 = houseData[3].houseName;
  const housePoints4 = houseData[3].housePoints;

  houseData.map((house) => {
    console.log(house.houseName);
    console.log(house.housePoints);
  })
  
  return (
    <main className="bg-secondary text-primary flex min-h-screen flex-col items-center justify-between p-24">
      
      <div className="relative flex place-items-center">
      <h1 className={`mb-3 lg:text-8xl text-4xl font-semibold text-center`}>US Houses!</h1>
      </div>

      <div className="grid grid-col grid-cols-1 text-center">
        <div className="shadow-2xl mb-32 grid text-center w-full lg:max-w-5xl lg:w-full lg:mb-64 lg:grid-cols-2 lg:text-left">

          <a href="#houses">
          <div className="outline m-6 shadow-[0_0_20px_5px_#d41c46] hover:shadow-[0_0_30px_10px_#d41c46] h-48 w-48 grid-cols-1 text-center">
            <div className="relative grid-cols-1 text-center h-48 w-48">
            <Image src="/PinesGRN.svg" alt="US House 1" fill={true} className="object-cover"/>
            </div>
            {/* <h2 className="mb-3 text-4xl font-semibold py-6">
              {houseName1}{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2> */}
            </div></a>

            <a href="#houses">
            <div className="outline m-6 shadow-[0_0_20px_5px_#d41c46] hover:shadow-[0_0_30px_10px_#d41c46] h-48 w-48 grid-cols-1 text-center">
            <div className="relative grid-cols-1 text-center h-48 w-48">
              <Image src="/CardinalRED.svg" alt="US House 2" fill={true} className="object-cover" />
            </div>
            
            {/* <h2 className="mb-3 text-4xl font-semibold py-6">
              {houseName2}{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2> */}
            </div></a>

            <a href="#houses">
            <div className="outline m-6 shadow-[0_0_20px_5px_#d41c46] hover:shadow-[0_0_30px_10px_#d41c46] h-48 w-48 grid-cols-1 text-center">
            <div className="relative grid-cols-1 text-center h-48 w-48">
              <Image src="/BellBLUE.svg" alt="US House 3" fill={true} className="object-cover" />
            </div>
           
            {/* <h2 className="mb-3 text-4xl font-semibold py-6">
              {houseName3}{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2> */}
            </div></a>

            <a href="#houses">
            <div className="outline m-6 shadow-[0_0_20px_5px_#d41c46] hover:shadow-[0_0_30px_10px_#d41c46] h-48 w-48 grid-cols-1 text-center">
            <div className="relative grid-cols-1 text-center h-48 w-48">
              <Image src="/HighlanderCOLOR.svg" alt="US House 4" fill={true} className="object-cover" />
            </div>
           
            {/* <h2 className="mb-3 text-4xl font-semibold py-6">
              {houseName4}{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2> */}
            </div></a>
        </div>
      </div>

      
      <div className="h-96 w-96">
      <div id="houses">
          <Bar
            data={{
              labels: [houseName1, houseName2, houseName3, houseName4],
              datasets: [
                {
                  label: "US House Points",
                  data: [housePoints1, housePoints2, housePoints3, housePoints4],
                  backgroundColor: ["rgba(0,255,0,0.3)", "rgba(255,0,0,0.3)", "rgba(0,0,75,0.3)", "rgba(100,100,200,0.3)"],
                  borderColor: "red",
                  borderWidth: 2,
                },
              ]
            }}
            height={450}
            width={750}
            options={{
              maintainAspectRatio: false,
              responsive: true,
            }}
          
          />
        </div>
        </div>


      <p className="lg:mt-20 pt-20 mb-0 font-white">This page was built by Ryan James.</p>
    </main>
  )
}
