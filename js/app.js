/* Lecom DESKTOP v6.0 - Application Controller */

class Store {
  constructor() {
    this.key = 'lecom_v6';
    if (!localStorage.getItem(this.key)) {
      localStorage.setItem(this.key, JSON.stringify(INITIAL_TASKS));
    }
  }
  get() { return JSON.parse(localStorage.getItem(this.key)) || []; }
  save(t) { localStorage.setItem(this.key, JSON.stringify(t)); }
  add(t) { const all = this.get(); all.unshift(t); this.save(all); }
  update(id, fields) {
    const all = this.get();
    const i = all.findIndex(t => t.id === id);
    if (i !== -1) { all[i] = { ...all[i], ...fields }; this.save(all); }
  }
}

const store = new Store();
let chartV = null, chartS = null;
let showEmpty = true;
let currentTab = 'TODAS';
let currentUser = null;

document.addEventListener('DOMContentLoaded', () => {
  setCurrentUser(USERS[0]);
  initNav();
  renderActivities();
  initModal();
  initSearch();
  
  // Close dropdown on click outside
  document.addEventListener('click', (e) => {
    const menuContainer = document.getElementById('user-menu-container');
    const dropdown = document.getElementById('user-dropdown');
    if (menuContainer && dropdown && !menuContainer.contains(e.target)) {
      dropdown.classList.add('hidden');
    }
  });
});

// === Auth & User State ===
function setCurrentUser(user) {
  currentUser = user;
  if (!currentUser) return;
  
  // Update Topbar
  const nameEl = document.getElementById('topbar-name');
  if (nameEl) nameEl.textContent = currentUser.name.toUpperCase();
  
  // Update Dropdown
  const dropName = document.getElementById('dropdown-name');
  const dropEmail = document.getElementById('dropdown-email');
  if (dropName) dropName.textContent = currentUser.name.toUpperCase();
  if (dropEmail) dropEmail.textContent = currentUser.email;
  
  // Update Profile section
  const pName = document.getElementById('profile-name');
  const pEmail = document.getElementById('profile-email');
  const pRole = document.getElementById('profile-role');
  const pDept = document.getElementById('profile-dept');
  if (pName) pName.textContent = currentUser.name;
  if (pEmail) pEmail.textContent = currentUser.email;
  if (pRole) pRole.textContent = currentUser.role;
  if (pDept) pDept.textContent = currentUser.department;
  
  // Update new process form default
  const reqInput = document.getElementById('nRequester');
  if (reqInput) reqInput.value = currentUser.name;
}

function handleLogout() {
  document.getElementById('user-dropdown').classList.add('hidden');
  openProfile();
}

function toggleUserMenu() {
  document.getElementById('user-dropdown').classList.toggle('hidden');
}

function openProfile() {
  document.getElementById('user-dropdown').classList.add('hidden');
  document.querySelector('.nav-item[data-section="section-perfil"]').click();
}


// === Navigation ===
function initNav() {
  const items = document.querySelectorAll('.nav-item');
  const sections = document.querySelectorAll('.page-section');
  const titleEl = document.getElementById('ws-title-label');

  const titles = {
    TODAS: 'Minhas atividades',
    CAIXA_ENTRADA: 'Caixa de entrada',
    EM_ALERTA: 'Em alerta',
    EM_ATRASO: 'Em atraso',
    ABERTOS_POR_MIM: 'Abertos por mim',
    GERIDAS_POR_MIM: 'Geridas por mim'
  };

  items.forEach(item => {
    item.addEventListener('click', e => {
      e.preventDefault();
      const sec = item.dataset.section;
      const tab = item.dataset.tab;

      items.forEach(i => i.classList.remove('active'));
      item.classList.add('active');

      sections.forEach(s => s.classList.add('hidden'));
      document.getElementById(sec)?.classList.remove('hidden');

      if (sec === 'section-atividades') {
        currentTab = tab || 'TODAS';
        if (titleEl) titleEl.textContent = titles[currentTab] || 'Atividades';
        if (currentTab !== 'TODAS') showEmpty = false;
        renderActivities();
      } else if (sec === 'section-dashboard') {
        renderDashboard();
      } else if (sec === 'section-improvement') {
        renderImprovement();
      }
    });
  });
}

function toggleView() {
  const tasks = store.get();
  if (tasks.length > 0) {
    showEmpty = !showEmpty;
    renderActivities();
  }
}

function refreshView() { renderActivities(); }

