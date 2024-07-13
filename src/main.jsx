import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Header /> */}
    <Hero />
    <App />
  </React.StrictMode>
);
