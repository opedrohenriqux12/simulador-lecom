/* ==========================================================================
   Simulador Lecom BPMS - Data Store & Default Mock Data (DESKTOP S.A.)
   ========================================================================== */

const USERS = [
  { id: 'u1', name: 'Pedro Henrique Pereira dos Santos', email: 'pedro.santos@desktop.com.br', role: 'Analista de Processos', department: 'Engenharia de Processos', initials: 'PH' },
  { id: 'u2', name: 'Ana Clara Silva', email: 'ana.silva@desktop.com.br', role: 'Gerente de TI', department: 'Tecnologia', initials: 'AS' },
  { id: 'u3', name: 'Carlos Eduardo Santos', email: 'carlos.santos@desktop.com.br', role: 'Diretor Comercial', department: 'Comercial', initials: 'CE' }
];

const LECOM_CATALOG = [
  {
    category: 'Gente e Gestão',
    items: [
      { name: 'Solicitação de Declínio de Candidato', version: 'Solicitação de Declínio de Candidato_v1', processCode: 'Processo 161 – Versão 1' },
      { name: 'Alteração de Horário/Jornada de Trabalho', version: 'Alteração de Horário/Jornada de Trabalho - v3', processCode: 'Processo 145 – Versão 3' },
      { name: 'Fluxo de atualização de hierarquia', version: 'Fluxo de atualização de hierarquia', processCode: 'Processo 45 – Versão 5' },
      { name: 'Reembolso de Gente e Gestão', version: 'Reembolso de Gente e Gestão', processCode: 'Processo 78 – Versão 6' },
      { name: 'Avaliação de Experiência - Gestor', version: '', processCode: 'Processo 151 – Versão 1' },
      { name: 'Solicitação de Processo Trabalhista', version: 'Solicitação de Processo Trabalhista_v2', processCode: 'Processo 104 – Versão 2' },
      { name: 'Solicitação de Desconto em Folha de Pagamento', version: 'Solicitação de Desconto em Folha de Pagamento_v2', processCode: 'Processo 159 – Versão 2' },
      { name: 'Exceção de Ferias - Inclusão/Exclusão/Alteração', version: 'Exceção de Ferias - Inclusão/Exclusão/Alteração_v2', processCode: 'Processo 148 – Versão 2' },
      { name: 'Solicitação Inclusão/Exclu de Dep. Sal. Família/IR', version: 'Solicitação Inclu/Exclu de Dep. Sal. Família/IR_v1', processCode: 'Processo 139 – Versão 1' },
      { name: 'Solicitação de Medidas Disciplinares', version: 'Solicitação de Medidas Disciplinares_v5', processCode: 'Processo 32 – Versão 5' },
      { name: 'Feedback de Rotina', version: 'Feedback de Rotina', processCode: 'Processo 183 – Versão 3' },
      { name: 'Solicitação de Ajuste de Marcações em Duplicidade', version: '', processCode: 'Processo 184 – Versão 1' },
      { name: 'Cadastro de Sobreaviso', version: 'Cadastro de Sobreaviso v2', processCode: 'Processo 154 – Versão 2' },
      { name: 'Programa Seja Líder', version: 'Programa Seja Líder', processCode: 'Processo 157 – Versão 3' },
      { name: 'Alteração/Inclusão de beneficio seguro de vida', version: 'Alteração/Inclusão de beneficio seguro de vida', processCode: 'Processo 121 – Versão 1' },
      { name: 'Comunicação de Fluxo de Abandono', version: 'Comunicação de Fluxo de Abandono - v2', processCode: 'Processo 140 – Versão 2' },
      { name: 'CAT - Comunicação de Acidente de Trabalho', version: 'Abertura de CAT', processCode: 'Processo 25 – Versão 1' },
      { name: 'Solicitação de Treinamento Universidade Desktop', version: 'Solicitação de Treinamento Universidade Desktop v2', processCode: 'Processo 106 – Versão 2' },
      { name: 'Solicitação de Licença Maternidade/Paternidade', version: 'Solicitação de Licença Maternidade/Paternidade', processCode: 'Processo 131 – Versão 1' }
    ]
  },
  {
    category: 'Comunicação',
    items: [
      { name: 'Solicitação de Comunicação Interna', version: 'Solicitação de Comunicação Interna', processCode: 'Processo 1 – Versão 1' }
    ]
  },
  {
    category: 'Suporte TI',
    items: [
      { name: 'Provisionamento de servidores', version: 'Provisionamento de servidores', processCode: 'Processo 86 – Versão 2' },
      { name: 'Solicitar Liberação de Equipamentos de Informática', version: 'Solicitar Liberação de Equipamentos de Informática', processCode: 'Processo 98 – Versão 6' },
      { name: 'Workplace-Active Directory Identidade Corporativa', version: 'Abertura de chamados de workplace', processCode: 'Processo 8 – Versão 11' }
    ]
  },
  {
    category: 'Compras',
    items: [
      { name: 'Solicitação de Cadastro de Itens e Fornecedores', version: 'Solicitação de Cadastro de Itens e Fornecedores v8', processCode: 'Processo 7 – Versão 8' },
      { name: 'Solicitação de Alteração de Itens e Fornecedores', version: 'Solicitação de Alteração de Itens/Fornecedores V2', processCode: 'Processo 113 – Versão 2' },
      { name: 'Requerimento de Compras', version: 'Requerimento de Compras v18', processCode: 'Processo 17 – Versão 18' },
      { name: 'Negociação e Renegociação de Contratos', version: '', processCode: 'Processo 188 – Versão 3' },
      { name: 'Solicitação de Hospedagem', version: 'Solicitação de Hospedagem_V8', processCode: 'Processo 93 – Versão 8' }
    ]
  },
  {
    category: 'Frotas',
    items: [
      { name: 'Pedido de Novos Veículos', version: 'Pedido de Novos Veículos v2', processCode: 'Processo 189 – Versão 2' },
      { name: 'Duvidas - Descontos (Almox, Financ, Frotas & TI)', version: 'Duvidas - Descontos(Almox, Financ, Frotas & TI) v2', processCode: 'Processo 177 – Versão 2' },
      { name: 'Comunicado de Sinistro e Avaria de Carros', version: 'Comunicado de Sinistro e Avaria de Carros', processCode: 'Processo 134 – Versão 2' },
      { name: 'Solicitação de Veículos Spot', version: 'Solicitação de Veículos Spot V3', processCode: 'Processo 18 – Versão 3' },
      { name: 'Revisão de Saldo de Combustível', version: 'Revisão de Saldo de Combustível', processCode: 'Processo 19 – Versão 4' },
      { name: 'Liberação do Condutor', version: 'Liberação do Condutor v5', processCode: 'Processo 91 – Versão 5' }
    ]
  },
  {
    category: 'Financeiro',
    items: [
      { name: 'Reabertura de Pagamentos', version: 'Reabertura de Pagamentos v3', processCode: 'Processo 107 – Versão 3' },
      { name: 'Solicitação de Adiantamento de Viagem', version: 'Solicitação de Adiantamento de Viagem', processCode: 'Processo 46 – Versão 3' },
      { name: 'Reembolso Confraternização, Bonificação, Materiais', version: 'Reembolso Confraternização, Bonificação, Materiais', processCode: 'Processo 77 – Versão 9' },
      { name: 'Solicitação de Reembolso de Viagem', version: 'Solicitação de Reembolso de Viagem v7', processCode: 'Processo 3 – Versão 8' },
      { name: 'Solicitação de Pagamentos de Documentos', version: 'Solicitação de Pagamentos de Documentos V11', processCode: 'Processo 2 – Versão 11' },
      { name: 'Status e Comprovante de Pagamento', version: 'Status e Comprovante de pagamento v7', processCode: 'Processo 71 – Versão 7' },
      { name: 'Solicitação de Adiantamento de Faxina', version: 'Solicitação de Adiantamento de Faxina_v3', processCode: 'Processo 153 – Versão 3' }
    ]
  },
  {
    category: 'Facilities',
    items: [
      { name: 'Solicitação Serviços Externos (motoboy/cartório)', version: 'Solicitação Serviços Externos (motoboy/cartório)', processCode: 'Processo 92 – Versão 1' },
      { name: 'Solicitação de Manutenção Predial', version: 'Solicitação de Manutenção Predial v8', processCode: 'Processo 14 – Versão 8' },
      { name: 'Solicitação de Materiais de Escritório', version: 'Solicitação de Materiais de Escritório v3', processCode: 'Processo 101 – Versão 3' },
      { name: 'Solicitação de Serviços de Correios', version: 'Solicitação de Serviços de Correios', processCode: 'Processo 13 – Versão 5' }
    ]
  },
  {
    category: 'Fiscal',
    items: [
      { name: 'Solicitação de Escrituração de NF', version: 'Solicitação de Escrituração de NF', processCode: 'Processo 72 – Versão 1' },
      { name: 'Solicitação de cópia de documentos fiscais', version: 'Solicitação de cópia de documentos fiscais', processCode: 'Processo 30 – Versão 1' },
      { name: 'Solicitação de Recusa de NF', version: 'Solicitação de Carta de Correção', processCode: 'Processo 117 – Versão 1' },
      { name: 'Solicitação de Carta de Correção', version: 'Solicitação de Carta de Correção', processCode: 'Processo 118 – Versão 1' },
      { name: 'Emissão de certidões negativas', version: '', processCode: 'Processo 29 – Versão 1' },
      { name: 'Emissão de NF (Devolução, Remessa, Venda de Ativo)', version: 'Emissão de NF (Devolução, Remessa, Venda de Ativo)', processCode: 'Processo 39 – Versão 5' }
    ]
  },
  {
    category: 'Processos',
    items: [
      { name: 'Solicitações Lecom - Bugs, Processos e Melhorias', version: 'Solicitações Lecom - Bugs, Processos e Melhorias', processCode: 'Processo 169 – Versão 3' }
    ]
  },
  {
    category: 'Projetos',
    items: [
      { name: 'Solicitar instalação de cordoalha', version: 'Solicitar instalação de cordoalha', processCode: 'Processo 53 – Versão 3' }
    ]
  },
  {
    category: 'Contabilidade',
    items: [
      { name: 'Consulta de demonstrações Financeiras e Contábeis', version: '', processCode: 'Processo 41 – Versão 1' },
      { name: 'Criação, Alteração e Inativação de Centro de Custo', version: 'Criação, Alteração e Inativação de Centro de Custo', processCode: 'Processo 100 – Versão 3' },
      { name: 'Lançamento Contábil Manual', version: 'Lançamento Contábil Manual v2', processCode: 'Processo 114 – Versão 2' }
    ]
  },
  {
    category: 'Jurídico',
    items: [
      { name: 'Solicitação de Subsídios Cíveis', version: 'Solicitação de Subsídios Cíveis - v1', processCode: 'Processo 164 – Versão 1' },
      { name: 'Solicitação de Parecer Jurídico', version: 'Solicitação de Parecer Jurídico', processCode: 'Processo 49 – Versão 6' },
      { name: 'Solicitação de Indenização a Terceiro/Acordo', version: 'Solicitação de Indenização a Terceiro/Acordo v2', processCode: 'Processo 160 – Versão 2' }
    ]
  },
  {
    category: 'STFC',
    items: [
      { name: 'Liberação de telefones', version: '', processCode: 'Processo 64 – Versão 1' },
      { name: 'Solicitação de ITX', version: 'Solicitação de ITX', processCode: 'Processo 63 – Versão 1' },
      { name: 'Telefonia Clientes - Processos', version: '', processCode: 'Processo 62 – Versão 1' },
      { name: 'Telefonia Clientes - Reclamações', version: '', processCode: 'Processo 60 – Versão 1' },
      { name: 'Back Office - Processos', version: 'Back Office - Processos', processCode: 'Processo 67 – Versão 1' },
      { name: 'Encontro de Contas - DETRAF', version: 'Encontro de Contas - DETRAF_v2', processCode: 'Processo 174 – Versão 2' },
      { name: 'Portabilidade', version: 'Portabilidade v5', processCode: 'Processo 61 – Versão 5' },
      { name: 'Back Office - Reclamações', version: 'Back Office - Reclamações', processCode: 'Processo 66 – Versão 1' }
    ]
  },
  {
    category: 'Operações TV',
    items: [
      { name: 'Atendimento do Serviço de IPTV na Rede', version: 'Atendimento do Serviço de IPTV na Rede', processCode: 'Processo 73 – Versão 1' }
    ]
  },
  {
    category: 'Garantia Receita',
    items: [
      { name: 'Contestação de Remuneração Variável', version: 'Contestação de Remuneração Variável v2', processCode: 'Processo 76 – Versão 2' }
    ]
  },
  {
    category: 'Cobrança',
    items: [
      { name: 'Solicitação de Máquinas de Cartão e Bobinas', version: 'Solicitação de Máquinas de Cartão e Bobinas', processCode: 'Processo 82 – Versão 1' }
    ]
  },
  {
    category: 'TI',
    items: [
      { name: 'Solicitação de Office e Teams', version: 'Solicitação de Office e Teams - v1', processCode: 'Processo 132 – Versão 1' },
      { name: 'Solicitação de Licença Claude IA', version: '', processCode: 'Processo 205 – Versão 1' }
    ]
  },
  {
    category: 'Marketing',
    items: [
      { name: 'Solicitação de Permuta e Cortesia', version: 'Solicitação de Permuta e Cortesia_v8', processCode: 'Processo 87 – Versão 8' }
    ]
  },
  {
    category: 'Contratos',
    items: [
      { name: 'Solicitação de locação de imóvel', version: 'Solicitação de locação de imóvel - v3', processCode: 'Processo 108 – Versão 3' }
    ]
  },
  {
    category: 'Recebimento',
    items: [
      { name: 'Divergência ou Ausência de Pedido de Compra', version: 'Divergência ou Ausência de Pedido de Compra', processCode: 'Processo 99 – Versão 1' }
    ]
  },
  {
    category: 'Escritório de Gerenciamento de Projetos',
    items: [
      { name: 'Solicitação de Mudança de Escopo de Projeto', version: 'Solicitação de Mudança de Escopo de Projeto v2', processCode: 'Processo 135 – Versão 2' },
      { name: 'Solicitação de Gerenciamento de Projeto', version: 'Solicitação de Gerenciamento de Projeto v7', processCode: 'Processo 109 – Versão 7' }
    ]
  },
  {
    category: 'Engenharia de Produto',
    items: [
      { name: 'Solicitação de Engenharia de Produto', version: 'Solicitação de Engenharia de Produto - v1', processCode: 'Processo 110 – Versão 1' },
      { name: 'Solicitação de Provisionamento de Equipamentos', version: 'Solicitação de Provisionamento de Equipamentos', processCode: 'Processo 147 – Versão 1' },
      { name: 'Solicitação de Validação de Entrega', version: 'Solicitação de Validação de Entrega_v1', processCode: 'Processo 156 – Versão 1' },
      { name: 'Solicitação ao Painel de Interoperabilidade', version: '', processCode: 'Processo 206 – Versão 1' }
    ]
  },
  {
    category: 'Inteligência de Negócio',
    items: [
      { name: 'Inteligência de Negócios - Data Analytics', version: 'Inteligência de Negocios - Data Analytics', processCode: 'Processo 111 – Versão 14' }
    ]
  },
  {
    category: 'Segurança Patrimonial e Riscos',
    items: [
      { name: 'Adequação Segurança Eletrônica', version: 'Adequação Segurança Eletrônica', processCode: 'Processo 193 – Versão 1' },
      { name: 'Segurança Patrimonial e Riscos', version: 'Segurança Patrimonial e Riscos - v3', processCode: 'Processo 116 – Versão 3' }
    ]
  },
  {
    category: 'Integrações TI - M&A',
    items: [
      { name: 'Requisição e Melhorias ADM - Fasternet', version: 'Requisição e Melhorias ADM - Fasternet', processCode: 'Processo 128 – Versão 1' }
    ]
  },
  {
    category: 'Comercial',
    items: [
      { name: 'Fluxo de Aprovação BP', version: 'Fluxo de Aprovação BP_v4', processCode: 'Processo 129 – Versão 4' },
      { name: 'Descredenciamento de Parceiros Comerciais', version: 'Descredenciamento de Parceiros Comerciais_v1', processCode: 'Processo 144 – Versão 1' },
      { name: 'Termo de Cessão', version: '', processCode: 'Processo 190 – Versão 1' },
      { name: 'Credenciamento de Agente Autorizado - B2C/B2B', version: 'Credenciamento de Agente Autorizado - B2C/B2B', processCode: 'Processo 141 – Versão 5' }
    ]
  },
  {
    category: 'Logística',
    items: [
      { name: 'Requisição de Materiais', version: '', processCode: 'Processo 167 – Versão 1' },
      { name: 'Reposição de Chips Móveis', version: 'Reposição de Chips Móveis - v2', processCode: 'Processo 175 – Versão 2' },
      { name: 'Entrega de Smartphone', version: 'Entrega de Smartphone_v1', processCode: 'Processo 162 – Versão 1' },
      { name: 'Solicitação de Chip de Celular', version: 'Solicitação de Chip de Celular v4', processCode: 'Processo 103 – Versão 4' },
      { name: 'Validação de não conformidade de equipamentos RMA', version: '', processCode: 'Processo 204 – Versão 1' }
    ]
  },
  {
    category: 'Comercial B2B',
    items: [
      { name: 'Atualização de Valores nos Planos Recriados', version: 'Atualização de Valores nos Planos Recriados_v2', processCode: 'Processo 170 – Versão 2' },
      { name: 'Mudança de Planos - Rede Metro', version: 'Mudança de Planos - Rede Metro', processCode: 'Processo 197 – Versão 1' },
      { name: 'Tratativas B2B', version: 'Tratativas B2B', processCode: 'Processo 199 – Versão 1' },
      { name: 'Gestão de Contratos do Governo - B2B', version: 'Gestão de Contratos do Governo - B2B', processCode: 'Processo 186 – Versão 1' },
      { name: 'B2B - Demandas Faturamento', version: 'B2B - Demandas Faturamento_v2', processCode: 'Processo 171 – Versão 2' },
      { name: 'Cancelamento e Retenção de Clientes B2B', version: '', processCode: 'Processo 202 – Versão 2' }
    ]
  },
  {
    category: 'Projetos - TI',
    items: [
      { name: 'Projetos - Desenvolvimento TI', version: 'Projetos - Desenvolvimento TI v2', processCode: 'Processo 173 – Versão 2' },
      { name: 'Demandas Evolutivas de TI', version: 'Demandas Evolutivas de TI v1', processCode: 'Processo 181 – Versão 1' },
      { name: 'Desenvolvimento de Inteligência Artificial (IA)', version: 'Desenvolvimento de Inteligência Artificial (IA)', processCode: 'Processo 194 – Versão 2' }
    ]
  },
  {
    category: 'NOC',
    items: [
      { name: 'Bugs e acesso aos sistema UNM e AMS - Fasternet', version: 'Bugs e acesso aos sistema UNM e AMS - Fasternet', processCode: 'Processo 115 – Versão 1' }
    ]
  },
  {
    category: 'Antifraude',
    items: [
      { name: 'Análise de Indícios de Fraude', version: 'Análise de Indícios de Fraude', processCode: 'Processo 192 – Versão 2' }
    ]
  },
  {
    category: 'Planejamento de Operações',
    items: [
      { name: 'Homologação de Terceiros', version: 'Homologação de Terceiros v2', processCode: 'Processo 198 – Versão 2' },
      { name: 'Apuração - Fechamento Terceiros', version: 'Apuração - Fechamento Terceiros v1', processCode: 'Processo 203 – Versão 1' }
    ]
  },
  {
    category: 'Canais de Vendas',
    items: [
      { name: 'Recebimento de Correspondências Lojas', version: 'Recebimento de Correspondências Lojas v1', processCode: 'Processo 195 – Versão 1' }
    ]
  }
];

