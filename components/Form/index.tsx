import { updatePoints } from "../../app/actions";

import React, { FormEvent, useRef, useState } from 'react'



export default function Form() {
    

    return (
        <form action={updatePoints} className="max-w-sm mx-auto grid grid-cols-1">
            <div className="mb-5 grid grid-cols-2">
                <label htmlFor="bell" className="text-3xl">Bell:</label>
                <input 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="text" id="bellPointsAdded" name="bellPointsAdded" placeholder="10"/>
            </div>
            <div className="mb-5 grid grid-cols-2">
                <label htmlFor="Cardinal" className="text-3xl">Cardinal:</label>
                <input 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="text" id="cardinalPointsAdded" name="cardinalPointsAdded" placeholder="10"/>
            </div>
            <div className="mb-5 grid grid-cols-2">
                <label htmlFor="Highlander" className="text-3xl">Highlander:</label>
                <input 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="text" id="highlanderPointsAdded" name="highlanderPointsAdded" placeholder="10"/>
            </div>
            <div className="mb-5 grid grid-cols-2">
                <label htmlFor="Pines" className="text-3xl">Pines:</label>
                <input 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="text" id="pinesPointsAdded" name="pinesPointsAdded" placeholder="10"/>
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>
    )
}