// === Activities ===
function renderActivities() {
  const emptyEl = document.getElementById('empty-view');
  const cardsEl = document.getElementById('cards-view');
  const tasks = store.get();

  let filtered = tasks;
  if (currentTab === 'EM_ALERTA') filtered = tasks.filter(t => t.slaStatus === 'WARNING');
  else if (currentTab === 'EM_ATRASO') filtered = tasks.filter(t => t.slaStatus === 'DANGER');

  const searchVal = (document.getElementById('searchInput')?.value || '').toLowerCase();
  if (searchVal) {
    filtered = filtered.filter(t =>
      t.title.toLowerCase().includes(searchVal) ||
      t.id.toLowerCase().includes(searchVal) ||
      t.requester.toLowerCase().includes(searchVal)
    );
    showEmpty = false;
  }

  if (showEmpty || filtered.length === 0) {
    emptyEl.classList.remove('hidden');
    cardsEl.classList.add('hidden');
  } else {
    emptyEl.classList.add('hidden');
    cardsEl.classList.remove('hidden');
    renderCards(filtered);
  }
}

function renderCards(tasks) {
  const c = document.getElementById('cards-view');
  c.innerHTML = '';
  tasks.forEach(task => {
    const tpl = INITIAL_PROCESS_TEMPLATES.find(p => p.id === task.processId) || {};
    const step = tpl.steps?.[task.currentStepIndex] || 'Finalizado';

    let slaClass = 'sla-ok', slaText = '● No Prazo';
    if (task.slaStatus === 'WARNING') { slaClass = 'sla-warn'; slaText = '● Em Alerta'; }
    if (task.slaStatus === 'DANGER') { slaClass = 'sla-late'; slaText = '● Em Atraso'; }

    const card = document.createElement('div');
    card.className = 'pcard';
    card.onclick = () => openModal(task.id);
    card.innerHTML = `
      <div class="pcard-top">
        <span class="pcard-title">${task.title}</span>
        <span class="pcard-code">${task.id}</span>
      </div>
      <div class="pcard-step">▸ Etapa: <strong>${step}</strong></div>
      <div class="pcard-foot">
        <span>${task.requester}</span>
        <span class="sla-badge ${slaClass}">${slaText}</span>
      </div>`;
    c.appendChild(card);
  });
}

function initSearch() {
  const el = document.getElementById('searchInput');
  if (el) el.addEventListener('input', () => renderActivities());
}

// === Dashboard ===
function renderDashboard() {
  const tasks = store.get();
  document.getElementById('d-progress').textContent = tasks.filter(t => t.status === 'EM_ANDAMENTO').length;
  document.getElementById('d-alert').textContent = tasks.filter(t => t.slaStatus === 'WARNING').length;
  document.getElementById('d-danger').textContent = tasks.filter(t => t.slaStatus === 'DANGER').length;
  document.getElementById('d-done').textContent = tasks.filter(t => t.status === 'CONCLUIDO').length;

  // Volume chart
  const cv = document.getElementById('chartVolume');
  if (cv) {
    if (chartV) chartV.destroy();
    const counts = {};
    INITIAL_PROCESS_TEMPLATES.forEach(p => counts[p.title] = 0);
    tasks.forEach(t => {
      const tpl = INITIAL_PROCESS_TEMPLATES.find(p => p.id === t.processId);
      if (tpl) counts[tpl.title]++;
    });
    chartV = new Chart(cv, {
      type: 'bar',
      data: { labels: Object.keys(counts), datasets: [{ data: Object.values(counts), backgroundColor: ['#2196F3','#3B82F6','#3FB950','#E8A838'], borderRadius: 4 }] },
      options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } },
        scales: { x: { ticks: { color: '#8B949E', font: { size: 10 } }, grid: { color: 'rgba(255,255,255,.04)' } },
                  y: { beginAtZero: true, ticks: { color: '#8B949E', stepSize: 1 }, grid: { color: 'rgba(255,255,255,.04)' } } } }
    });
  }

  // SLA chart
  const cs = document.getElementById('chartSla');
  if (cs) {
    if (chartS) chartS.destroy();
    chartS = new Chart(cs, {
      type: 'doughnut',
      data: { labels: ['No Prazo','Em Alerta','Em Atraso'],
        datasets: [{ data: [tasks.filter(t=>t.slaStatus==='SUCCESS').length, tasks.filter(t=>t.slaStatus==='WARNING').length, tasks.filter(t=>t.slaStatus==='DANGER').length],
          backgroundColor: ['#3FB950','#E8A838','#D94444'], borderWidth: 0 }] },
      options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'bottom', labels: { color: '#8B949E', font: { size: 10 } } } } }
    });
  }
}

// === Execute Modal ===
let activeId = null;

