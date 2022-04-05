import styled from "styled-components";
import banner from "../../images/route.jpeg"
import topo from '../../images/topoBackground.jpg'


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

export const RouteImageContainer = styled.div`
   background:url(${banner});
  width: 100%;
  height: 700px;
  background-attachment: fixed;
  background-size: cover;
  background-position: center bottom; 
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ImageH1 = styled.h1`
  color: #fff;
  text-shadow: 2px 2px 10px #0e0d0d;
  font-size: 40px;
  text-align: center;
  padding-top: 20px;
  text-transform: uppercase;

  @media screen and (max-width: 786px){
    font-size: 15px;
  }

  @media screen and (max-width: 480px){
    font-size: 20px;
  }
`


export const CarrouselContainer = styled.div`
  background-color: #fff ;
  margin: 40px 40px;
  padding: 20px 20px;
  width: 800px;

  @media screen and (max-width: 786px){
   width: 450px
  }

  @media screen and (max-width: 480px){
    width: 250px
  }

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