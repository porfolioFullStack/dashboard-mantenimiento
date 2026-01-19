export const applyFilters = (ordenes, filters) =>
  ordenes.filter((orden) => {
    const matchEstado = filters.estado === "todos" || orden.estado === filters.estado;
    const matchPrioridad =
      filters.prioridad === "todas" || orden.prioridad === filters.prioridad;
    return matchEstado && matchPrioridad;
  });

export const getFilters = (form) => {
  const data = new FormData(form);
  return {
    estado: data.get("estado") || "todos",
    prioridad: data.get("prioridad") || "todas"
  };
};

export const initFilters = (form, onChange) => {
  const handle = () => onChange(getFilters(form));
  form.addEventListener("change", handle);
  form.addEventListener("reset", () => setTimeout(handle, 0));
  handle();
};
