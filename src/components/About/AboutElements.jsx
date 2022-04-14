import styled from 'styled-components';
import banner from "../../images/about.jpeg"
import topo from '../../images/topoBackground.jpg'

export const AboutContainer = styled.div`
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



export const DisclaimerDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 860px;
  
  margin-top: 60px;
  padding: 20px 20px;
  /* padding-bottom: 60px; */
  background: #4946f2;
  border-radius: 15px;
`

export const DisclaimerP = styled.p`
  color: #fff;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  word-wrap: break-word;
  /* text-transform: uppercase; */
  margin:  6px 6px;
`

export const AboutWriteUp = styled.div`
  background: #fff;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 860px;
  margin: 50px 20px;
  padding: 20px 20px;


  @media screen and (max-width: 786px){
    width: 100%;
  }

  @media screen and (max-width: 480px){
    font-size: 20px;
  }
`

export  const AboutP = styled.p`
  /* max-width: 440px; */
  margin:  6px 6px;
  padding: 10px;
  font-size: 18px;
  line-height: 26px;
  word-wrap: break-word;

  @media screen and (max-width: 786px){
    font-size: 15px;
  }

  @media screen and (max-width: 480px){
    font-size: 20px;
  }
`