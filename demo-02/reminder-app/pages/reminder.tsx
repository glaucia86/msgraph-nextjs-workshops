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

    setTimeout(timerIsOver, 10_000);

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
