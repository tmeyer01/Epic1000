import React from "react";
import { useState,  useMemo } from "react";
//import { Link } from "react-router-dom";
//import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { RouteItems } from "./RouteItems";
import {
  RouteContainer,
  
  CarrouselContainer,
  CarrouselH1,
  Card,
  Gradient,
  MapWrapper,
  MapContainer,
  MapShowButton,
  TheMap,
} from "./RouteElements";

import Intel from '../IntelButtons'

function Route() {
  const [isMapShown, setIsMapShown] = useState(false);
  const [cardValue, setCardValue] = useState([]);


  const results2 = (data, value) => {
    return data.filter((item) => item === value);
  };

  const shownMap = useMemo(() => {
    return results2(RouteItems, cardValue);
  }, [cardValue]);



  const displayMapWindow = (value) => {
    console.log("Card Id", cardValue);
    setIsMapShown((prev) => !prev);


    console.log("Value", value);
    // setCardValue(value.title)
    setCardValue(value);
  };

  const showMenu = {
    enter: {
      opacity: 1,
      y: 0,
      display: "block",
    },
    exit: {
      y: -5,
      opacity: 0,
      transition: {
        duration: 0.3,
      },
      transitionEnd: {
        display: "none",
      },
    },
  };

  return (
    <>

      <RouteContainer>
        
        {/* <MapsTitle>Maps</MapsTitle> */}

        <CarrouselContainer isMapShown={isMapShown}>
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
                  <MapShowButton onClick={() => displayMapWindow(item)}>
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

        {isMapShown && (
          <motion.div
            initial="exit"
            animate={isMapShown ? "enter" : "exit"}
            variants={showMenu}
          >
            <MapWrapper isMapShown={isMapShown}>
              {/* <MapWrapper showMap={showMap}> */}

              {shownMap.map((item) => {
                return (
                  <MapContainer key={item.id}>
                    {/* <p>{item.title}</p> */}
                    <TheMap
                      src={item.iSlide}
                      title={item.id}
                      key={item.id}
                    ></TheMap>
                  </MapContainer>
                );
              })}
            </MapWrapper>
          </motion.div>
        )}


      <Intel/>

      </RouteContainer>
    </>
  );
}

export default Route;
