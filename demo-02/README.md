# Take a Break Reminder App

[![Take-a-Break-Reminder-App.gif](https://i.postimg.cc/brTVktZj/Take-a-Break-Reminder-App.gif)](https://postimg.cc/fSVvhk7H)

Take a break Reminder is an application that aims to remind you of the importance of taking time to do what you want to take a break from your work schedule!
Our main goal is teach you how to develop an application using Microsoft Graph JavaScript SDK integrated with Microsoft Teams and Alexa!

## 🚀 Resources Used

- **[Visual Studio Code](https://code.visualstudio.com/)**
- **[Microsoft Teams](https://www.microsoft.com/en-us/microsoft-teams/download-app?rtc=2)**
- **[Microsoft 365 Developer Program](https://developer.microsoft.com/en-us/microsoft-365/dev-program)**
- **[Microsoft Graph](https://developer.microsoft.com/en-us/graph)**
    * **[Microsoft Graph JavaScript SDK](https://github.com/microsoftgraph/msgraph-sdk-javascript)**
- **[Node.Js 16.x](https://nodejs.org/en/)**
- **[Next.Js](https://nextjs.org/learn/foundations/about-nextjs)**

## 🔥 How to Run the Application Locally?

1. First go to the folder: `demo-02 -> reminder-app` and run the command:

```bash
npm install
```

2. Now create a file called: `.env.local` (root of the project) and include this information below:

```env
AZURE_AD_CLIENT_ID=<copy Application (client) ID here>
AZURE_AD_CLIENT_SECRET=<copy generated client secret value here>
AZURE_AD_TENANT_ID=<copy the tenant id here>
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET= # Linux: `openssl rand -hex 32` or go to https://generate-secret.now.sh/32
```

3. Now you can execute the command:

```bash
npm run dev
```

4. Now you can access the application in the browser: `http://localhost:3000`

## 📚 How to Follow the Tutorial?

To follow the tutorial, you can access the link below:

- **[Tutorial: Take a Break Reminder App](../tutorial-demo-02/01-intro.md)**

## ⭐️ Important Resources

- ✅ **[Free Courses - Microsoft Graph](https://docs.microsoft.com/en-us/training/browse/?products=ms-graph&resource_type=learning%20path)**
- ✅ **[Microsoft Graph Fundalmentals](https://learn.microsoft.com/en-us/training/paths/m365-msgraph-fundamentals/)**
- ✅ **[Access a user's calendar events in a JavaScript app with Microsoft Graph](https://learn.microsoft.com/en-us/training/modules/msgraph-access-user-events/)**
- ✅ **[Show a user's emails in a JavaScript app with Microsoft Graph](https://learn.microsoft.com/en-us/training/modules/msgraph-show-user-emails/)**
- ✅ **[Download and upload files in a JavaScript app with Microsoft Graph](https://learn.microsoft.com/en-us/training/modules/msgraph-manage-files/)**
- ✅ **[Access user photo information by using Microsoft Graph](https://learn.microsoft.com/en-us/training/modules/msgraph-user-photo-information/)**
- ✅ **[Configure a JavaScript application to retrieve Microsoft 365 data by using Microsoft Graph](https://learn.microsoft.com/en-us/training/modules/msgraph-javascript-app/)**
- ✅ **[Build apps with Microsoft Graph – Associate](https://learn.microsoft.com/en-us/training/paths/m365-msgraph-associate/)**
- ✅ **[Microsoft Graph Documentation](https://docs.microsoft.com/en-us/graph/)**
- ✅ **[Graph Explorer](https://developer.microsoft.com/en-us/graph/graph-explorer)**
- ✅ **[Microsoft Graph JavaScript SDK](https://github.com/microsoftgraph/msgraph-sdk-javascript)**

## ❓ Questions? Comments? 

If you have any questions about the code developed, feel free to open an **[ISSUE HERE](https://github.com/glaucia86/take-break-reminder-app/issues)**. We'll get back to you soon!
