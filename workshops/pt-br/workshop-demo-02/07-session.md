# Criando o arquivo de Interface para JWT

Na raiz do projeto, crie um arquivo chamado `next-auth.d.ts` e inclua o seguinte código:

- `next-auth.d.ts`

<details><summary><b>pages/reminder.tsx</b></summary>
<br/>

```tsx
import "next-auth/jwt"

// Read more at: https://next-auth.js.org/getting-started/typescript#module-augmentation

declare module "next-auth/jwt" {
  interface JWT {
    userRole?: "admin",
    accessToken?: string,
    refreshToken?: string,
  }
}
```

</details>
<br />

Nada muito complicado, mas é importante que você entenda o que está acontecendo aqui. O `next-auth/jwt` é um módulo que exporta uma interface chamada `JWT`. Nós estamos dizendo ao TypeScript que queremos estender essa interface com as propriedades `userRole`, `accessToken` e `refreshToken`. Isso nos permite acessar essas propriedades em qualquer lugar do nosso código. Por exemplo, se você tentar acessar `session.userRole` em algum lugar do seu código, o TypeScript não vai reclamar. Isso é muito útil, pois você não precisa ficar importando o `session` em todos os lugares. Você pode simplesmente acessar as propriedades que você precisa. 

Isso se chama TypeScript Module Augmentation. Você pode ler mais sobre isso [aqui](https://next-auth.js.org/getting-started/typescript#module-augmentation).

Finalmente, podemos agora testar a nossa aplicação. Execute o comando `npm run dev` e acesse `http://localhost:3000/reminder`. 

Faça o login usando as credenciais que você criou anteriormente. Se tudo der certo, aparecerá o seu nome na tela.

Antes de clicar no botão `Start Timer`, você precisará conectar ao Microsoft Teams. Lembrando-se que, você usará o email que criou no Programa Microsoft 365 Developer.

Deixe com o status `Available`. 

Agora retorne para a aplicação e clique no botão `Start Timer`. Espera passar 2 minutos. Após isso, você receberá uma mensagem de alerta no browser dizendo: `Take a break!`.

Mas e se o usuário estiver com status que não seja `Available`? O que acontecerá? Ao tentar clicar no botão `Start Timer`, informará no alert que você está `Offline` ou `Busy` ou qualquer outro status que não seja `Available`.

Veja esse processo em ação no gif abaixo:

**(colocar todo o processo da aplicação via gif)**

E, parabéns! Você acabou de criar uma aplicação que notificará ao usuário que ele ou ela precisam fazer uma pausa a cada 60 minutos. E, o melhor disso é que está integrado com o Microsoft Teams. 

Gostou do workshop? Deseja aprender mais sobre o Microsoft Graph? Se a sua resposta for um grande sim, vejamos alguns recursos e links importantes para dar continuidade na sua jornada.

**[⬅️ Voltar: Sessão 06](./06-session.md)**
| **[Próximo: Sessão 08 ➡️](./08-session.md)**







