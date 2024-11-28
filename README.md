# Interface com Next.js e Storybook

## 📋 **Objetivo da Tarefa**

Este projeto foi desenvolvido com os seguintes objetivos:
1. Criar uma interface de usuário baseada no design disponibilizado no [Figma](#).
2. Implementar e documentar todos os estados dos componentes utilizando **Storybook**.
3. Aplicar boas práticas de desenvolvimento, modularidade, reutilização de componentes e estilização eficiente.

---

## 🚀 **Tecnologias Utilizadas**

- **[Next.js](https://nextjs.org/):** Framework React para aplicações web modernas e otimizadas.
- **[Storybook](https://storybook.js.org/):** Ferramenta para desenvolvimento e documentação de componentes isolados.
- **[Tailwind CSS](https://tailwindcss.com/):** Biblioteca para estilização rápida e eficiente.
- **[TypeScript](https://www.typescriptlang.org/):** Para tipagem estática e maior confiabilidade no desenvolvimento.
-  **[Zod](https://zod.dev/):**  Biblioteca para validação de esquemas de dados, utilizada para garantir a conformidade de informações enviadas e manipuladas. 
- **[React Toastify](https://www.npmjs.com/package/react-toastify):** Biblioteca para exibição de notificações amigáveis e funcionais, integrada para melhorar a experiência do usuário.

---

## 🛠️ **Instalação e Execução do Projeto**

### **Pré-requisitos**
Certifique-se de ter instalado:
- Node.js (versão 16 ou superior)
- npm ou yarn

### **Passos para rodar o projeto**

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/eliriamirna/login-responsive-storybook
   cd login-responsive-storybook

2. **Instale as dependências**:
	```
	npm install
	ou
	yarn install
	```
3. **Execute o projeto localmente**:
	```
	npm run dev 
	ou
	yarn dev
	```
4. **Abra o Storybook**: Em outro terminal, execute:
	```
	npm run storybook
	ou
	yarn storybook
	```
	Acesse o Storybook em http://localhost:6006.
	
---
## 📚 **Componentes Documentados no Storybook**

-   **Button**: Botão com variações de tamanho, cor e estado de focus.
-   **ToastMessage**: Mensagem de notificação com título, descrição.
-   **Input**: Campo de entrada com suporte a estados de erro e succes e diferentes tamanhos.
-   **Heading**: Componente para título e subtítulo com variação de cor, tamanho de texto para desktop e mobile e peso da fonte.
-  **Text**: Componente para textos com variação de cor, tamanho de texto para e peso da fonte.

Todos os componentes foram desenvolvidos com foco em reutilização e estados documentados.

---

# ✨ **Como Avaliar**

-   Clone o projeto e execute localmente seguindo as instruções acima.
-   Verifique os componentes no Storybook (http://localhost:6006).
-   Explore a interface principal e compare com o design disponibilizado no Figma.
- Link Figma: [https://www.figma.com/design/QT4MBwQzsNBiDzZfIgirjQ/Teste-valePay?node-id=1-5440&t=xINcWgCiAe5hbcjW-1](https://www.figma.com/design/QT4MBwQzsNBiDzZfIgirjQ/Teste-valePay?node-id=1-5440&t=xINcWgCiAe5hbcjW-1)

---
## 📄 **Licença**

Este projeto está sob a licença MIT. Consulte o arquivo `LICENSE` para mais informações.