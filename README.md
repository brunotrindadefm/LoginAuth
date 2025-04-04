Sistema de Autenticação JWT com Stack Moderna
Frontend: Desenvolvido em React 18 com TypeScript, utilizando:

SASS/SCSS para estilização modular e variáveis CSS

React Hook Form + Yup para validação de formulários

Axios para requisições HTTP com interceptors

React Router 6 com rotas protegidas e navegação programática

Context API para gerenciamento de estado de autenticação

LocalStorage para persistência do token JWT

Responsividade com media queries

Backend: API RESTful em Java 17+ com Spring Boot 3, contendo:

Autenticação stateless com JWT (Spring Security + JJWT)

Endpoints REST para login/registro com validação Bean Validation

Configuração CORS personalizada

Tratamento de erros global com @ControllerAdvice

Armazenamento seguro de senhas com BCrypt

Integração com banco de dados (PostgreSQL/MySQL) via Spring Data JPA

Diferenciais Técnicos:
✔️ Proteção contra CSRF e XSS
✔️ Tokens JWT com expiration time e refresh token opcional
✔️ Validação em tempo real no frontend
✔️ Feedback visual com toasts/react-hot-toast
✔️ Deploy containerizado (Docker)
✔️ Variáveis de ambiente segregadas (Vite)

Fluxo Completo:

Usuário preenche formulário com validação em tempo real

Requisição assíncrona para API Spring Boot

Backend valida credenciais e retorna token JWT assinado

Frontend armazena token e atualiza estado global

Rotas protegidas verificam autenticação antes do acesso

Logout remove token e limpa estado
