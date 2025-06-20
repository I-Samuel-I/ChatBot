import styled from "styled-components";

export const MessageContainer = styled.footer`
  display: flex;
  flex-direction: row;
  position: absolute;
  bottom: 0px;
  width: 100%;

  input {
    width: 90%;
    border: none;
    outline: none;
    padding: 20px;
    background-color: #3f3651;
    border-radius: 50px;
    font-family: "Zen Kaku Gothic New", sans-serif;
    font-size: 1rem;
    font-weight: bold;
    color: white;

    &:focus {
      border: solid 2px #847ba3;
    }
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    right: 55px;
    top: 7px;
    width: 5%;
    height: 5vh;
    background-color: #8e2de2;
    color: white;
    border: none;
    border-radius: 50px;
    &:hover {
      background-color: #6c22ac;
      border: solid 1px #847ba3;
      cursor: pointer;
    }
  }
`;
export const MessageIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  right: 3px;
  font-size: 1.5rem;
`;
