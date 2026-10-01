# Simulador Lecom BPMS - Plataforma Desktop v6.0

Réplica fiel da **Plataforma Lecom BPMS (Desktop v6.0)** para projeto estudantil de **Melhoria de Processos**.

## 🖥️ Screenshot

Interface replicada pixel-por-pixel a partir do sistema real Lecom Desktop.

## 🚀 Funcionalidades

- **Central de Tarefas (Workspace):** Visualização de atividades por status (Em alerta, Em atraso, Abertos por mim, etc.)
- **Abertura de Processos:** Formulário dinâmico para criar novos chamados (Compras, Reembolso, TI, RH)
- **Stepper BPMN:** Linha do tempo visual com etapas de aprovação
- **Dashboard Analítico:** KPIs e gráficos de volume por processo e cumprimento de SLA
- **Análise de Gargalos:** Diagnóstico de bottlenecks com simulador Antes vs Depois (redução de 65% no Lead Time)

## 🛠️ Tecnologias

- HTML5 + CSS3 (Variáveis CSS / Design Tokens)
- Vanilla JavaScript (ES6+)
- Chart.js (CDN) para gráficos
- LocalStorage para persistência de dados

## 📁 Estrutura

```
├── index.html        # Estrutura principal (SPA)
├── css/
│   └── main.css      # Todos os estilos (Dark Theme Lecom Desktop)
└── js/
    ├── data.js       # Dados mock e templates de processos
    └── app.js        # Lógica da aplicação e controladores
```

## 🌐 Deploy

Este projeto está hospedado na Vercel:

**[Acesse o Simulador Lecom →](https://simulador-lecom.vercel.app)**

## 📄 Licença

Projeto acadêmico — uso educacional.
