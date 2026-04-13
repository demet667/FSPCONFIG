const games = [
  {
    id: 1,
    name: "Cyberpunk 2077",
    subtitle: "CD Projekt Red — 2020",
    icon: "🌆",
    iconBg: "#1a1040",
    genre: "RPG",
    genreColor: "#7c3aed",
    genreTextColor: "#c4b5fd",
    filter: "rpg",
    resolutions: ["1080p", "1440p", "4K"],
    tiers: [
      {
        level: "ultra", label: "Ultra", fps: "120+", fpsVal: 120,
        gpu: "RTX 4090", cpu: "Intel i9-14900K", ram: "32 Go DDR5",
        preset: "Ultra + RT ON + DLSS Quality", power: "850W",
        desc: "4K natif avec Path Tracing activé, DLSS 3.5 Frame Gen"
      },
      {
        level: "high", label: "High", fps: "90+", fpsVal: 90,
        gpu: "RTX 4070 Ti", cpu: "Ryzen 7 7700X", ram: "32 Go DDR5",
        preset: "Ultra 1440p, RT Medium, DLSS Balanced", power: "750W",
        desc: "1440p fluide avec ray tracing modéré"
      },
      {
        level: "mid", label: "Mid", fps: "60+", fpsVal: 60,
        gpu: "RTX 4060 Ti", cpu: "Ryzen 5 7600", ram: "16 Go DDR5",
        preset: "High 1080p, sans RT, DLSS Performance", power: "650W",
        desc: "1080p stable 60 FPS, RT désactivé"
      },
      {
        level: "low", label: "Low", fps: "30+", fpsVal: 30,
        gpu: "RX 6700 XT", cpu: "Intel i5-12400F", ram: "16 Go DDR4",
        preset: "Medium 1080p, RT OFF, FSR Performance", power: "600W",
        desc: "1080p jouable avec FSR, compromis graphique"
      }
    ],
    tips: "Activez DLSS ou FSR en mode Qualité pour un gain massif de FPS sans perte visuelle notable. Le Path Tracing exige obligatoirement une RTX 40xx.",
    settings: [
      { label: "Ray Tracing", value: "Selon GPU" },
      { label: "DLSS / FSR", value: "Recommandé" },
      { label: "Crowd Density", value: "Bas si lent" },
      { label: "Volumetric Fog", value: "Très gourmand" }
    ]
  },
  {
    id: 2,
    name: "Counter-Strike 2",
    subtitle: "Valve — 2023",
    icon: "🎯",
    iconBg: "#0d1f0d",
    genre: "FPS",
    genreColor: "#059669",
    genreTextColor: "#6ee7b7",
    filter: "fps-game",
    resolutions: ["1080p", "1440p", "4K"],
    tiers: [
      {
        level: "ultra", label: "Ultra", fps: "360+", fpsVal: 360,
        gpu: "RTX 4090", cpu: "Intel i9-14900K", ram: "32 Go DDR5",
        preset: "Max 1080p / 1440p, 360Hz", power: "850W",
        desc: "Performance e-sport extrême, 360Hz natif en 1080p"
      },
      {
        level: "high", label: "High", fps: "240+", fpsVal: 240,
        gpu: "RTX 4070", cpu: "Ryzen 7 7700X", ram: "16 Go DDR5",
        preset: "High 1440p, 240Hz", power: "700W",
        desc: "240Hz stable en 1440p, idéal pour les joueurs compétitifs"
      },
      {
        level: "mid", label: "Mid", fps: "144+", fpsVal: 144,
        gpu: "RTX 4060 / RX 7600", cpu: "Ryzen 5 7600", ram: "16 Go DDR4",
        preset: "Medium 1080p, 144Hz", power: "550W",
        desc: "144Hz fluide, excellent pour les joueurs semi-pro"
      },
      {
        level: "low", label: "Low", fps: "60+", fpsVal: 60,
        gpu: "GTX 1660 Super", cpu: "Intel i5-10400F", ram: "16 Go DDR4",
        preset: "Low 1080p, 60Hz minimum", power: "450W",
        desc: "Configuration d'entrée, viable pour jouer détendu"
      }
    ],
    tips: "CS2 est très CPU-dépendant ! Priorisez un processeur haute fréquence. Réduisez les ombres pour maximiser le FPS compétitif.",
    settings: [
      { label: "Ombres", value: "Très bas" },
      { label: "Multi-sampling", value: "8x MSAA max" },
      { label: "Boost Player Contrast", value: "Activé" },
      { label: "Model Quality", value: "High" }
    ]
  },
  {
    id: 3,
    name: "Fortnite",
    subtitle: "Epic Games — 2017",
    icon: "⚡",
    iconBg: "#1a1200",
    genre: "Battle Royale",
    genreColor: "#d97706",
    genreTextColor: "#fcd34d",
    filter: "battle-royale",
    resolutions: ["1080p", "1440p", "4K"],
    tiers: [
      {
        level: "ultra", label: "Ultra", fps: "240+", fpsVal: 240,
        gpu: "RTX 4080", cpu: "Intel i9-14900K", ram: "32 Go DDR5",
        preset: "Épique 1440p, Nanites + Lumen", power: "800W",
        desc: "Nanite + Lumen actifs, rendu Unreal Engine 5 maximal"
      },
      {
        level: "high", label: "High", fps: "144+", fpsVal: 144,
        gpu: "RTX 4070", cpu: "Ryzen 7 7700", ram: "16 Go DDR5",
        preset: "Élevé 1440p, TSR High", power: "700W",
        desc: "1440p stable 144Hz, TSR activé"
      },
      {
        level: "mid", label: "Mid", fps: "100+", fpsVal: 100,
        gpu: "RX 6700 XT", cpu: "Ryzen 5 5600X", ram: "16 Go DDR4",
        preset: "Moyen 1080p, TSR Performance", power: "600W",
        desc: "100+ FPS en 1080p, confortable pour le compétitif"
      },
      {
        level: "low", label: "Low", fps: "60+", fpsVal: 60,
        gpu: "GTX 1660 / RX 580", cpu: "Intel i5-9400F", ram: "8 Go DDR4",
        preset: "Bas 1080p, tout en bas", power: "400W",
        desc: "Mode performance, visuels réduits au minimum"
      }
    ],
    tips: "Fortnite en mode Performance (DX11) peut doubler les FPS sur configs moyennes. Désactivez Nanite et Lumen pour le jeu compétitif.",
    settings: [
      { label: "Mode Performance", value: "Recommandé <60FPS" },
      { label: "Nanite", value: "Off en compétitif" },
      { label: "Lumen", value: "Off si limité" },
      { label: "3D Resolution", value: "67-100%" }
    ]
  },
  {
    id: 4,
    name: "League of Legends",
    subtitle: "Riot Games — 2009",
    icon: "⚔️",
    iconBg: "#0d1628",
    genre: "MOBA",
    genreColor: "#1d4ed8",
    genreTextColor: "#93c5fd",
    filter: "moba",
    resolutions: ["1080p", "1440p", "4K"],
    tiers: [
      {
        level: "ultra", label: "Ultra", fps: "300+", fpsVal: 300,
        gpu: "RTX 4070", cpu: "Intel i7-14700K", ram: "16 Go DDR5",
        preset: "Ultra, 1440p, 300Hz", power: "650W",
        desc: "FPS illimité, 1440p ultra, expérience e-sport parfaite"
      },
      {
        level: "high", label: "High", fps: "200+", fpsVal: 200,
        gpu: "RTX 3060 Ti", cpu: "Ryzen 5 7600", ram: "16 Go DDR4",
        preset: "High 1080p, 240Hz possible", power: "550W",
        desc: "200 FPS stable, confort optimal pour le classé"
      },
      {
        level: "mid", label: "Mid", fps: "144+", fpsVal: 144,
        gpu: "GTX 1660", cpu: "Intel i5-10400", ram: "8 Go DDR4",
        preset: "Medium 1080p, 144Hz", power: "430W",
        desc: "144 FPS constant, parfait pour les écrans 144Hz"
      },
      {
        level: "low", label: "Low", fps: "60+", fpsVal: 60,
        gpu: "GT 1030 / iGPU", cpu: "Intel i3-12100", ram: "8 Go DDR4",
        preset: "Bas 1080p, tout désactivé", power: "300W",
        desc: "LoL tourne sur presque tout, même les iGPU Intel"
      }
    ],
    tips: "LoL est très peu gourmand. Limitez les FPS à 144 ou 240 pour réduire la chaleur. Désactivez les ombres pour gagner 20-30 FPS.",
    settings: [
      { label: "Ombres", value: "Bas ou off" },
      { label: "Effets de caractère", value: "Bas en clash" },
      { label: "Resolution Scale", value: "100%" },
      { label: "Anti-aliasing", value: "Au choix" }
    ]
  },
  {
    id: 5,
    name: "Microsoft Flight Sim 2024",
    subtitle: "Asobo — 2024",
    icon: "✈️",
    iconBg: "#001a2e",
    genre: "Simulation",
    genreColor: "#0284c7",
    genreTextColor: "#7dd3fc",
    filter: "simulation",
    resolutions: ["1080p", "1440p", "4K"],
    tiers: [
      {
        level: "ultra", label: "Ultra", fps: "60+", fpsVal: 60,
        gpu: "RTX 4090", cpu: "Intel i9-14900K", ram: "64 Go DDR5",
        preset: "Ultra 4K, LOD max", power: "1000W",
        desc: "4K ultra avec LOD maximal, streaming assets optimal"
      },
      {
        level: "high", label: "High", fps: "45+", fpsVal: 45,
        gpu: "RTX 4080", cpu: "Ryzen 9 7900X", ram: "32 Go DDR5",
        preset: "High 1440p, DLSS Quality", power: "850W",
        desc: "1440p fluide avec DLSS, très immersif"
      },
      {
        level: "mid", label: "Mid", fps: "30+", fpsVal: 30,
        gpu: "RTX 4070 Ti", cpu: "Ryzen 7 7700X", ram: "32 Go DDR5",
        preset: "Medium 1080p, TAA", power: "750W",
        desc: "30 FPS stable, acceptable pour la simulation"
      },
      {
        level: "low", label: "Low", fps: "20+", fpsVal: 20,
        gpu: "RTX 3080", cpu: "Intel i7-12700K", ram: "32 Go DDR4",
        preset: "Bas 1080p, services offline", power: "700W",
        desc: "Jouable mais visuels dégradés, très exigeant même en low"
      }
    ],
    tips: "MSFS est l'un des jeux les plus exigeants. La connexion internet affecte les perfs via le streaming Bing Maps. Priorisez RAM et CPU.",
    settings: [
      { label: "Terrain LOD", value: "Impact CPU majeur" },
      { label: "Online Functionality", value: "Haut débit requis" },
      { label: "Nuages volumétriques", value: "Très gourmand" },
      { label: "TLOD at altitude", value: "Réduire si lag" }
    ]
  },
  {
    id: 6,
    name: "Valorant",
    subtitle: "Riot Games — 2020",
    icon: "🔫",
    iconBg: "#1a0505",
    genre: "FPS",
    genreColor: "#dc2626",
    genreTextColor: "#fca5a5",
    filter: "fps-game",
    resolutions: ["1080p", "1440p"],
    tiers: [
      {
        level: "ultra", label: "Ultra", fps: "360+", fpsVal: 360,
        gpu: "RTX 4070", cpu: "Intel i9-13900K", ram: "32 Go DDR5",
        preset: "Low competitive, 360Hz", power: "700W",
        desc: "360+ FPS constant pour moniteur 360Hz e-sport"
      },
      {
        level: "high", label: "High", fps: "240+", fpsVal: 240,
        gpu: "RTX 4060", cpu: "Ryzen 7 7700X", ram: "16 Go DDR5",
        preset: "Low 1080p, 240Hz", power: "550W",
        desc: "240 FPS très stable, optimal pour le classé"
      },
      {
        level: "mid", label: "Mid", fps: "144+", fpsVal: 144,
        gpu: "GTX 1660 Super", cpu: "Ryzen 5 5600X", ram: "16 Go DDR4",
        preset: "Medium 1080p, 144Hz", power: "450W",
        desc: "144 FPS confortable, très bon pour la compétition"
      },
      {
        level: "low", label: "Low", fps: "60+", fpsVal: 60,
        gpu: "GT 1030 / iGPU", cpu: "Intel i3 n'importe lequel", ram: "8 Go DDR4",
        preset: "Tout en bas, 1080p ou 900p", power: "250W",
        desc: "Valorant est très accessible, tourne partout"
      }
    ],
    tips: "Pour Valorant compétitif, réduisez TOUS les paramètres graphiques au minimum. Le CPU prime sur le GPU — choisissez un bon processeur.",
    settings: [
      { label: "Anti-aliasing", value: "MSAA x4" },
      { label: "Anisotropic Filtering", value: "16x" },
      { label: "All Detail", value: "Low ou Off" },
      { label: "Distortion", value: "Off" }
    ]
  }
];
 
