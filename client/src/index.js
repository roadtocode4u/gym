// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'font-awesome/css/font-awesome.min.css';

import { createRoot } from "react-dom/client";
import React from "react";
import "./index.css";
import App from "./App";

// Bootstrap files
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
