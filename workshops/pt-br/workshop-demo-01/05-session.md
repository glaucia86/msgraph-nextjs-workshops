# Definindo AAD Provider no NextAuth

Antes de darmos continuidade, precisamos configurar o AAD Provider no NextAuth.

Mas, o que é AAD?

Azure Active Directory (AAD) é um serviço de identidade e acesso gerenciado na nuvem da Microsoft. Ele fornece autenticação e autorização para aplicativos e serviços na nuvem e na empresa.

Para isso, dentro da pasta `pages/api` crie uma pasta chamada `auth`. E, dentro dessa pasta crie o arquivo `[...nextauth].ts` e adicione o seguinte código:

- `pages/api/auth/[...nextauth].ts`

<details><summary><b>pages/api/auth/[...nextauth].ts</b></summary>
<br/>

```tsx
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
    })
  ]
}

export default NextAuth(authOptions);
```

</details>
<br/>

Agora é o momento que temos que pegar as variáveis de ambiente que criamos no Azure AD anteriormente. Para isso, vamos criar um arquivo chamado `.env.local` na raiz do projeto. E vamos adicionar as seguintes variáveis de ambiente:

- `.env.local`

```text
AZURE_AD_CLIENT_ID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
AZURE_AD_CLIENT_SECRET=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
AZURE_AD_TENANT_ID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=123
```

> **Nota**: Lembre-se de substituir os valores das variáveis de ambiente com os valores que você criou no Azure AD.

Se desejar, eu criei um arquivo chamado `.env.local.example` que você pode usar como referência para criar o seu arquivo `.env.local`.

Agora precisamos configurar o arquivo principal da aplicação. Abre o arquivo `pages/_app.tsx` e adicione o seguinte código:

- `pages/_app.tsx`

<details><summary><b>pages/_app.tsx</b></summary>
<br/>

```tsx
/**
 * file: pages/_app.tsx
 * description: file responsible for the application's configuration
 * data: 10/26/2022
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { SessionProvider } from 'next-auth/react';

import type { AppProps } from 'next/app';
import type { Session } from 'next-auth';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
```

</details>
<br/>

Estamos aqui definindo o `SessionProvider` do NextAuth. Ele é responsável por fornecer o estado da sessão para todos os componentes da aplicação.

Agora, execute a aplicação novamente e logo em seguida abre o browser em `http://localhost:3000`. Se a sua tela estiver parecida com a imagem abaixo, significa que tudo está funcionando corretamente:

![image-16](./../../workshop-images/images-demo-01/image-16.jpg)

Os links das páginas ainda não estão funcionando. Vamos fazer isso na próxima seção.

**[⬅️ Voltar: Sessão 04](./04-session.md)**
| **[➡️ Próximo: Sessão 06](./06-session.md)**