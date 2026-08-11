# Plan de Implementación — CR-004

**Proyecto:** Sistema de Inventario  
**Cambio:** Agregar Lote y Fecha de caducidad a productos perecibles  
**Issue:** #1  
**Requisito:** RF-INV-004  
**Rama:** feature/CR-004-lote-caducidad  

## Objetivo

Implementar de forma controlada los campos Lote y Fecha de caducidad para productos perecibles, garantizando su almacenamiento, validación, visualización en reportes y disponibilidad en la exportación de datos.

## Plan de implementación

| Paso | Actividad | Responsable | Evidencia |
|---|---|---|---|
| 1 | Registrar y analizar la solicitud CR-004 | Líder técnico / QA | Issue #1 + análisis de impacto |
| 2 | Aprobar la solicitud de cambio | Líder técnico / CCB | Decisión APROBADO en Issue #1 |
| 3 | Crear rama independiente para el cambio | Desarrollador | feature/CR-004-lote-caducidad |
| 4 | Actualizar el requisito RF-INV-004 | Analista / Dev | docs/requisitos.md |
| 5 | Implementar Lote y Fecha de caducidad | Desarrollador | Código + commits |
| 6 | Actualizar reportes y exportación | Desarrollador | Código + commits |
| 7 | Ejecutar pruebas funcionales y de regresión | QA | tests/pruebas-CR-004.md |
| 8 | Revisar los cambios | Líder técnico | Pull Request + checklist |
| 9 | Integrar el cambio aprobado a main | Líder técnico | Merge del Pull Request |
| 10 | Generar versión estable | Líder técnico / QA | Release y tag v1.1.0 |

## Plan de rollback

Si durante la verificación o después de la integración se detecta un error crítico, el cambio no será liberado o se revertirá el commit asociado a CR-004, restaurando la última versión estable.

La versión anterior permanecerá identificada en Git para permitir la recuperación del sistema.

## Evidencias requeridas

- Issue de CR-004.
- Análisis de impacto y matriz de riesgos.
- Decisión de aprobación.
- Rama vinculada al cambio.
- Commits relacionados con CR-004.
- Casos y resultados de pruebas.
- Pull Request revisado.
- Checklist de QA.
- Merge aprobado.
- Tag y Release v1.1.0.