const INITIAL_PROCESS_TEMPLATES = [
  {
    id: 'proc_compras',
    title: 'Solicitação de Compras',
    category: 'Suprimentos & Compras',
    icon: 'shopping-cart',
    slaHours: 48,
    steps: ['Abertura', 'Cotação & Análise', 'Aprovação Financeira', 'Emissão do Pedido', 'Recebimento']
  },
  {
    id: 'proc_reembolso',
    title: 'Reembolso de Despesas',
    category: 'Financeiro',
    icon: 'credit-card',
    slaHours: 24,
    steps: ['Abertura', 'Validação de Comprovantes', 'Aprovação do Gestor', 'Pagamento Efetuado']
  },
  {
    id: 'proc_ti',
    title: 'Chamado de TI & Acessos',
    category: 'Tecnologia',
    icon: 'monitor',
    slaHours: 12,
    steps: ['Abertura', 'Triagem de TI', 'Execução Técnica', 'Homologação do Usuário']
  },
  {
    id: 'proc_rh',
    title: 'Admissão de Colaborador',
    category: 'Recursos Humanos',
    icon: 'users',
    slaHours: 72,
    steps: ['Abertura do Requisição', 'Validação Documental', 'Criação de Contas', 'Integração RH']
  }
];

const INITIAL_TASKS = [
  {
    id: 'SOL-2026-1042',
    processId: 'proc_compras',
    title: 'Compra de Monitores 27" 4K para TI',
    requester: 'Ana Clara Silva',
    department: 'Tecnologia',
    currentStepIndex: 1, // Cotação & Análise
    status: 'EM_ANDAMENTO',
    slaStatus: 'WARNING', // WARNING, DANGER, SUCCESS
    slaDueDate: '2026-08-07T14:00:00',
    createdAt: '2026-08-05T09:30:00',
    priority: 'ALTA',
    details: {
      valorEstimado: 'R$ 4.500,00',
      justificativa: 'Substituição de monitores antigos no departamento de desenvolvimento.',
      fornecedorCotado: 'TechDistribuidora Ltda'
    },
    history: [
      { step: 'Abertura', user: 'Ana Clara Silva', date: '2026-08-05 09:30', status: 'Concluído' }
    ]
  },
  {
    id: 'SOL-2026-1041',
    processId: 'proc_reembolso',
    title: 'Reembolso Viagem de Negócios SP',
    requester: 'Carlos Eduardo Santos',
    department: 'Comercial',
    currentStepIndex: 2, // Aprovação do Gestor
    status: 'EM_ANDAMENTO',
    slaStatus: 'DANGER', // Violou SLA
    slaDueDate: '2026-08-06T10:00:00',
    createdAt: '2026-08-04T16:20:00',
    priority: 'URGENTE',
    details: {
      valorEstimado: 'R$ 1.280,50',
      justificativa: 'Visita ao cliente estratégico e despesas de hospedagem/alimentação.'
    },
    history: [
      { step: 'Abertura', user: 'Carlos Santos', date: '2026-08-04 16:20', status: 'Concluído' },
      { step: 'Validação de Comprovantes', user: 'Financeiro Auto', date: '2026-08-05 11:00', status: 'Concluído' }
    ]
  },
  {
    id: 'SOL-2026-1040',
    processId: 'proc_ti',
    title: 'Liberação de Acesso ao ERP Lecom',
    requester: 'Mariana Lima',
    department: 'Controladoria',
    currentStepIndex: 1, // Triagem de TI
    status: 'EM_ANDAMENTO',
    slaStatus: 'SUCCESS',
    slaDueDate: '2026-08-07T18:00:00',
    createdAt: '2026-08-06T11:15:00',
    priority: 'MEDIA',
    details: {
      justificativa: 'Nova analista contratada para o setor de controladoria.'
    },
    history: [
      { step: 'Abertura', user: 'Mariana Lima', date: '2026-08-06 11:15', status: 'Concluído' }
    ]
  },
  {
    id: 'SOL-2026-1039',
    processId: 'proc_rh',
    title: 'Admissão Desenvolvedor Senior',
    requester: 'Roberto Mendes',
    department: 'Engenharia de Software',
    currentStepIndex: 3, // Integração RH
    status: 'CONCLUIDO',
    slaStatus: 'SUCCESS',
    slaDueDate: '2026-08-05T17:00:00',
    createdAt: '2026-08-01T08:00:00',
    priority: 'MEDIA',
    details: {
      justificativa: 'Preenchimento de vaga aberta no time de Produto.'
    },
    history: [
      { step: 'Abertura', user: 'Roberto Mendes', date: '2026-08-01 08:00', status: 'Concluído' },
      { step: 'Validação Documental', user: 'Juliana RH', date: '2026-08-02 14:00', status: 'Concluído' },
      { step: 'Criação de Contas', user: 'Suporte TI', date: '2026-08-03 10:30', status: 'Concluído' },
      { step: 'Integração RH', user: 'Fernanda RH', date: '2026-08-04 16:00', status: 'Concluído' }
    ]
  },
  {
    id: 'SOL-2026-1038',
    processId: 'proc_compras',
    title: 'Licenças de Software Figma Enterprise',
    requester: 'Gabriel Souzans',
    department: 'Design UX/UI',
    currentStepIndex: 2, // Aprovação Financeira
    status: 'EM_ANDAMENTO',
    slaStatus: 'WARNING',
    slaDueDate: '2026-08-07T12:00:00',
    createdAt: '2026-08-05T14:40:00',
    priority: 'ALTA',
    details: {
      valorEstimado: 'R$ 8.900,00',
      justificativa: 'Renovação anual de licenças de design.'
    },
    history: [
      { step: 'Abertura', user: 'Gabriel Souzans', date: '2026-08-05 14:40', status: 'Concluído' },
      { step: 'Cotação & Análise', user: 'Lucas Compras', date: '2026-08-06 09:00', status: 'Concluído' }
    ]
  }
];

const INITIAL_BOTTLENECK_STATS = [
  {
    processName: 'Solicitação de Compras',
    bottleneckStep: 'Cotação & Análise',
    avgWaitHours: 32.5,
    targetHours: 12.0,
    reworkRate: '18%',
    recommendation: 'Implementar alçada automática para valores abaixo de R$ 5.000,00.'
  },
  {
    processName: 'Reembolso de Despesas',
    bottleneckStep: 'Validação de Comprovantes',
    avgWaitHours: 18.2,
    targetHours: 6.0,
    reworkRate: '24%',
    recommendation: 'Adicionar OCR automático para leitura de notas fiscais.'
  },
  {
    processName: 'Chamado de TI & Acessos',
    bottleneckStep: 'Execução Técnica',
    avgWaitHours: 10.4,
    targetHours: 4.0,
    reworkRate: '8%',
    recommendation: 'Criar scripts de provisioning automático de contas.'
  }
];
