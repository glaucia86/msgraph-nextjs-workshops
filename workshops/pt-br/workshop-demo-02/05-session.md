# Desenvolvendo a API GetPresence

Nessa sessão, vamos desenvolver a API que irá retornar o status de presença do usuário. Para isso, vamos utilizar o `Client` do Microsoft Graph.

Mas, antes o que é o GetPresence no Microsoft Graph?

A API `GetPresence` é usada para obter a presença de um usuário. A presença de um usuário é um estado que indica se o usuário está disponível, ocupado, ausente ou offline. E é justamente essa informação que queremos obter para saber se o usuário está disponível para receber uma notificação. 

Podemos ver um exemplo sobre essa API em **[GetPresence](https://learn.microsoft.com/en-us/graph/api/presence-get?view=graph-rest-1.0&tabs=javascript)**.

Para usarmos essa API precisamos antes instalar a biblioteca `@microsoft/microsoft-graph-client`. Para isso, execute o comando:

```bash
npm install @microsoft/microsoft-graph-client
```

Agora vamos criar um arquivo chamado `getPresence.ts` na pasta `pages/api` e adicionar o seguinte código:

- `pages/api/getPresence.ts`:

<details><summary><b>pages/api/getPresence.ts</b></summary>
<br/>

```ts
/**
 * file: pages/api/getPresence.ts
 * description: file responsible for the getPresence Microsoft Graph API
 * data: 11/03/2022
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { getToken, } from "next-auth/jwt";
import { Client } from "@microsoft/microsoft-graph-client";

import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const token = await getToken({
    req,
  });

  const accessToken = token?.accessToken;

  if (accessToken) {
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
<br />

Vamos desmitificar o código acima. Primeiro estamos importando o `getToken` do `next-auth/jwt` e o `Client` do `@microsoft/microsoft-graph-client`. Já na variável `token` estamos chamando o `getToken` e passando o `req` como parâmetro. 

Depois, estamos criando uma variável chamada `accessToken` e atribuindo o valor de `token.accessToken`. Essa variável será responsável por armazenar o token de acesso do usuário.

Agora, vamos criar uma estrutura condicional para verificar se o `accessToken` existe. Caso exista, vamos criar uma variável chamada `client` e atribuir o valor de `Client.init` e passar como parâmetro um objeto com o `authProvider` e o `accessToken`.

Por fim, vamos criar uma variável chamada `userPresence` e atribuir o valor de `client.api('/me/presence').get()`. Essa variável será responsável por armazenar o status de presença do usuário.

Se tudo ocorrer bem, vamos retornar o status `200` e o valor de `userPresence` no formato JSON. Caso contrário, vamos retornar o status `401` e uma mensagem de erro no formato JSON.

Este arquivo será muito importante para a nossa aplicação. Pois além de retornar o status de presença do usuário, será ele que faremos a conexão com o client-side da nossa aplicação na página `reminder.tsx`.

E é agora que precisamos fazer. Alterações importantes na página `reminder.tsx`. Vamos lá?


**[⬅️ Voltar: Sessão 04](./03-session.md)**
| **[Próximo: Sessão 06 ➡️](./05-session.md)**
