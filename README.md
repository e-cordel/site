# e-cordel

Site institucional e Wiki do [e-cordel](https://www.ecordel.com.br), um projeto voluntário que preserva e divulga a literatura de cordel em formato digital.

O site é estático, construído com [Docusaurus](https://docusaurus.io/) e publicado por FTPS. A plataforma de leitura de cordéis continua disponível em [ler.ecordel.com.br](https://ler.ecordel.com.br/).

## Requisitos

- Node.js 22 ou posterior
- npm

## Desenvolvimento

```sh
npm install
npm start
```

O servidor local abre em `http://localhost:3000`. Para gerar uma versão de produção e verificar links/conteúdo:

```sh
npm run typecheck
npm run build
npm run serve
```

## Conteúdo e ativos

- Páginas institucionais: `src/pages/`
- Wiki: `docs/`
- Ordem e categorias da Wiki: `sidebars.ts`
- Imagens, ícones e documentos migrados: `static/img/media/`
- Configuração de SEO, navegação, sitemap e pesquisa local: `docusaurus.config.ts`

Ao adicionar uma página, use Markdown/MDX, mantenha texto alternativo para imagens significativas e prefira ativos locais em `static/img/media/`. As rotas históricas foram preservadas; não as altere sem adicionar o redirecionamento correspondente no host.

## Publicação

`.github/workflows/deploy.yml` executa em pushes para `main` e manualmente por `workflow_dispatch`. O fluxo instala dependências com `npm ci`, constrói `build/` e envia apenas esse diretório por **FTPS** para `/public_html/`.

Configure estes segredos no repositório antes da primeira publicação:

| Segredo | Descrição |
| --- | --- |
| `FTPS_SERVER` | Hostname do servidor FTPS |
| `FTPS_USERNAME` | Usuário FTPS |
| `FTPS_PASSWORD` | Senha FTPS |
| `FTPS_PORT` | Porta FTPS opcional; usa `21` quando ausente |

Nunca adicione essas credenciais a arquivos versionados, variáveis públicas do Docusaurus ou logs de CI.
