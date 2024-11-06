import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Options from "./Options";
import "@/globals.css";

createRoot(document.getElementById("options-root")!).render(
  <StrictMode>
    <Options />
  </StrictMode>
);