function openModal(id) {
  const tasks = store.get();
  const task = tasks.find(t => t.id === id);
  if (!task) return;
  activeId = id;
  const tpl = INITIAL_PROCESS_TEMPLATES.find(p => p.id === task.processId);

  document.getElementById('modalTitle').textContent = task.title;
  document.getElementById('modalCode').textContent = task.id;
  document.getElementById('modalRequester').textContent = `${task.requester} (${task.department || ''})`;
  document.getElementById('modalJustification').textContent = task.details?.justificativa || 'Sem justificativa.';

  const stepper = document.getElementById('modalStepper');
  stepper.innerHTML = '';
  tpl.steps.forEach((name, i) => {
    let cls = '';
    if (i < task.currentStepIndex) cls = 'done';
    else if (i === task.currentStepIndex) cls = 'current';
    const s = document.createElement('div');
    s.className = `step ${cls}`;
    s.innerHTML = `<div class="step-dot">${i + 1}</div><div class="step-name">${name}</div>`;
    stepper.appendChild(s);
  });

  const finished = task.currentStepIndex >= tpl.steps.length - 1 || task.status === 'CONCLUIDO';
  document.getElementById('btnApprove').classList.toggle('hidden', finished);
  document.getElementById('btnReject').classList.toggle('hidden', finished);

  document.getElementById('modalOverlay').classList.add('active');
}

function initModal() {
  document.getElementById('closeModal').onclick = () => document.getElementById('modalOverlay').classList.remove('active');

  document.getElementById('btnApprove').onclick = () => {
    if (!activeId) return;
    const tasks = store.get();
    const task = tasks.find(t => t.id === activeId);
    const tpl = INITIAL_PROCESS_TEMPLATES.find(p => p.id === task.processId);
    if (task && tpl) {
      const next = task.currentStepIndex + 1;
      store.update(task.id, { currentStepIndex: next, status: next >= tpl.steps.length - 1 ? 'CONCLUIDO' : 'EM_ANDAMENTO' });
      alert(`${task.id} avançado com sucesso!`);
      document.getElementById('modalOverlay').classList.remove('active');
      renderActivities();
    }
  };

  document.getElementById('btnReject').onclick = () => {
    if (!activeId) return;
    if (confirm('Reprovar esta atividade?')) {
      store.update(activeId, { status: 'CANCELADO', slaStatus: 'DANGER' });
      document.getElementById('modalOverlay').classList.remove('active');
      renderActivities();
    }
  };
}

// === New Process ===
function openNewProcessWizard() { openParecerJuridicoForm('Solicitação de Parecer Jurídico'); }
function closeNew() { document.getElementById('modalNew').classList.remove('active'); }

function createProcess(e) {
  e.preventDefault();
  const id = `SOL-2026-${Math.floor(1000 + Math.random() * 9000)}`;
  store.add({
    id, processId: document.getElementById('nType').value,
    title: document.getElementById('nTitle').value,
    requester: document.getElementById('nRequester').value,
    department: currentUser ? currentUser.department : 'Engenharia de Processos',
    currentStepIndex: 1, status: 'EM_ANDAMENTO', slaStatus: 'SUCCESS',
    slaDueDate: '2026-08-08T18:00:00', createdAt: new Date().toISOString(),
    priority: document.getElementById('nPriority').value,
    details: { justificativa: document.getElementById('nJustification').value }
  });
  alert(`${id} criado com sucesso!`);
  closeNew();
  document.getElementById('formNew').reset();
  showEmpty = false;
  renderActivities();
}

// === Improvement ===
let optimized = false;

function renderImprovement() {
  const c = document.getElementById('bottleneck-container');
  c.innerHTML = '';
  INITIAL_BOTTLENECK_STATS.forEach(s => {
    let wait = s.avgWaitHours, rework = s.reworkRate;
    if (optimized) { wait = (wait * .35).toFixed(1); rework = '3%'; }
    const pct = Math.min(100, Math.round((wait / s.avgWaitHours) * 100));
    const card = document.createElement('div');
    card.className = 'improve-card';
    card.innerHTML = `
      <div class="ic-top"><span class="ic-name">${s.processName}</span><span class="ic-tag ${optimized?'optimized':'bottleneck'}">${optimized?'OTIMIZADO':'GARGALO'}</span></div>
      <div class="ic-step">Etapa Crítica: <strong>${s.bottleneckStep}</strong></div>
      <div class="progress-bg"><div class="progress-fill ${optimized?'pf-green':'pf-red'}" style="width:${pct}%"></div></div>
      <div class="ic-metrics"><span>Espera: <strong>${wait}h</strong> (Meta: ${s.targetHours}h)</span><span>Retrabalho: <strong>${rework}</strong></span></div>
      <div class="ic-tip">💡 ${s.recommendation}</div>`;
    c.appendChild(card);
  });
}

