# Criando uma Aplicação no Azure Active Directory

Antes de começar a desenvolver a aplicação, precisamos criar uma aplicação no Azure AD. Para isso, vamos acessar o portal do Azure e clicar em **Azure Active Directory**.

Esperamos que nesse momento você já tenha criado uma conta no Microsoft 365 Developer Program. Caso não tenha, você pode assistir esse vídeo **[AQUI](https://www.youtube.com/watch?v=JvWLgirC8xs)**. Pois explica direitinho como criar a conta.

Vamos ao passo ao passo!

## Passo a Passo

1. Acessar o **[Portal do Azure](https://portal.azure.com/)** e clicar em **Azure Active Directory**.

![image-01](./../../workshop-images/images-demo-01/image-01.png)

2. Clicar em **App registrations**.

![image-02](./../../workshop-images/images-demo-01/image-02.png)

3. Clicar em **New registration**.

![image-03](./../../workshop-images/images-demo-01/image-03.png)

4. Preencher os campos conforme a imagem abaixo:

![image-04](./../../workshop-images/images-demo-01/image-04.png)

5. Clicar em **Register**.

6. Vá em **Overview** e copie o:
   
- **Application (client) ID**
- **Directory (tenant) ID**

![image-05](./../../workshop-images/images-demo-01/image-05.png)

Precisaremos desses dados para configurar a aplicação no `env.local`.

## Configurando a Aplicação

7. Vá em **Certificates & secrets** e clique em **New client secret**.

![image-06](./../../workshop-images/images-demo-01/image-06.png)

8. Preencha o campo **Description** e clique em **Add**.

![image-07](./../../workshop-images/images-demo-01/image-07.png)

9. Copie o **Value** do **Client secret**.

![image-08](./../../workshop-images/images-demo-01/image-08.png)

> **Observação**: Não perca esse valor, pois não será possível recuperá-lo posteriormente. Se você perder, você precisará criar um novo.

10. Vá em **API permissions** e clique em **Add a permission**.

![image-09](./../../workshop-images/images-demo-01/image-09.png)

11. Selecione **Microsoft Graph** e clique em **Delegated permissions**.

![image-10](https://github.com/glaucia86/msgraph-nextjs-workshops/blob/main/workshops/workshop-images/images-demo-01/image-10.PNG)

1.  Selecione as seguintes permissões:

- **email**
- **offline_access**
- **openid**
- **Presence.Read**
- **profile**

![image-11](./../../workshop-images/images-demo-01/image-11.png)

![image-12](./../../workshop-images/images-demo-01/image-12.png)

13. Clique em **Add permissions**.

14. Clique novamente em **Add a permission**.

15. Selecione **Microsoft Graph** e clique em **Application permissions**.

![image-13](./../../workshop-images/images-demo-01/image-13.png)

16. Selecione as seguintes permissões:

- **Presence.ReadWrite.All**

17. Clique em **Add permissions**.

![image-14](./../../workshop-images/images-demo-01/image-14.png)

18. Clique em **Grant admin consent for** e selecione **Yes**.

![image-15](./../../workshop-images/images-demo-01/image-15.png)

Parabéns! Você criou uma aplicação no Azure AD e configurou as permissões necessárias para a aplicação.

Agora, vamos para o próximo passo.


**[⬅️ Voltar: Intro](./01-intro.md)**
| **[➡️ Próximo: Sessão #3](./03-session.md)**