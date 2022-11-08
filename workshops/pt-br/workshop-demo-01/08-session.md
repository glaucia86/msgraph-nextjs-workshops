# Importantes mudanças nas páginas Admin & Reminder

Finalmente vamos fazer algumas pequenas alterações nos arquivos: `admin.tsx` e `reminder.tsx`. Altere o código para o seguinte:

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
      <h2>Welcome, {session.user?.name}!</h2>
      <p>
        <strong>{content ?? '\u00a0'}</strong>
      </p>
      <br />
      <iframe src='/api/examples/session' />
    </Layout>
  );
}
```

</details>
<br/>

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
    </Layout>
  );
}
```

</details>
<br/>

Agora vamos executar o projeto e ver o resultado final. Para isso, execute o seguinte comando:

```bash
npm run dev
```

E, por fim, acesse a seguinte URL: `http://localhost:3000` e vejamos o resultado final:

![gif-01](./../../workshop-images/images-demo-01/gif-01.gif)

E, finalmente concluímos o nosso projeto! 🎉🎉🎉

**[⬅️ Voltar: Sessão 07](./07-session.md)**
| **[Próximo: Sessão 09 ➡️](./09-session.md)**