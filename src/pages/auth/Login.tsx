import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import {auth} from "../../firebase";
import AlertError from '../../components/alertError';
import AlertSuccess from '../../components/alertSuccess';
import { useNavigate } from 'react-router-dom';

interface LoginProps {
  // Add your prop types here
}

const Login: React.FC<LoginProps> = ({}) => {
  const navigate = useNavigate();
    const [Credentials, setCredentials] = useState({
        email: 'email',
        password: 'password'
    });

    /* ------------------- Used same state for error handling and success message ------------------- */
   const [Error, setError] = useState({
        errorType: '',
        errorMsg: ''
    });
    
    const Login = async (e:any) => {
      e.preventDefault();
      // const auth = getAuth();
      signInWithEmailAndPassword(auth, Credentials.email, Credentials.password)
        .then((userCredential) => {
          // Signed in 
          setError({errorType:"Success",errorMsg:"Login Successfull"});
          const user = userCredential.user; 
          navigate("/home");
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorType = error.code.toString();
          const errorMsg = error.message;
          // console.log(errorCode, errorMessage);
          setError({errorType,errorMsg});
        });
    }
  return (
    <>
     <div className="flex items-center justify-center min-h-screen">
      <div className="">
    <h1 className="text-5xl mb-5 font-bold text-gray-800">
      M/S Jaya Enterprises
    </h1>

    {/* {Error.errorType == "" ? "" : <AlertError errorCode={Error.errorType} error={Error.errorMsg}/>} */}
    {(Error.errorType == "") ? "" : (Error.errorType != "Success") ? <AlertError errorCode={Error.errorType} error={Error.errorMsg}/> : ""}
    {(Error.errorType == "Success") ? <AlertSuccess msgCode={Error.errorType} message={Error.errorMsg}/> : ""}
    <form className="max-w-sm mx-auto"> 
  <label htmlFor="email" className="block mb-2 text-start text-sm font-medium text-gray-900 dark:text-white">Your email</label>
  <input type="email" required id="email" onChange={(e) => {setCredentials({...Credentials,email:e.target.value})}} aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" />
  {/* <p id="helper-text-explanation" className="mt-2 text-sm text-start text-gray-500 dark:text-gray-400">We’ll never share your details. Read our <a href="#" className="font-medium text-blue-600 hover:underline dark:text-blue-500">Privacy Policy</a>.</p> */}
  <label htmlFor="password" className="block mt-5 mb-2 text-start text-sm font-medium text-gray-900 dark:text-white">Your password</label>
  <input type="password" required id="password" onChange={(e) => {setCredentials({...Credentials,password:e.target.value})}} aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="password" />
  {/* <p id="helper-text-explanation" className="mt-2 text-sm text-start text-gray-500 dark:text-gray-400">We’ll never share your details. Read our <a href="#" className="font-medium text-blue-600 hover:underline dark:text-blue-500">Privacy Policy</a>.</p> */}
  <button type="button" onClick={(e) => {Login(e)}} className="mt-5 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Login</button>
</form>
</div></div>
</>
  )
}

export default Login