import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global";

import { MyContext } from "./myContext";

import theme from "./styles/theme";

import { Routes } from "./Routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MyContext.Provider
        value={{ name: "leo", email: "leo@leo.com", password: "123" }}
      >
        <Routes />
      </MyContext.Provider>
    </ThemeProvider>
  </React.StrictMode>
);
