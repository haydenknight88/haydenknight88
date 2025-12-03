document.addEventListener("DOMContentLoaded", () => {
  console.log("document successfully loaded");

  const btn = document.getElementById('btnClicky');
  if (btn) btn.addEventListener('click', btnClicky);

  loadAchievements();
  loadProjects();
});

async function loadAchievements() {
  try {
    const res = await fetch('data/achievements.json');
    if (!res.ok) throw new Error(res.statusText);
    const data = await res.json();
    renderAchievements(data);
  } catch (err) {
    console.error('Failed to load achievements', err);
  }
}

function renderAchievements(items) {
  const container = document.getElementById('achievements-list');
  if (!container) return;
  container.innerHTML = '';
  items.forEach(item => {
    const el = document.createElement('div');
    el.className = 'card mb-2';
    el.innerHTML = `\
      <div class="row g-0 align-items-center">\
        <div class="col-auto p-2">\
          <img src="${item.image}" alt="${item.name}" style="height:64px; width:auto;">\
        </div>\
        <div class="col p-2">\
          <div class="card-body py-2">\
            <h5 class="card-title mb-1">${item.name}</h5>\
            <p class="card-text small mb-0">${item.description}</p>\
          </div>\
        </div>\
      </div>\
    `;
    container.appendChild(el);
  });
}

async function loadProjects() {
  try {
    const res = await fetch('data/projects.json');
    if (!res.ok) throw new Error(res.statusText);
    const data = await res.json();
    renderProjects(data);
  } catch (err) {
    console.error('Failed to load projects', err);
  }
}

function renderProjects(items) {
  const container = document.getElementById('projects-list');
  if (!container) return;
  container.innerHTML = '';
  items.forEach(item => {
    const el = document.createElement('div');
    el.className = 'card mb-2';
    el.innerHTML = `\
      <div class="row g-0 align-items-center">\
        <div class="col-auto p-2">\
          <img src="${item.image}" alt="${item.title}" style="height:64px; width:auto;">\
        </div>\
        <div class="col p-2">\
          <div class="card-body py-2">\
            <h5 class="card-title mb-1">${item.title}</h5>\
            <p class="card-text small mb-1">${item.description}</p>\
            <a href="${item.link}" target="_blank" rel="noopener noreferrer" class="stretched-link small">Visit</a>\
          </div>\
        </div>\
      </div>\
    `;
    container.appendChild(el);
  });
}

function btnClicky () {
  console.log('in btnClicky event');
  const btn = document.getElementById('btnClicky');
  if (!btn) return;
  btn.style.transform = 'rotate(15deg)';
  console.log('after rotation');
}


