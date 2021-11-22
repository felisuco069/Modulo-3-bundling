import React from "react";
import classes from "./mystyles.scss";

export const ImageComponent: React.FC = () => {
  return (
    <div id="container" className={classes.container}>
      <span id="image_title" className={classes.text}>
        The most beatyfull nook in Málaga:
      </span>
    </div>
  );
};