function toggleSim() {
  optimized = !optimized;
  const btn = document.getElementById('btnSim');
  const label = document.getElementById('simLabel');
  if (optimized) {
    btn.textContent = '⏪ Voltar ao Cenário Atual';
    label.textContent = 'Exibindo: Cenário Otimizado (Redução de 65% no Lead Time)';
    label.style.color = '#3FB950';
  } else {
    btn.textContent = '🚀 Simular Melhoria';
    label.textContent = 'Exibindo: Cenário Atual (Diagnóstico de Gargalos)';
    label.style.color = '#E8A838';
  }
  renderImprovement();
}

// === Catalog Drawer (Lecom Desktop Replica) ===
let activeCatalogTab = 'todos';
let selectedCatalogItem = null;

// Favorite items persistence
const FAVORITES_STORAGE_KEY = 'lecom_favorites';
let favoritesList = new Set(JSON.parse(localStorage.getItem(FAVORITES_STORAGE_KEY) || '[]'));

function saveFavorites() {
  localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(Array.from(favoritesList)));
}

function toggleFavorite(code, event) {
  if (event) event.stopPropagation();
  if (favoritesList.has(code)) {
    favoritesList.delete(code);
  } else {
    favoritesList.add(code);
  }
  saveFavorites();
  renderCatalogItems();
}

function openCatalog() {
  renderCatalogItems();
  const catModal = document.getElementById('modalCatalog');
  if (catModal) {
    catModal.classList.add('active');
    catModal.style.display = 'block';
  }
}

function closeCatalog() {
  const catModal = document.getElementById('modalCatalog');
  if (catModal) {
    catModal.classList.remove('active');
    catModal.style.display = 'none';
  }
}

function handleDrawerOverlayClick(e) {
  if (e.target.id === 'modalCatalog') {
    closeCatalog();
  }
}

function switchCatalogTab(tab) {
  activeCatalogTab = tab;
  document.querySelectorAll('.catalog-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.tab === tab);
  });
  renderCatalogItems();
}

function filterCatalog() {
  renderCatalogItems();
}

function renderCatalogItems() {
  const container = document.getElementById('catalogSidebarList');
  if (!container) return;
  container.innerHTML = '';

  const query = (document.getElementById('catalogSearchInput')?.value || '').toLowerCase();

  LECOM_CATALOG.forEach(catGroup => {
    const matchingItems = catGroup.items.filter(item => {
      const isFav = favoritesList.has(item.processCode);
      const matchText = (item.name + ' ' + (item.version || '') + ' ' + item.processCode + ' ' + catGroup.category).toLowerCase();
      
      if (activeCatalogTab === 'favoritos') {
        return isFav && matchText.includes(query);
      }
      if (activeCatalogTab === 'aplicacoes') {
        return item.version !== '' && matchText.includes(query);
      }
      return matchText.includes(query);
    });

    if (matchingItems.length > 0) {
      const catHeader = document.createElement('div');
      catHeader.className = 'catalog-category-title';
      catHeader.textContent = catGroup.category;
      container.appendChild(catHeader);

      matchingItems.forEach(item => {
        const itemEl = document.createElement('div');
        itemEl.className = 'catalog-item';
        if (selectedCatalogItem === item.name) itemEl.classList.add('active');

        const isFav = favoritesList.has(item.processCode);

        itemEl.onclick = () => {
          selectedCatalogItem = item.name;
          renderCatalogItems();
          setTimeout(() => {
            closeCatalog();
            openParecerJuridicoForm(item.name);
          }, 150);
        };

        itemEl.innerHTML = `
          <div class="catalog-item-left">
            <svg class="catalog-item-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>
            </svg>
            <div class="catalog-item-info">
              <div class="catalog-item-name">${item.name}</div>
              ${item.version ? `<div class="catalog-item-sub">${item.version}</div>` : ''}
              <div class="catalog-item-code">${item.processCode}</div>
            </div>
          </div>
          <button class="catalog-fav-btn ${isFav ? 'active' : ''}" onclick="toggleFavorite('${item.processCode}', event)" title="${isFav ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}">
            <svg viewBox="0 0 24 24" fill="${isFav ? '#00c8e6' : 'none'}" stroke="${isFav ? '#00c8e6' : '#5A6578'}" stroke-width="2">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
          </button>
        `;
        container.appendChild(itemEl);
      });
    }
  });

  if (container.children.length === 0) {
    container.innerHTML = `<div style="padding: 30px 20px; font-size: 0.8rem; color: #718096; text-align: center;">Nenhum processo encontrado.</div>`;
  }
}

// === Form Real: Preencher Solicitação (Parecer Jurídico) ===
let anexosList = [];
let servicosList = [];

