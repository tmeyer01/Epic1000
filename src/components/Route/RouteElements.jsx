import styled from "styled-components";
import banner from "../../images/route.jpeg"
import topo from '../../images/topoBackground.jpg'
import topoDark from '../../images/topoBackground2.jpg'
import { motion } from "framer-motion";

export const RouteContainer = styled.div`
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
  /* height: 880px; */
  /* top: 80px; */
  position: relative;
  z-index: 1;    
`



export const CarrouselContainer = styled.div`
  background:url(${topoDark});
  color: #fff;
  text-shadow: 2px 2px 10px #0e0d0d;
 
  border-radius:${({isMapShown}) => (isMapShown ? '15px 15px 0px 0px' : '15px')};
 
  margin-top: 40px;
  padding: 20px 20px;
  margin-bottom:${({isMapShown}) => (isMapShown ? '0px' : '30px')} ;
  width: 800px;

  @media screen and (max-width: 786px){
   width: 100%
  }

  @media screen and (max-width: 480px){
    width: 250px
  }

`
export const CarrouselH1 = styled.div`
  font-size: 33px;
  font-weight: bold;
  width: 100%;
  /* margin-top:20px; */
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
`


export const Card = styled.div`
  min-height: 300px;
  min-width: 40px;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;

  }

  p{
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0%);
    color: #fff;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }


  @media screen and (max-width: 786px){
    min-height: 200px;
    min-width: 10px;
  }

  @media screen and (max-width: 480px){
    font-size: 20px;
  }
`;

export const Gradient = styled.div`
  z-index: 3;
  position:absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`;

export const MapShowButton = styled.button`
  color:black;
  width: 100%;
  text-decoration: none;
  border: none;
  background-color: transparent;
`


export const MapWrapper = styled.div`

  width: 800px;
  height: 800px; 
  border-radius: 0px 0px 15px 15px;
  background:url(${topoDark});
  display: flex;
  /* display: ${({showMap}) => (showMap ? 'flex' : 'none')}; */
  justify-content: center;
  align-items: center;
  margin-bottom:${({isMapShown}) => (isMapShown ? '50px' : '0px')} ;
 


`

export const MapContainer = styled.div`
  /* top: 80px; */
  margin: 100px 60px;
  width: 800px;
`


export const TheMap = styled.iframe`
  height: 700px;
  width: 1px;
  min-width: 100%;
  border: none;
  

`