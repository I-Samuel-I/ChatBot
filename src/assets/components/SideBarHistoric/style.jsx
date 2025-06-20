import styled from "styled-components";

export const HistoricContainer = styled.aside``;
export const HistoricWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  margin-left: 3%;
  font-weight: bold;

  p {
    color: #797389;
  }
  button {
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    font: inherit;
    color: #8e2de2;
    cursor: pointer;
  }
`;
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 15px;
  button {
    text-align: start;
    border-radius: 50px;
    padding: 15px;
    border: solid 1px #f1f1f140;
    background-color: #251d32cc;
    color: white;
    font-size: 1.2rem;
    font-weight: normal;
    cursor: pointer;
  }
  label {
    padding: 10px;
    font-size: 1.3rem;
  }
`;
export const HistoricList = styled.ul`
  list-style: none;
  padding: 0;
  height: 50vh;
  color: white;
  overflow-y: auto;
  padding: 20px;
  margin-left: 3%;
  margin-right: 3%;
  scrollbar-color: #847ba3 transparent;
  scrollbar-width: thin;

  /* Webkit (Chrome, Edge, Safari) */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #847ba3;
    border-radius: 10px;
    border: 2px solid white;
  }
`;

export const ChatItem = styled.li`
  margin-bottom: 10px;
  background-color: #251d32;
  display: flex;
  
  align-items: center;
  &hover {
    button:hover {
      color: black;
    }
  }
  a {
    
    text-decoration: none;
    color: white;
    padding: 10px;
    display: flex;
    align-items: start;
    font-weight: bold;
    font-size: 1.2rem;
  }
  span:nth-child(1) {
    color: white;
    margin-right: 3%;
    margin-left: 2%;
  }
  button {
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    height: 50%;
    margin-right: 5%;
    font-size: 1.2rem;
  }

  &:hover {
    span {
      color: #8e2de2;
    }
    a {
      color: #8e2de2;
    }
    button {
      color: black;
    }
    background-color: #f6f6ff;
    border-radius: 50px;
    transition: 0.5s;
    transform: scale(1.1);
  }
`;
