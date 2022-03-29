import { useState } from "react";
import Video from "../../videos/forest.mp4";
import {Button} from "../Button/index.jsx";
import logo from "../../images/logoWithBlackOutline.png";

import {
  HeroContainer,
  HeroBackGround,
  VideoBackGround,
  HeroContent,
  HeroImg,
  HeroH1,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight
} from './HeroElements'

const Hero = () => {

  const[hover, setHover] = useState(false)

  const onHover = () => {
    setHover((prev)=> !prev)
  }

  return (
    <HeroContainer>
      <HeroBackGround>
        <VideoBackGround autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBackGround>
      <HeroContent>
        <HeroImg alt="logo" src={logo} />
        <HeroH1>Grand Depart June 25th 2022</HeroH1>
        <HeroBtnWrapper>
          <Button to="/Register" onMouseEnter={onHover} onMouseLeave={onHover}>
            Register {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
}

export default Hero;
