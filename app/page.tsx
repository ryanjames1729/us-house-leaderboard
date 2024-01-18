import Image from 'next/image'

'use client'

import { GraphQLClient } from 'graphql-request'

import { Bar } from 'react-chartjs-2'
import { Chart, CategoryScale, LinearScale, BarElement } from "chart.js"
Chart.register(CategoryScale);
Chart.register(LinearScale);
Chart.register(BarElement);

async function getHouses() {
  const GRAPHCMS_URL_ENDPOINT = 'https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clrjkusf007bv01vx43bnq4kz/master'
  const graphcms = new GraphQLClient(GRAPHCMS_URL_ENDPOINT)

  const { houses }: { houses: Array<{ houseName: string, housePoints: number }> } = await graphcms.request(
    `
    {
      houses {
        houseName
        housePoints
      }
    }
    `
  )

  return houses
}


export default function Home({ houses }: { houses: Array<{ houseName: string, housePoints: number }> }) {
  // const houses: Array<string> = getHouses();


  const houseData = houses;
  console.log("house data")
  console.log(houseData);
  
  return (
    <main className="bg-secondary text-primary flex min-h-screen flex-col items-center justify-between p-24">
      
      <div className="relative flex place-items-center">
      <h1 className={`mb-3 text-6xl font-semibold`}>US Houses!</h1>
      </div>

      <div className="grid grid-col grid-cols-1 text-center">
        <div className="shadow-2xl mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-64 lg:grid-cols-2 lg:text-left">

          <a href="#houses">
          <div className="outline m-6 shadow-[0_0_20px_5px_#d41c46] hover:shadow-[0_0_30px_10px_#d41c46] h-24 grid-cols-1 text-center">
            <h2 className="mb-3 text-4xl font-semibold py-6">
              Pine{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            </div></a>

            <a href="#houses">
            <div className="outline m-6 shadow-[0_0_20px_5px_#d41c46] hover:shadow-[0_0_30px_10px_#d41c46] h-24 grid-cols-1 text-center">
            <h2 className="mb-3 text-4xl font-semibold py-6">
              Cardinal{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            </div></a>

            <a href="#houses">
            <div className="outline m-6 shadow-[0_0_20px_5px_#d41c46] hover:shadow-[0_0_30px_10px_#d41c46] h-24 grid-cols-1 text-center">
            <h2 className="mb-3 text-4xl font-semibold py-6">
              Bell{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            </div></a>

            <a href="#houses">
            <div className="outline m-6 shadow-[0_0_20px_5px_#d41c46] hover:shadow-[0_0_30px_10px_#d41c46] h-24 grid-cols-1 text-center">
            <h2 className="mb-3 text-4xl font-semibold py-6">
              Highlander{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            </div></a>
        </div>
      </div>


      <div id="houses">
          <Bar
            data={{
              labels: ["Pine", "Cardinal", "Bell", "Highlander"],
              datasets: [
                {
                  label: "US House Points",
                  data: [150, 120, 60, 70],
                  backgroundColor: ["rgba(0,255,0,0.3)", "rgba(255,0,0,0.3)", "rgba(0,0,255,0.3)", "rgba(0,0,0,0.3)"],
                  borderColor: "red",
                  borderWidth: 2,
                },
              ]
            }}
            height={300}
            width={500}
            options={{
              maintainAspectRatio: false,
              responsive: true,
            }}
          
          />
        </div>


      <p className="mt-20 pt-10 mb-0 font-white">This page was built by Ryan James.</p>
    </main>
  )
}
