# Portfolio de Designer

Um site moderno e elegante para designers apresentarem seus trabalhos e serviços, com efeitos 3D e animações.

![Designer Portfolio](https://via.placeholder.com/1200x630/121212/FFFFFF?text=Designer+Portfolio)

## Tecnologias Utilizadas

- React 19
- TypeScript
- Tailwind CSS 3.4.1
- Framer Motion
- React Three Fiber / Drei
- React Router DOM

## Características

- Design moderno e minimalista
- Efeitos 3D interativos
- Animações suaves
- Layout totalmente responsivo
- Filtro de projetos por categoria
- Formulário de contato
- Indicador de página atual no menu
- Otimizado para SEO

## Páginas

- **Home**: Apresentação do designer com projetos em destaque, serviços e depoimentos
- **Projetos**: Galeria de projetos com filtro por categoria
- **Serviços**: Descrição detalhada dos serviços oferecidos, processo de trabalho e FAQ
- **Sobre**: Informações sobre o designer, habilidades, experiência e educação
- **Contato**: Formulário de contato e informações de contato

## Estrutura do Projeto

```
src/
├── components/
│   ├── 3d/           # Componentes 3D
│   ├── layout/       # Componentes de layout (Header, Footer)
│   └── ui/           # Componentes de UI reutilizáveis
├── context/          # Contextos React
├── hooks/            # Hooks personalizados
├── pages/            # Páginas da aplicação
├── types/            # Tipos TypeScript
└── utils/            # Funções utilitárias e dados
```

## Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/designer-portfolio.git
cd designer-portfolio
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

4. Acesse o site em `http://localhost:5173`

## Personalização

### Projetos

Para adicionar ou modificar projetos, edite o arquivo `src/utils/data.ts`. Cada projeto deve seguir a estrutura:

```typescript
{
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  image: string;
  technologies?: string[];
  featured?: boolean;
}
```

### Serviços

Para modificar os serviços oferecidos, edite o array `services` no arquivo `src/utils/data.ts`:

```typescript
{
  id: string;
  title: string;
  description: string;
  icon: string;
}
```

### Sobre

Para personalizar as informações da página Sobre, edite o arquivo `src/pages/AboutPage.tsx` com seus dados de habilidades, experiência e educação.

### Imagens

Substitua as imagens placeholder na pasta `public/` por suas próprias imagens. Recomendamos:

- Projetos: 800x600px
- Depoimentos: 100x100px (quadradas)
- Foto de perfil: 600x600px (quadrada)

### Cores e Estilos

As cores e estilos principais podem ser modificados no arquivo `tailwind.config.js`.

## Build para Produção

Para gerar a versão de produção:

```bash
npm run build
```

Os arquivos serão gerados na pasta `dist/`.

## Licença

MIT
