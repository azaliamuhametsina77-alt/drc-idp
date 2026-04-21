const DATA_FILES = {
  provinces: './geoBoundaries-COD-ADM1(1).geojson'
};

const PROVINCE_DATA = {
  'Ituri': { methodology: 'Mobility Tracking', zs: 36, idps: 903282, returnees: 743010 },
  'North Kivu': { methodology: 'Mobility Tracking', zs: 34, idps: 1152383, returnees: 1994944 },
  'South Kivu': { methodology: 'Mobility Tracking', zs: 34, idps: 1201673, returnees: 912692 },
  'Tanganyika': { methodology: 'Mobility Tracking', zs: 11, idps: 253957, returnees: 91342 },
  'Lower Uele': { methodology: 'Mobility Tracking Light', zs: 11, idps: 6206, returnees: 36737 },
  'Équateur': { methodology: 'Mobility Tracking Light', zs: 18, idps: 78335, returnees: 700902 },
  'Haut-Katanga': { methodology: 'Mobility Tracking Light', zs: 27, idps: 21607, returnees: 6323 },
  'Haut-Lomami': { methodology: 'Mobility Tracking Light', zs: 16, idps: 361169, returnees: 2955 },
  'Upper Uele': { methodology: 'Mobility Tracking Light', zs: 13, idps: 2245, returnees: 5340 },
  'Kasai': { methodology: 'Mobility Tracking Light', zs: 18, idps: 46029, returnees: 18588 },
  'Central Kasai': { methodology: 'Mobility Tracking Light', zs: 26, idps: 25657, returnees: 8216 },
  'Kasai-Oriental': { methodology: 'Mobility Tracking Light', zs: 19, idps: 13261, returnees: 1542 },
  'Kinshasa': { methodology: 'Mobility Tracking / MT Light', zs: 35, idps: 85651, returnees: 66818 },
  'Kongo-Central': { methodology: 'Mobility Tracking Light', zs: 31, idps: 978, returnees: 2208 },
  'Kwango': { methodology: 'Mobility Tracking / MT Light', zs: 14, idps: 49392, returnees: 16631 },
  'Kwilu': { methodology: 'Mobility Tracking / MT Light', zs: 24, idps: 72006, returnees: 21220 },
  'Lomami': { methodology: 'Mobility Tracking Light', zs: 16, idps: 27849, returnees: 161328 },
  'Lualaba': { methodology: 'Mobility Tracking Light', zs: 14, idps: 5296, returnees: null },
  'Mai-Ndombe': { methodology: 'Mobility Tracking / MT Light', zs: 14, idps: 39481, returnees: 97118 },
  'Maniema': { methodology: 'Mobility Tracking Light', zs: 18, idps: 146743, returnees: 85730 },
  'Mongala': { methodology: 'Mobility Tracking Light', zs: 12, idps: 10613, returnees: 30216 },
  'Nord-Ubangi': { methodology: 'Mobility Tracking Light', zs: 11, idps: 1226, returnees: null },
  'Sankuru': { methodology: 'Mobility Tracking Light', zs: 16, idps: 19776, returnees: 9342 },
  'Sud-Ubangi': { methodology: 'Mobility Tracking Light', zs: 16, idps: null, returnees: 78000 },
  'Tshopo': { methodology: 'Mobility Tracking Light', zs: 22, idps: 386275, returnees: 161607 },
  'Tshuapa': { methodology: 'Mobility Tracking Light', zs: 12, idps: 4425, returnees: null }
};

const PROVINCE_RU = {
  'Upper Uele': 'Верхнее Уэле',
  'Ituri': 'Итури',
  'Tshopo': 'Чопо',
  'Lower Uele': 'Нижнее Уэле',
  'Mongala': 'Монгала',
  'Nord-Ubangi': 'Северное Убанги',
  'Tshuapa': 'Чуапа',
  'Équateur': 'Экватёр',
  'Haut-Katanga': 'Верхняя Катанга',
  'Haut-Lomami': 'Верхнее Ломами',
  'Kongo-Central': 'Конго-Сентрал',
  'Kwango': 'Кванго',
  'Sankuru': 'Санкуру',
  'Sud-Ubangi': 'Южное Убанги',
  'Tanganyika': 'Танганьика',
  'Kasai': 'Касаи',
  'Kasai-Oriental': 'Восточное Касаи',
  'Maniema': 'Маниема',
  'North Kivu': 'Северное Киву',
  'South Kivu': 'Южное Киву',
  'Central Kasai': 'Центральное Касаи',
  'Lomami': 'Ломами',
  'Lualaba': 'Луалаба',
  'Kinshasa': 'Киншаса',
  'Kwilu': 'Квилу',
  'Mai-Ndombe': 'Маи-Ндомбе'
};

