import Image from "next/image";
import React from "react";
import styles from "../../styles/Life.module.css";
export default function Home() {
  return (
    <div className={styles.life}>
      <div>
        {" "}
        <p>Ecommerce Store</p>
        <Image
          className={styles.amazon}
          width="150"
          height="150"
          src="/amazon.jpg"
        />
      </div>
      <div>
        <p>Social Media App with Real Time Messaging App</p>
      </div>
      <div>
        {" "}
        <p>Tesla Clone App</p>
      </div>
      <div>
        <p>Netflix Clone</p>
      </div>
    </div>
  );
}
