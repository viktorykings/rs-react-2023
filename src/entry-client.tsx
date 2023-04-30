import React from "react";
import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import store from './store'
import "./index.css";
import { Provider } from "react-redux";

  hydrateRoot(document.getElementById('root') as HTMLElement, <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</Provider>
);