import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import styles from "../styles/NotFound.module.css";

export default function Found404() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div className={styles.notFound}>
      <h2>Ooooops...</h2>
      <h2>This Page could not be found</h2>
      <p>
        <Link href="/">Click here</Link> to go back the Home page
      </p>
    </div>
  );
}
