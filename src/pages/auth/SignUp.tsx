import React from 'react'
import Navbar from '../../components/Navbar'

interface SignupProps {
  // Add your prop types here
}

const Signup: React.FC<SignupProps> = ({}) => {
  return (
    <>
    <Navbar Print={false} Logout={false}></Navbar>
    </>

    )
}

export default Signup