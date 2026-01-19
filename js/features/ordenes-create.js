import { hasMax, hasMin, isDateNotPast, isRequired, validateField } from "../utils/validate.js";

const generateId = () => `ord-${Date.now()}`;

const getValue = (data, key) => (data.get(key) || "").toString().trim();

const validateOrden = (data) => {
  const titulo = getValue(data, "titulo");
  const descripcion = getValue(data, "descripcion");
  const ubicacion = getValue(data, "ubicacion");
  const solicitante = getValue(data, "solicitante");
  const prioridad = getValue(data, "prioridad");
  const fechaProgramada = getValue(data, "fechaProgramada");

  if (!validateField(titulo, [isRequired, (v) => hasMin(v, 6), (v) => hasMax(v, 80)])) {
    return "Titulo invalido.";
  }
  if (
    !validateField(descripcion, [isRequired, (v) => hasMin(v, 10), (v) => hasMax(v, 500)])
  ) {
    return "Descripcion invalida.";
  }
  if (
    !validateField(ubicacion, [isRequired, (v) => hasMin(v, 3), (v) => hasMax(v, 80)])
  ) {
    return "Ubicacion invalida.";
  }
  if (
    !validateField(solicitante, [isRequired, (v) => hasMin(v, 3), (v) => hasMax(v, 60)])
  ) {
    return "Solicitante invalido.";
  }
  if (!prioridad) {
    return "Seleccionar prioridad.";
  }
  if (!isDateNotPast(fechaProgramada)) {
    return "Fecha programada invalida.";
  }
  return "";
};

export const initOrdenCreate = ({ form, onCreate }) => {
  const message = form.querySelector("#form-message");

  const setMessage = (text, tone) => {
    if (!message) return;
    message.textContent = text;
    message.classList.remove("is-error", "is-success");
    if (tone) message.classList.add(`is-${tone}`);
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const error = validateOrden(data);
    if (error) {
      setMessage(error, "error");
      return;
    }

    const nuevaOrden = {
      id: generateId(),
      titulo: getValue(data, "titulo"),
      descripcion: getValue(data, "descripcion"),
      ubicacion: getValue(data, "ubicacion"),
      solicitante: getValue(data, "solicitante"),
      prioridad: getValue(data, "prioridad"),
      estado: "pendiente",
      fechaCreacion: new Date().toISOString(),
      responsable: getValue(data, "responsable"),
      fechaProgramada: getValue(data, "fechaProgramada"),
      fechaCierre: "",
      notas: getValue(data, "notas")
    };

    onCreate(nuevaOrden);
    setMessage("Orden creada. Redirigiendo...", "success");
    window.location.href = "index.html";
  });

  form.addEventListener("reset", () => {
    setMessage("", "");
  });
};