function getFpsBarWidth(fpsVal) {
  const max = 360;
  return Math.min(100, Math.round((fpsVal / max) * 100));
}
 
function renderCard(game) {
  return `
  <div class="game-card" data-id="${game.id}" data-filter="${game.filter}">
    <div class="card-header">
      <div class="game-icon" style="background:${game.iconBg}">${game.icon}</div>
      <div>
        <div class="card-title">${game.name}</div>
        <div class="card-subtitle">${game.subtitle}</div>
      </div>
      <div class="card-genre" style="background:${game.genreColor}22;color:${game.genreTextColor};border:1px solid ${game.genreColor}44">${game.genre}</div>
    </div>
 
    <div class="fps-tiers">
      ${game.tiers.map(t => `
        <div class="fps-tier tier-${t.level}">
          <div class="tier-badge">${t.label}</div>
          <div class="tier-fps">${t.fps} <span>FPS</span></div>
          <div class="tier-specs">
            <strong>${t.gpu} • ${t.cpu}</strong>
            ${t.desc}
          </div>
          <div class="fps-bar-wrap">
            <div class="fps-bar-label">${t.fps}</div>
            <div class="fps-bar">
              <div class="fps-bar-fill" style="width:${getFpsBarWidth(t.fpsVal)}%"></div>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
 
    <div class="detail-panel" id="detail-${game.id}">
      <div class="detail-col">
        <h4>Paramètres clés</h4>
        ${game.settings.map(s => `
          <div class="detail-row">
            <span class="label">${s.label}</span>
            <span class="value">${s.value}</span>
          </div>
        `).join('')}
      </div>
      <div class="detail-col">
        <h4>Résolutions supportées</h4>
        ${game.resolutions.map(r => `
          <div class="detail-row">
            <span class="label">${r}</span>
            <span class="value" style="color:#06b6d4">✓ Testé</span>
          </div>
        `).join('')}
      </div>
      <div class="detail-col">
        <h4>Conseil Pro</h4>
        <div class="tip-box"><strong>💡 Tip :</strong> ${game.tips}</div>
      </div>
    </div>
 
    <div class="card-footer">
      <div class="resolution-tags">
        ${game.resolutions.map(r => `<span class="res-tag">${r}</span>`).join('')}
      </div>
      <button class="card-expand-btn" data-id="${game.id}">Détails ▾</button>
    </div>
  </div>`;
}
 
function renderGrid(filteredGames) {
  const grid = document.getElementById('gamesGrid');
  grid.innerHTML = filteredGames.map(renderCard).join('');
  attachListeners();
}
 
function attachListeners() {
  document.querySelectorAll('.card-expand-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const id = btn.dataset.id;
      const panel = document.getElementById(`detail-${id}`);
      const isOpen = panel.classList.contains('open');
      document.querySelectorAll('.detail-panel').forEach(p => p.classList.remove('open'));
      document.querySelectorAll('.card-expand-btn').forEach(b => b.textContent = 'Détails ▾');
      if (!isOpen) {
        panel.classList.add('open');
        btn.textContent = 'Fermer ▴';
      }
    });
  });
}
 
function filterAndSearch() {
  const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;
  const search = document.getElementById('searchInput').value.toLowerCase();
  const filtered = games.filter(g => {
    const matchFilter = activeFilter === 'all' || g.filter === activeFilter;
    const matchSearch = g.name.toLowerCase().includes(search) || g.genre.toLowerCase().includes(search);
    return matchFilter && matchSearch;
  });
  renderGrid(filtered);
}
 
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    filterAndSearch();
  });
});
 
document.getElementById('searchInput').addEventListener('input', filterAndSearch);
 
renderGrid(games);