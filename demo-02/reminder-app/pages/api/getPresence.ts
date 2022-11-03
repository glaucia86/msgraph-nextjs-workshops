/**
 * file: pages/api/getPresence.ts
 * description: file responsible for the getPresence Microsoft Graph API
 * data: 11/03/2022
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { getToken } from "next-auth/jwt";
import { Client } from "@microsoft/microsoft-graph-client";
import { TokenCredentialAuthenticationProvider } from "@microsoft/microsoft-graph-client/authProviders/azureTokenCredentials";
import { ClientSecretCredential } from "@azure/identity";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // const token = await getToken({
  //   req,
  // });
  const token = req.cookies;
  console.log("request-dev", token);
  const credential = new ClientSecretCredential(
    process.env.AZURE_AD_TENANT_ID,
    process.env.AZURE_AD_CLIENT_ID,
    process.env.AZURE_AD_CLIENT_SECRET
  );
  const authProvider = new TokenCredentialAuthenticationProvider(credential, {
    scopes: ["presence.read", "presence.read.all"],
  });
  if (token) {
    const client = Client.initWithMiddleware({
      authProvider,
    });

    const userPresence = await client.api("/me/presence").get();

    res.status(200).json(userPresence);
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
}
