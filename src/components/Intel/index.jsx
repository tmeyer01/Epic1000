import React from "react";
import { GrMap } from "react-icons/gr";
import {IntelContainer, IntelH1, List, Link} from './IntelElements'


function IntelSection() {
  return (
    <>
      <IntelContainer>
        <IntelH1>Intel</IntelH1>
        <List>
          
          <Link to={"/intel/okanaganSec"}>
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
    </>
  );
}

export default IntelSection;
