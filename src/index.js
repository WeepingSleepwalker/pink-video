import React from "react";
import ReactDom from "react-dom";
import App from './App.js';
import { ContextProvider } from "./Context.js";
import './style.css';

ReactDom.render(
    <ContextProvider>
    <App />

    </ContextProvider>,



document.getElementById('root'),
);