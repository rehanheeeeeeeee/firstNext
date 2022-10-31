import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h2>First Next JS Website</h2>
      <p>
        Hello everyone how is everyone doing Im back to dominate this game its
        too ez{" "}
      </p>
      <Image
        src={"/favicon.ico"}
        width="150"
        height="150"
        className={styles.logo}
      />
      <div className={styles.btn}>
        <Link className={styles.link} href="/life">
          See my life
        </Link>
      </div>
    </div>
  );
}