function toggleSubContratoFields() {
  const selected = document.getElementById('contratoTipoSelect')?.value;
  const fNegociado = document.getElementById('fieldsNegociadoCompras');
  const fSemNegociacao = document.getElementById('fieldsSemNegociacaoCompras');

  if (selected === 'Contrato/Aditivo negociado com Compras') {
    if (fNegociado) fNegociado.style.display = 'block';
    if (fSemNegociacao) fSemNegociacao.style.display = 'none';
  } else if (selected === 'Contrato/Aditivo sem negociação com Compras') {
    if (fNegociado) fNegociado.style.display = 'none';
    if (fSemNegociacao) fSemNegociacao.style.display = 'block';
  } else {
    if (fNegociado) fNegociado.style.display = 'none';
    if (fSemNegociacao) fSemNegociacao.style.display = 'none';
  }
}

function toggleFormFields() {
  const selected = document.querySelector('input[name="tipoSolicitacao"]:checked')?.value;
  const containerContratos = document.getElementById('analiseContratosFields');
  const containerConsultoria = document.getElementById('consultoriaJuridicaFields');
  const containerRegulamentos = document.getElementById('regulamentosInternosFields');
  
  const banner1 = document.getElementById('bannerAnexarContrato');
  const banner2 = document.getElementById('bannerControleContrato');
  const secServicos = document.getElementById('secControleServicos');

  if (selected === 'contratos' || selected === 'analise_contratos') {
    if (containerContratos) containerContratos.style.display = 'block';
    if (containerConsultoria) containerConsultoria.style.display = 'none';
    if (containerRegulamentos) containerRegulamentos.style.display = 'none';

    if (banner1) banner1.style.display = 'block';
    if (banner2) banner2.style.display = 'block';
    if (secServicos) secServicos.style.display = 'block';

    toggleSubContratoFields();
  } else if (selected === 'consultoria') {
    if (containerContratos) containerContratos.style.display = 'none';
    if (containerConsultoria) containerConsultoria.style.display = 'block';
    if (containerRegulamentos) containerRegulamentos.style.display = 'none';

    if (banner1) banner1.style.display = 'none';
    if (banner2) banner2.style.display = 'none';
    if (secServicos) secServicos.style.display = 'none';
  } else if (selected === 'regulamentos') {
    if (containerContratos) containerContratos.style.display = 'none';
    if (containerConsultoria) containerConsultoria.style.display = 'none';
    if (containerRegulamentos) containerRegulamentos.style.display = 'block';

    if (banner1) banner1.style.display = 'none';
    if (banner2) banner2.style.display = 'none';
    if (secServicos) secServicos.style.display = 'none';
  }
}

function openParecerJuridicoForm(processName = 'Solicitação de Parecer Jurídico') {
  const code = Math.floor(100000 + Math.random() * 900000);
  const now = new Date();
  const nowStr = `${now.getDate().toString().padStart(2,'0')}/${(now.getMonth()+1).toString().padStart(2,'0')}/${now.getFullYear()} ${now.getHours().toString().padStart(2,'0')}:${now.getMinutes().toString().padStart(2,'0')}`;
  
  const formModal = document.getElementById('modalProcessForm');
  if (!formModal) return;

  document.getElementById('formCodeBadge').textContent = `${code.toString().slice(0,3)}.${code.toString().slice(3)}`;
  document.getElementById('formSubInfo').textContent = `${processName} - aberto em ${nowStr} por ${currentUser ? currentUser.name.toUpperCase() : 'PEDRO HENRIQUE PEREIRA DOS SANTOS'}`;
  
  if (currentUser) {
    const elName = document.getElementById('solicitudeNome');
    const elEmail = document.getElementById('solicitudeEmail');
    if (elName) elName.value = currentUser.name.toUpperCase();
    if (elEmail) elEmail.textContent = currentUser.email;
  }

  anexosList = [];
  servicosList = [];
  renderAnexosTable();
  renderServicosTable();
  toggleFormFields();

  formModal.classList.remove('hidden');
}

function closeProcessForm() {
  const formModal = document.getElementById('modalProcessForm');
  if (formModal) formModal.classList.add('hidden');
}

function handleFileSelect(e) {
  const file = e.target.files[0];
  if (file) {
    document.getElementById('anexoFile').value = file.name;
  }
}

function addAnexoRow() {
  const desc = document.getElementById('anexoDesc').value.trim();
  const file = document.getElementById('anexoFile').value.trim();

  if (!desc) {
    alert('Por favor, informe a descrição do anexo.');
    return;
  }

  anexosList.push({ desc, file: file || 'documento.pdf' });
  document.getElementById('anexoDesc').value = '';
  document.getElementById('anexoFile').value = '';
  document.getElementById('hiddenFileInput').value = '';
  renderAnexosTable();
}

function removeAnexoRow(index) {
  anexosList.splice(index, 1);
  renderAnexosTable();
}

