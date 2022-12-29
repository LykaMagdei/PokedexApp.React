import React from "react";
import style from "./Preloader.module.css";

const Preloader = () => {
  return (
    <div className={style.Preloader}>
      <div className={style.lds_hourglass}></div>
    </div>
  );
};
export default Preloader;
