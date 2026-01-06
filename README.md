# 🖥️ Campus Datacenter Explorer

> Projeto acadêmico desenvolvido pela turma de **Redes de Computadores** para documentar e explorar a estrutura de racks de um datacenter do senai suiço-brasileira.  
> Cada rack possui sua própria página dedicada, com diagramas, documentação técnica e links úteis.

---

## 📌 Objetivo
O **Campus Datacenter Explorer** tem como meta:
- Organizar a documentação dos **6 servidores** do datacenter.
- Criar páginas independentes para cada rack (Rack1, Rack2, Rack3...).
- Facilitar a navegação entre serviços, documentação técnica e contatos.
- Servir como material de estudo e consulta para a turma.

---

## 📂 Estrutura de pastas do Projeto

```
       src/                             - Diretório raiz do projeto
        ├── assets/                     - Diretório de arquivos estáticos (imagens e icones)
        │   ├── icons/
        │   └── images/                 
        ├── components/                 - Diretótio com componentes web reutilizaveis 
        │   ├── dropdown/
        │   └── header/
        │       ├── header.html         - Arquivo para testar o componente sozinho
        │       └── header.css          - Estilo do componente
        ├── helpers/                    - Scripts auxiliares para funções expecificas em cada tela/componente
        │   ├── dropdown.js
        │   ├── hamburgerMenu.js
        │   └── scrollBehavior.js
        ├── pages/                      - Diretório com as páginas do projeto
        │   ├── landingPage/
        │   └── rack6Page/
        │       ├── rack6.css           - Estilização da página
        │       └── rack6Page.html      - Estrutura da página
        ├── styles/                     - Diretório com estilizações globais
        │   ├── global.css              - Estilo global do projeto (tamanho de textos, estilo de botões)
        │   ├── index.css               - Estilo da página index.html na raiz do projeto
        │   ├── reset.css               - Limpa/Reseta a estilização padrão dos navegadores
        │   └── variables.css           - Definição de variaveis únicas do projeto (cores, tamanho de textos,  gradientes, etc.)
        ├── .gitignore                  - Ignora arquivos irrelevantes ao projeto (configuração de IDE, variaveis de ambiente, etc)
        ├── index.html                  - Arquivo principal do projeto
        └── README.md                   
```

---

## ⚙️ Tecnologias
- **HTML5** → estrutura das páginas
- **CSS3** → estilos globais e responsivos
- **JavaScript (ES6+)** → interações (dropdowns, scroll suave, menu hamburguer)

---

## 🚀 Como rodar
1. Clone o repositório:
   ```bash
   git clone https://github.com/srjuninn/campus-datacenter-explorer.git
   ```
2. Acesse a pasta do projeto:
   ```bash
   cd campus-datacenter-explorer
   ```
3. Abra o projeto no navegador (exemplo usando VSCode Live Server):
   ```bash
   http://127.0.0.1:5500/src/pages/Rack3Page/rack3Page.html
   ```

---

## 📖 Boas práticas de Git
Este projeto segue um fluxo **Git Flow** simplificado:
- **Commits** → `feat: descrição`, `fix: descrição`, `chore: descrição`
- **Branches** → `feat/createdRack1Page`, `fix/footerLayout`, `hotfix/28`
- **Pull Requests** → `[FEAT] Created Rack1 Page`, `[HOTFIX] 28#`

---

## 👨‍💻 Colaboradores
Veja os colaboradores de cada parte desse projeto!
- [Rack 1]()
- [Rack 2]()
- [Rack 3]()
- [Rack 4]()
- [Rack 5]()
- [Rack 6]()
- [Landing Page]()

---

## 📜 Licença
Este projeto é de uso acadêmico e não possui fins comerciais.
