import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeProvider } from "./lib/theme-provider";
import { Toaster } from "sonner";

const rootElement = document.getElementById("root")!;

ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <App />
            <Toaster richColors position="top-right" />
        </ThemeProvider>
    </React.StrictMode>
);
