

# 🖥️ Campus Datacenter Explorer

> Projeto acadêmico desenvolvido pela turma de **Redes de Computadores** para documentar e explorar a estrutura de racks de um datacenter do senai suiço-brasileira.  
> Cada rack possui sua própria página dedicada, com diagramas, documentação técnica e links úteis.

---

## 📌 Objetivo
O **Campus Datacenter Explorer** tem como meta:
- Organizar a documentação dos **6 servidores** do datacenter.
- Criar páginas independentes para cada rack (Rack1, Rack2, Rack3...).
- Facilitar a navegação entre serviços, documentação técnica e contatos.
- Servir como material de estudo e consulta para a turma.

---

Boa, Ryan 👊. A estrutura que você montou já está legal, mas dá pra deixar mais **padronizada e clara**. Vou te sugerir uma versão arrumada, com hierarquia visual melhor e comentários mais consistentes:

---

## 📂 Estrutura do Projeto

```
Rack3Page/      # rack 3 page
    rack3.html    # estrutura do rack 3
    rack3.css     # estilo do rack 3
    js/           # scripts usados no rack 3
        dropdown.js #script do dropdown
        hamburgerMenu.js    #script menu hamburguer
        scroll.js       #script do scroll
Rack2Page/          # rack 2 page
Rack1Page/          #rack 1 page
    ...

```

---

## ⚙️ Tecnologias
- **HTML5** → estrutura das páginas  
- **CSS3** → estilos globais e responsivos  
- **JavaScript (ES6+)** → interações (dropdowns, scroll suave, menu hamburguer)  

---

## 🚀 Como rodar
1. Clone o repositório:
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

## 📖 Boas práticas de Git
Este projeto segue um fluxo **Git Flow** simplificado:
- **Commits** → `feat: descrição`, `fix: descrição`, `chore: descrição`
- **Branches** → `feat/createdRack1Page`, `fix/footerLayout`
- **Pull Requests** → `[FEAT] Created Rack1 Page`

---

## 👨‍💻 Colaboradores
- Bernardo  
- Caue  
- Manuela  
- Nikollas  
- Ryan
- Thiago  

---

## 📜 Licença
Este projeto é de uso acadêmico e não possui fins comerciais.