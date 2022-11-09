# Alteração no arquivo `[...nextauth].ts 

Precisamremos fazer alterações importantes no arquivo `[...nextauth].ts` para que possamos autorizar o usuário com algumas permissões relacionadas ao Microsoft Graph.

Para isso, precisamos fazer as seguintes alterações:

- `pages/api/auth/[...nextauth].ts`:

<details><summary><b>api/auth/[...nextauth].ts</b></summary>
<br/>

```ts
/**
 * file: pages/api/auth/[...nextauth].ts
 * description: file responsible for the authenticate an user using AAD Provider
 * data: 10/28/2022
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import NextAuth, { NextAuthOptions } from "next-auth";
import AzureADProvider from 'next-auth/providers/azure-ad';

export const authOptions: NextAuthOptions = {
  providers: [
    AzureADProvider({
      clientId: process.env.AZURE_AD_CLIENT_ID,
      clientSecret: process.env.AZURE_AD_CLIENT_SECRET,
      tenantId: process.env.AZURE_AD_TENANT_ID,
      authorization: {
        params: {
          scope: 'openid profile email offline_access Presence.Read'
        }
      }
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      // Persist the OAuth access_token to the right token after signin
      if (account) {
        token.accessToken = account.access_token;
        token.refreshToken = account.refresh_token;
      }

      return token;
    }
  }
}

export default NextAuth(authOptions);
```

</details>
<br/>

Vamos entender o que incluímos nesse arquivo:

- `clientId`: é o ID do cliente que você obteve ao registrar seu aplicativo no Azure Active Directory.
- `clientSecret`: é a senha do cliente que você obteve ao registrar seu aplicativo no Azure Active Directory.
- `tenantId`: é o ID do diretório do Azure Active Directory (tenant) que você deseja usar para autenticar usuários.

Na parte de `authorization`, incluímos o seguinte parâmetro:	

- `scope`: é o escopo que você deseja que o usuário autorize. Nesse caso, estamos solicitando que o usuário autorize que a aplicação consiga acessar os dados do perfil do usuário, o endereço de e-mail e o status de presença do usuário.

E dentro desses scopes, incluímos o seguinte:

- `Presence.Read`: é o escopo que permite que a aplicação acesse o status de presença do usuário.
- `offline_access`: é o escopo que permite que a aplicação acesse o token de atualização do usuário.
- `profile`: é o escopo que permite que a aplicação acesse os dados do perfil do usuário.
- `email`: é o escopo que permite que a aplicação acesse o endereço de e-mail do usuário.
- `openid`: é o escopo que permite que a aplicação acesse o ID do usuário.

Já em `callbacks`, estamos retornando o `accessToken` e o `refreshToken` para que possamos utilizar esses dados para fazer as chamadas ao Microsoft Graph.

Essa será a única mudança que precisaremos fazer nesse arquivo. Porém, precisamos fazer a chamada do `Client` do Microsoft Graph. Vamos fazer isso na próxima sessão.


**[⬅️ Voltar: Sessão 03](./03-session.md)**
| **[Próximo: Sessão 05 ➡️](./05-session.md)**


