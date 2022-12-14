import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import GlobalStyle from "./assets/styles/GlobalStyle";
import HabitsPage from "./pages/HabitsPage/HabitsPage";
import HistoryDayPage from "./pages/HistoryDayPage/HistoryDayPage";
import HistoryPage from "./pages/HistoryPage/HistoryPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import TodayPage from "./pages/TodayPage/TodayPage";
import { AuthProvider } from "./providers/auth";
import { HabitsProvider } from "./providers/habits";
import { HistoryDayProvider } from "./providers/historyDay";
import { ProgressProvider } from "./providers/progress";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <HabitsProvider>
          <ProgressProvider>
            <HistoryDayProvider>
              <GlobalStyle />
              <ScreenContainer>
                <Routes>
                  <Route path="/" element={<LoginPage />} />
                  <Route path="/cadastro" element={<SignUpPage />} />
                  <Route path="/hoje" element={<TodayPage />} />
                  <Route path="/habitos" element={<HabitsPage />} />
                  <Route path="/historico" element={<HistoryPage />} />
                  <Route
                    path="/historico_do_dia"
                    element={<HistoryDayPage />}
                  />
                </Routes>
              </ScreenContainer>
            </HistoryDayProvider>
          </ProgressProvider>
        </HabitsProvider>
      </AuthProvider>
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
