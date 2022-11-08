# Criando arquivos de Configuração

Crie agora um arquivo na raiz do projeto chamado `process.d.ts` e vamos pré-definir algumas variáveis de ambiente que vamos utilizar no projeto. Adicione o seguinte código:

- `process.d.ts`

<details><summary><b>process.d.ts</b></summary>
<br/>

```tsx
/**
 * file: process.d.ts
 * description: file responsible for the types of the process
 * data: 11/01/2022
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

declare namespace NodeJS {
  export interface ProcessEnv {
    NEXTAUTH_URL: string;
    NEXTAUTH_SECRET: string;
    AZURE_AD_CLIENT_SECRET: string;
    AZURE_AD_CLIENT_ID: string;
  }
}
``` 

</details>
<br/>

Quando no projeto temos algumas páginas protegidas e podendo ser somente acessadas por usuários autenticados, é necessário criar um arquivo chamado `middleware.ts` na raiz do projeto. Vamos criar esse arquivo agora e adicione o seguinte código:

- `middleware.ts`

<details><summary><b>middleware.ts</b></summary>

```tsx
/**
 * file: middleware.ts
 * description: file responsible for the middleware protected
 *  pages/routes of the application
 * data: 11/01/2022
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { withAuth } from 'next-auth/middleware';

export default withAuth({
  callbacks: {
    authorized({ req, token }) {
      if (req.nextUrl.pathname === '/admin') {
        return token?.userRole === 'admin';
      }

      return !!token;
    },
  },
});

export const config = { matcher: ['/reminder'] };
```

</details>  
<br/>

Vamos entender o código acima. Importamos o `withAuth` do `next-auth/middleware` e, em seguida, e no `authorized`. Logo após, passamos o `req` e o `token` como parâmetros. E no `if` verificamos se o `req.nextUrl.pathname` é igual a `/admin`. Caso seja, retornaremos o `token?.userRole`. Caso contrário, retornaremos o `token`. Ou seja, se o usuário for um `admin`, ele poderá acessar a página `/admin` e, se não, ele poderá acessar a página `/reminder`, se estiver autenticado.

Se vocês desejam saber mais sobre o `middleware.ts`, podem acessar o seguinte link: **[AQUI](https://next-auth.js.org/configuration/nextjs#middleware)**

Vamos agora fazer algumas alterações no arquivo `admin.tsx`. Altere o código para o seguinte:

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

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import Layout from '../components/Layout/layout';
import AccessDenied from '../components/AccessDenied/access-denied';

export default function Page() {
  const { data: session } = useSession();
  const [content, setContent] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/examples/admin-protected');
      const json = await res.json();
      if (json.content) {
        setContent(json.content);
      }
    };

    fetchData();
  }, [session]);

  if (!session) {
    return (
      <Layout>
        <AccessDenied />
      </Layout>
    );
  }

  return (
    <Layout>
      <h1>Admin Page</h1>
      <p>
        <strong>{content ?? '\u00a0'}</strong>
      </p>
    </Layout>
  );
}
```

</details>
<br/>

Próximo passo, dentro da pasta `api` vamos criar uma pasta chamada `examples` e, dentro dela, vamos criar um arquivo chamado `admin-protected.ts`. Adicione o seguinte código:

- `api/examples/admin-protected.ts`

<details><summary><b>api/examples/admin-protected.ts</b></summary>
<br/>

```tsx
/**
 * file: pages/api/examples/admin-protected.ts
 * description: file responsible for the admin protected example
 * data: 11/01/2022
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { unstable_getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]"

import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await unstable_getServerSession(req, res, authOptions)

  if (session) {
    return res.send({
      content:
        "This is protected page. You can access this page because you are signed in.",
    })
  }

  res.send({
    error: "You must be signed in to view the protected page.",
  })
}
```

</details>
<br/>

E dentro da mesma pasta, vamos criar o arquivo `session.ts`. Adicione o seguinte código:

- `api/examples/session.ts`

<details><summary><b>api/examples/session.ts</b></summary>
<br/>

```tsx
/**
 * file: pages/api/examples/session.ts
 * description: file responsible for the session example
 * data: 11/01/2022
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { unstable_getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await unstable_getServerSession(req, res, authOptions);
  res.send(JSON.stringify(session, null, 2));
}
```

</details>
<br/>

Ufa! Estamos quase terminando! Porém, precisamos fazer algumas alterações importantes nas páginas de `Admin` e `Reminder`. Vejamos isso na próxima seção.

**[⬅️ Voltar: Sessão 06](./06-session.md)**
| **[Próximo: Sessão 08 ➡️](./08-session.md)**

