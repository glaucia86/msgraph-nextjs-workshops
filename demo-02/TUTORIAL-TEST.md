# Step by step tutorial

Esse tutorial é uma sequencia do `Authentication App Tutorial`.

Faça as instalações das dependências do projeto:

```bash
npm install
```

Execute o projeto com o comando:

```bash
npm run dev
```

Acesse o projeto no browser: `http://localhost:3000/`

Se tudo estiver correto, poderemos enfim começar a criar a lógica em criar um aplicativo de lembrete de intervalos.

## GetPresence API 

A API `GetPresence` é usada para obter a presença de um usuário. A presença de um usuário é um estado que indica se o usuário está disponível, ocupado, ausente ou offline. E é justamente essa informação que queremos obter para saber se o usuário está disponível para receber uma notificação. 

Podemos ver um exemplo sobre essa API em [GetPresence](https://learn.microsoft.com/en-us/graph/api/presence-get?view=graph-rest-1.0&tabs=javascript).

Para usarmos essa API precisamos antes instalar a biblioteca `@microsoft/microsoft-graph-client`. Para isso, execute o comando:

```bash
npm install @microsoft/microsoft-graph-client
```

Agora vamos criar um arquivo chamado `getPresence.ts` na pasta `pages/api` e adicionar o seguinte código:

- `getPresence.ts`:

<details><summary><b>api/getPresence.ts</b></summary>
<br/>

```ts
/**
 * file: pages/api/getPresence.ts
 * description: file responsible for the getPresence Microsoft Graph API
 * data: 11/03/2022
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { getToken } from "next-auth/jwt";
import { Client } from "@microsoft/microsoft-graph-client";

import type { NextApiRequest, NextApiResponse } from "next"

export default async function getPresence(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const token = await getToken({
    req,
  });

  if (token) {
    const accessToken: any = token.accessToken;

    const client = Client.init({
      authProvider: (done) => done(null, accessToken),
    });

    const userPresence = await client.api('/me/presence').get();

    res.status(200).json(userPresence);
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
}
```

</details>
<br/>


Excelente! Precisamos agora identificar se um determinado usuário está disponível para receber uma notificação de que precisa fazer um intervalo. Para isso, vamos fazer algumas alterações importantes no arquivo `pages/reminder.tsx`:

- `reminder.tsx`:

<details><summary><b>pages/reminders.tsx</b></summary>
<br/>

```tsx

```

</details>
<br/>


