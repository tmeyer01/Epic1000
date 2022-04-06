// import { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { RouteItems } from "../components/Route/RouteItems";
// import {motion} from 'framer-motion'
import topo from '../images/topoBackground2.jpg'

// import { RouteItems } from './RouteItems';

function Map() {
  let params = useParams();
  

 


  console.log("Use prams", params)
 

  const results = RouteItems.filter((item) => item.id === params.name);

  console.log("results", results);

  // console.log('params ', params)

  return (
    <MapWrapper>
      {/* <h1>Hello</h1> */}

      {results.map((item) => {
        return (
          <MapContainer key={item.id}>
            {/* <p>{item.title}</p> */}
            <TheMap src={item.iSlide} title={item.id} key={item.id}></TheMap>
          </MapContainer>
        );
      })}
    </MapWrapper>
  );
}

const TheMap = styled.iframe`
  height: 700px;
  width: 1px;
  min-width: 100%;
  border: none;
  

`

const MapWrapper = styled.div`
background:url(${topo});
 /* background: #e1dede; */
 background-attachment: fixed;
 background-size: cover;
 background-position: center bottom; 
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 /* padding: 0 30px; */
 height: 980px;
 width: 100%;
 /* top: 80px; */
 position: relative;
 z-index: 1;    
`

const MapContainer = styled.div`
  top: 80px;
  margin: 100px 60px;
  width: 800px;
`

export default Map;
