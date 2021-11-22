import React from "react";
import classes from "./averageComponentStyles.scss";

export const ImageComponent: React.FC = () => {
  return (
    <div id="container" className={classes.container}>
      <span id="image_title">The most beatyfull nook in Málaga:</span>
    </div>
  );
};
