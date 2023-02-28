import React from "react";
import Resume from "../resume/Resume";
import styles from "./App.module.scss";

export default function App()
{
  return (
    <div className={styles.App}>
      <Resume />
    </div>
  );
}
