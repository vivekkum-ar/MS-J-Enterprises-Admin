import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar'
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

interface SignupProps {
  // Add your prop types here
}

const Signup: React.FC<SignupProps> = ({}) => {
    const navigate = useNavigate();
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        // const uid = user.uid;
        // ...
        navigate('/home');
      } else {
        // User is signed out
      }
    });
  }, []);
  return (
    <>
    <Navbar Print={false} Logout={false}></Navbar>
    </>

    )
}

export default Signup