# wc26

Monorepo Kotlin + Spring Boot com `wc26-api`, `wc26-core`, `shared-libs`, frontend Next.js + Expo dentro de `wc26/` e `shared-front` no root, organizado com Speckit em `specs/`.

## Estrutura

- `wc26/wc26-api` - aplicação Spring Boot
- `wc26/wc26-core` - biblioteca Kotlin do domínio
- `wc26/wc26-web` - aplicação Next.js do domínio `wc26`
- `wc26/wc26-mobile` - aplicação Expo do domínio `wc26`
- `wc26/wc26-ui` - UI compartilhada entre web e mobile do domínio `wc26`
- `shared-libs` - biblioteca compartilhada na raiz
- `shared-front` - componentes compartilhados entre vários frontends
- `specs/` - specs, planos e tarefas por feature

## Convenções

- Execute tudo com `./gradlew`
- O projeto usa Kotlin DSL, version catalog e Java toolchain 25
- Toda mudança de comportamento deve começar em `specs/`
