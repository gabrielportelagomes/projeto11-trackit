import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import GlobalStyle from "./assets/styles/GlobalStyle";
import LogInPage from "./pages/LogInPage/LogInPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import TodayPage from "./pages/TodayPage/TodayPage";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ScreenContainer>
        <Routes>
          <Route path="/" element={<LogInPage />} />
          <Route path="/cadastro" element={<SignUpPage />} />
          <Route path="/hoje" element={<TodayPage />} />
        </Routes>
      </ScreenContainer>
    </BrowserRouter>
  );
}

export default App;

const ScreenContainer = styled.div`
  width: 375px;
  height: 667px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  background-color: #ffffff;
`;
