import React from 'react'
import Register from '../components/Register'
import Header from '../components/Header'
import { headerRegister } from '../data/headerData'

function RegisterPage() {
  return (
    <>
    <Header{...headerRegister}/>
    <Register/>
    </>
  )
}

export default RegisterPage