const MODES = {
  idps: {
    legendTitle: 'Интенсивность',
    legendMin: '0',
    info: 'Эта карта показывает число внутренне перемещённых лиц по провинциям ДР Конго. Чем темнее синий цвет — тем больше ВПЛ зафиксировано в провинции. При наведении или клике показываются точные значения и методология. <br><br>Источник данных: International Organisation for Migration (IOM), Displacement Tracking Matrix (DTM), Democratic Republic of the Congo, Country Displacement Overview.'
  },
  returnees: {
    legendTitle: 'Интенсивность',
    legendMin: '0',
    info: 'Этот режим показывает число возвращенцев по провинциям ДР Конго. Чем темнее синий цвет — тем больше людей были учтены как returnees. При наведении или клике показываются точные значения и методология. <br><br>Источник данных: International Organisation for Migration (IOM), Displacement Tracking Matrix (DTM), Democratic Republic of the Congo, Country Displacement Overview.'
  },
  balance: {
    legendTitle: 'Сравнение',
    legendMin: 'ВПЛ ≥ возвращенцев',
    legendMax: 'Возвращенцев больше',
    info: 'Этот режим показывает, где число возвращенцев превышает число внутренне перемещённых лиц. Голубым выделены провинции, где возвращенцев больше, чем ВПЛ. Тёмным — провинции, где ВПЛ больше, показатели равны или данных недостаточно для сравнения. <br><br>Источник данных: International Organisation for Migration (IOM), Displacement Tracking Matrix (DTM), Democratic Republic of the Congo, Country Displacement Overview.'
  }
};

const state = {
  hoveredProvince: null,
  lockedProvince: null,
  provinceGeoJSON: null,
  currentMode: 'idps',
  maxValues: {
    idps: 0,
    returnees: 0
  }
};

const statusEl = document.getElementById('status');
const legendTitle = document.getElementById('legendTitle');
const legendScale = document.getElementById('legendScale');
const legendMin = document.getElementById('legendMin');
const legendMax = document.getElementById('legendMax');
const hoverTooltip = document.getElementById('hoverTooltip');
const infoPanel = document.getElementById('infoPanel');
const infoToggle = document.getElementById('infoToggle');
const infoCopy = document.getElementById('infoCopy');
const modeButtons = Array.from(document.querySelectorAll('.mode-btn'));

let map;

function setStatus(message, hide = false) {
  statusEl.textContent = message;
  statusEl.classList.toggle('is-hidden', hide);
}

function formatNumber(value) {
  if (typeof value !== 'number' || Number.isNaN(value)) return 'нет данных';
  return new Intl.NumberFormat('ru-RU').format(value);
}

function normalizeValue(value, maxValue) {
  if (typeof value !== 'number' || value <= 0 || !maxValue) return 0;
  return value / maxValue;
}

function enrichProvinces(geojson) {
  const maxIdps = Math.max(...Object.values(PROVINCE_DATA).map((item) => item.idps).filter((v) => typeof v === 'number'));
  const maxReturnees = Math.max(...Object.values(PROVINCE_DATA).map((item) => item.returnees).filter((v) => typeof v === 'number'));

  const enriched = {
    ...geojson,
    features: geojson.features.map((feature, index) => {
      const shapeName = feature.properties.shapeName;
      const record = PROVINCE_DATA[shapeName] || {};
      const idps = typeof record.idps === 'number' ? record.idps : null;
      const returnees = typeof record.returnees === 'number' ? record.returnees : null;
      const balance = typeof idps === 'number' && typeof returnees === 'number' ? Number(returnees > idps) : null;

      return {
        ...feature,
        id: index,
        properties: {
          ...feature.properties,
          province_en: shapeName,
          province_ru: PROVINCE_RU[shapeName] || shapeName,
          methodology: record.methodology || 'нет данных',
          idps,
          returnees,
          idps_norm: typeof idps === 'number' ? normalizeValue(idps, maxIdps) : -1,
          returnees_norm: typeof returnees === 'number' ? normalizeValue(returnees, maxReturnees) : -1,
          balance_flag: balance,
          has_idps: typeof idps === 'number',
          has_returnees: typeof returnees === 'number',
          has_balance: balance !== null
        }
      };
    })
  };

  return { enriched, maxIdps, maxReturnees };
}

