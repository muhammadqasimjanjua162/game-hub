import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, ChakraProviderProps } from "@chakra-ui/react";
import { defaultSystem } from "@chakra-ui/react";
import App from "./App";

const rootElement = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider value={defaultSystem}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
