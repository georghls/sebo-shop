# 📚 Alfarrábio — Sebo Digital

Uma landing page moderna, minimalista e com forte personalidade vintage para o **Alfarrábio**, um e-commerce especializado na compra, venda e troca de livros usados, raridades e edições colecionáveis.

![Alfarrábio Banner](./public/assets/grande-sertao-veredas.jpg)

---

## 🏛️ Sobre o Projeto

O projeto foi construído com a proposta de transformar a experiência de navegação em sebos tradicionais em uma plataforma digital elegante e acolhedora. 

A palavra **Alfarrábio** remete aos livros antigos e preciosos guardados pelo tempo. A interface homenageia esse universo combinando a estética de fichas de catálogo de biblioteca, carimbos clássicos e tipografia serifada sofisticada.

---

## ✨ Funcionalidades e Destaques

- 📜 **Hero com Ficha de Biblioteca**: Apresentação visual inspirada nas fichas catalográficas tradicionais, acompanhada pelo carimbo animado *"Acervo Aberto"*.
- 📌 **Header Fixo com Rolagem Suave**: Menu suspenso fixo no topo com efeito de desfoque (*glassmorphism*) e animação de rolagem suave (*smooth scroll*) para todas as seções.
- 🏷️ **Carimbos por Categoria**: Visualização dinâmica de categorias (*Literatura Brasileira*, *Raridades*, *Poesia*, *Ficção*) com efeito de rotação e hover.
- 📖 **Vitrine de Recém-chegados**: Exibição de exemplares clássicos com capas originais em alta definição, etiquetas de preço e estado de conservação (*Solaris*, *Dom Casmurro*, *A Rosa do Povo*, *Grande Sertão: Veredas*).
- 💬 **Depoimento de Leitor**: Seção dedicada à experiência e comunidade de bibliófilos.
- 🏛️ **Footer Completo**: Mapa do site completo, manifesto institucional, links úteis e redes sociais.

---

## 🛠️ Tecnologias Utilizadas

- **Framework**: [React 18](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Estilização**: **Vanilla CSS** (sem frameworks utilitários, utilizando Variáveis CSS e Flexbox/Grid nativos)
- **Tipografia**: [Google Fonts](https://fonts.google.com/)
  - `Fraunces` (Títulos e Logotipo)
  - `Source Serif 4` (Textos de leitura)
  - `IBM Plex Mono` (Fichas técnicas, preços e eyebrows)

---

## 📁 Estrutura de Pastas

```bash
sebo-shop/
├── public/
│   └── assets/              # Capas de livros e imagens estáticas
├── src/
│   ├── components/
│   │   ├── Header.jsx        # Menu de navegação fixo
│   │   ├── Hero.jsx          # Ficha catalográfica e CTA principal
│   │   ├── HowItWorks.jsx    # Passos de compra/venda
│   │   ├── Categories.jsx    # Tags de categoria em formato de carimbo
│   │   ├── FeaturedBooks.jsx # Grid de recém-chegados com capas
│   │   ├── Testimonial.jsx   # Citação/depoimento
│   │   └── Footer.jsx        # Rodapé completo
│   ├── App.jsx               # Orquestrador de componentes
│   ├── App.css               # Estilos dos componentes e layout
│   ├── index.css             # Variáveis globais e reset CSS
│   └── main.jsx              # Ponto de entrada do React
├── index.html                # Entry point da aplicação Vite
├── package.json
└── vite.config.js
```

---

## 🚀 Como Rodar o Projeto Localmente

### Pré-requisitos

- **Node.js** (versão 16 ou superior)
- **npm** ou **yarn**

### Passo a Passo

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/georghls/sebo-shop.git
   cd sebo-shop
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Execute o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

4. **Acesse no seu navegador:**
   ```text
   http://localhost:5173
   ```

---

## 📦 Build para Produção

Para gerar os arquivos otimizados de produção:

```bash
npm run build
```

Os arquivos compilados estarão disponíveis na pasta `dist/`.

---

## 👤 Autor

Desenvolvido por **George**  
GitHub: [@georghls](https://github.com/georghls)
