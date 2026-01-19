const STORAGE_KEY = "dashboard-ordenes";

export const loadOrdenes = () => {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : null;
  } catch {
    return null;
  }
};

export const saveOrdenes = (ordenes) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(ordenes));
};
