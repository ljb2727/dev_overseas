import { ThemeProvider } from "@mui/material/styles";
import { Routes, Route, Link } from "react-router-dom";
import theme from "theme";
import CssBaseline from "@mui/material/CssBaseline";
import "./scss/style.scss";

import Main from "routes/Main";
import List from "routes/List";
import Modify from "routes/Modify";
import Detail from "routes/Detail";
import Add from "routes/Add";
import { Container } from "@mui/material";
import { GetData } from "store/api.js";
import SearchList from "routes/SearchList";

import { ErrorBoundary } from "react-error-boundary";

function App() {
  return (
    <>
      <CssBaseline />
      <Container disableGutters maxWidth="sm">
        <ThemeProvider theme={theme}>
          <GetData />
          <ErrorBoundary FallbackComponent={"error"}>
            <Routes>
              <Route path="/:guid" element={<Main />} />
              <Route path="/list/:type" element={<List />} />
              <Route path="/detail/:id" element={<Detail />} />
              <Route path="/add" element={<Add />} />
              <Route path="/modify/:id" element={<Modify />} />
              <Route path="/search/:keyword" element={<SearchList />} />
              <Route path="*" element={<Main />} />
            </Routes>
          </ErrorBoundary>
        </ThemeProvider>
      </Container>
    </>
  );
}

export default App;
