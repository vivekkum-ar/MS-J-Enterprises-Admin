import { useState } from 'react'
import '../Layout.css'

function Home() {
  return (
    <>
    <h1 className="text-5xl mb-5 font-bold ">
      M/S Jaya Enterprises
    </h1>
      <form className="max-w-sm mx-auto">
      <div className="grid grid-cols-2 gap-4">
        <div>
        <div className="mb-5 text-start">
          <label htmlFor="Bill number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Bill Number</label>
          <input type="number" id="billNumber" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter Bill number e.g. 305" required />
        </div>
        <div className="mb-5 text-start">
          <label htmlFor="Month" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Bill Month</label>
          <input type="month" id="billMonth" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
        </div>
        <div className="mb-5 text-start">
          <label htmlFor="Date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Bill Date</label>
          <input type="Date" id="billDate" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
        </div>
        <div className="mb-5 text-start">
          <label htmlFor="Base Rent" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Base Rent</label>
          <input type="number" id="baseRent" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter Base Rent e.g. 24150" value={24150} required />
        </div>
        <div className="mb-5 text-start">
          <label htmlFor="KM Used" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Used for distance (in kms)</label>
          <input type="number" id="kmUsed" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter KM Used e.g. 2000" value={0} required />
        </div>
        </div>
        <div>
        <div className="mb-5 text-start">
          <label htmlFor="Diesel Rate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Diesel rate (per Ltr)</label>
          <input type="number" id="dieselRate" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter Diesel Rate e.g. 94.66" value={92.62} required />
        </div>
        <div className="mb-5 text-start">
          <label htmlFor="Parking" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Parking</label>
          <input type="number" id="parking" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter parking rate e.g. 100" value={0} required />
        </div>
        <div className="mb-5 text-start">
          <label htmlFor="Toll Tax" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Toll Tax</label>
          <input type="number" id="tollTax" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter Toll Tax e.g. 100" value={0} required />
        </div>
        <div className="mb-5 text-start">
          <label htmlFor="Overtime" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Overtime</label>
          <input type="number" id="Overtime" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter Overtime Rate e.g. 100" value={0} required />
        </div>
        <div className="mb-5 text-start">
          <label htmlFor="Extra used for kilometer (in kms)" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Extra used for kilometer (in kms)</label>
          <input type="number" id="extraKms" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Extra used for kilometer (in kms) rate" value={0} required />
        </div>
        </div>
        </div>


        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Proceed</button>
      </form>
    </>
  )
}

export default Home