function buildGeoBounds(geojson) {
  const bounds = new maplibregl.LngLatBounds();
  geojson.features.forEach((feature) => {
    const geom = feature.geometry;
    const parts = geom.type === 'Polygon' ? [geom.coordinates] : geom.coordinates;
    parts.forEach((poly) => {
      poly.forEach((ring) => {
        ring.forEach(([lng, lat]) => bounds.extend([lng, lat]));
      });
    });
  });
  return bounds;
}

function createMap() {
  map = new maplibregl.Map({
    container: 'map',
    style: {
      version: 8,
      glyphs: 'https://demotiles.maplibre.org/font/{fontstack}/{range}.pbf',
      sources: {},
      layers: [
        {
          id: 'background',
          type: 'background',
          paint: { 'background-color': '#0a0a0b' }
        }
      ]
    },
    attributionControl: false,
    dragRotate: false,
    touchZoomRotate: true
  });

  map.addControl(new maplibregl.NavigationControl({ showCompass: false }), 'bottom-right');
}

function installSources(provincesGeoJSON) {
  map.addSource('provinces', {
    type: 'geojson',
    data: provincesGeoJSON
  });
}

function buildFillColorExpression() {
  return [
    'case',
    ['==', ['get', 'display_mode'], 'balance'],
    [
      'case',
      ['==', ['get', 'balance_flag'], 1], '#4FC3F7',
      ['==', ['get', 'balance_flag'], 0], '#16181c',
      '#16181c'
    ],
    ['==', ['get', 'display_mode'], 'returnees'],
    [
      'case',
      ['<', ['get', 'returnees_norm'], 0], '#16181c',
      [
        'interpolate', ['linear'], ['get', 'returnees_norm'],
        0, '#c9dce5',
        0.08, '#b6d5e2',
        0.18, '#9acde3',
        0.32, '#7bc8e8',
        0.50, '#4FC3F7',
        0.72, '#35a9dc',
        1, '#1f6f96'
      ]
    ],
    [
      'case',
      ['<', ['get', 'idps_norm'], 0], '#16181c',
      [
        'interpolate', ['linear'], ['get', 'idps_norm'],
        0, '#c9dce5',
        0.08, '#b6d5e2',
        0.18, '#9acde3',
        0.32, '#7bc8e8',
        0.50, '#4FC3F7',
        0.72, '#35a9dc',
        1, '#1f6f96'
      ]
    ]
  ];
}

function installLayers() {
  map.addLayer({
    id: 'provinces-fill',
    type: 'fill',
    source: 'provinces',
    paint: {
      'fill-color': buildFillColorExpression(),
      'fill-opacity': 0.95
    }
  });

  map.addLayer({
    id: 'provinces-active',
    type: 'fill',
    source: 'provinces',
    paint: {
      'fill-color': [
        'case',
        ['boolean', ['feature-state', 'selected'], false], 'rgba(255,255,255,0.12)',
        ['boolean', ['feature-state', 'hovered'], false], 'rgba(255,255,255,0.08)',
        'rgba(0,0,0,0)'
      ],
      'fill-opacity': 1
    }
  });

  map.addLayer({
    id: 'provinces-outline',
    type: 'line',
    source: 'provinces',
    paint: {
      'line-color': [
        'case',
        ['boolean', ['feature-state', 'selected'], false], 'rgba(255,255,255,0.72)',
        ['boolean', ['feature-state', 'hovered'], false], 'rgba(255,255,255,0.44)',
        'rgba(255,255,255,0.18)'
      ],
      'line-width': [
        'case',
        ['boolean', ['feature-state', 'selected'], false], 2.1,
        ['boolean', ['feature-state', 'hovered'], false], 1.7,
        1.15
      ]
    }
  });

  map.addLayer({
    id: 'provinces-label',
    type: 'symbol',
    source: 'provinces',
    layout: {
      'text-field': ['get', 'province_ru'],
      'text-font': ['Open Sans Semibold'],
      'text-size': [
        'interpolate',
        ['linear'],
        ['zoom'],
        4, 10,
        6, 12,
        8, 14
      ],
      'text-allow-overlap': false,
      'text-ignore-placement': false
    },
    paint: {
      'text-color': 'rgba(235,242,249,0.94)',
      'text-halo-color': 'rgba(10,10,11,0.94)',
      'text-halo-width': 1.6
    }
  });
}

