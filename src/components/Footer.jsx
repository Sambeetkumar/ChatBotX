import React from "react";
import styles from "../styles";
export default function Footer() {
  return (
      <div className={`${styles.xPaddings} pb-12  ${styles.flexCenter} realtive`}>
          <div className="footer-gradient z-0" />
     <p className="font-mono text-gray-900 dark:text-white text-md md:text-xl z-10">Made with ❤️ by Sambeet</p> 
    </div>
  );
}
