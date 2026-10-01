/* ==========================================================================
   Simulador Lecom BPMS - Data Store & Default Mock Data
   ========================================================================== */

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
    bottleneckStep: 'Aprovação Financeira',
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
