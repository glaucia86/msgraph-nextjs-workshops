/**
 * file: pages/index.js
 * description: file responsible for the home page.
 * data: 07/10/2021
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import Head from 'next/head';
import Header from '../components/Header';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NextJs | Microsoft Graph</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to the Microsoft Graph Tutorial
        </h1>
        <h2>
          A step by step tutorial how you can use Microsoft Graph with Next.Js!
        </h2>
        <div className={styles.image}>
          <img src='/images/reminder.gif' alt='' />
        </div>
      </main>
    </div>
  );
}
