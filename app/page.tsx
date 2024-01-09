import Image from 'next/image'

'use client'

import { Bar } from 'react-chartjs-2'
import { Chart, CategoryScale, LinearScale, BarElement } from "chart.js"
Chart.register(CategoryScale);
Chart.register(LinearScale);
Chart.register(BarElement);

export default function Home() {
  
  return (
    <main className="bg-secondary text-primary flex min-h-screen flex-col items-center justify-between p-24">
      
      <div className="relative flex place-items-center">
      <h1 className={`mb-3 text-6xl font-semibold`}>US Houses!</h1>
      </div>

      <div className="grid grid-col grid-cols-1 text-center">
        <div className="shadow-2xl mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-64 lg:grid-cols-2 lg:text-left">
          <div className="outline m-6 shadow-[0_0_20px_5px_#d41c46]">
            <h2 className={`mb-3 text-4xl font-semibold`}>
              Pine{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            </div>
            <div className="outline m-6 shadow-[0_0_20px_5px_#d41c46]">
            <h2 className={`mb-3 text-4xl font-semibold`}>
              Cardinal{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            </div>
            <div className="outline m-6 shadow-[0_0_20px_5px_#d41c46]">
            <h2 className={`mb-3 text-4xl font-semibold`}>
              Bell{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            </div>
            <div className="outline m-6 shadow-[0_0_20px_5px_#d41c46]">
            <h2 className={`mb-3 text-4xl font-semibold`}>
              Highlander{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            </div>
        </div>
      </div>


      <div>
          <Bar
            data={{
              labels: ["Pine", "Cardinal", "Bell", "Highlander"],
              datasets: [
                {
                  label: "# of vulnerabilities",
                  data: [150, 120, 60, 70],
                  backgroundColor: ["green", "red", "blue", "black"],
                  borderColor: "orange",
                  borderWidth: 5
                },
              ]
            }}
            height={300}
            width={500}
            options={{
              maintainAspectRatio: false
            }}
          />
        </div>


      <p className="mt-20 mb-0 font-white">This page was built by Ryan James.</p>
    </main>
  )
}
