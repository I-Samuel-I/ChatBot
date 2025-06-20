import styled from "styled-components";

export const GoogleBtn = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5%;
  
  @media (max-height: 800px) {
    margin-top: 2%;
  }
`;
export const BtnContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: #00000033;
  border: solid 1px #847ba3;
  color: white;
  font-size: 2rem;
  font-weight: bold;
  width: 35%;
  border-radius: 10px;
  padding: 5px;
  font-family: "Zen Kaku Gothic New";
  img {
    width: 25px;
    transform: translateY(10%);
  }
  &:hover {
    background-color: #000000;
    cursor: pointer;
    border: solid 2px #847ba3;
  }

  @media (width < 1200px) {
    width: 50%;
  }
  @media (width < 600px) {
    padding: 3px;
  }
  @media (width < 400px) {
    margin-top: 3%;
    width: 70%;
  }
  @media (max-height: 800px) {
    padding: 2px;
    font-size: 1.5rem;
    img {
      width: 20px;
    }
  }
`;
