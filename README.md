## Netshoes App

Para iniciar esse projeto, você precisa de um gerenciador de pacotes (Nesse projeto, todos os scripts são executados através do bun). Então garanta que você tenha o bun instalado.

Depois de instalar o bun, instale as dependências através dos dois comandos abaixo:

```bash
bun install
bun install:all
```

Depois de instalar as dependências, você pode iniciar o projeto com o comando:

```bash
bun run dev
```

O backend vai estar disponível em `http://localhost:3333`.

O frontend vai estar disponível em `http://localhost:3000`.

---

Para fazer o build do projeto, você pode usar o comando abaixo:

**Atenção: É importante manter o backend rodando para que o build do frontend funcione.**

```bash
bun run build
```

---

Depois de fazer o build, você pode iniciar o projeto com o comando abaixo:

```bash
bun run start
```

O backend vai estar disponível em `http://localhost:3333`.

O frontend vai estar disponível em `http://localhost:4173`.

---

Para fazer os testes no backend, você pode usar o comando:

```bash
bun run test
```

---

Para verificar se o código está formatado corretamente, via biome, você pode usar o comando:

```bash
bun run lint:check
```

Para formatar o código, via biome, você pode usar o comando:

```bash
bun run lint:fix
```
