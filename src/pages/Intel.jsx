import {useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import Okanagan from '../components/Okanagan'

function Intel() {
  
  let params = useParams();
 
  const [isOkanaganSecShown, setIsOkanaganSecShown] = useState(false);
  const [isBoundrySecShown, setIsBoundrySecShown] = useState(false);
  const [isKootWestSec, setIsKootWestSec] = useState(false);
  const [isKootEasttSec, setIsKootEasttSec] = useState(false);

  const turnOnIntel = (name) =>{

    if(name === "okanaganSec"){
      setIsOkanaganSecShown((prevOpen) => !prevOpen)
    } else if ( name === "boundrySec") {
      setIsBoundrySecShown((prevOpen) => !prevOpen)
    } else if ( name === "kootWestSec"){
      setIsKootWestSec((prevOpen) => !prevOpen)
    } else if ( name === "kootEastSec"){
      setIsKootEasttSec((prevOpen) => !prevOpen)
    }

  }

  useEffect(()=>{
    turnOnIntel(params.type)
  },[params.type])



  return (
    <>
   {isOkanaganSecShown && <Okanagan/>}
    </>
  )
}

export default Intel