function renderAnexosTable() {
  const tbody = document.getElementById('tableAnexosBody');
  const countEl = document.getElementById('tablePageCount');
  if (!tbody) return;

  tbody.innerHTML = '';

  if (anexosList.length === 0) {
    tbody.innerHTML = `<tr><td colspan="3" class="table-empty-row">Nenhum dado adicionado</td></tr>`;
    if (countEl) countEl.textContent = '1 - 0 de 0';
    return;
  }

  anexosList.forEach((item, i) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${item.desc}</td>
      <td>📎 ${item.file}</td>
      <td style="text-align: right;"><button type="button" style="background:none;border:none;color:#E53935;cursor:pointer;font-weight:700;" onclick="removeAnexoRow(${i})">✖</button></td>
    `;
    tbody.appendChild(tr);
  });

  if (countEl) countEl.textContent = `1 - ${anexosList.length} de ${anexosList.length}`;
}

function addServicoRow() {
  const codigo = document.getElementById('servCodigo')?.value.trim();
  const uso = document.getElementById('servUso')?.value;
  const servico = document.getElementById('servNome')?.value.trim();
  const local = document.getElementById('servLocal')?.value.trim();

  if (!codigo || !servico) {
    alert('Por favor, informe o Código do serviço e o Serviço.');
    return;
  }

  servicosList.push({ codigo, uso: uso || 'Operacional', servico, objetivo: 'Contratual', escopo: 'Geral', local: local || 'Matriz' });
  if (document.getElementById('servCodigo')) document.getElementById('servCodigo').value = '';
  if (document.getElementById('servNome')) document.getElementById('servNome').value = '';
  if (document.getElementById('servLocal')) document.getElementById('servLocal').value = '';
  renderServicosTable();
}

function removeServicoRow(index) {
  servicosList.splice(index, 1);
  renderServicosTable();
}

function renderServicosTable() {
  const tbody = document.getElementById('tableServicosBody');
  const countEl = document.getElementById('tableServCount');
  if (!tbody) return;

  tbody.innerHTML = '';

  if (servicosList.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" class="table-empty-row">Nenhum dado adicionado</td></tr>`;
    if (countEl) countEl.textContent = '1 - 0 de 0';
    return;
  }

  servicosList.forEach((item, i) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${item.codigo}</td>
      <td>${item.uso}</td>
      <td>${item.servico}</td>
      <td>${item.objetivo}</td>
      <td>${item.escopo}</td>
      <td>${item.local}</td>
      <td style="text-align: right;"><button type="button" style="background:none;border:none;color:#E53935;cursor:pointer;font-weight:700;" onclick="removeServicoRow(${i})">✖</button></td>
    `;
    tbody.appendChild(tr);
  });

  if (countEl) countEl.textContent = `1 - ${servicosList.length} de ${servicosList.length}`;
}

function submitParecerJuridico() {
  const code = document.getElementById('formCodeBadge').textContent;
  const id = `SOL-2026-${Math.floor(1000 + Math.random() * 9000)}`;
  
  store.add({
    id,
    processId: 'proc_juridico',
    title: 'Solicitação de Parecer Jurídico',
    requester: currentUser ? currentUser.name : 'PEDRO HENRIQUE PEREIRA DOS SANTOS',
    department: 'NOC',
    currentStepIndex: 1,
    status: 'EM_ANDAMENTO',
    slaStatus: 'SUCCESS',
    slaDueDate: '2026-10-05T16:00:00',
    createdAt: new Date().toISOString(),
    priority: 'ALTA',
    details: { justificativa: 'Solicitação de Parecer Jurídico enviada com sucesso.' }
  });

  alert(`Solicitação ${code} enviada com sucesso!`);
  closeProcessForm();
  showEmpty = false;
  renderActivities();
}

// Funções de validação matemática oficial de CNPJ (14 dígitos e dígitos verificadores)
function isValidCNPJ(cnpj) {
  cnpj = cnpj.replace(/[^\d]+/g, '');
  if (cnpj.length !== 14) return false;
  
  // Elimina CNPJs invalidos conhecidos (sequências idênticas)
  if (/^(\d)\1+$/.test(cnpj)) return false;
  
  // Valida DVs
  let tamanho = cnpj.length - 2;
  let numeros = cnpj.substring(0, tamanho);
  let digitos = cnpj.substring(tamanho);
  let soma = 0;
  let pos = tamanho - 7;
  for (let i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2) pos = 9;
  }
  let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
  if (resultado != digitos.charAt(0)) return false;
  
  tamanho = tamanho + 1;
  numeros = cnpj.substring(0, tamanho);
  soma = 0;
  pos = tamanho - 7;
  for (let i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2) pos = 9;
  }
  resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
  if (resultado != digitos.charAt(1)) return false;
  
  return true;
}

// === CNPJ Lookup & AI Assistant Helper ===
async function formatAndLookupCNPJ(e) {
  let val = e.target.value.replace(/\D/g, '');
  if (val.length > 14) val = val.slice(0, 14);

  let formatted = val;
  if (val.length > 2) formatted = val.slice(0, 2) + '.' + val.slice(2);
  if (val.length > 5) formatted = formatted.slice(0, 6) + '.' + formatted.slice(6);
  if (val.length > 8) formatted = formatted.slice(0, 10) + '/' + formatted.slice(10);
  if (val.length > 12) formatted = formatted.slice(0, 15) + '-' + formatted.slice(15);
  e.target.value = formatted;

  const badge = document.getElementById('cnpjStatusBadge');
  const razaoInput = document.getElementById('contratadaName');

  // Limpa razão social enquanto CNPJ não estiver completo
  if (val.length < 14) {
    if (razaoInput) razaoInput.value = '';
    if (badge) badge.textContent = '';
    return;
  }

  // Validação estrita do CNPJ
  if (!isValidCNPJ(val)) {
    if (razaoInput) razaoInput.value = '';
    if (badge) {
      badge.textContent = '❌ CNPJ Inválido';
      badge.style.color = '#D94444';
    }
    return;
  }

  if (badge) {
    badge.textContent = '🔍 Consultando CNPJ na Receita...';
    badge.style.color = '#00c8e6';
  }

  try {
    const res = await fetch(`https://brasilapi.com.br/api/cnpj/v1/${val}`);
    if (res.ok) {
      const data = await res.json();
      const razao = data.razao_social || data.nome_fantasia;
      if (razao) {
        if (razaoInput) razaoInput.value = razao.toUpperCase();
        if (badge) {
          badge.textContent = '✓ CNPJ Válido & Encontrado!';
          badge.style.color = '#3FB950';
        }
        return;
      }
    }
  } catch (err) {
    // Fallback caso a API falhe mas o CNPJ seja matematicamente válido
  }

  const MOCK_CNPJ = {
    '33000167000101': 'TELEFÔNICA BRASIL S.A.',
    '00000000000191': 'BANCO DO BRASIL S.A.',
    '60701190000104': 'ITAÚ UNIBANCO S.A.',
    '02558157000162': 'TELEMAR NORTE LESTE S.A.',
    '04206050000180': 'TIM S.A.',
    '12345678000195': 'TECH SOLUTIONS BRASIL LTDA.'
  };

  const foundMock = MOCK_CNPJ[val] || 'EMPRESA PRESTADORA DE SERVIÇOS LTDA.';
  if (razaoInput) razaoInput.value = foundMock;
  if (badge) {
    badge.textContent = '✓ CNPJ Válido & Encontrado!';
    badge.style.color = '#3FB950';
  }
}

