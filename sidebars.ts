import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  wikiSidebar: [
    {
      type: 'category',
      label: 'Publicação de cordéis',
      items: ['como-publicar-cordeis', 'revisao-de-cordeis'],
    },
    {
      type: 'category',
      label: 'Tecnologia',
      items: ['infraestrutura-e-arquitetura', 'backup-site', 'adicionar-usuario'],
    },
  ],
};

export default sidebars;
