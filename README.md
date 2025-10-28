# 🚀 Guia Essencial de Git: Conceitos e Padrões

Este é um resumo dos conceitos e padrões de nomenclatura para **Commit**, **Branch** e **Pull Request (PR)**, visando um histórico de código claro e colaborativo.

---

## 💡 1. Os 3 Pilares do Git

| Conceito | Emoji | Definição |
| :--- | :--- | :--- |
| 🧩 **Commit** | 💾 | **Salva uma mudança** no histórico. **Requer** uma mensagem clara e descritiva. |
| 🌿 **Branch** | 🌱 | Uma **linha de desenvolvimento isolada**. Permite trabalhar em recursos sem impactar o código principal (`develop`, `production`). |
| 🔄 **Pull Request** | 🤝 | Uma **solicitação formal para mesclar** mudanças de uma branch para outra. É o ponto de **revisão de código** e validação. |

> 🔑 **Por que PRs são vitais?** Eles garantem a **revisão colaborativa**, previnem a entrada de código com erros na linha principal e documentam decisões.

---

## 🍴 2. Fork: O Repositório Pessoal

Quando você não tem permissão de escrita direta no repositório principal, é necessário criar um **Fork**.

* **O que é um Fork?** É uma **cópia independente** do repositório original para a **sua conta** na plataforma (ex: GitHub).
* **Propósito:** Ele permite que você faça todas as suas alterações (commits e branches) em um ambiente seguro, sem afetar o projeto principal.
* **Fluxo:** Você forka o repositório, trabalha nas suas branches e, ao finalizar, abre um Pull Request do seu Fork para o repositório original.

### 📌 Regra de Ouro para PRs

> 🚨 **ABRA O PULL REQUEST SOMENTE QUANDO O TRABALHO ESTIVER CONCLUÍDO E PRONTO PARA REVISÃO.**

Mantenha suas alterações no seu Fork até que a feature ou correção esteja completa, testada localmente e as mensagens de commit estejam limpas e padronizadas.

---

## 🏷️ 3. Padrões de Nomenclatura

A padronização é crucial para automatizar ferramentas e entender o histórico rapidamente.

### 📝 Padrão de Commits

Formato: `tipo: descrição da mudança` (ex: `feat: created header component`).

| Tipo | Emoji | Significado | Exemplo |
| :--- | :--- | :--- | :--- |
| **`feat:`** | 🚀 | Nova **feature** ou adição. | `feat: added user profile page` |
| **`fix:`** | 🧰 | **Correção** de bugs e erros. | `fix: resolved values on header` |
| **`docs:`** | 📘 | Mudanças na **documentação** (`README.md`). | `docs: updated contribution guide` |
| **`refactor:`** | 🧱 | Reestruturação que **não corrige bug** nem adiciona feature. | `refactor: simplified auth logic` |
| **`chore:`** | ⚙️ | Mudanças **estruturais** (atualização de pacotes). | `chore: updated all dependencies` |
| **`assets:`** | 🖼️ | Adição de arquivos **estáticos** (imagens, ícones). | `assets: added new background image` |
| **`wip:`** | 🚧 | *Work In Progress* — código **incompleto**. | `wip: creating new login flow` |

---

### 🌿 Padrão de Branches

Use **camelCase**. Formato: `tipo/nomeDaBranch`.

| Tipo | Foco | Exemplo (camelCase) |
| :--- | :--- | :--- |
| `feat/` | Criação de **novas features**. | `feat/createdRack1Header` |
| `fix/` | **Correção** de bugs. | `fix/headerComponentAlignment` |
| `chore/` | Mudanças **estruturais**. | `chore/updatedDependencies` |
| `refactor/` | **Refatoração** de código. | `refactor/apiConnection` |

### 🔄 Padrão de Pull Requests (PRs)

Use o tipo entre **colchetes `[ ]`** e o nome em **Title Case**.

| Tipo | Foco | Exemplo (Title Case) |
| :--- | :--- | :--- |
| `[FEAT]` | Nova feature **completa**. | `[FEAT] Created RACK 1 Page` |
| `[FIX]` | **Correção** significante. | `[FIX] User Login Issue` |
| `[REFACTOR]` | Refatoração. | `[REFACTOR] Global Styles` |

---

## 🗺️ 4. Fluxo de Integração (Git Flow Básico)

⚠️ **REGRA DE OURO:** Nunca faça commit direto nas branches principais (`develop`, `production`).

### 🔹 Branches de Trabalho (`feat/`, `fix/`, etc.)
* São branches **temporárias** derivadas de `develop`.
* O trabalho individual é feito aqui.
* Após o *merge* para `develop`, elas **devem ser deletadas**.

### 🔹 `develop` (Integração)
* É a branch onde o código em desenvolvimento é **reunido e testado**.
* Recebe *merge* das branches de *feature* após aprovação do PR.

### 🔹 `production` (Estável)
* Contém o código **finalizado e estável**, pronto para *deploy* no ambiente real.
* **Só recebe *merge* da `develop`** quando o código está validado e liberado para release.

### ⚙️ O Fluxo

```mermaid
graph LR
    A[feat/minha-feature] --> B(Pull Request);
    B --> C(develop);
    C --> D(production);