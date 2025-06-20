import styled from "styled-components";

export const LoginSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 60%;
  margin-top: 2%;
  margin-bottom: 5%;

  @media (width < 1200px) {
    width: 70%;
  }
  @media (width < 991px) {
    width: 100%;
  }
  @media (width < 600px) {
    width: 90%;
  }
  @media (max-height: 800px) {
    height: 80%;
  }
`;
export const TittleWrapper = styled.div`
  width: 60%;
  h1 {
    font-size: 3.5rem;
    font-weight: bold;
    color: #ffff;
  }

  @media (width < 1440px) {
    width: 65%;
    h1 {
      font-size: 3rem;
    }
  }
  @media (width < 1200px) {
    h1 {
      font-size: 2.5rem;
    }
  }
  @media (width < 991px) {
    width: 70%;
  }
  @media (width < 600px) {
    width: 90%;
    margin-bottom: 3%;
  }
  @media (width < 400px) {
    margin-bottom: 5%;
    h1 {
      font-size: 2rem;
    }
  }
  @media (max-height: 800px) {
    h1 {
      font-size: 2.5rem;
      margin-top: 5%;
    }
  }
  @media (max-width: 990px) and (max-height: 800px) {
    h1 {
      font-size: 2.5rem;
      margin-top: 1%;
    }
  }
  @media (max-width: 600px) and (max-height: 600px) {
    h1 {
      font-size: 1.9rem;
    }
  }
`;
export const RegisterWrapper = styled.div`
  display: flex;
  font-size: 1.1rem;
  font-weight: 800;
  p {
    color: #9e9aad;
  }
  a {
    color: #847ba3;
    padding-left: 1%;
  }
  a:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  @media (width < 1440px) {
    font-size: 1rem;
  }
  @media (width < 400px) {
    font-size: 0.9rem;
  }
  @media (max-width: 600px) and (max-height: 600px) {
    font-size: 0.9rem;
  }
`;
export const LoginForms = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 5%;
  width: 60%;
  
  @media (width < 1440px) {
    width: 65%;
  }
  @media (width < 991px) {
    width: 70%;
  }
  @media (width < 600px) {
    width: 90%;
  }
  @media (max-height: 800px) {
    margin-top: 2%;
  }
`;
export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  
  @media (width < 600px) {
    gap: 30px;
  }
  @media (max-height: 800px) {
    gap: 20px;
  }
`;
export const InputWrapper = styled.input`
  background-color: #3c364c;
  color: #797389;
  font-weight: bold;
  font-size: 1rem;
  padding: 20px;
  border: none;
  outline: none;
  border-radius: 5px;
  font-family: "Zen Kaku Gothic New";
  width: 100%;

  &::selection {
    border: none;
  }
  &:focus {
    border: solid 2px #847ba3;
  }
  @media (max-height: 800px) {
    padding: 12px;
  }
  @media (max-width: 990px) and (max-height: 800px) {
    padding: 10px;
  }
`;

export const EyePassword = styled.div`
  position: relative;
  width: 100%;
`;
export const EyeIcon = styled.div`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  cursor: pointer;
  font-size: 20px;
  color: #797389;
`;
export const CheckboxWrapper = styled.section`
  display: flex;
  margin-top: 3%;
  font-weight: 800;
  input[type="checkbox"] {
    appearance: none;
    width: 25px;
    height: 25px;
    background-color: #3c364c;
    border-radius: 5px;
  }
  input[type="checkbox"]:checked::after {
    content: "✓";
    position: absolute;
    transform: translate(10%, -20%);
    color: #a89fca;
    font-size: 23px;
    position: absolute;
  }
  input[type="checkbox"]:checked {
    border: solid 2px #847ba3;
  }
  label {
    padding-left: 15px;
  }
  a {
    color: #847ba3;
  }
  a:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  @media (width < 600px) {
    margin-top: 10%;
  }
  @media (width < 400px) {
    margin-top: 10%;
    label {
      font-size: 0.9rem;
    }
  }
  @media (max-width: 600px) and (max-height: 600px) {
    margin-top: 5%;
  }
`;
export const SubmitButton = styled.button`
  margin-top: 10%;
  font-size: 1.5rem;
  padding: 14px;
  border-radius: 10px;
  background-color: #8e2de2;
  border: none;
  color: #ffff;
  font-family: "Zen Kaku Gothic New";
  font-weight: bold;

  &:hover {
    background-color: #6c22ac;
    border: solid 1px #847ba3;
  }

  @media (width < 600px) {
    font-size: 1.3rem;
    padding: 13px;
    margin-top: 12%;
  }
  @media (width < 400px) {
    font-size: 1.2rem;
    padding: 10px;
    margin-top: 12%;
  }
  @media (max-width: 2560px) and (max-height: 600px) {
    margin-top: 6%;
    padding: 10px;
  }
  @media (max-width: 600px) and (max-height: 600px) {
    padding: 5px;
    margin-top: 3%;
  }
`;
export const Divider = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3%;
  color: #797389;
  font-size: 0.9rem;
  font-weight: 800;
  text-align: center;
  gap: 20px;

  &:before {
    content: "";
    display: inline-block;
    width: 35%;
    border-bottom: 1px solid #847ba3;
    margin-right: 10px;
  }
  &:after {
    content: "";
    display: inline-block;
    width: 35%;
    border-bottom: 1px solid #847ba3;
    margin-left: 10px;
  }
  
  @media (width < 400px) {
    margin-top: 5%;
  }
  @media (max-width: 600px) and (max-height: 600px) {
    font-size: 0.8rem;
  }
`;
