import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider, extendBaseTheme, theme as chakraTheme, } from "@chakra-ui/react";

const { Input, Button } = chakraTheme.components;

const theme = extendBaseTheme({
  components: {
    Input,
    Button,
  }
})

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <App/>
    </React.StrictMode>
  </ChakraProvider>
);
