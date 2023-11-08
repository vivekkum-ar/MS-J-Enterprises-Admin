import '../Layout.css'
import { useFormData } from '../FormDataProvider';
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from 'react';
import Navbar from '../components/Navbar';

function Home() {

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        // const uid = user.uid;
        // ...
      } else {
        // User is signed out
        navigate('/login');
      }
    });
  }, []);

  const { formData, setFormData } = useFormData();
  const navigate = useNavigate();

  const handleOnSubmit = () => {
    navigate('/bill');
  };
  return (
    <>
      <Navbar Print={false} Logout={true}></Navbar>
      <div className="bg-white mt-24 md:mt-20 mx-4 md:mx-0">
        <h1 className="font-century text-3xl md:text-5xl  mb-5 font-bold text-gray-800">
          M/S Jaya Enterprises
        </h1>
        <form className="max-w-sm mx-auto">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="mb-5 text-start">
                <label htmlFor="Bill number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Bill Number</label>
                <input type="number" id="billNumber" value={formData.billNumber} onChange={(e) => { setFormData({ ...formData, billNumber: parseFloat(parseFloat(e.target.value).toFixed(3)) }) }} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter Bill number e.g. 305" required />
              </div>
              <div className="mb-5 text-start">
                <label htmlFor="Month" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Bill Month</label>
                <input type="month" id="billMonth" value={formData.billMonth} onChange={(e) => { setFormData({ ...formData, billMonth: e.target.value }) }} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
              </div>
              <div className="mb-5 text-start">
                <label htmlFor="Date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Bill Date</label>
                <input type="Date" id="billDate" value={formData.billDate} onChange={(e) => { setFormData({ ...formData, billDate: e.target.value }) }} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
              </div>
              <div className="mb-5 text-start">
                <label htmlFor="Base Rent" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Base Rent</label>
                <input type="number" id="baseRent" value={formData.baseRent} onChange={(e) => { setFormData({ ...formData, baseRent: parseInt(e.target.value, 10) }) }} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter Base Rent e.g. 24150" required />
              </div>
              <div className="mb-5 text-start">
                <label htmlFor="KM Used" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Used for distance (in kms)</label>
                <input type="number" id="kmUsed" value={formData.kmUsed} onChange={(e) => { setFormData({ ...formData, kmUsed: parseFloat(parseFloat(e.target.value).toFixed(3)) }) }} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter KM Used e.g. 2000" required />
              </div>
            </div>
            <div>
              <div className="mb-5 text-start">
                <label htmlFor="Diesel Rate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Diesel rate (per Ltr)</label>
                <input type="number" id="dieselRate" value={formData.dieselRate} onChange={(e) => { setFormData({ ...formData, dieselRate: parseFloat(parseFloat(e.target.value).toFixed(3)) }) }} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter Diesel Rate e.g. 94.66" required />
              </div>
              <div className="mb-5 text-start">
                {/* <label htmlFor="Parking" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label> */}
                <label className="inline-flex items-center cursor-pointer">
                  <input type="checkbox" checked={formData.checkparking} onChange={() => {setFormData({...formData,checkparking:!formData.checkparking})}} className="sr-only peer" />
                  <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
                  <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Parking</span>
                </label>
                <input type="number" id="parking" value={formData.parking} onChange={(e) => { setFormData({ ...formData, parking: parseFloat(parseFloat(e.target.value).toFixed(3)) }) }} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter parking rate e.g. 100" required disabled={!formData.checkparking} />
              </div>
              <div className="mb-5 text-start">
                {/* <label htmlFor="Toll Tax" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label> */}
                <label className="inline-flex items-center cursor-pointer">
                  <input type="checkbox" checked={formData.checktollTax} onChange={() => {setFormData({...formData,checktollTax:!formData.checktollTax})}} className="sr-only peer" />
                  <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
                  <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Toll Tax</span>
                </label>
                <input type="number" id="tollTax" value={formData.tollTax} onChange={(e) => { setFormData({ ...formData, tollTax: parseFloat(parseFloat(e.target.value).toFixed(3)) }) }} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter Toll Tax e.g. 100" required disabled={!formData.checktollTax} />
              </div>
              <div className="mb-5 text-start">
                {/* <label htmlFor="Overtime" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label> */}
                <label className="inline-flex items-center cursor-pointer">
                  <input type="checkbox" checked={formData.checkovertime} onChange={() => {setFormData({...formData,checkovertime:!formData.checkovertime})}} className="sr-only peer" />
                  <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
                  <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Overtime</span>
                </label>
                <input type="number" id="overtime" value={formData.overtime} onChange={(e) => { setFormData({ ...formData, overtime: parseFloat(parseFloat(e.target.value).toFixed(3)) }) }} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter Overtime Rate e.g. 100" required disabled={!formData.checkovertime} />
              </div>
              <div className="mb-5 text-start">
                {/* <label htmlFor="Extra used for kilometer (in kms)" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label> */}
                <label className="inline-flex items-center cursor-pointer">
                  <input type="checkbox" checked={formData.checkextraKms} onChange={() => {setFormData({...formData,checkextraKms:!formData.checkextraKms})}} className="sr-only peer" />
                  <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
                  <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Extra kilometer</span>
                </label>
                <input type="number" id="extraKms" value={formData.extraKms} onChange={(e) => { setFormData({ ...formData, extraKms: parseFloat(parseFloat(e.target.value).toFixed(3)) }) }} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Extra used for kilometer (in kms) rate" required disabled={!formData.checkextraKms} />
              </div>
            </div>
          </div>
          <b>Total value of bill is:</b>
          <div className="text-3xl mb-5 font-bold font-cambria">
           {formData.baseRent + ((formData.kmUsed / 10) * formData.dieselRate) + formData.parking + formData.tollTax + formData.overtime + (formData.extraKms / 10 * formData.dieselRate)}<br />
          </div>
          {/* <Link to="/bill"> */}
          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={(e) => {
            e.preventDefault();
            handleOnSubmit();
          }}>Proceed</button>
          {/* </Link> */}
        </form>
      </div>
    </>
  )
}

export default Home
