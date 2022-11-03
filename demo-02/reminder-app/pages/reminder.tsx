/**
 * file: pages/reminder.tsx
 * description: file responsible for the reminder page
 * data: 11/03/2022
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { useSession } from 'next-auth/react';
import Layout from '../components/Layout/layout';

export default function ReminderPage() {
  const { data: session, status } = useSession();
  const loading = status === 'loading';

  let timeAvailable = 0;

  const fetchPresence = async () => {
    const data = await fetch('/api/getPresence', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const presences = await data.json();
    console.log(presences.availability);

    if (
      presences.availability === 'Offline' ||
      presences.availability === 'Away'
    ) {
      timeAvailable = 0;
    } else {
      timeAvailable = timeAvailable + 1;
    }

    if (timeAvailable >= 5) {
      alert('Take a break!');
      timeAvailable = 0;
    }

    return {
      props: {
        presences,
      },
    };
  };

  //setInterval(fetchPresence, 300000);

  return (
    <Layout>
      <h1>Reminder Page</h1>
      <h2>Welcome, {session?.user?.name}!</h2>

      <div>
        {loading && <div>Loading...</div>}
        {session && (
          <>
            <h2>Testing Fetch</h2>
            <button onClick={fetchPresence}>FETCH</button> <br />
          </>
        )}
        {!session && (
          <>
            <p>Please Sign in</p>
            <p>Test</p>
          </>
        )}
      </div>
    </Layout>
  );
}
