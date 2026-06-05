# ☎️ Lista de Ramais Corporativa

Sistema web desenvolvido para facilitar a consulta de ramais internos da organização.

A aplicação permite localizar rapidamente colaboradores, setores e contatos internos através de uma interface simples, moderna e integrada ao banco de dados corporativo.

---

## 📸 Preview

![Preview do Sistema](./front-end/imagens/preview.gif)

---

## ✨ Funcionalidades

- Consulta de ramais em tempo real
- Busca por colaborador
- Busca por setor
- Busca por número de ramal
- Interface moderna e responsiva
- Integração com banco de dados
- Atualização centralizada das informações

---

## 🏗️ Arquitetura

```text
Frontend
(HTML + CSS + JavaScript)
            │
            ▼
API REST
(Node.js + Express)
            │
            ▼
Prisma ORM
            │
            ▼
Banco de Dados
```

---

## 🛠️ Tecnologias Utilizadas

### Front-end

- HTML5
- CSS3
- JavaScript

### Back-end

- Node.js
- Express
- Prisma ORM

### Banco de Dados

- Banco de dados corporativo (MySQL)

---

## 📂 Estrutura do Projeto

```text
lista-ramais/
│
├── api/
│   ├── prisma/
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── front-end/
│   ├── index.html
│   ├── style.css
│   ├── buscaRamais.js
│   ├── carregaElementos.js
│   └── imagens/
│
└── README.md
```

---

## ⚙️ Instalação

### Clonar o repositório

```bash
git clone https://github.com/gustavodecristi/lista-ramais.git
```

### Entrar na pasta da API

```bash
cd lista-ramais/api
```

### Instalar dependências

```bash
npm install express prisma@6 @prisma/client@6 dotenv cors
```

### Configurar variáveis de ambiente

Crie um arquivo `.env`:

```env
DATABASE_URL=sua_string_de_conexao
```

### Iniciar a API

```bash
node server.js
```

---

## 🚀 Executando o Front-end

Abra o arquivo:

```text
front-end/index.html
```

ou utilize a extensão Live Server.

---

## 🔌 Endpoint Disponível

### Listagem de Ramais

```http
GET /dados
```

### Exemplo de Resposta

```json
[
  {
    "id": 1,
    "description": "Atendimento / João Silva"
  }
]
```

---

## 🔍 Como Funciona

A aplicação realiza consultas através de uma API REST desenvolvida em Node.js.

Os dados são obtidos diretamente do banco de dados e exibidos em uma interface amigável, permitindo pesquisas rápidas e eficientes.

---

## 🎯 Objetivo

Facilitar o acesso aos contatos internos da organização através de uma ferramenta rápida, intuitiva e integrada às informações corporativas.

---

## 👨‍💻 Autor

**Gustavo Bidoia**

Desenvolvedor Full Stack.

GitHub:
https://github.com/gustavodecristi
