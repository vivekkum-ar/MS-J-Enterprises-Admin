import { signOut } from 'firebase/auth';
import React, { useState } from 'react'
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
// import jsPDF from 'jspdf';

interface NavbarProps {
    // Add your prop types here
    Logout?: boolean;
    Print?: boolean;
    backBtn?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({Logout,Print,backBtn}) => {
    const navigate = useNavigate();
    const [printInProgress, setPrintInProgress] = useState(false);
    // const [User, setUser] = useState({})
    // useEffect(() => {
    //     const auth = getAuth();
    //     onAuthStateChanged(auth, (user) => {
    //       if (user) {
    //         // User is signed in, see docs for a list of available properties
    //         // https://firebase.google.com/docs/reference/js/auth.user
    //         const uid = user.uid;
    //         setUser(user);
    //       } else {
    //         // User is signed out
    //         // navigate('/login');
    //       }
    //     });
    //   }, []);

    const handleSignOut = (e:any) => {
        e.preventDefault();
        signOut(auth).then(() => {
            // Sign-out successful.
            console.log("Sign-out successful.");
            navigate('/login');
        }).catch((error) => {
            // An error happened.
            console.log(error);
        });
    }

    function handlePrint(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.preventDefault();
        setPrintInProgress(true);
        
        // Call window.print() after 3 seconds
        setTimeout(() => {
            window.print();
    
            // Set print in progress to false after 3 seconds of window.print() being called
            setTimeout(() => {
                setPrintInProgress(false);
            }, 20000);
        }, 1000);

    }
    // const generatePDF = (e:any) => {
    //     e.preventDefault();
    //     const section = document.querySelector("#WordSection1");
    //     if (section !== null) {
    //         const doc = new jsPDF("p", "pt","a4");
    //         doc.html(section as HTMLElement, {
    //             width: 520,
    //             margin: [0 , 10, 0, 35],
    //             windowWidth: 900,
    //             // margin: 1,
    //             // html2canvas:  {scale: 0.37},
    //             // windowWidth: 700,
    //             callback: function(pdf) {
    //                 pdf.save('Bill.pdf');
    //                 // setPrintInProgress(false);
    //             },
    //         });
    //     }
    // };
    

    return (
        <nav className={`${printInProgress == true ? "hidden" : ""} z-40 w-full top-0 fixed border-b-4 border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700`}>
            <div className="sm:max-w-screen-sm lg:max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2 px-4">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="./logo.png" className="my-2 h-8 scale-150 border-2 rounded-full border-black" alt="Flowbite Logo" />
                    <span className="md:mt-0 mt-2 font-century text-lg align-center md:text-2xl whitespace-nowrap dark:text-white font-bold">M/S Jaya Enterprises</span>
                </a>
                <div className="">
  <button type="button" onClick={(e) => {e.preventDefault(); navigate("/home");}} className={`${backBtn == true ? "" : "hidden"} me-4 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-full text-2xl px-2.5 pb-1 text-center `}>{"<"}</button>
  <button type="button" onClick={(e) => {handlePrint(e)}} className={`${Print == true ? "" : "hidden"} text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 `}>Print</button>

                {<button type="button" onClick={(e) => handleSignOut(e)} className={`${Logout == true ? "" : "hidden"} text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center`}>{`Logout`}</button>}
                </div>
                <div className="hidden w-full" id="navbar-hamburger">
                    <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                        <li>
                            <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded dark:bg-blue-600" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Services</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white">Pricing</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar