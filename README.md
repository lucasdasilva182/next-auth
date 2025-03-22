
# **Next Auth Toolkit 🔐**

Este projeto é um sistema completo de autenticação construído com **Next.js**, **Prisma** e **PostgreSQL**, seguindo as práticas mais recentes do **Next Auth v5 (Auth.js)**.

### Funcionalidades

✅ **Autenticação com credenciais** (e-mail e senha)  

✅ **Login via OAuth** (Google e GitHub)  

✅ **Autenticação de dois fatores (2FA)**  

✅ **Recuperação de senha**  

✅ **Verificação de e-mail**  

✅ **Gerenciamento seguro de sessões**

<br/>
  
<p  align="center">

<img  alt="Next Auth"  src="https://equivalent-apricot-peafowl.myfilebase.com/ipfs/QmYFaCUTfiWHek3uwJFMysXmw2CgkJJTYzrHeZW5fmW2YK"  width="600px">

</p>

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

-   **Next.js** → Framework para React com renderização híbrida
    
-   **Next Auth v5 (Auth.js)** → Biblioteca moderna de autenticação
    
-   **Prisma** → ORM para banco de dados
    
-   **PostgreSQL** → Banco de dados relacional
    
-   **TypeScript** → Tipagem estática para maior segurança no código

  ## **Como Executar o Projeto**

### **Pré-requisitos**

- Node.js instalado
- PostgreSQL configurado

1. Clone o repositório:
   ```bash
   git clone https://github.com/lucasdasilva182/next-auth.git
   ```

2. Instale as dependências:
   ```bash
   cd barberApp
   npm install
   ```

3. Configure as variáveis de ambiente:
   - Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis:
     ```
     DATABASE_URL=postgresql://{user}:{password}@localhost:5432
     AUTH_SECRET=
     GITHUB_CLIENT_ID=
     GITHUB_CLIENT_SECRET=
     GOOGLE_CLIENT_ID=
     GOOGLE_CLIENT_SECRET= 
     RESEND_API_KEY=
     NEXT_PUBLIC_APP_URL=http://localhost:3000
     ```
     
4. Execute as migrações do banco de dados:
   ```bash
   npx prisma migrate dev
   ```

6. Inicie o servidor:
   ```bash
   npm run dev
   ```
7. O projeto estará rodando em `http://localhost:3000`.



## :memo: Licença

Esse projeto está sob a licença MIT.

---
Este projeto é ideal para quem deseja aprender ou implementar um sistema de autenticação seguro e moderno no **Next.js**. 🚀💡
 
