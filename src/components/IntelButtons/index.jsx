import {useState, useEffect } from 'react';
import { GrMap } from "react-icons/gr";
import {IntelContainer, IntelH1, List, Link} from './IntelElements'
import Okanagan from '../Okanagan'

function IntelSection() {
  
  const [isOkanaganSecOpen, setIsOkanaganSecOpen] = useState(false);
  
  const toggleOk = () => {
    console.log('clicked')
    setIsOkanaganSecOpen((prevOpen) => !prevOpen)
 };
  
  
  return (
    <>
      <IntelContainer>
        <IntelH1>Intel</IntelH1>
        <List>
          
          <Link onClick={toggleOk}>
            <GrMap />
            <h4>Okanagan</h4>
          </Link>
          <Link to={"/intel/boundrySec"}>
            <GrMap />
            <h4>Boundary</h4>
          </Link>
          <Link to={"/intel/kootWestSec"}>
            <GrMap />
            <h4>West Kootenay</h4>
          </Link>
          <Link to={"/intel/kootEastSec"}>
            <GrMap />
            <h4>East Kootenay</h4>
          </Link>
        </List>
      </IntelContainer>


      {isOkanaganSecOpen && <Okanagan toggleOk={toggleOk} isOkanaganSecOpen={isOkanaganSecOpen}/>}
    </>
  );
}

export default IntelSection;
