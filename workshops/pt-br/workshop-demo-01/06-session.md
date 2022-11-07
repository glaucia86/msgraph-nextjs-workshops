# Criando as páginas da aplicação

Agora, vamos criar as páginas da aplicação. Para isso, dentro da pasta `pages` crie os arquivos:

- `styles.css`
- `admin.tsx`
- `reminder.tsx`

E para melhorar um pouco o css da aplicação, vamos adicionar o seguinte código no arquivo `styles.css`:

- `styles.css`

<details><summary><b>styles.css</b></summary>
<br/>

```css
body {
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  padding: 0 1rem 1rem 1rem;
  max-width: 100%;
  height: auto;
  margin: 0 auto;
  background: #fff;
  color: #333;
}

li,
p {
  line-height: 1.5rem;
}

a {
  font-weight: 500;
}

hr {
  border: 1px solid #ddd;
}

iframe {
  background: #ccc;
  border: 1px solid #ccc;
  height: 10rem;
  width: 100%;
  border-radius: 0.5rem;
  filter: invert(1);
}
```

</details>
<br/>

Retorne ao arquivo `pages/_app.tsx` e importe o estilo que acabamos de criar:

- `pages/_app.tsx`

<details><summary><b>pages/_app.tsx</b></summary>
<br/>

```tsx
import './styles.css';

(... some code here ...)
```

</details>
<br/>

Crie agora uma pasta chamada `styles` na raiz do projeto e dentro dela crie um arquivo chamado `Home.module.css`. E adicione o seguinte código:

- `styles/Home.module.css`

<details><summary><b>styles/Home.module.css</b></summary>
<br/>

```css
.container {
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.main {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.title {
  margin: 5% 0;
  line-height: 1.15;
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
}
```

</details>
<br/>

Eu criei uma imagem que vocês podem pegar no repositório do projeto e adicionar na pasta `public` (na raiz do projeto). O nome do arquivo da imagem é: `authentication.gif`.

Vamos agora começar a desenvolver a página do Admin. Para isso, vamos adicionar o seguinte código no arquivo `admin.tsx`:

- `pages/admin.tsx`

<details><summary><b>pages/admin.tsx</b></summary>
<br/>

```tsx
/**
 * file: pages/admin.tsx
 * description: file responsible for the admin page
 * data: 10/26/2022
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { useSession } from 'next-auth/react';
import Layout from '../components/Layout/layout';

export default function Page() {
  const { data } = useSession();

  return (
    <Layout>
      <h1>Admin Page</h1>
      <p>Only admin users can see this page.</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </Layout>
  );
}
```

</details>
<br/>

E, vamos fazer a mesma coisa com a página `reminder.tsx`:

- `pages/reminder.tsx`

<details><summary><b>pages/reminder.tsx</b></summary>
<br/>

```tsx
/**
 * file: pages/reminder.tsx
 * description: file responsible for the reminder page
 * data: 10/26/2022
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { useSession } from 'next-auth/react';
import Layout from '../components/Layout/layout';

export default function ReminderPage() {
  const { data } = useSession();

  return (
    <Layout>
      <h1>Reminder Page</h1>
      <p>Only admin users can see this page.</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </Layout>
  );
}
```

</details>
<br/>

Agora vamos alterar algumas coisas no arquivo `index.tsx`. Vamos adicionar o seguinte código:

- `pages/index.tsx`

<details><summary><b>pages/index.tsx</b></summary>
<br/>

```tsx
/**
 * file: pages/index.tsx
 * description: file responsible for the home page
 * data: 10/26/2022
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import Head from 'next/head';
import Layout from '../components/Layout/layout';
import Image from 'next/image';
import authenticationImage from '../public/images/authentication.gif';
import styles from '../styles/Home.module.css';

export default function IndexPage() {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>NextJs | Microsoft Graph</title>
        </Head>
        <main className={styles.main}>
          <h1>Take a Break Reminder App</h1>
          <h4>
            A step by step tutorial how you can use Microsoft Graph with
            Next.Js!
          </h4>
          <div>
            <Image
              priority={true}
              src={authenticationImage}
              width={560}
              height={315}
              alt='a clock image with a reminder'
            />
          </div>
        </main>
      </div>
    </Layout>
  );
}
```

</details>
<br/>

Wow! Quantas alterações, não é mesmo? Mas, vamos entender um pouco o que aconteceu aqui. Primeiro, importamos o componente `Head` do `next/head` e o componente `Image` do `next/image`. Depois, importamos a imagem que adicionamos na pasta `public` e, por fim, importamos o arquivo `Home.module.css` que criamos na pasta `styles`. 

Agora execute a aplicação e abre o navegador e acesse a página `http://localhost:3000/` e veja o resultado:

![image-16](./../../workshop-images/images-demo-01/image-17.jpg)

Há importantes arquivos que precisaremos criar na aplicação. Mas, vamos deixar isso para a próxima sessão.

**[⬅️ Voltar: Sessão 05](./05-session.md)**
| **[➡️ Próximo: Sessão 07](./07-session.md)**