import * as S from "./style.jsx";
import * as Img from "../img/index";
export default function GoogleButton() {
  return (
    <>
      <S.GoogleBtn>
        <S.BtnContainer>
          <img src={Img.GoogleLogo} alt="Google Logo" />
          Google
        </S.BtnContainer>
      </S.GoogleBtn>
    </>
  );
}
