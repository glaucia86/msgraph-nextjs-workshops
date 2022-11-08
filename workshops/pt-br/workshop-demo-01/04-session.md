# Criando Componentes na Aplicação

Vamos agora alterar um pouco a nossa aplicação. Não usaremos, nesse primeiro momento, nenhum UI Framework. Então vamos começar criando alguns componentes.

Toda aplicação precisa de um Layout. Então vamos criar um componente chamado `Layout`. Para isso, crie uma pasta, na raiz do projeto, chamada `components` e dentro dessa pasta, crie o arquivo:

- `Layout/layout.tsx`

<details><summary><b>components/Layout/layout.tsx</b></summary>
<br/>

```tsx
/**
 * file: components/Layout/layout.tsx
 * description: file responsible for the 'Layout' component
 * data: 10/26/2022
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import Header from '../Header/header';
import Footer from '../Footer/footer';
import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
```

</details>
<br/>

Calma! Ainda não acabou! Vamos criar mais um componente. Agora vamos criar o componente `Header` e crie os seguintes arquivos:

- `Header/header.module.css`
- `Header/header.tsx`

<details><summary><b>components/Header/header.module.css</b></summary>
<br/>

```css
.signedInStatus {
  display: block;
  min-height: 4rem;
  width: 100%;
}

.loading,
.loaded {
  position: relative;
  top: 0;
  opacity: 1;
  overflow: hidden;
  border-radius: 0 0 0.6rem 0.6rem;
  padding: 0.6rem 1rem;
  margin: 0;
  background-color: rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease-in;
}

.loading {
  top: -2rem;
  opacity: 0;
}

.signedInText,
.notSignedInText {
  position: absolute;
  padding-top: 0.8rem;
  left: 1rem;
  right: 6.5rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  display: inherit;
  z-index: 1;
  line-height: 1.3rem;
}

.signedInText {
  padding-top: 0rem;
  left: 4.6rem;
}

.avatar {
  border-radius: 2rem;
  float: left;
  height: 2.8rem;
  width: 2.8rem;
  background-color: white;
  background-size: cover;
  background-repeat: no-repeat;
}

.button,
.buttonPrimary {
  float: right;
  margin-right: -0.4rem;
  font-weight: 500;
  border-radius: 0.3rem;
  cursor: pointer;
  font-size: 1rem;
  line-height: 1.4rem;
  padding: 0.7rem 0.8rem;
  position: relative;
  z-index: 10;
  background-color: transparent;
  color: #555;
}

.buttonPrimary {
  background-color: #346df1;
  border-color: #346df1;
  color: #fff;
  text-decoration: none;
  padding: 0.7rem 1.4rem;
}

.buttonPrimary:hover {
  box-shadow: inset 0 0 5rem rgba(0, 0, 0, 0.2);
}

.navItems {
  margin-bottom: 2rem;
  padding: 0;
  list-style: none;
}

.navItem {
  display: inline-block;
  margin-right: 1rem;
}
```

</details>
<br/>

Não vamos entrar em detalhes sobre o css.

Agora, vamos focar no arquivo `header.tsx`. Abra o arquivo e coloque o seguinte código:

<details><summary><b>components/Header/header.tsx</b></summary>
<br/>

```tsx
/**
 * file: components/Header/header.tsx
 * description: file responsible for the 'Header' component
 * data: 10/26/2022
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';
import styles from './header.module.css';

export default function Header() {
  const { data: session, status } = useSession();
  const loading = status === 'loading';

  return (
    <header>
      <noscript>
        <style>{`.nojs-show { opacity: 1; top: 0; }`}</style>
      </noscript>
      <div className={styles.signedInStatus}>
        <p
          className={`nojs-show ${
            !session && loading ? styles.loading : styles.loaded
          }`}
        >
          {!session && (
            <>
              <span className={styles.notSignedInText}>
                You are not signed in
              </span>
              <a
                href={`/api/auth/signin`}
                className={styles.buttonPrimary}
                onClick={(e) => {
                  e.preventDefault();
                  signIn();
                }}
              >
                Sign in
              </a>
            </>
          )}
          {session?.user && (
            <>
              {session.user.image && (
                <span
                  style={{ backgroundImage: `url('${session.user.image}')` }}
                  className={styles.avatar}
                ></span>
              )}
              <span className={styles.signedInText}>
                <small>Signed in as</small>
                <br />
                <strong>{session.user.email ?? session.user.name}</strong>
              </span>
              <a
                href={`/api/auth/signout`}
                className={styles.button}
                onClick={(e) => {
                  e.preventDefault();
                  signOut();
                }}
              >
                {' '}
                Sign Out
              </a>
            </>
          )}
        </p>
      </div>
      <nav>
        <ul className={styles.navItems}>
          <li className={styles.navItem}>
            <Link href='/'>Home</Link>
          </li>
          <li className={styles.navItem}>
            <Link href='/admin'>Admin</Link>
          </li>
          <li className={styles.navItem}>
            <Link href='/reminder'>Reminder</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
```

