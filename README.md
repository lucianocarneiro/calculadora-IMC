# Projeto MVP - Calculadora de IMC

## Descrição

Este projeto é um MVP (Produto Mínimo Viável) para uma aplicação front-end desenvolvida com React, que calcula o Índice de Massa Corporal (IMC) do usuário. O objetivo é explorar conceitos básicos de desenvolvimento front-end, componentização, uso de hooks e navegação entre páginas utilizando React Router, além da persistência de dados no `localStorage`.  

A aplicação possui três páginas principais:
- **Home**: Página inicial com botão para acessar a calculadora.
- **Calculadora**: Formulário para cálculo do IMC, validação dos campos, armazenamento dos dados no `localStorage`.
- **Resultado**: Exibição do resultado do IMC calculado e sua classificação.
- **ResultadoListas**: Lista de resultados carregados a partir de um arquivo JSON externo.
- **NotFound**: Página 404 para rotas inexistentes.

---

## Tecnologias utilizadas

- React.js
- React Router Dom
- Hooks: `useState`, `useEffect`, `useNavigate`
- CSS para estilização responsiva
- LocalStorage para persistência de dados
- Fetch API para consumo de arquivo JSON externo
- Ambiente de execução: Node.js com Vite

---

## Prototipação (FIGMA)
Toda prototipação desse MVP foi realizado no figma, onde evidenciamos de forma básica como seria o front end do sistema e sua funcionalidade básica, para acessar basta clicar no link a seguir:

[Clique aqui para acessar o protótipo](https://www.figma.com/proto/W5pocuFdaAbsRyizAfeGjq/mv2-imc?node-id=29-63&t=RWLEepEk2Sj7E9Oq-1&scaling=min-zoom&content-scaling=fixed&page-id=29%3A62&starting-point-node-id=29%3A63)

---

## Estrutura do Projeto

    ```bash
    ├── public/
    │ └── resultados.json # Arquivo JSON usado para carregar resultados na lista
    ├── src/
    │ ├── components/
    │ │ ├── ButtonReturn.jsx
    │ │ ├── ButtonCalculadora.jsx
    │ │ ├── ButtonResultadoLista.jsx
    │ │ ├── Footer.jsx
    │ │ ├── Calculadora.jsx
    │ │ ├── Resultado.jsx
    │ │ ├── ResultadoListas.jsx
    │ │ ├── Home.jsx
    │ │ ├── NotFound.jsx
    │ │ ├── Routes.jsx
    │ ├── App.jsx
    │ ├── main.jsx
    │ ├── index.css # Estilos gerais
    │ ├── App.css # Estilos específicos do app
    │ └── vite.config.js # Configuração do Vite
    ├── .gitignore
    ├── package.json
    ├── README.md
    └── ...

---

## Como rodar o projeto localmente

### Pré-requisitos

- Node.js instalado (recomendado a versão mais recente LTS)
- NPM ou Yarn para gerenciar pacotes
- Editor de código (ex: Visual Studio Code)

### Passo a passo para iniciar o servidor Vite

1. Clone o repositório:
    ```bash
    git clone https://github.com/lucianocarneiro/calculadora-IMC.git
    cd calculadora-IMC

2. Instale as dependências:

    ```bash
    npm install
    # ou
    yarn install

    3. Inicie o servidor de desenvolvimento Vite:

    ```bash
    npm run dev
    # ou
    yarn dev

4. Abra o navegador e acesse:

Caso sua ferramenta não abra automaticamente o navegador após executar o comando "npm run dev", você pode copiar o link http://localhost:5173 e executar no seu navegador.

### Componentização

- Componentes reutilizáveis criados para botões (`ButtonReturn`, `ButtonCalculadora`, `ButtonResultadoLista`) e rodapé (`Footer`).
- Página calculadora com formulário para entrada dos dados do usuário com validação simples.
- Página resultado que exibe o IMC calculado e classificação.
- Página de lista que carrega resultados de um arquivo JSON externo e exibe cards estilizados.
- Navegação implementada com React Router, incluindo página 404 para rotas inválidas.

### Validação e armazenamento

- O formulário da calculadora valida se os campos estão preenchidos e com valores numéricos válidos.
- Os dados são armazenados e recuperados do `localStorage` para persistência simples.
- O usuário é redirecionado à página de resultado após o cálculo.

### Navegação e Hooks

- Uso dos hooks `useState`, `useEffect` e `useNavigate` do React Router.
- Implementação da navegação entre as páginas via React Router.
- Página 404 para rotas inexistentes.
- Botões para navegação programática e voltar páginas.

### Consumo de dados externos

- A página `ResultadoListas.jsx` faz fetch em um arquivo JSON (`resultados.json`) hospedado localmente para exibir uma lista de resultados.
- Trata erros na requisição com mensagens amigáveis.

### Usabilidade

- Feedbacks visuais de carregamento, erros e resultados.
- Animações suaves para entrada dos cards.
- Layout responsivo para desktop, tablets e dispositivos móveis.
- Botões e inputs com efeitos de foco e hover para melhor experiência.
- Mensagens condicionais no formulário e carregamento da lista.

### API externa utilizada

- Para o MVP, o consumo de dados é feito a partir do arquivo JSON `resultados.json` localizado na pasta `public`.
- Não há integração com APIs públicas externas.

### Pontos de melhoria
- Criar uma tela de login para o usuário fazer seu cadastro.
- Conectar o back end com o front and para armazenar as informações necessárias.
- Aprimorar as mensagens de erro e informativo das telas.


### Autor

- Luciano Carneiro
- Pós-graduação Full Stack - PUC-RIO
