/**
 * file: pages/index.js
 * description: file responsible for the home page.
 * data: 07/10/2021
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import styles from '../styles/Home.module.css';
import { useSession } from 'next-auth/react';

export default function Home() {
  const { data: session, status } = useSession();
  const loading = status === 'loading';

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
        <div className={styles.user}>
          {loading && <div className={styles.title}>Loading...</div>}
          {session && (
            <>
              <p style={{ marginBottom: '10px' }}>
                {' '}
                Welcome, {session.user.name ?? session.user.email}
              </p>{' '}
              <br />
              <img src={session.user.image} alt='' className={styles.avatar} />
            </>
          )}
          {!session && (
            <>
              <p className={styles.title}>Please Sign in</p>
              <img
                src='https://developer.microsoft.com/en-us/advocates/media/profiles/glaucia-lemos.png'
                alt=''
                className={styles.avatar}
              />
              <p className={styles.credit}>
                GIF by{' '}
                <a href='https://dribbble.com/shots/6915953-Another-man-down/attachments/6915953-Another-man-down?mode=media'>
                  Another picture
                </a>{' '}
              </p>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
