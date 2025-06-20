import RegisterForms from "../../components/RegisterForms/index.jsx";
import * as S from "./style.jsx";
import * as Img from "../../components/img/index.jsx";
export default function Register() {
  return (
    <>
      <S.RegisterContainer>
        <S.RegisterImagePanel>
            <img src={Img.RegisterImg} alt="Register" />
        </S.RegisterImagePanel>
       <RegisterForms/>
      </S.RegisterContainer>
    </>
  );
}