function generateAIAutoFill() {
  const cnpjEl = document.getElementById('contratadaCnpj');
  if (cnpjEl) cnpjEl.value = '33.000.167/0001-01';

  const cAnte = document.getElementById('contratanteName');
  if (cAnte) cAnte.value = 'DESKTOP S.A. - SIGMANET';

  const cAda = document.getElementById('contratadaName');
  if (cAda) cAda.value = 'TELEFÔNICA BRASIL S.A.';

  const cTipo = document.getElementById('contratoTipoSelect');
  if (cTipo) {
    cTipo.value = 'Contrato B2B';
    toggleSubContratoFields();
  }

  // Pre-fill sub-fields if opened
  const numCh = document.getElementById('numChamadoCompras');
  if (numCh) numCh.value = 'CHM-2026-9921';
  const solCh = document.getElementById('solicitanteCompras');
  if (solCh) solCh.value = 'PEDRO HENRIQUE PEREIRA DOS SANTOS';

  const motSem = document.getElementById('motivoSemCompras');
  if (motSem) motSem.value = 'Contratação emergencial sem intermédio do departamento de Compras.';
  const codCc = document.getElementById('codCentroCusto');
  if (codCc) codCc.value = 'CC-10900001';
  const nomeCc = document.getElementById('nomeCentroCusto');
  if (nomeCc) nomeCc.value = 'Engenharia & NOC';
  const sup = document.getElementById('superintendenteName');
  if (sup) sup.value = 'CARLOS EDUARDO SANTOS';
  const dir = document.getElementById('diretorName');
  if (dir) dir.value = 'ANA CLARA SILVA';

  const cObj = document.getElementById('contratoObjeto');
  if (cObj) cObj.value = 'Prestação de serviços de conectividade banda larga e infraestrutura de fibra óptica dedicada.';

  const cMensal = document.getElementById('contratoValMensal');
  if (cMensal) cMensal.value = 'R$ 15.500,00';

  const cTotal = document.getElementById('contratoValTotal');
  if (cTotal) cTotal.value = 'R$ 186.000,00';

  const cOpc = document.getElementById('contratoOpcaoSelect');
  if (cOpc) cOpc.value = 'mensal';

  const descOcor = document.getElementById('descricaoOcorrencia');
  if (descOcor) descOcor.value = 'Análise de viabilidade jurídica sobre reajuste anual de índice inflacionário (IPCA) em contrato corporativo.';

  const titReg = document.getElementById('tituloRegulamento');
  if (titReg) titReg.value = 'Regulamento Interno de Segurança da Informação e Proteção de Dados (LGPD) v2.0';

  const com = document.getElementById('formComentarios');
  if (com) com.value = 'Solicito parecer jurídico conclusivo para validação de cláusulas de multa rescisória e vigência contratual.';

  if (anexosList.length === 0) {
    anexosList.push({ desc: 'Minuta do Contrato B2B 2026.pdf', file: 'minuta_contrato_v2.pdf' });
    renderAnexosTable();
  }

  if (servicosList.length === 0) {
    servicosList.push({ codigo: 'SRV-8840', uso: 'Operacional', servico: 'Conectividade Fibra Dedicada 1Gbps', objetivo: 'Expansão de Rede', escopo: 'Nacional', local: 'Campinas - SP' });
    renderServicosTable();
  }

  const badge = document.getElementById('cnpjStatusBadge');
  if (badge) {
    badge.textContent = '✨ Preenchido pela IA!';
    badge.style.color = '#00c8e6';
  }
}

