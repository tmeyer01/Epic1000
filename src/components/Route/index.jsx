import React from "react";
import {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { RouteItems } from "./RouteItems";
import {
  RouteContainer,
  RouteImageContainer,
  ImageH1,
  CarrouselContainer,
  CarrouselH1,
  Card,
  Gradient,
  MapWrapper,
  MapContainer,
  MapShowButton,
  TheMap
} from "./RouteElements";

function Route() {
 
  
  const [isMapShown, setIsMapShown ] = useState(false);
  
 
  const [cardValue, setCardValue] = useState([])

  const results = RouteItems.filter((item) => item === cardValue);





  
  // console.log(results)
  
  const displayMapWindow = (value) => {
       
    // console.log("Show map", showMap)
    console.log("Value", value)
    // setCardValue(value.title)
    setCardValue(value)
    
    
    console.log('Card Id', cardValue)
    setIsMapShown((prev) => !prev)
   
  }

  
  const addCardId = (id) => {
    console.log("The Id is", id)
    setCardValue(id)

  }


 
 
  return (
    <>
      <RouteContainer>
        <RouteImageContainer>
          <ImageH1>Route</ImageH1>
        </RouteImageContainer>

        {/* <MapsTitle>Maps</MapsTitle> */}

        <CarrouselContainer>
          <CarrouselH1>MAPS</CarrouselH1>
          <Splide
            options={{
              perPage: 3,
              arrows: true,
              pagination: false,
              drag: "free",
              gap: "2rem",
            }}
          >
            {RouteItems.map((item) => {
              return (
                <SplideSlide key={item.id}>
                  {/* <Link to={"/map/" + item.id}> */}
                  <MapShowButton onClick={() => displayMapWindow(item)} >
                    <Card>
                      <p>{item.title}</p>
                      <img src={item.img} alt={item.title} />
                      <Gradient />
                    </Card>
                    </MapShowButton>
                  {/* </Link> */}
                </SplideSlide>
              );
            })}
          </Splide>
        </CarrouselContainer>
        
        {/* <MapShowButton onClick={displayMapWindow}>Maps</MapShowButton> */}
       
       

       {isMapShown && <MapWrapper>
        {/* <MapWrapper showMap={showMap}> */}
          {results.map((item) => {
          return (
            <MapContainer key={item.id}>
              {/* <p>{item.title}</p> */}
              <TheMap src={item.iSlide} title={item.id} key={item.id}></TheMap>
            </MapContainer>
          );
        })}

        </MapWrapper> }

      </RouteContainer>
    </>
  );
}

export default Route;
