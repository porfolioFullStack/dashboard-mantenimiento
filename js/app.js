import { seedOrdenes } from "./data/ordenes.js";
import { renderOrdenes } from "./features/ordenes-render.js";
import { applyFilters, initFilters } from "./features/ordenes-filter.js";
import { initOrdenCreate } from "./features/ordenes-create.js";
import { initOrdenDetalle } from "./features/ordenes-detail.js";
import { qs } from "./utils/dom.js";
import { loadOrdenes, saveOrdenes } from "./utils/storage.js";

const getOrdenesIniciales = () => {
  const stored = loadOrdenes();
  if (stored) return stored;
  saveOrdenes(seedOrdenes);
  return seedOrdenes;
};

const initDashboard = () => {
  const list = qs("#ordenes-list");
  if (!list) return;

  const empty = qs("#ordenes-empty");
  const count = qs("#ordenes-count");
  const form = qs("#filtros-form");
  const modal = qs("#orden-modal");
  const content = qs("#modal-content");

  let ordenes = getOrdenesIniciales();

  const render = (filters) => {
    const visibles = applyFilters(ordenes, filters);
    renderOrdenes(visibles, { list, empty, count });
  };

  if (form) {
    initFilters(form, render);
  } else {
    render({ estado: "todos", prioridad: "todas" });
  }

  if (modal && content) {
    initOrdenDetalle({
      list,
      modal,
      content,
      getOrdenById: (id) => ordenes.find((orden) => orden.id === id)
    });
  }
};

const initCreate = () => {
  const form = qs("#orden-form");
  if (!form) return;

  initOrdenCreate({
    form,
    onCreate: (orden) => {
      const ordenes = getOrdenesIniciales();
      const actualizado = [orden, ...ordenes];
      saveOrdenes(actualizado);
    }
  });
};

document.addEventListener("DOMContentLoaded", () => {
  initDashboard();
  initCreate();
});
