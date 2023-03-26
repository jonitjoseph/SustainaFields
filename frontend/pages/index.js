import styles from "../styles/Home.module.css";
import InstructionsComponent from "../components/InstructionsComponent";
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>SustainaFields</title>
        <meta name="description" content="A decentralized log that tracks carbon credits on blockchain. By incentivizing sustainable practices with tokens, the aim is to promote a greener future." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <main className={styles.main}>
          <InstructionsComponent></InstructionsComponent>
        </main>
      </div>
    </>
  );
}

