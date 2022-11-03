/**
 * file: process.d.ts
 * description: file responsible for the types of the process
 * data: 11/01/2022
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

declare namespace NodeJS {
  export interface ProcessEnv {
    NEXTAUTH_URL: string;
    NEXTAUTH_SECRET: string;
    AZURE_AD_CLIENT_SECRET: string;
    AZURE_AD_CLIENT_ID: string;
  }
}