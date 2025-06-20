import GoogleButton from "../GoogleButton/index.jsx";
import * as S from "./style.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
export default function LoginForms() {
  const [showPassword, setShowPassword] = useState(false);
  const TooglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <S.LoginSection>
        <S.TittleWrapper>
          <h1>Login</h1>
          <S.RegisterWrapper>
            <p>Don't have an account?</p>
            <a>Sign up</a>
          </S.RegisterWrapper>
        </S.TittleWrapper>
        <S.LoginForms>
          <S.InputGroup>
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
          <S.SubmitButton>Sign in</S.SubmitButton>
          <S.Divider>Or sign in with</S.Divider>
          <GoogleButton />
        </S.LoginForms>
      </S.LoginSection>
    </>
  );
}
