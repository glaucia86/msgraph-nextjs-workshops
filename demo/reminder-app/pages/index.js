/**
 * file: pages/index.js
 * description: file responsible for the home page.
 * data: 07/10/2021
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header/header';
import styles from '../styles/Home.module.css';
import { useSession } from 'next-auth/react';

export default function Home() {
  const { data: session, status } = useSession();
  const loading = status === 'loading';

  const fetchPresence = async () => {
    const response = await fetch('/api/presence');
    const data = await response.json();
    console.log(data);

    return ``;
  };

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
          <Image
            priority
            src='/images/reminder.gif'
            width={560}
            height={315}
            alt=''
          />
        </div>
        <div className={styles.user}>
          {loading && <div className={styles.title}>Loading...</div>}
          {session && (
            <>
              <strong>Name: {session.user.name}</strong> <br />
              <strong>Email: {session.user.email}</strong> <br />
              <button onClick={fetchPresence}>FETCH</button>
            </>
          )}
          {!session && (
            <>
              <p className={styles.title}>Please Sign in</p>
              <p className={styles.credit}>Test</p>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
