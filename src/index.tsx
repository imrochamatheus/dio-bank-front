import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { ColorModeScript } from "@chakra-ui/react";

import * as React from "react";
import * as ReactDOM from "react-dom/client";

const container = document.getElementById("root");
if (!container) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(container);

root.render(
  <BrowserRouter>
    <React.StrictMode>
      <ColorModeScript />
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
