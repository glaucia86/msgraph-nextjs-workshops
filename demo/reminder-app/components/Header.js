/**
 * file: components/Header.js
 * description: file responsible for the header component.
 * data: 07/10/2021
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import Link from 'next/link';

export default function Header() {
  return (
    <div className='header'>
      <Link href='/'>
        <a className='logo'>NextJs + MS Graph</a>
      </Link>
      <a href='#' className='btn-signin'>
        Sign in
      </a>
    </div>
  );
}