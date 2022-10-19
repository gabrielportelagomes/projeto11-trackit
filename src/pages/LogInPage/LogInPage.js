import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import trackit from "../../assets/images/trackit.png";
import Loading from "../../assets/styles/ThreeDots";
import URL from "../../constants/url";
import axios from "axios";

function LogInPage() {
  const [logInButton, setLogInButton] = useState(false);
  const [logInForm, setLogInForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  function handleForm(event) {
    const { name, value } = event.target;
    setLogInForm({ ...logInForm, [name]: value });
  }

  function signIn(event) {
    event.preventDefault();
    setLogInButton(true);

    const promise = axios.post(`${URL}/auth/login`, logInForm);
    promise.then(() => navigate("/hoje"));
    promise.catch((error) => {
      alert(error.response.data.message);
      setLogInButton(false);
    });
  }

  return (
    <PageContainer>
      <Logo>
        <img src={trackit} alt="TrackIt" />
        <h1>TrackIt</h1>
      </Logo>
      <FormContainer onSubmit={signIn}>
        <Input
          name="email"
          value={logInForm.email}
          onChange={handleForm}
          type="email"
          placeholder="email"
          disabled={logInButton}
          required
        ></Input>
        <Input
          name="password"
          value={logInForm.password}
          onChange={handleForm}
          type="password"
          placeholder="senha"
          disabled={logInButton}
          required
        ></Input>
        {logInButton === false ? (
          <Button type="submit" disabled={logInButton}>
            Entrar
          </Button>
        ) : (
          <Button disabled={logInButton}>
            <Loading />
          </Button>
        )}
      </FormContainer>
      {logInButton === false ? (
        <Link to="/cadastro">
          <SignInText>Não tem uma conta? Cadastre-se!</SignInText>
        </Link>
      ) : (
        <SignInText>Não tem uma conta? Cadastre-se!</SignInText>
      )}
    </PageContainer>
  );
}

export default LogInPage;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.div`
  margin-top: 68px;
  margin-bottom: 33px;
  img {
    width: 155px;
    height: 92px;
  }
  h1 {
    font-family: "Playball", cursive;
    font-weight: 400;
    font-size: 69px;
    color: #126ba5;
  }
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  width: 303px;
  height: 45px;
  border: solid 1px #d4d4d4;
  border-radius: 5px;
  margin-bottom: 6px;
  font-family: "Lexend Deca", sans-serif;
  font-weight: 400;
  font-size: 20px;
  color: #666666;
  padding: 11px;
  background-color: ${(props) => (props.disabled ? "#F2F2F2" : "#FFFFFF")};
  opacity: ${(props) => (props.disabled ? "0.5" : "1")};
  &::placeholder {
    color: #dbdbdb;
  }
  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px #ffffff inset !important;
    -webkit-text-fill-color: #000000 !important;
  }
`;

const Button = styled.button`
  width: 303px;
  height: 45px;
  border: solid 1px #52b6ff;
  border-radius: 5px;
  margin-bottom: 25px;
  font-family: "Lexend Deca", sans-serif;
  font-weight: 400;
  font-size: 21px;
  color: #ffffff;
  background-color: #52b6ff;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${(props) => (props.disabled ? "0.7" : "1")};
  &:hover {
    cursor: pointer;
  }
`;

const SignInText = styled.p`
  font-family: "Lexend Deca", sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #52b6ff;
  text-decoration: underline;
`;
