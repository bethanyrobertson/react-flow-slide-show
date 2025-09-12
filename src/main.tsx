import React from "react";
import ReactDOM from "react-dom/client";
import { ReactFlowProvider } from "reactflow";

import App from "./App.tsx";

import "reactflow/dist/style.css";
import "./index.css";

console.log("main.tsx - Starting React app...");
console.log("main.tsx - Root element:", document.getElementById("root"));

try {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <ReactFlowProvider>
        <App />
      </ReactFlowProvider>
    </React.StrictMode>,
  );
  console.log("React app mounted successfully!");
} catch (error) {
  console.error("Error mounting React app:", error);
}
