# migueloliveira.com.br

Portfolio pessoal construído com **Next.js 16**, **React 19** com **React Compiler** e **Tailwind CSS 4**.

## Desenvolvimento

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build
```

## Editando o conteúdo

Todo o conteúdo (nome, bio, habilidades, projetos, experiência e contatos) fica em
[`src/data/profile.ts`](src/data/profile.ts).

## Estrutura

- `src/app/` — layout, página inicial, 404, `sitemap.xml` e `robots.txt`
- `src/components/` — header com menu mobile, alternador de tema e seção
- `src/data/profile.ts` — dados do portfolio