function updateFeatureStates() {
  if (!state.provinceGeoJSON) return;

  state.provinceGeoJSON.features.forEach((feature) => {
    const provinceName = feature.properties.province_en;
    map.setFeatureState(
      { source: 'provinces', id: feature.id },
      {
        hovered: state.hoveredProvince === provinceName && state.lockedProvince !== provinceName,
        selected: state.lockedProvince === provinceName
      }
    );
  });
}

function getProvinceFeatureAtPoint(point) {
  const features = map.queryRenderedFeatures(point, {
    layers: ['provinces-fill']
  });
  return features[0] || null;
}

function buildDifferenceLine(properties) {
  if (!properties.has_idps || !properties.has_returnees) {
    return `<div class="tooltip-line">Разница: <strong>нет данных</strong></div>`;
  }

  const diff = properties.returnees - properties.idps;

  if (diff > 0) {
    return `<div class="tooltip-line">Возвращенцев больше на: <strong>${formatNumber(diff)}</strong></div>`;
  }

  if (diff < 0) {
    return `<div class="tooltip-line">Возвращенцев меньше на: <strong>${formatNumber(Math.abs(diff))}</strong></div>`;
  }

  return `<div class="tooltip-line">Разница: <strong>0</strong></div>`;
}

function buildTooltipHTML(feature) {
  const p = feature.properties;
  const lines = [
    `<div class="tooltip-title">${p.province_ru}</div>`,
    `<div class="tooltip-line">ВПЛ: <strong>${formatNumber(p.idps)}</strong></div>`,
    `<div class="tooltip-line">Возвращенцы: <strong>${formatNumber(p.returnees)}</strong></div>`
  ];

  if (state.currentMode === 'returnees' || state.currentMode === 'balance') {
    lines.push(buildDifferenceLine(p));
  }

  if (state.currentMode === 'balance') {
    const balanceText = p.has_balance ? (p.balance_flag === 1 ? 'Да' : 'Нет') : 'нет данных';
    lines.push(`<div class="tooltip-line">Возвращенцев больше ВПЛ: <strong>${balanceText}</strong></div>`);
  }

  return lines.join('');
}

function showTooltip(feature, point) {
  if (!feature || !point) {
    hoverTooltip.classList.add('is-hidden');
    hoverTooltip.innerHTML = '';
    return;
  }

  hoverTooltip.innerHTML = buildTooltipHTML(feature);
  hoverTooltip.style.left = `${point.x}px`;
  hoverTooltip.style.top = `${point.y}px`;
  hoverTooltip.classList.remove('is-hidden');
}

function installInteractions() {
  map.on('mousemove', (event) => {
    if (state.lockedProvince) return;

    const feature = getProvinceFeatureAtPoint(event.point);

    if (!feature) {
      state.hoveredProvince = null;
      updateFeatureStates();
      showTooltip(null);
      map.getCanvas().style.cursor = '';
      return;
    }

    state.hoveredProvince = feature.properties.province_en;
    updateFeatureStates();
    showTooltip(feature, event.point);
    map.getCanvas().style.cursor = 'pointer';
  });

  map.on('mouseleave', 'provinces-fill', () => {
    if (state.lockedProvince) return;
    state.hoveredProvince = null;
    updateFeatureStates();
    showTooltip(null);
    map.getCanvas().style.cursor = '';
  });

  map.on('click', (event) => {
    const feature = getProvinceFeatureAtPoint(event.point);

    if (!feature) {
      state.lockedProvince = null;
      state.hoveredProvince = null;
      updateFeatureStates();
      showTooltip(null);
      map.getCanvas().style.cursor = '';
      return;
    }

    const clickedProvince = feature.properties.province_en;
    state.lockedProvince = state.lockedProvince === clickedProvince ? null : clickedProvince;
    state.hoveredProvince = state.lockedProvince ? clickedProvince : null;
    updateFeatureStates();

    if (state.lockedProvince) {
      showTooltip(feature, event.point);
      map.getCanvas().style.cursor = 'pointer';
    } else {
      showTooltip(null);
      map.getCanvas().style.cursor = '';
    }
  });
}

