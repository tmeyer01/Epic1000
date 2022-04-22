import styled from "styled-components";
import topo from "../../images/topoBackground.jpg";

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
  width: 70%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const InputName = styled.input`
  width: 300px;
  height: 30px;
  font-size: 14px;
  border: 3px solid black;
  border-radius: 5px;
`;
export const InputEmail = styled.input`
  width: 300px;
  height: 30px;
  font-size: 14px;
  border: 3px solid black;
  border-radius: 5px;
`;

export const SentButton = styled.button`
  width: 150px;
  height: 50px;
  color: white;
  background-color: black;
  border: none;
  border-radius: 10px;
  font-weight: 500;
  cursor: pointer;
`;
