import React from "react";
import ReactDom from "react-dom";
import Image from "./content/foto_Nerja.jpg";
import { ImageComponent } from "./components/averageComponent";
import classes from "./components/averageComponentStyles.scss";

ReactDom.render(
  <div>
    <h1>Hello from React Dom</h1>
    <ImageComponent />
  </div>,
  document.getElementById("root")
);

const img = document.createElement("img");
img.src = Image;
img.className = classes.img;
document.getElementById("container").appendChild(img);
