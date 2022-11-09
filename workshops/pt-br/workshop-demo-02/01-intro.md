# Workshop: Take a Break Reminder App

![reminder-image](./../../workshop-images/reminder.gif)

## Introdução

Nesse workshop vamos aprender a criar uma aplicação de lembrete de intervalos de tempo. A aplicação irá notificar o usuário a cada 60 minutos, caso esteja com status 'Disponível' no Microsoft Teams. Ao completar os 60 minutos, a aplicação dar um alerta de que precisa tirar um tempo para descansar.

## O que é Microsoft Graph?

Microsoft Graph é uma API que permite que você acesse dados e serviços do Microsoft 365. Você pode usar a API do Microsoft Graph para construir aplicativos que interajam com milhões de usuários em todo o mundo, acessando dados de maneira consistente em todo o ecossistema do Microsoft 365.

## Pré-requisitos

Para seguir esse workshop você precisa ter instalado em sua máquina:

- **[Visual Studio Code](https://code.visualstudio.com/)**
- **[Microsoft Teams](https://www.microsoft.com/en-us/microsoft-teams/download-app?rtc=2)**
- **[Microsoft 365 Developer Program](https://developer.microsoft.com/en-us/microsoft-365/dev-program)**
- **[Microsoft Graph](https://developer.microsoft.com/en-us/graph)**
- **[Microsoft Graph JavaScript SDK](https://github.com/microsoftgraph/msgraph-sdk-javascript)**
- **[Node.Js 16.x](https://nodejs.org/en/)**
- **[Next.Js](https://nextjs.org/learn/foundations/about-nextjs)**

Além disso, se faz necessário criar uma conta no Microsoft 365 Developer Program. **[LINK AQUI](https://developer.microsoft.com/en-us/microsoft-365/dev-program)**. Não se preocupe. Essa conta é totalmente gratuita!

Se você tiver dúvidas em como criar a conta, você pode assistir esse vídeo **[AQUI](https://www.youtube.com/watch?v=JvWLgirC8xs)**. Pois explica direitinho como criar a conta.

## Kit - Getting Started

Caso você não tenha acompanhado o workshop anterior, você pode baixar o kit de desenvolvimento **[AQUI](https://github.com/glaucia86/kitstarter-msgraph-nextjs)**. Esse kit contém o código fonte do projeto finalizado do workshop anterior. Assim, você não precisa se preocupar em criar o projeto do zero.

## Sessões


| Sessão                                                                                | Tópicos                                                                                                                                                           |
| ------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **[Sessão 01 - Introdução](01-intro.md)**                                             | Aqui você terá a introdução do workshop.                                                                                                                          |
| **[Sessão 02 - Configurando uma Aplicação no Azure Active Directory](02-session.md)** | Aqui você aprenderá a criar uma aplicação no AAD e configurar as permissões necessárias para que a aplicação possa acessar os dados do usuário.                   |
| **[Sessão 03 - Instalando dependências do Kit Get Starte](03-session.md)**            | Nessa sessão, vamos instalar as dependências do projeto que iremos trabalhar nesse workshop.                                                                      |
| **[Sessão 04 - Alteração no arquivo `[...nextauth].ts ](04-session.md)**              | Nessa sessão, vamos entender o que foi feito no arquivo [...nextauth].ts                                                                                          |
| **[Sessão 05 - Desenvolvendo a API GetPresence](05-session.md)**                      | Nessa sessão, vamos desenvolver a API que irá retornar o status de presença do usuário. Para isso, vamos utilizar o Client do Microsoft Graph.                    |
| **[Sessão 06 - Alterando a Página Reminder](06-session.md)**                          | Nessa sessão, vamos alterar a página `reminder.tsx` para que ela possa consumir a API que criamos anteriormente.                                                  |
| **[Sessão 07 - Criando o arquivo de Interface para JWT](07-session.md)**              | Nessa sessão, vamos criar o arquivo de interface para o JWT. Esse arquivo é necessário para que o TypeScript saiba como interpretar o JWT que o NextAuth retorna. |
| **[Sessão 08 - Próximos Passos e Conclusão](08-session.md)**                          | E, finalmente quais são os próximos passos e alguns recursos e cursos gratuitos sobre Microsoft Graph!                                                            |


**[Próximo: Sessão 02 ➡️](./02-session.md)**





