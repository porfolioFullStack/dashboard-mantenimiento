# Dashboard de Mantenimiento - Frontend Vanilla

Aplicacion frontend que simula un dashboard interno de gestion de ordenes de mantenimiento.
Construido con HTML5 semantico, CSS3 (Flexbox y Grid) y JavaScript vanilla modular.

---

## Objetivo

- Dashboard operativo real, no marketing
- Gestion de ordenes con estados y prioridades
- Formularios con validaciones
- Persistencia simple con localStorage
- Arquitectura modular sin frameworks

---

## Estructura

- `index.html`: dashboard principal
- `nueva-orden.html`: alta de orden
- `css/`: estilos por capas
- `js/`: modulos por responsabilidad
- `assets/`: imagenes, iconos, fuentes
- `docs/`: modelo de datos y reglas

---

## Ejecucion

Proyecto estatico, sin dependencias.

Recomendado:
- abrir con Live Server desde VSCode
- archivo inicial: `index.html`  

## Pagina de Navegacion  
https://porfoliofullstack.github.io/dashboard-mantenimiento/

---

## Convenciones

- Archivos y carpetas: `kebab-case`
- IDs y clases: `kebab-case`
- JS: `camelCase` (PascalCase solo si aplica)
- Estados: `pendiente`, `en-curso`, `cerrada`
- Prioridades: `baja`, `media`, `alta`

---

## Documentacion tecnica

Ver `docs/README.md` para modelo de datos, reglas y checklist.
