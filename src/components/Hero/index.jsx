import {useState} from 'react';
import Video from '../../videos/forest.mp4'
import Button from '../Button'
import logo from '../../images/logoWithBlackOutline.png'

function index() {
  return (
    <HeroContainer>
      <HeroBackGround>
        <VideoBackGround autoPlay loop muted src={Video} type='video/mp4'  />
      </HeroBackGround>
      <HeroContent>
        <HeroImg alt='BCepic logo' src={logo} />
        <HeroH1>Grand Depart June 25th 2022</HeroH1>
        <Button to='/Signup' onMouseEnter={onHover} onMouseLeave={onHover}>
            Register {hover ? <ArrowForward /> : <ArrowRight />}
        </Button>
      </HeroContent>
    </HeroContainer>
  )
}

export default index