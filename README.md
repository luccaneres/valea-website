# Landing page - VALEA Engenharia

Site estático em HTML, CSS e JavaScript, pronto para publicar em Cloudflare Pages, Netlify, Vercel ou GitHub Pages.

## Estrutura

- `index.html`: conteúdo da landing page.
- `styles.css`: identidade visual, responsividade e animações.
- `script.js`: menu mobile, animações de entrada, contadores, troca dinâmica de serviços, galeria e formulário que abre WhatsApp.
- `assets/`: imagens extraídas do material institucional e logos.

## Como testar localmente

No terminal, dentro desta pasta:

```bash
python3 -m http.server 8000
```

Depois acesse:

```text
http://localhost:8000
```

## Como publicar gratuitamente no Cloudflare Pages

1. Suba esta pasta para um repositório GitHub.
2. Acesse Cloudflare Pages.
3. Crie um projeto conectado ao repositório.
4. Framework preset: `None`.
5. Build command: deixe vazio.
6. Output directory: `/` ou deixe padrão.
7. Publique.
8. Em `Custom domains`, adicione o domínio da empresa.

## Contatos configurados

- WhatsApp: (45) 98433-2230
- E-mail: valeaengenharia@gmail.com
- Instagram: @valeaengenharia_pericia

## Observação

O formulário é estático e não grava dados. Ao clicar em “Enviar pelo WhatsApp”, ele monta uma mensagem e abre o WhatsApp com o texto preenchido.