function installInfoPanelControls() {
  if (infoToggle) {
    infoToggle.addEventListener('click', () => {
      const collapsed = infoPanel.classList.toggle('is-collapsed');
      infoToggle.textContent = collapsed ? 'Показать' : 'Скрыть';
      infoToggle.setAttribute('aria-expanded', String(!collapsed));
    });
  }

  modeButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const nextMode = button.dataset.mode;
      if (!nextMode || nextMode === state.currentMode) return;
      state.currentMode = nextMode;
      modeButtons.forEach((btn) => btn.classList.toggle('is-active', btn === button));
      applyMode();
    });
  });
}

function applyMode() {
  const modeConfig = MODES[state.currentMode];
  infoCopy.innerHTML = modeConfig.info;
  legendTitle.textContent = modeConfig.legendTitle;
  legendMin.textContent = modeConfig.legendMin;

  if (state.currentMode === 'balance') {
    legendScale.classList.add('is-binary');
    legendMax.textContent = modeConfig.legendMax;
  } else {
    legendScale.classList.remove('is-binary');
    legendMax.textContent = formatNumber(state.maxValues[state.currentMode]);
  }

  if (map && map.getSource('provinces')) {
    map.setLayoutProperty('provinces-label', 'visibility', 'visible');
    map.setPaintProperty('provinces-fill', 'fill-color', buildFillColorExpression());
    const source = map.getSource('provinces');
    if (source && state.provinceGeoJSON) {
      const updated = {
        ...state.provinceGeoJSON,
        features: state.provinceGeoJSON.features.map((feature) => ({
          ...feature,
          properties: {
            ...feature.properties,
            display_mode: state.currentMode
          }
        }))
      };
      state.provinceGeoJSON = updated;
      source.setData(updated);
      updateFeatureStates();
    }
  }

  if (state.lockedProvince) {
    const locked = state.provinceGeoJSON.features.find((feature) => feature.properties.province_en === state.lockedProvince);
    if (locked) showTooltip(locked, { x: window.innerWidth / 2, y: window.innerHeight / 2 });
  } else {
    showTooltip(null);
  }
}

async function fetchJSON(path) {
  const response = await fetch(path);
  if (!response.ok) {
    throw new Error(`Could not load ${path}`);
  }
  return response.json();
}

async function init() {
  setStatus('Загрузка данных…');

  const rawProvincesGeoJSON = await fetchJSON(DATA_FILES.provinces);
  const { enriched, maxIdps, maxReturnees } = enrichProvinces(rawProvincesGeoJSON);

  state.maxValues.idps = maxIdps;
  state.maxValues.returnees = maxReturnees;
  state.provinceGeoJSON = {
    ...enriched,
    features: enriched.features.map((feature) => ({
      ...feature,
      properties: {
        ...feature.properties,
        display_mode: state.currentMode
      }
    }))
  };

  createMap();

  map.on('load', () => {
    installSources(state.provinceGeoJSON);
    installLayers();
    installInteractions();
    installInfoPanelControls();

    const bounds = buildGeoBounds(state.provinceGeoJSON);
    map.fitBounds(bounds, {
      padding: { top: 64, right: 84, bottom: 64, left: 84 },
      duration: 0,
      maxZoom: 6.3
    });

    applyMode();
    updateFeatureStates();
    setStatus('Готово', true);
  });
}

window.addEventListener('resize', () => {
  if (map) map.resize();
});

init().catch((error) => {
  console.error(error);
  setStatus('Не удалось загрузить данные');
});
