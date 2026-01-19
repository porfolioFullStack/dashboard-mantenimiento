export const ESTADOS = ["pendiente", "en-curso", "cerrada"];
export const PRIORIDADES = ["baja", "media", "alta"];

export const seedOrdenes = [
  {
    id: "ord-1001",
    titulo: "Revisar bomba de agua",
    descripcion: "La bomba del sector norte genera vibracion anomala.",
    ubicacion: "Planta - Sector Norte",
    solicitante: "Operaciones",
    prioridad: "alta",
    estado: "pendiente",
    fechaCreacion: "2026-01-10T09:12:00.000Z",
    responsable: "Equipo A",
    fechaProgramada: "2026-01-12",
    fechaCierre: "",
    notas: ""
  },
  {
    id: "ord-1002",
    titulo: "Mantenimiento preventivo ascensor",
    descripcion: "Chequear frenos y sensores del ascensor principal.",
    ubicacion: "Edificio Central",
    solicitante: "Administracion",
    prioridad: "media",
    estado: "en-curso",
    fechaCreacion: "2026-01-08T14:40:00.000Z",
    responsable: "Tecnico Ramirez",
    fechaProgramada: "2026-01-11",
    fechaCierre: "",
    notas: "Se revisaron cables principales."
  },
  {
    id: "ord-1003",
    titulo: "Cambio de luminarias",
    descripcion: "Reemplazar luminarias quemadas en pasillo 3.",
    ubicacion: "Hospital - Piso 2",
    solicitante: "Mantenimiento",
    prioridad: "baja",
    estado: "cerrada",
    fechaCreacion: "2026-01-02T08:05:00.000Z",
    responsable: "Equipo B",
    fechaProgramada: "2026-01-03",
    fechaCierre: "2026-01-03T16:10:00.000Z",
    notas: "Se reemplazaron 4 luminarias."
  }
];
