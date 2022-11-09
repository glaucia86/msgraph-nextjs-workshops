# Alterando a Página Reminder

Agora que já temos o arquivo `getPresence.ts` pronto, vamos alterar a página `reminder.tsx` para que possamos fazer a conexão com o client-side da nossa aplicação.

Abre o arquivo `reminder.tsx` e vamos fazer as seguintes alterações:

- `pages/reminder.tsx`:

<details><summary><b>pages/reminder.tsx</b></summary>
<br/>

```tsx
/**
 * file: pages/reminder.tsx
 * description: file responsible for the reminder page
 * data: 11/03/2022
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { useSession } from 'next-auth/react';
import { useState } from 'react';
import Layout from '../components/Layout/layout';

export default function ReminderPage() {
  const [isTimerStarted, setIsTimerStarted] = useState(false);
  const { data: session, status } = useSession();
  const isLoading = status === 'loading';

  const isPresent = async () => {
    const data = await fetch('/api/getPresence');
    const presence = await data.json();
    return !['Offline', 'Away'].includes(presence.availability);
  };

  const maybeAlert = async () => {
    if (await isPresent()) {
      alert('Take a Break!');
    }
  };

  const startTimer = async () => {
    if (!(await isPresent())) {
      alert('You are offline!');
      return;
    }

    // 60 minutes = 3600000 milliseconds
    // 2 minutes = 120000 milliseconds
    setTimeout(timerIsOver, 120000);

    setIsTimerStarted(true);
  };

  const timerIsOver = async () => {
    await maybeAlert();
    setIsTimerStarted(false);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <h1>Reminder Page</h1>
      <h2>Welcome, {session?.user?.name}!</h2>

      <div>
        <h3>⏰ Time goes by... so slowly! ⏰</h3>
        {isTimerStarted ? (
          <p>
            {' '}
            <strong>Timer is running right now...</strong>
          </p>
        ) : (
          <button onClick={startTimer}>Start Timer!</button>
        )}
      </div>
    </Layout>
  );
}
```
</details>
<br />

Vamos entender o que foi feito aqui. Primeiro, importamos o `useSession` do `next-auth/react` e o `useState` do `react`. 

Em seguida, criamos as variáveis `isTimerStarted`, `setIsTimerStarted` e `isLoading` e as inicializamos com `false` e `true`, respectivamente.

Agora, vamos entender o que cada função nessa página faz:

- `isPresent`: Essa função verifica se o usuário está presente no Microsoft Teams. Ela faz isso chamando a API que criamos anteriormente e verificando se o valor de `availability` é diferente de `Offline` ou `Away`. Se for, significa que o usuário está presente no Teams e a função retorna `true`. Caso contrário, retorna `false`.

- `maybeAlert`: Essa função verifica se o usuário está presente no Microsoft Teams e, se estiver, exibe um alerta na tela.

- `startTimer`: Essa função verifica se o usuário está presente (status `Available`) no Microsoft Teams e, se estiver, inicia um temporizador de 60 minutos, o que corresponde a 3600000 milissegundos. Porém, para fins de teste, vamos deixar o temporizador com 2 minutos, o que corresponde a 120000 milissegundos. 

- `timerIsOver`: Essa função verifica se o usuário está presente no Microsoft Teams e, se estiver, exibe um alerta na tela. Em seguida, reinicia o estado do temporizador para `false`.

- `isLoading`: Essa variável verifica se o status da sessão é `loading` e, se for, exibe a mensagem `Loading...` na tela.

No bloco de `return` da função `ReminderPage`, exibimos o nome do usuário logado na aplicação e, se o temporizador estiver rodando, exibimos a mensagem `Timer is running right now...`. Caso contrário, exibimos o botão `Start Timer!`.

E é somente isso que precisamos fazer para que a nossa aplicação funcione. Antes de testarmos a nossa aplicação, há um arquivo que ainda precisaremos criar. Vamos fazer isso na próxima sessão.


**[⬅️ Voltar: Sessão 05](./05-session.md)**
| **[Próximo: Sessão 07 ➡️](./07-session.md)**



