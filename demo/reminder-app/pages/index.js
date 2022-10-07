/**
 * file: pages/index.js
 * description: file responsible for the home page.
 * data: 07/10/2021
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import Head from 'next/head';
// import Header from '../components/Header';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NextJs | Microsoft Graph</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
    </div>
  );
}
