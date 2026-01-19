import { clearEl, createEl } from "../utils/dom.js";

const badgeClass = (type, value) => `badge badge-${type}-${value}`;

const formatDate = (iso) => {
  if (!iso) return "-";
  const date = new Date(iso);
  return date.toLocaleDateString("es-AR");
};

const createOrdenCard = (orden) => {
  const card = createEl("article", "card");
  card.dataset.ordenId = orden.id;

  const title = createEl("h3", "card-title", orden.titulo);
  const meta = createEl("div", "card-meta");
  meta.append(
    createEl("span", "", `Ubicacion: ${orden.ubicacion}`),
    createEl("span", "", `Solicitante: ${orden.solicitante}`)
  );

  const badges = createEl("div", "card-meta");
  const estado = createEl("span", badgeClass("estado", orden.estado), orden.estado);
  const prioridad = createEl(
    "span",
    badgeClass("prioridad", orden.prioridad),
    orden.prioridad
  );
  badges.append(estado, prioridad);

  const footer = createEl("div", "card-footer");
  const fecha = createEl("span", "card-meta", `Creada: ${formatDate(orden.fechaCreacion)}`);
  const detalleBtn = createEl("button", "card-link");
  detalleBtn.type = "button";
  detalleBtn.textContent = "Ver detalle";
  detalleBtn.dataset.ordenId = orden.id;
  footer.append(fecha, detalleBtn);

  card.append(title, meta, badges, footer);
  return card;
};

export const renderOrdenes = (ordenes, elements) => {
  const { list, empty, count } = elements;
  clearEl(list);

  if (!ordenes.length) {
    empty.hidden = false;
    count.textContent = "0 visibles";
    return;
  }

  empty.hidden = true;
  ordenes.forEach((orden, index) => {
    const card = createOrdenCard(orden);
    card.style.animationDelay = `${index * 40}ms`;
    list.append(card);
  });
  count.textContent = `${ordenes.length} visibles`;
};
