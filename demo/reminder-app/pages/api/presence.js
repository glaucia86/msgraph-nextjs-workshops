/**
 * file: pages/presence.js
 * description: file responsible for the presence page.
 * data: 07/10/2021
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { getToken } from 'next-auth/jwt';
import { Client } from '@microsoft/microsoft-graph-client';

export default async function handler(req, res) {
  const token = await getToken({
    req,
  });

  if (token) {
    const accessToken = token.accessToken;

    const client = Client.init({
      authProvider: (done) => done(null, accessToken),
    });

    const presence = await client.api('/me/presence').get();

    res.status(200).json(presence);
  } else {
    res.status(401).json({
      error: 'Unauthorized',
    });
  }
}
