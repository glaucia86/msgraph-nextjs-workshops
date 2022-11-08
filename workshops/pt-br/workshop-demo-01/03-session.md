# Estruturando o Projeto

Agora que criamos a nossa aplicação no portal Azure, vamos começar a programar. Nesse projeto utilizaremos o Next.js, então vamos começar instalando ele.

Para isso, vamos abrir o terminal e digitar o seguinte comando:

```bash
npx create-next-app auth-app --typescript
```

Agora que já criamos o projeto, para saber que tudo está funcionando, vamos executar o projeto com o seguinte comando:

```bash
cd auth-app
```

```bash
npm run dev
```

Abre o browser e digite o seguinte endereço: `http://localhost:3000` e pronto! Já temos o nosso projeto executando.

Precisamos instalar algumas dependências para que possamos dar continuidade com o nosso projeto. Um deles é o **[Microsoft Graph Client](https://learn.microsoft.com/en-us/graph/sdks/create-client?tabs=Javascript)**. Para instalar, vamos digitar o seguinte comando:

```bash
npm install @microsoft/microsoft-graph-client
``` 

Se desejar conhecer mais sobre o Microsoft Graph Client, você pode acessar esse link **[AQUI](https://docs.microsoft.com/en-us/graph/sdks/sdks-overview)** e conhecer o NPM do Microsoft Graph Client **[AQUI](https://www.npmjs.com/package/@microsoft/microsoft-graph-client)**.

Outro pacote que precisaremos instalar é o NextAuth. Para instalar, vamos digitar o seguinte comando:

```bash
npm install next-auth
```

Também, se desejar saber mais sobre o NextAuth, você pode acessar esse link **[AQUI](https://next-auth.js.org/)** e conhecer o NPM do NextAuth **[AQUI](https://www.npmjs.com/package/next-auth)**.

Agora podemos enfim, começar a criar alguns componentes para a nossa aplicação. Porém, faremos isso na próxima seção.

**[⬅️ Voltar: Sessão 02](./02-session.md)**
| **[Próximo: Sessão 04 ➡️](./04-session.md)**
