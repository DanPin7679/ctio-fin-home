import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Lato"
          rel="stylesheet"
        />
        <title>CTio FinPLan App</title>
        <meta name="description" content="" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to FinPLanApp</h1>
      </main>
    </div>
  );
}
