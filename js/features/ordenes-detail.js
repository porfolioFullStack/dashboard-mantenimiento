const formatDate = (iso) => {
  if (!iso) return "-";
  const date = new Date(iso);
  return date.toLocaleDateString("es-AR");
};

const detailRow = (label, value) =>
  `<div><strong>${label}:</strong> ${value || "-"}</div>`;

const buildDetalleHtml = (orden) => `
  ${detailRow("Titulo", orden.titulo)}
  ${detailRow("Descripcion", orden.descripcion)}
  ${detailRow("Ubicacion", orden.ubicacion)}
  ${detailRow("Solicitante", orden.solicitante)}
  ${detailRow("Prioridad", orden.prioridad)}
  ${detailRow("Estado", orden.estado)}
  ${detailRow("Responsable", orden.responsable)}
  ${detailRow("Fecha creada", formatDate(orden.fechaCreacion))}
  ${detailRow("Fecha programada", orden.fechaProgramada || "-")}
  ${detailRow("Fecha cierre", formatDate(orden.fechaCierre))}
  ${detailRow("Notas", orden.notas)}
`;

export const initOrdenDetalle = ({ list, modal, content, getOrdenById }) => {
  const openModal = (orden) => {
    content.innerHTML = buildDetalleHtml(orden);
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  list.addEventListener("click", (event) => {
    const target = event.target.closest("[data-orden-id]");
    if (!target) return;
    const orden = getOrdenById(target.dataset.ordenId);
    if (orden) openModal(orden);
  });

  modal.addEventListener("click", (event) => {
    if (event.target.matches("[data-modal-close]")) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("is-open")) {
      closeModal();
    }
  });
};
