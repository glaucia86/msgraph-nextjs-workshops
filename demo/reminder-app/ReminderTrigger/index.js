/**
 * file: ReminderTrigger/index.js
 * date: 10/06/2022
 * description: file responsible for the reminder trigger.
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

const { Client } = require('@microsoft/microsoft-graph-client');
const {
  TokenCredentialAuthenticationProvider,
} = require('@microsoft/microsoft-graph-client/authProviders/azureTokenCredentials');
const { ClientSecretCredential } = require('@azure/identity');

const handleError = require('../shared/error');

require('isomorphic-fetch');
require('dotenv').config();

module.exports = async function (context, myTimer) {
  let timeStamp = new Date().toISOString();

  if (myTimer.isPastDue) {
    context.log('JavaScript is running late!');
  }
  context.log('JavaScript timer trigger function ran!', timeStamp);

  // ==> The logic begins here:
  try {
    const credential = new ClientSecretCredential(
      process.env.AZURE_CLIENT_TENENT_ID,
      process.env.AZURE_CLIENT_ID,
      process.env.AZURE_CLIENT_SECRET_ID
    );

    const authProvider = new TokenCredentialAuthenticationProvider(credential, {
      scopes: ['https://graph.microsoft.com/.default'],
    });

    const client = Client.initWithMiddleware({
      authProvider,
    });

    let userPresence = await client
      .api('/users/74c13eb7-02e0-47aa-82fb-ba10c1514b80/presence')
      .get();

    context.res = {
      status: 200,
      body: userPresence,
    };

    context.log(userPresence);
  } catch (error) {
    context.log('Error to get user presence: ', error);
    return handleError(500, error);
  }
};