</details>
<br/>

Se você olhar o código acima, você verá que estamos usando o `useSession` do `next-auth/react` para obter os dados da sessão do usuário. E também estamos usando o `status` para verificar se a sessão está carregando ou não. 

Você verá também que estamos usando o `session?.user` para verificar se o usuário está logado ou não. Se o usuário estiver logado, então mostraremos o nome e o e-mail do usuário. E também, se o usuário estiver logado, então mostraremos o botão `Sign Out` para que o usuário possa sair da aplicação.

Já na parte do bloco do código dentro do `return` estamos usando react. E também estamos usando o `Link` do `next/link` para navegar entre as páginas da aplicação. 

E, finalmente vamos criar o Footer component. 
Novamente, dentro da pasta `components` crie uma pasta chamada `Footer` e dentro dela crie os arquivos:

- `Footer/footer.module.css`

<details><summary><b>components/Footer/footer.module.css</b></summary>
<br/>

```css
.footer {
  margin-top: 2rem;
}

.navItems {
  margin-bottom: 1rem;
  padding: 0;
  list-style: none;
}

.navItem {
  display: inline-block;
  margin-right: 1rem;
}
```

</details>
<br/>

- `Footer/footer.tsx`

<details><summary><b>components/Footer/footer.tsx</b></summary>
<br/>

```tsx
import styles from '../Footer/footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <hr />
      <ul className={styles.navItems}>
        <li className={styles.navItem}>
          <a href='https://twitter.com/glaucia_lemos86'>Twitter</a>
        </li>
        <li className={styles.navItem}>
          <a href='https://twitter.com/glaucia_lemos86'>Youtube</a>
        </li>
        <li className={styles.navItem}>
          <a href='https://twitter.com/glaucia_lemos86'>Linkedin</a>
        </li>
      </ul>
    </footer>
  );
}
```

</details>
<br/>

É um Footer bem simples. Mas, se você quiser, pode adicionar mais coisas.

Mas, se o usuário não estiver logado? Então, o que acontece? Temos que criar uma página que informe que o usuário não tem permissão para acessar a página. Vamos fazer isso agora? 

Dentro da pasta `components` crie uma pasta chamada `AccessDenied` e dentro dela o arquivo:

- `AccessDenied/access-denied.tsx`

<details><summary><b>components/AccessDenied/access-denied.tsx</b></summary>
<br/>

```tsx
/**
 * file: components/AccessDenied/access-denied.tsx
 * description: file responsible for the 'AccessDenied' component.
 * data: 10/26/2022
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { signIn } from 'next-auth/react';

export default function AccessDenied() {
  return (
    <>
      <h1>Access Denied</h1>
      <p>
        <a
          href='/api/auth/signin'
          onClick={(e) => {
            e.preventDefault();
            signIn();
          }}
        >
          You must be signed in to view this page
        </a>
      </p>
    </>
  );
}
```

</details>
<br/>

Novamente! É um componente muito simples. Uma vez que concluirmos todo esse workshop, iremos incluir UIs mais bonitas, usando o **[Material UI](https://mui.com/)**.

Como estamos usando **[TypeScript](https://www.typescriptlang.org/)** nessa aplicação, precisamos transpilar o código. Para isso, execute o comando abaixo:

```bash
npm run build
```

E, por fim, vamos iniciar a aplicação. Para isso, execute o comando abaixo:

```bash
npm run dev
```

Você verá que a tela continua a mesma. Mas, por que? Porque ainda não criamos as páginas da aplicação. Faremos isso na próxima seção.

**[⬅️ Voltar: Sessão 03](./03-session.md)**
| **[Próximo: Sessão 05 ➡️](./05-session.md)**