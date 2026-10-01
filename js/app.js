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

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  renderActivities();
  initModal();
  initSearch();
});

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
function openNewProcessWizard() { document.getElementById('modalNew').classList.add('active'); }
function closeNew() { document.getElementById('modalNew').classList.remove('active'); }

function createProcess(e) {
  e.preventDefault();
  const id = `SOL-2026-${Math.floor(1000 + Math.random() * 9000)}`;
  store.add({
    id, processId: document.getElementById('nType').value,
    title: document.getElementById('nTitle').value,
    requester: document.getElementById('nRequester').value,
    department: 'Engenharia de Processos',
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
