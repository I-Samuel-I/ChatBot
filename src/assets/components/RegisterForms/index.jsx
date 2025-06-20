import GoogleButton from "../GoogleButton/index.jsx";
import * as S from "./style.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
export default function RegisterForms() {
  const [showPassword, setShowPassword] = useState(false);
  const TooglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <S.RegisterSection>
        <S.TittleWrapper>
          <h1>Create an account</h1>
          <S.LoginWrapper>
            <p>Already have an account?</p>
            <a>Log in</a>
          </S.LoginWrapper>
        </S.TittleWrapper>
        <S.RegisterForms>
          <S.InputGroup>
            <S.InputWrapper placeholder="User" required />
            <S.InputWrapper type="email" placeholder="Email" required />
            <S.EyePassword>
              <S.InputWrapper
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
              />

              <S.EyeIcon onClick={TooglePassword}>
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </S.EyeIcon>
            </S.EyePassword>
          </S.InputGroup>

          <S.CheckboxWrapper>
            <input type="checkbox" required />
            <label>
              I agree to the <a>Terms & conditions</a>
            </label>
          </S.CheckboxWrapper>

          <S.SubmitButton>Create Account</S.SubmitButton>
          <S.Divider>Or register with</S.Divider>
          <GoogleButton />
        </S.RegisterForms>
      </S.RegisterSection>
    </>
  );
}
