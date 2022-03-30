import styled from 'styled-components';
import banner from "../../images/about.jpeg"

export const AboutContainer = styled.div`
  background: #fff;
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

export const AboutImageContainer = styled.div`
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

export const DisclaimerDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 540px;
  
  margin: 20px 20px;
  padding: 20px 20px;
  /* padding-bottom: 60px; */
  background: #4946f2;
`

export const DisclaimerP = styled.p`
  color: #fff;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  /* text-transform: uppercase; */
  margin-bottom: 16px;
`

export const AboutWriteUp = styled.div`
   display: flex;
`

export  const AboutP = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
`