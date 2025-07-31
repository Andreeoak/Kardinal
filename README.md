
# 📌 Kanban Board (Vue 3 + TypeScript + TailwindCSS)

Um quadro Kanban interativo construído com **Vue 3**, **TypeScript**, **TailwindCSS** e **VueDraggable**, com suporte a:
- Criação, edição e exclusão de cards
- Modal com validação e seleção de prioridade (normal, alta, urgente)
- Filtro de cards por título ou descrição
- Identificação visual da prioridade via faixa colorida

---

## 🚀 Tecnologias Utilizadas

- [Vue 3](https://vuejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [VueDraggable](https://github.com/SortableJS/vue.draggable.next)
- [@vueuse/integrations](https://vueuse.org/integrations/useFocusTrap/)

---

## 📁 Estrutura de Pastas

```bash
src/
├── components/
│   ├── SignatureHeader.vue   # Cabeçalho com input de busca
│   └── ModalDialogue.vue     # Modal para criar/editar cards
├── types.ts                  # Interfaces TypeScript (Card, List)
│                
├── App.vue                   # Componente principal
└── main.ts                   # Ponto de entrada da aplicação
````

---

## 📦 Instalação e Execução

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/kanban-vue.git
cd kanban-vue
```

### 2. Instale as dependências

```bash
npm install
# ou
yarn install
```

### 3. Rode o projeto localmente

```bash
npm run dev
# ou
yarn dev
```

---

## 🔍 Funcionalidades

### ✅ Quadro Kanban

* 3 colunas: **To Do**, **In Progress**, **Done**
* Cards movíveis com `drag and drop`
* Apenas a coluna "To Do" permite criar novos cards

### 🔎 Filtro de Tarefas

* Campo de busca no cabeçalho
* Filtra dinamicamente cards por **título** ou **descrição**
* Mantém as colunas visíveis (ou pode ocultar se desejado)

### 📝 Modal de Criação/Edição

* Input obrigatório para título e descrição
* Dropdown para selecionar prioridade
* Validação com mensagens de erro inline

### 🎨 Priorização Visual

* Cards mostram uma **faixa colorida na lateral esquerda**:

  * 🟡 Normal → `border-yellow-300`
  * 🟠 Alta → `border-orange-400`
  * 🔴 Urgente → `border-red-500`

---

## 📄 Tipagem

```ts
// types/index.ts

export interface Card {
  id: number;
  title: string;
  description: string;
  priority?: 'normal' | 'high' | 'urgent';
}

export interface List {
  id: number;
  title: string;
  cards: Card[];
}
```

---

## ✅ Melhorias Futuras

* ✅ Permitir excluir cards
* ⏳ Persistência com localStorage ou backend
* ⏳ Seletores de cor personalizados
* ⏳ Exportar/importar board como JSON
* ⏳ Responsividade mobile aprimorada

---

## 🧪 Testes

> Nenhum teste automatizado ainda implementado.
> Sugestão: usar [Vitest](https://vitest.dev/) + [Vue Testing Library](https://testing-library.com/docs/vue-testing-library/intro/)

---

## 🧑‍💻 Autor

**@Andreeoak**
Desenvolvedor Full Stack com foco em Vue, PHP, C# e Python.

---

## 📄 Licença

MIT © 2025


