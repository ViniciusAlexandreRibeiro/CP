# 🎬 StreamCat - Mini Catálogo de Filmes e Séries

![React](https://img.shields.io/badge/React-18.2.0-blue?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.0-blue?logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-7.1.10-purple?logo=vite)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?logo=javascript)

## 📋 Informações Acadêmicas

**Aluno:** Vinicius Alexandre Aureliano Ribeiro  
**RM:** 561606  
**Disciplina:** WebDev 
**Instituição:** Fiap  
---

## 📖 Sobre o Projeto

O **StreamCat** é um aplicativo web completo desenvolvido em React com Tailwind CSS que simula uma plataforma de streaming moderna. O projeto apresenta um catálogo interativo de filmes e séries com navegação intuitiva, sistema de busca e gerenciamento de favoritos.

### 🎯 Objetivos de Aprendizado

- Implementar componentes React funcionais com hooks
- Aplicar conceitos de estado e ciclo de vida de componentes
- Desenvolver interfaces responsivas com Tailwind CSS
- Criar uma experiência de usuário moderna e intuitiva
- Simular integração com APIs externas
- Implementar padrões de design contemporâneos

---

## ✨ Funcionalidades

### 🔍 **Sistema de Navegação**
- **4 Páginas Principais:** Início, Filmes, Séries, Favoritos
- **Navegação Responsiva:** Menu desktop e dropdown mobile
- **Filtros Dinâmicos:** Conteúdo filtrado por categoria

### 🔎 **Busca Inteligente**
- **Busca em Tempo Real:** Filtro instantâneo por título
- **Interface Limpa:** Barra de busca integrada no header
- **Feedback Visual:** Contador de resultados encontrados

### ❤️ **Sistema de Favoritos**
- **Adicionar/Remover:** Toggle de favoritos por item
- **Persistência Visual:** Estado mantido durante navegação
- **Página Dedicada:** Visualização exclusiva dos favoritos

### 🖼️ **Galeria Visual**
- **Capas Originais:** Pôsteres oficiais via TMDB API
- **Lazy Loading:** Carregamento otimizado de imagens
- **Fallback System:** Placeholder automático para erros
- **Hover Effects:** Animações suaves e interativas

---

## 🏗️ Arquitetura do Projeto

### 📁 **Estrutura de Componentes**

```
src/
├── App.jsx                 # Componente principal
├── index.css              # Estilos globais + Tailwind
└── main.jsx               # Entry point da aplicação
```

### ⚛️ **Componentes React**

#### **1. App (Componente Principal)**
- **Estado Global:** Gerenciamento de filmes, busca, página atual
- **Hooks Utilizados:** `useState`, `useEffect`
- **Responsabilidades:** Lógica de negócio, filtros, navegação

#### **2. Header**
- **Props:** `currentPage`, `setCurrentPage`, `searchTerm`, `setSearchTerm`
- **Funcionalidades:** Navegação, busca, logo, responsividade
- **Design:** Fixed header com backdrop blur

#### **3. MovieCard**
- **Props:** `movie`, `onToggleFavorite`
- **Features:** Hover effects, rating, badges, sistema de favoritos
- **Estados:** `imageLoaded`, `imageError` para otimização

#### **4. MovieList**
- **Props:** `movies`, `onToggleFavorite`, `isLoading`
- **Layout:** Grid responsivo (1-5 colunas)
- **Estados:** Loading, empty state, grid populated

---

## 🎨 Design System

### 🌈 **Paleta de Cores (Tailwind)**
```css
pastel-blue: '#E8F4F8'      /* Azul suave */
pastel-lavender: '#F0E6FF'  /* Lavanda */
pastel-beige: '#F5F1E8'     /* Beige quente */
pastel-gray: '#F0F0F2'      /* Cinza claro */
pastel-dark: '#2D2B3A'      /* Escuro principal */
pastel-purple: '#B19CD9'    /* Roxo pastel */
pastel-mint: '#D4F1E8'      /* Verde menta */
pastel-peach: '#FFE5D9'     /* Pêssego */
```

### 📱 **Responsividade**
```css
sm: 640px   /* 2 colunas */
md: 768px   /* 3 colunas + nav desktop */
lg: 1024px  /* 4 colunas */
xl: 1280px  /* 5 colunas */
```

### 🎯 **Elementos de Design**
- **Bordas:** `rounded-xl` (12px) ou superior
- **Sombras:** Suaves com `shadow-lg` e `hover:shadow-2xl`
- **Transições:** `duration-200` a `duration-500`
- **Gradientes:** Múltiplos gradientes sutis
- **Backdrop Blur:** Efeitos de profundidade modernos

---

## 🛠️ Tecnologias Utilizadas

### **Frontend**
- **React 18.2.0** - Biblioteca principal
- **JavaScript ES6+** - Linguagem de programação
- **Vite 7.1.10** - Build tool e dev server
- **HTML5** - Estrutura semântica

### **Estilização**
- **Tailwind CSS 3.4.0** - Framework CSS utility-first
- **PostCSS** - Processamento CSS
- **Autoprefixer** - Compatibilidade cross-browser

### **APIs e Recursos**
- **TMDB API** - The Movie Database (imagens dos filmes)
- **Placeholder APIs** - Sistema de fallback
- **SVG Icons** - Ícones customizados inline

---

## ⚙️ Como Executar o Projeto

### **📋 Pré-requisitos**
- **Node.js** (versão 16 ou superior)
- **npm** ou **yarn**

### **🚀 Passo a Passo**

#### **1. Clone o Repositório**

#### **2. Instale as Dependências**

#### **3. Execute o Projeto**

#### **4. Acesse no Navegador**

---

## 📝 Conclusão

O projeto **StreamCat** demonstra a aplicação prática de conceitos fundamentais do desenvolvimento React moderno, combinando uma interface atraente com funcionalidades robustas. O uso do Tailwind CSS proporcionou um desenvolvimento ágil e consistente, enquanto a arquitetura componentizada do React garantiu código reutilizável e maintível.

---

## 👨‍💻 Desenvolvedor

**Vinicius Alexandre Aureliano Ribeiro**  
RM: 561606  

---