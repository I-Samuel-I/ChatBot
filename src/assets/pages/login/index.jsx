import * as S from "./style.jsx";
import * as Img from "../../components/img/index.jsx";
import LoginForms from "../../components/LoginForms/index.jsx";
export default function Login() {
  return (
    <>
      <S.LoginContainer>
        <S.LoginImagePanel>
          <img src={Img.RegisterImg} alt="Register" />
        </S.LoginImagePanel>
        <LoginForms/>   
      </S.LoginContainer>
    </>
  );
}
