import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Options from "./Options";

createRoot(document.getElementById("options-root")!).render(
  <StrictMode>
    <Options />
  </StrictMode>
);
