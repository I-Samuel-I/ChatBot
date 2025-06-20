import * as S from "./style";
import { useNavigate } from "react-router";
export default function Landing() {
  const Navigate = useNavigate();

  const handleNavigate = (path) => {
    Navigate(path);
  };
  return (
    <>
      <S.LandingContainer>
        <S.Info>
          <h1>MinionMind</h1>
          <p>
            Seu novo coach pessoal de LoL está aqui! Tire dúvidas sobre
            campeões, rotas, itens e domine a sua próxima partida.
          </p>
          <S.Auth>
            <button onClick={() => handleNavigate("/Login")}>Login</button>
            <button onClick={() => handleNavigate("/Register")}>Sign Up</button>
          </S.Auth>
        </S.Info>
      </S.LandingContainer>
    </>
  );
}
