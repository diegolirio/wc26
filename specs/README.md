# Speckit

Este diretório organiza o desenvolvimento orientado a spec do monorepo `wc26`.

## Como usar

1. Escolha o domínio ou lib compartilhada afetado.
2. Crie uma pasta de feature a partir de `_templates/`.
3. Escreva `spec.md`, depois `plan.md` e `tasks.md`.
4. Implemente o código a partir da pasta da feature.

## Mapeamento para o código

- `specs/wc26/*` -> `:wc26:wc26-api` e `:wc26:wc26-core`
- `specs/shared-libs/*` -> `:shared-libs`
- `specs/_cross/*` -> mudanças transversais sem dono natural
