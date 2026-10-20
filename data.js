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

const INITIAL_TASKS = [];

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


/* ==========================================================================
   MODELOS DE EXEMPLO DE CONTRATO (BASE DE CONSULTA PARA O REQUERENTE)
   ========================================================================== */
const CONTRATO_MODELOS = {
  prestacao: {
    title: 'Prestação de Serviços | Outros',
    headerTitle: 'INSTRUMENTO PARTICULAR DE PRESTAÇÃO DE SERVIÇOS TÉCNICOS E OUTRAS AVENÇAS',
    tipoLabel: 'Prestação de Serviços Especializados / Corporativos',
    badge: 'Prestação de Serviços',
    descricao: 'Modelo padrão para contratação de empresas especializadas em serviços técnicos, operacionais, manutenção, consultorias e fornecimento contínuo de soluções.',
    dicas: [
      'Anexar a Proposta Comercial e o Termo de Referência (Escopo Detalhado) na tabela de anexos.',
      'Certificar-se de que o CNPJ da Contratada está ativo e sem restrições na Receita Federal.',
      'Valores mensais e totais no formulário devem corresponder exatamente aos valores da minuta anexa.',
      'Caso haja negociação prévia pelo departamento de Compras, selecionar "Contrato/Aditivo negociado com Compras".'
    ],
    preambulo: 'Pelo presente instrumento particular, de um lado:\n\nCONTRATANTE: DESKTOP S.A. (ou coligada indicada na solicitação), inscrita no CNPJ sob o nº 04.206.050/0001-80, com sede corporativa devidamente qualificada no formulário do processo;\n\ne, de outro lado:\n\nCONTRATADA: [RAZÃO SOCIAL DA CONTRATADA], pessoa jurídica de direito privado inscrita no CNPJ sob o nº [CNPJ DA CONTRATADA], com sede em [Endereço completo da Contratada], neste ato representada por seus representantes legais;\n\nTêm entre si, justo e acordado, a celebração do presente Contrato de Prestação de Serviços, regido pelas cláusulas e condições seguintes:',
    clausulas: [
      {
        num: '1',
        titulo: 'DO OBJETO E ESCOPO DOS SERVIÇOS',
        texto: '1.1. O presente Contrato tem por objeto a prestação, pela CONTRATADA à CONTRATANTE, de serviços técnicos e especializados conforme detalhamento, especificações, prazos de entrega e níveis de serviço (SLA) fixados na Proposta Comercial e Termo de Referência (Anexo I), parte integrante deste instrumento.\n1.2. Os serviços serão prestados com total autonomia técnica, zelo profissional e estrita observância das normas regulatórias e de segurança aplicáveis.'
      },
      {
        num: '2',
        titulo: 'DAS OBRIGAÇÕES E RESPONSABILIDADES DA CONTRATADA',
        texto: '2.1. Executar o objeto contratual através de profissionais comprovadamente qualificados, habilitados e devidamente registrados.\n2.2. Cumprir pontualmente os prazos e cronogramas estipulados pela CONTRATANTE, comunicando formalmente qualquer eventualidade que possa ensejar atrasos.\n2.3. Manter a regularidade fiscal, jurídica e trabalhista perante os órgãos municipais, estaduais e federais durante todo o período de vigência contratual.\n2.4. Emitir Notas Fiscais com discriminação idêntica ao objeto faturado e em estrita conformidade com os relatórios de medição pré-aprovados.'
      },
      {
        num: '3',
        titulo: 'DAS OBRIGAÇÕES DA CONTRATANTE',
        texto: '3.1. Disponibilizar os acessos físicos, lógicos e as informações imprescindíveis à tempestiva execução dos serviços.\n3.2. Proceder à conferência e aprovação dos relatórios de medição e entregas no prazo de até 5 (cinco) dias úteis do recebimento.\n3.3. Efetuar o pagamento dos valores acordados nas datas aprazadas, condicionadas ao aceite formal da Nota Fiscal de Serviços.'
      },
      {
        num: '4',
        titulo: 'DO PREÇO, FATURAMENTO E CONDIÇÕES DE PAGAMENTO',
        texto: '4.1. Pela integral execução dos serviços, a CONTRATANTE pagará à CONTRATADA o valor mensal líquido estipulado na solicitação, perfazendo o montante total contratado.\n4.2. O pagamento ocorrerá em até 30 (trinta) dias após a emissão e validação formal da Nota Fiscal de Serviços pela área gestora do contrato da CONTRATANTE.\n4.3. Os valores serão reajustados anualmente, na data de aniversário do contrato, com base na variação percentual positiva do IPCA/IBGE (Índice de Preços ao Consumidor Amplo).'
      },
      {
        num: '5',
        titulo: 'DA VIGÊNCIA E RESCISÃO',
        texto: '5.1. O presente instrumento vigorará pelo prazo determinado de 12 (doze) meses a contar de sua assinatura, podendo ser prorrogado mediante termo aditivo.\n5.2. Qualquer das partes poderá rescindir o contrato imotivadamente, mediante aviso prévio formal e por escrito com antecedência de 30 (trinta) dias, sem qualquer ônus, multas ou penalidades, quitando-se apenas os serviços efetivamente executados até a data da rescisão.\n5.3. O contrato poderá ser rescindido motivadamente de forma imediata por infração contratual, falência ou recuperação judicial de qualquer das partes.'
      },
      {
        num: '6',
        titulo: 'DAS PENALIDADES E MULTAS CONTRATUAIS',
        texto: '6.1. O descumprimento injustificado de prazos ou níveis de serviço ensejará a aplicação de multa moratória de 0,5% (cinco décimos por cento) ao dia sobre o valor da parcela mensal correspondente, limitada a 10% do total mensal.\n6.2. Em caso de rescisão culposa motivada por inadimplemento, a parte culpada pagará à inocente multa compensatória no valor de 10% (dez por cento) sobre o saldo vincendo do contrato.'
      },
      {
        num: '7',
        titulo: 'DA CONFIDENCIALIDADE E PROTEÇÃO DE DADOS (LGPD)',
        texto: '7.1. As partes obrigam-se a manter sob sigilo irrevogável todas as informações estratégicas, técnicas, operacionais e comerciais a que tiverem acesso.\n7.2. As partes comprometem-se a cumprir rigorosamente as determinações da Lei Geral de Proteção de Dados (Lei nº 13.709/2018 - LGPD), garantindo a confidencialidade e segurança dos dados pessoais tratados.'
      },
      {
        num: '8',
        titulo: 'DO FORO DE ELEIÇÃO',
        texto: '8.1. Fica eleito o Foro da Comarca da sede da CONTRATANTE para dirimir quaisquer controvérsias decorrentes deste contrato, renunciando a qualquer outro por mais privilegiado que seja.'
      }
    ],
    fecho: 'E, por estarem assim justas e contratadas, as partes assinam o presente instrumento em vias de igual teor e forma para um só efeito.'
  },
  terceirizada: {
    title: 'Mão de obra terceirizada',
    headerTitle: 'INSTRUMENTO PARTICULAR DE PRESTAÇÃO DE SERVIÇOS CONTÍNUOS COM DEDICAÇÃO DE MÃO DE OBRA (TERCEIRIZAÇÃO)',
    tipoLabel: 'Prestação de Serviços com Cessão/Dedicação de Mão de Obra',
    badge: 'Mão de Obra Terceirizada',
    descricao: 'Modelo padrão obrigatório para contratação de postos de trabalho contínuos (atendimento, suporte técnico de campo, portaria, manutenção, facilities). Contém cláusulas indispensáveis de proteção subsidiária (Súmula 331 TST) e retenção preventiva.',
    dicas: [
      'OBRIGATÓRIO exigir da contratada o envio mensal de GFIP/FGTS, eSocial, DARF Previdenciário e CNDT antes de autorizar qualquer pagamento.',
      'Definir com exatidão a quantidade de postos, jornada de trabalho e escalas no campo "Descrição do objeto".',
      'Verificar se a Convenção Coletiva de Trabalho (CCT) da categoria está vigente.',
      'Certificar-se de que os postos contam com EPIs e supervisão própria da empresa terceirizada, sem subordinação direta a gestores da Desktop.'
    ],
    preambulo: 'Pelo presente instrumento particular, de um lado:\n\nCONTRATANTE / TOMADORA: DESKTOP S.A., sociedade anônima inscrita no CNPJ sob o nº 04.206.050/0001-80, com sede corporativa qualificada na presente solicitação;\n\ne, de outro lado:\n\nCONTRATADA / PRESTADORA: [RAZÃO SOCIAL DA EMPRESA DE TERCEIRIZAÇÃO], inscrita no CNPJ sob o nº [CNPJ DA CONTRATADA], devidamente registrada perante os órgãos competentes, neste ato representada na forma de seus atos constitutivos;\n\nConsiderando que a contratação subordina-se à Lei nº 6.019/1974, alterada pela Lei nº 13.429/2017 e Reforma Trabalhista (Lei nº 13.467/2017), têm entre si justo e avençado o seguinte:',
    clausulas: [
      {
        num: '1',
        titulo: 'DO OBJETO E DEFINIÇÃO DOS POSTOS DE TRABALHO',
        texto: '1.1. O objeto deste contrato consiste na prestação continuada de serviços operacionais/técnicos mediante a alocação de postos de trabalho dedicados conforme dimensionamento, funções e escalas aprovadas no Anexo de Especificação de Postos.\n1.2. A CONTRATADA exercerá com integral exclusividade a direção técnica, poder de comando, fiscalização de frequência e supervisão hierárquica e disciplinar de todos os seus colaboradores alocados.'
      },
      {
        num: '2',
        titulo: 'DA INEXISTÊNCIA DE VÍNCULO EMPREGATÍCIO COM A TOMADORA',
        texto: '2.1. Inexiste e jamais se configurará qualquer vínculo de natureza trabalhista, previdenciária ou empregatícia entre a CONTRATANTE e os empregados ou prestadores da CONTRATADA.\n2.2. A CONTRATADA é a única responsável pelo processo seletivo, contratação formal em CTPS, pagamento pontual de salários, adicionais de insalubridade/periculosidade, férias remuneradas, 13º salário, vale-transporte e vale-alimentação.'
      },
      {
        num: '3',
        titulo: 'DA COMPROVAÇÃO MENSAL DE REGULARIDADE TRABALHISTA E PREVIDENCIÁRIA',
        texto: '3.1. Como condição OBRIGATÓRIA E INDISPENSÁVEL para a liquidação de qualquer fatura ou Nota Fiscal, a CONTRATADA apresentará à CONTRATANTE até o 10º (décimo) dia de cada mês os seguintes documentos do mês anterior:\n   a) Guia de Recolhimento de FGTS (SEFIP/FGTS Digital) quitada com a respectiva Relação de Empregados (RE);\n   b) Comprovante de arrecadação do DARF Previdenciário/eSocial;\n   c) Folha de pagamento assinada ou comprovantes bancários de crédito salarial e benefícios;\n   d) Certidão Negativa de Débitos Trabalhistas (CNDT) válida;\n   e) Certidão Negativa Conjunta da Receita Federal e PGFN;\n   f) Fichas de fornecimento de Equipamentos de Proteção Individual (EPIs).\n3.2. A não apresentação de qualquer dos documentos autoriza a retenção cautelar do pagamento da fatura, sem incidência de juros ou multas contra a CONTRATANTE.'
      },
      {
        num: '4',
        titulo: 'DO DIREITO DE RETENÇÃO E SALVAGUARDA SUBSIDIÁRIA (SÚMULA 331 DO TST)',
        texto: '4.1. Na hipótese de ajuizamento de reclamatória trabalhista ou autuação fiscal envolvendo trabalhador que prestou serviços nas dependências da CONTRATANTE, esta fica autorizada a reter preventivamente valores faturados pela CONTRATADA para garantia de contingência judicial.\n4.2. A CONTRATADA obriga-se a requerer a imediata exclusão da CONTRATANTE da lide e ressarcirá integralmente quaisquer despesas com depósitos recursais, perícias ou condenações judiciais.'
      },
      {
        num: '5',
        titulo: 'DA SAÚDE, SEGURANÇA DO TRABALHO, EPIs E UNIFORMES',
        texto: '5.1. A CONTRATADA fornecerá sem qualquer custo uniforme completo, crachá de identificação e todos os Equipamentos de Proteção Individual (EPIs) adequados às Normas Regulamentadoras (NRs).\n5.2. A CONTRATADA manterá atualizados perante a CONTRATANTE os laudos do PGR (Programa de Gerenciamento de Riscos) e PCMSO (Programa de Controle Médico de Saúde Ocupacional).'
      },
      {
        num: '6',
        titulo: 'DA SUBSTITUIÇÃO IMEDIATA DE PROFISSIONAIS',
        texto: '6.1. A CONTRATANTE poderá solicitar justificadamente a substituição de qualquer profissional alocado por desídia, descumprimento de normas éticas ou insuficiência técnica.\n6.2. A CONTRATADA efetuará a substituição no prazo máximo e improrrogável de até 24 (vinte e quatro) horas, sem custos extras e sem prejuízo à continuidade das rotinas operacionais.'
      },
      {
        num: '7',
        titulo: 'DO PREÇO, REMUNERAÇÃO E REPACTUAÇÃO COLETIVA',
        texto: '7.1. Pelos serviços dos postos alocados, a CONTRATANTE pagará o valor mensal pactuado na solicitação, com vencimento em até 30 (trinta) dias após aceite da fatura e comprovação das certidões trabalhistas.\n7.2. A repactuação em razão de Dissídio ou Convenção Coletiva de Trabalho (CCT) somente será analisada mediante comprovação formal da homologação pelo Ministério do Trabalho e cálculo analítico da variação de custos.'
      },
      {
        num: '8',
        titulo: 'DO COMPLIANCE, LEI ANTICORRUPÇÃO E LGPD',
        texto: '8.1. A CONTRATADA compromete-se a respeitar as diretrizes da Lei nº 12.846/2013 (Lei Anticorrupção), garantindo a estrita observância de normas éticas e de conformidade legal.\n8.2. As partes declaram total adequação aos princípios e regras estabelecidos pela Lei Geral de Proteção de Dados (Lei nº 13.709/2018 - LGPD).'
      },
      {
        num: '9',
        titulo: 'DO FORO DE ELEIÇÃO',
        texto: '9.1. Fica eleito o Foro da Comarca da sede da CONTRATANTE como competente para solucionar quaisquer litígios oriundos deste Contrato.'
      }
    ],
    fecho: 'E, por estarem justas e acordadas, as partes assinam o presente contrato em 2 (duas) vias de igual teor perante duas testemunhas instrumentárias.'
  }
};
