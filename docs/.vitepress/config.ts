import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'en-US',
  title: 'VitePress',
  description: 'Vite & Vue powered static site generator.',

  themeConfig: {
    nav: [
      { text: 'Voltar', link: '/index' },

      // {
      //   text: 'Dropdown Menu',
      //   items: [
      //     { text: 'Item A', link: '/item-1' },
      //     { text: 'Item B', link: '/item-2' },
      //     { text: 'Item C', link: '/item-3' },
      //   ],
      // },

      // ...
    ],

    sidebar: [
      {
        // text: 'Guide',
        items: [
          { text: 'Introdução', link: '/1' },
          { text: 'Descrição do Projeto', link: '/2' },
          { text: 'Recursos', link: '/3' },
          { text: 'Casos de Uso', link: '/4' },
          { text: 'Diagrama de Classes', link: '/5' },
          { text: 'Telas', link: '/6' },
          { text: 'Cronograma', link: '/7' },
          { text: 'Riscos', link: '/8' },
          { text: 'Orçamento', link: '/9' },
          { text: 'Considerações Finais', link: '/10' },
          // ...
        ],
      },
    ],
  },
});
