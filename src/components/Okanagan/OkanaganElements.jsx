import styled from "styled-components";
import topo from "../../images/topoBackground.jpg";

export const OkanaganContainer = styled.div`
  background: url(${topo});
  background-attachment: fixed;
  background-size: cover;
  background-position: center bottom;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
`;

export const SectionTitle = styled.h1`
  /* top:80; */
  font-size: 23px;
  font-weight: bold;
  margin-top: 20px;
  background: #fff;
  width: 100%
`;

export const SectionDiscription = styled.div`
  border-radius: 15px;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 860px;
  margin: 50px 20px;
  padding: 20px 20px;
`;

export const SectionWriteUp = styled.div`
  display: flex;
  background: #fff;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 860px;
  margin: 50px 20px;
  padding: 20px 20px;
`

export const SectionP = styled.p`
  margin:  16px 6px;
  font-size: 18px;
  line-height: 26px;
  word-wrap: break-word;
`