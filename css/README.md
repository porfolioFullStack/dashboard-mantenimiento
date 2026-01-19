# css/

Arquitectura de estilos del proyecto, organizada por **capas de responsabilidad**.

El objetivo es lograr un CSS:
- mantenible
- reutilizable
- fácil de escalar

---

## Capas

### base/
Fundamentos del sistema visual:
- reset de navegador
- variables (design tokens)
- estilos globales

### layout/
Estructura general del dashboard:
- grid principal
- sidebar
- header
- footer
- breakpoints

### components/
Componentes reutilizables:
- botones
- cards
- badges
- formularios
- modales
- filtros

### pages/
Estilos específicos de cada pantalla:
- dashboard principal
- alta de orden

### main.css
Punto de entrada de estilos.
Define el orden de carga de las capas.

---

## Convenciones

- Evitar estilos inline
- No mezclar layout con lógica de componentes
- Reutilizar variables definidas en `base/variables.css`
