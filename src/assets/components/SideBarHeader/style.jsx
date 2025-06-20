import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: start;
  flex-direction: column;
  padding: 25px;
  h1 {
    font-size: 2.5rem;
    margin-left: 3%;
  }
  button {
    width: 80%;
    padding: 10px;
    margin-left: 3%;
    background-color: #8e2de2;
    color: white;
    border: none;
    border-radius: 50px;
    font-size: 1.3rem;
    font-weight: bold;
    margin-top: 5%;
    font-family: "Zen Kaku Gothic New", sans-serif;

    &:hover {
      background-color: #6c22ac;
      border: solid 1px #847ba3;
      cursor: pointer;
    }
    span {
      position: relative;
      right: 10px;
      font-size: 1.3rem;
    }
  }
`;
export const HeaderTitle = styled.header`
  display: flex;
  align-items: start;
  font-size: 1.5rem;

  width: 100%;
`;
export const Divider = styled.span`
  content: "";
  width: 100%;

  &:before {
    content: "";
    display: inline-block;
    width: 100%;
    border-bottom: 1px solid #847ba3;
    margin-right: 10px;
  }
`;
export const BtnsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  div {
    padding: 12px;
    margin-top: 5%;
    margin-left: 5%;
    border-radius: 50px;
    background-color: #3c364c;
  }
`;
export const SearchContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
`;
