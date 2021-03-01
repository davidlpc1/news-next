import Head from "next/head";
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <Head>
        <title>News | Home</title>
      </Head>
    </div>
  );
}

