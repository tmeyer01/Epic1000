import React from 'react'
import Route from '../components/Route'
// import Footer from '../components/Footer'
import Header from '../components/Header'
import { headerRoute } from '../data/headerData'

function RulesPage() {
  return (
   <>
   <Header{...headerRoute}/>
   <Route/>
   {/* <Footer/> */}
   </>
  )
}

export default RulesPage