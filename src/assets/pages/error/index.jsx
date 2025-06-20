import { useNavigate } from "react-router";
import * as S from "./style";
export default function Error() {
    const Navigate = useNavigate();

    const handleNavigate = (path) => {
        Navigate(path);
      };
  return (
    <>
      <S.ErrorContainer>
        <S.Info>
          <h1>404</h1>
          <h3>
            Desculpe! A página que você está procurando não foi encontrada
          </h3>
          <a onClick={() => handleNavigate("/")}>Ir para a página inicial</a>
        </S.Info>
      </S.ErrorContainer>
    </>
  );
}
