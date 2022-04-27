import styled from "styled-components";
import topo from "../../images/topoBackground.jpg";
import topoDark from "../../images/topoBackground2.jpg";

export const RegisterContainer = styled.div`
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
export const RegisterFormWrapper = styled.form`
  background: url(${topoDark});
  max-width: 860px;
  /* height: 70%; */
  border-radius: 15px;
  margin: 50px 20px;
  padding: 20px 20px;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 5em;
  margin-bottom: 5em;


`;

export const RegisterFormH1 = styled.h1`
  /* max-width: 440px; */
  margin: 6px 6px;
  padding: 10px;
  font-size: 18px;
  line-height: 26px;
  word-wrap: break-word;

  @media screen and (max-width: 786px) {
    font-size: 15px;
  }

  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
`;

export const RegisterFormP = styled.p`
  /* max-width: 440px; */
  margin: 6px 6px;
  padding: 10px;
  font-size: 18px;
  line-height: 26px;
  word-wrap: break-word;

  @media screen and (max-width: 786px) {
    font-size: 15px;
  }

  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
`;

export const InputName = styled.input`
  width: 300px;
  height: 30px;
  font-size: 14px;

  border: none;
  padding: 20px 15px 20px 15px;
  border-radius: 5px;
  margin-bottom: 10px;
`;
export const InputEmail = styled.input`
  width: 300px;
  height: 30px;
  font-size: 14px;

  border: none;
  padding: 20px 15px 20px 15px;
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const SentButton = styled.button`
  width: 150px;
  height: 50px;
  color: black;
  background-color: white;
  border: none;
  border-radius: 10px;
  font-weight: 500;
  cursor: pointer;
`;

export const RegisterSubmitWriteUp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 860px;

  /* margin-top: 20px; */
  padding: 20px 20px;
  /* padding-bottom: 60px; */
  background: url(${topoDark});
  /* background: #4946f2; */
  border-radius: 15px;
  margin-bottom: 5em;
`;

export const RegisterSubP = styled.p`
  color: #fff;
  font-size: 16px;
  line-height: 26px;
  font-weight: 700;
  letter-spacing: 1.4px;
  word-wrap: break-word;
  /* text-transform: uppercase; */
  margin: 6px 6px;
`;
