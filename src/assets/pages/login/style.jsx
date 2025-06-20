import styled from "styled-components";

export const LoginContainer = styled.main`
  background-color: #2c2638;
  height: 100vh;
  padding-top: 3%;
  display: flex;

  @media (width < 991px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (max-height: 800px) {
    padding-top: 1%;
  }
`;
export const LoginImagePanel = styled.div`
  background-color: #42366d;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 95%;
  width: 40%;
  margin-left: 2%;
  border-radius: 20px;
  @media (width < 991px) {
    display: none;
  }
  @media (width < 1440px) {
    width: 40%;
  }
  @media (width < 1200px) {
    width: 45%;
  }
  img {
    height: 750px;

    @media (width < 1440px) {
      height: 650px;
    }
    @media (width < 1200px) {
      height: 600px;
    }
  }
  @media (min-width: 1200px) and(max-height: 800px) {
    height: 98%;
    img {
      height: 85%;
    }
  }
  @media (max-height: 800px) {
    height: 98%;
    img {
      height: 80%;
    }
  }
  @media (max-height: 700px) {
    height: 98%;
    img {
      height: 90%;
    }
  }

`;
