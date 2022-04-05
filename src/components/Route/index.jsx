import React from 'react'
import { Link } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { RouteItems } from './RouteItems';
import {RouteContainer, RouteImageContainer, ImageH1, CarrouselContainer, Card, Gradient} from './RouteElements'

function Route() {
  return (
    <>
    <RouteContainer>
      
      <RouteImageContainer>
        <ImageH1>Route</ImageH1>
      </RouteImageContainer>
    
    {/* <MapsTitle>Maps</MapsTitle> */}

<CarrouselContainer>

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
                <Link to={"/route/" + item.id}>
                  <Card>
                    <p>{item.title}</p>
                    <img 
                      src={item.img} 
                      alt={item.title} 
                    />
                    <Gradient />
                  </Card>
                </Link>
              </SplideSlide>
            );
          })}


    </Splide>




</CarrouselContainer>
    
    
    </RouteContainer>
    </>
  )
}

export default Route