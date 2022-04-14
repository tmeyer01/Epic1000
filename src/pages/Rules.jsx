import React from 'react'
import Rules from '../components/Rules'
import Header from '../components/Header'
import { headerRules } from '../data/headerData'


function RulesPage() {
  return (
   <>
  <Header {...headerRules}/>
   <Rules/>
   {/* <Footer/> */}
   </>
  )
}

export default RulesPage