/**
 * file: pages/api/getPresence.ts
 * description: file responsible for the getPresence Microsoft Graph API
 * data: 11/03/2022
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { getToken } from "next-auth/jwt";
import { Client } from "@microsoft/microsoft-graph-client";

import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const token = await getToken({
    req,
  });

  if (token) {
    const accessToken: any = token.accessToken;

    const client = Client.init({
      authProvider: (done) => done(null, accessToken),
    });

    const userPresence = await client.api('/me/presence').get();

    res.status(200).json(userPresence);
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
}