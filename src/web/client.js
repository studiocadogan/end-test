import React from "react";
import { hydrate } from "react-dom";
import { testData } from "../data";
import App from "../app/App";

const app = document.getElementById("root");
hydrate(<App navData={testData} />, app);