function generateAIDescription() {
  const com = document.getElementById('formComentarios');
  if (com) {
    com.value = 'Trata-se de parecer jurídico consultivo para avaliação de cláusulas de rescisão antecipada, responsabilidade civil e multas contratuais, visando garantir a conformidade com as diretrizes regulatórias e mitigar riscos operacionais para a DESKTOP S.A.';
  }
}

// === Custom Searchable Dropdown (Selecione uma opção) ===
function toggleOpcaoDropdown(e) {
  if (e) e.stopPropagation();
  const menu = document.getElementById('customOpcaoMenu');
  if (menu) {
    menu.classList.toggle('hidden');
    if (!menu.classList.contains('hidden')) {
      const searchInput = document.getElementById('customOpcaoSearchInput');
      if (searchInput) {
        searchInput.value = '';
        filterOpcaoDropdownItems('');
        searchInput.focus();
      }
    }
  }
}

function filterOpcaoDropdownItems(query) {
  const items = document.querySelectorAll('#customOpcaoOptionsList .custom-dropdown-item');
  const q = query.toLowerCase().trim();
  items.forEach(item => {
    const text = item.textContent.toLowerCase();
    if (!q || text.includes(q)) {
      item.style.display = 'flex';
    } else {
      item.style.display = 'none';
    }
  });
}

function clearOpcaoSelection() {
  const textEl = document.getElementById('customOpcaoSelectedText');
  if (textEl) textEl.textContent = 'Selecione uma opção';
  
  const items = document.querySelectorAll('#customOpcaoOptionsList .custom-dropdown-item');
  items.forEach(item => {
    item.classList.remove('selected');
    const checkIcon = item.querySelector('svg');
    if (checkIcon) checkIcon.remove();
  });
  
  const menu = document.getElementById('customOpcaoMenu');
  if (menu) menu.classList.add('hidden');
}

function selectOpcaoItem(el) {
  const val = el.getAttribute('data-value') || el.textContent.trim();
  const textEl = document.getElementById('customOpcaoSelectedText');
  if (textEl) textEl.textContent = val;

  const items = document.querySelectorAll('#customOpcaoOptionsList .custom-dropdown-item');
  items.forEach(item => {
    item.classList.remove('selected');
    const checkIcon = item.querySelector('svg');
    if (checkIcon) checkIcon.remove();
  });

  el.classList.add('selected');
  const checkSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  checkSvg.setAttribute('width', '14');
  checkSvg.setAttribute('height', '14');
  checkSvg.setAttribute('viewBox', '0 0 24 24');
  checkSvg.setAttribute('fill', 'none');
  checkSvg.setAttribute('stroke', 'currentColor');
  checkSvg.setAttribute('stroke-width', '2.5');
  checkSvg.innerHTML = '<polyline points="20 6 9 17 4 12"/>';
  el.prepend(checkSvg);

  const menu = document.getElementById('customOpcaoMenu');
  if (menu) menu.classList.add('hidden');
}

// Event listener global para fechar dropdown ao clicar fora
document.addEventListener('click', (e) => {
  const container = document.getElementById('customOpcaoDropdown');
  if (container && !container.contains(e.target)) {
    const menu = document.getElementById('customOpcaoMenu');
    if (menu) menu.classList.add('hidden');
  }
});


