# Pruebas de QA — CR-004

**Proyecto:** Sistema de Inventario  
**Solicitud:** CR-004  
**Requisito:** RF-INV-004  
**Issue:** #1  
**Rama:** feature/CR-004-lote-caducidad  

## Objetivo de las pruebas

Verificar que los campos Lote y Fecha de caducidad funcionen correctamente para productos perecibles y que el cambio no genere regresiones en productos no perecibles.

## Casos de prueba

| ID | Caso de prueba | Resultado esperado | Resultado obtenido | Estado |
|---|---|---|---|---|
| CP-001 | Registrar producto perecible con lote y fecha válida | El producto se registra correctamente | Registro permitido | APROBADO |
| CP-002 | Registrar producto perecible sin lote | El sistema rechaza el registro | Se muestra validación de lote obligatorio | APROBADO |
| CP-003 | Registrar producto perecible sin fecha de caducidad | El sistema rechaza el registro | Se muestra validación de fecha obligatoria | APROBADO |
| CP-004 | Registrar producto con fecha de caducidad vencida | El sistema rechaza el registro | Se muestra validación de fecha inválida | APROBADO |
| CP-005 | Generar reporte de producto perecible | Debe mostrar lote y fecha de caducidad | Los dos campos aparecen en el reporte | APROBADO |
| CP-006 | Exportar productos perecibles | Debe incluir lote y fecha de caducidad | Los campos aparecen en la exportación | APROBADO |
| CP-007 | Registrar producto no perecible sin lote ni caducidad | El producto debe registrarse normalmente | Registro permitido | APROBADO |

## Prueba de regresión

Se verificó que el comportamiento de los productos no perecibles no cambia después de implementar CR-004.

**Resultado:** APROBADO.

## Checklist QA

- [x] Validación de Lote ejecutada.
- [x] Validación de Fecha de caducidad ejecutada.
- [x] Prueba de fecha vencida ejecutada.
- [x] Reportes verificados.
- [x] Exportación verificada.
- [x] Productos no perecibles verificados.
- [x] No se identificaron defectos críticos.

## Resultado final

**QA: APROBADO**

El cambio CR-004 cumple los criterios de aceptación definidos en RF-INV-004 y puede continuar al proceso de revisión mediante Pull Request.
