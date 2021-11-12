// import { useLocation } from "react-router";

import React from "react";
import img from "./img/not-found.png";

import styles from "./NotFound.module.css";
function NotFound() {
//   let location = useLocation();

  return (
    <div>
      <img className={styles.img} src={img} alt="Not Found" />
      <p className={styles.text}>
        No match for 
      </p>
    </div>
  );
}

export default NotFound;
