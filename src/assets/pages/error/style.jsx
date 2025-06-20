import styled from "styled-components";

export const ErrorContainer = styled.main`
  background-color: #2c2638;
  height: 100vh;
`;
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  h1 {
    font-size: 10rem;
  }
  h3 {
    font-size: 2rem;
  }
  a {
    color: #847ba3;
    font-weight: bold;
    font-size: 1.2rem;

    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
  @media (max-width: 1200px) {
    h1 {
      font-size: 8rem;
    }
    h3 {
      font-size: 1.5rem;
    }
  }
  @media (max-width: 767px) {
    h1 {
      font-size: 6rem;
    }
    h3 {
      font-size: 1.2rem;
    }
    @media (max-width: 599px) {
      h1 {
        font-size: 5rem;
      }
      h3 {
        font-size: 1rem;
        align-items: center;
        justify-content: center;
        text-align: center;
      }
    }
  }
`;
