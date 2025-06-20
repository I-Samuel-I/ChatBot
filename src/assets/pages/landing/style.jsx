import styled from "styled-components";

export const LandingContainer = styled.main`
  background-color: #2c2638;
  height: 100vh;
`;
export const Info = styled.section`
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  margin-left: 5%;
  width: 50%;
  h1 {
    font-size: 9rem;
  }
  p{
    width: 35%;
    font-weight: bold;
    font-size: 1.1rem;
  }
`;
export const Auth = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 5%;  
  button{
    border: none;
    border-radius: 10px;
    appearance: none;
    background-color: #8E2DE2;
    color: white;
    padding: 15px;
    width: 25%;
    font-family: 'Zen Kaku Gothic New', sans-serif;
    font-size: 1.2rem;
    font-weight: bold;

    &:hover{
      background-color: #6c22ac;
      transform: scale(1.1);
      transition: 0.5s;
      cursor: pointer;
    }
    
  }
`;
