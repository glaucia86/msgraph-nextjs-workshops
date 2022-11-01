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

export default function Home({ presences }) {
  const { data: session, status } = useSession();
  const loading = status === 'loading';

  let timeAvailable = 0;

  const fetchPresence = async () => {
    const data = await fetch('/api/presence');
    const presences = await data.json();
    console.log(presences.availability);

    if (
      presences.availability === 'Offline' ||
      presences.availability === 'Away'
    ) {
      timeAvailable = 0;
    } else {
      timeAvailable = timeAvailable + 1;
    }

    if (timeAvailable >= 12) {
      alert('Take a break!');
    }

    return {
      props: {
        presences,
      },
    };
  };

  setInterval(fetchPresence, 300000);

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
            priority={true}
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
              <h2>Testing Fetch</h2>
              <button onClick={fetchPresence}>FETCH</button> <br />
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
