# js/

Código JavaScript del proyecto, organizado de forma **modular** utilizando ES Modules.

No se utilizan frameworks ni librerías externas.

---

## Estructura

### app.js
Punto de entrada del proyecto.
Inicializa funcionalidades según la página cargada.

---

### data/
Estructura base de datos simulados:
- órdenes de mantenimiento
- valores iniciales o seed

---

### utils/
Funciones genéricas reutilizables:
- helpers de DOM
- validaciones
- manejo de localStorage

---

### components/
Comportamiento de componentes de UI reutilizables:
- sidebar
- modal

---

### features/
Lógica específica del dominio:
- renderizado de órdenes
- filtros por estado y prioridad
- creación de órdenes
- visualización de detalle

---

## Convenciones

- Un módulo = una responsabilidad
- Evitar variables globales
- Separar lógica de UI y lógica de negocio
- Importar y coordinar todo desde `app.js`
