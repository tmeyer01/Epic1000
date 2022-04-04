import styled from "styled-components";
import banner from "../../images/R2rules.jpeg"

export const RulesContainer = styled.div`
  background: #e1dede;
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

export const RulesImageContainer = styled.div`
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

export const RulesWriteUp = styled.div`
  background: #fff;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 860px;
  margin: 50px 20px;
  padding: 20px 20px;

`

export const RulesP = styled.p`
  margin:  6px 6px;
  font-size: 18px;
  line-height: 26px;
  word-wrap: break-word;
`

export const RulesH3 = styled.h3`
  
`

export const RulesList = styled.ul`
  list-style: none;
`
export const RulesLIstItem = styled.li`
  
`
