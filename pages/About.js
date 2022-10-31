import React, { useState } from "react";
import styles from "../styles/About.module.css";

function About() {
  const [name, setName] = useState("ali");
  return (
    <div className={styles.about}>
      <p>
        Hey whatsup everyone how is everyone doing im rehan im a junior web
        developer andover time ive learned frameworks like nextjs , react
        native, tailwind css and bootstrap
      </p>
    </div>
  );
}

export default About;
