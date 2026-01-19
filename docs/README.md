# docs/

Documentacion tecnica y conceptual del proyecto. No contiene codigo.

---

## Modelo de orden de mantenimiento

Una orden representa una solicitud operativa que pasa por estados hasta su cierre.

Campos obligatorios:
- id (string unica)
- titulo (string, 6-80)
- descripcion (string, 10-500)
- ubicacion (string, 3-80)
- solicitante (string, 3-60)
- prioridad (baja | media | alta)
- estado (pendiente | en-curso | cerrada)
- fechaCreacion (ISO string)

Campos opcionales:
- responsable (string)
- fechaProgramada (YYYY-MM-DD)
- fechaCierre (ISO string)
- notas (string)

---

## Estados y prioridades

Estados validos:
- pendiente: recien creada, sin trabajo activo
- en-curso: tarea iniciada
- cerrada: trabajo finalizado

Prioridades validas:
- baja: no critica
- media: requiere atencion pronta
- alta: impacto operativo

---

## Flujos de usuario

Crear orden:
- completar formulario
- validar campos
- guardar en localStorage
- redirigir al dashboard

Ver tablero:
- listar ordenes en cards
- ver conteo de visibles
- acceso a detalle por orden

Filtrar:
- por estado
- por prioridad
- combinados
- reset total

Ver detalle:
- abrir modal
- mostrar todos los campos
- cerrar con overlay o ESC

---

## Reglas de negocio minimas

- Solo se puede cerrar una orden si estuvo en "en-curso".
- Una orden cerrada no puede volver a "pendiente".
- prioridad y estado siempre deben ser valores validos.
- id se genera en frontend y no se repite.
- fechaCierre solo existe si estado = cerrada.

---

## Validaciones base

- campos obligatorios no vacios
- longitudes minimas y maximas
- fechaProgramada no anterior a hoy
- descripcion requiere texto significativo (min 10)

---

## Decision de UX

- Dashboard sobrio, pensado para uso diario.
- Formularios largos con agrupacion logica.
- Foco en legibilidad, no en marketing.

---

## Checklist de funcionalidades

- [x] Modelo de datos definido
- [x] Estados y prioridades definidas
- [x] Flujos de usuario definidos
- [x] Reglas de negocio minimas definidas
- [x] Validaciones base definidas
- [x] Render de ordenes en tablero
- [x] Filtros por estado y prioridad
- [x] Alta de orden con persistencia
- [x] Modal con detalle de orden
- [x] Persistencia robusta en localStorage

---

## Mejoras futuras

- Edicion y reasignacion de ordenes
- Bitacora de cambios por orden
- Exportacion a CSV
- Integracion con backend/API
