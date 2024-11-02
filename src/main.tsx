import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Snake from "./snake";
import "./sass/index.scss";
import "./sass/retro-button.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Snake />
  </StrictMode>
);
