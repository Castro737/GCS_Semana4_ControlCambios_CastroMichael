# Requisitos del Sistema de Inventario

## RF-INV-004 — Gestión de lote y fecha de caducidad

**Solicitud relacionada:** CR-004  
**Issue relacionado:** #1  
**Tipo:** Requisito funcional  
**Prioridad:** Alta  
**Estado:** Aprobado para implementación  

### Descripción

El Sistema de Inventario deberá permitir registrar el número de lote y la fecha de caducidad de los productos clasificados como perecibles.

### Reglas funcionales

1. El campo **Lote** será obligatorio cuando el producto sea perecible.
2. El campo **Fecha de caducidad** será obligatorio cuando el producto sea perecible.
3. La fecha de caducidad deberá ser posterior a la fecha actual al registrar un producto.
4. Los productos no perecibles no requerirán estos campos.
5. El lote deberá almacenarse junto con la información del producto.
6. La fecha de caducidad deberá almacenarse junto con la información del producto.
7. Los reportes de productos perecibles deberán mostrar el lote y la fecha de caducidad.
8. Las exportaciones deberán incluir las columnas Lote y Fecha de caducidad.

## Criterios de aceptación

- [ ] No se permite registrar un producto perecible sin lote.
- [ ] No se permite registrar un producto perecible sin fecha de caducidad.
- [ ] Los datos se almacenan correctamente.
- [ ] Los nuevos campos aparecen en los reportes.
- [ ] Los nuevos campos aparecen en la exportación.
- [ ] Los productos no perecibles continúan funcionando sin cambios.

## Trazabilidad

CR-004 → Issue #1 → RF-INV-004 → Implementación → Pruebas → Pull Request → Release
