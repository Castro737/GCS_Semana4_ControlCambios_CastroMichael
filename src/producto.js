/**
 * Sistema de Inventario
 * Implementación asociada a CR-004 / Issue #1
 * Requisito: RF-INV-004
 */

class Producto {
  constructor(nombre, perecible, lote = null, fechaCaducidad = null) {
    this.nombre = nombre;
    this.perecible = perecible;
    this.lote = lote;
    this.fechaCaducidad = fechaCaducidad;

    this.validar();
  }

  validar() {
    if (this.perecible) {
      if (!this.lote || this.lote.trim() === "") {
        throw new Error(
          "El campo Lote es obligatorio para productos perecibles."
        );
      }

      if (!this.fechaCaducidad) {
        throw new Error(
          "La Fecha de caducidad es obligatoria para productos perecibles."
        );
      }

      const fechaActual = new Date();
      const caducidad = new Date(this.fechaCaducidad);

      if (caducidad <= fechaActual) {
        throw new Error(
          "La Fecha de caducidad debe ser posterior a la fecha actual."
        );
      }
    }

    return true;
  }

  generarReporte() {
    return {
      nombre: this.nombre,
      perecible: this.perecible,
      lote: this.perecible ? this.lote : "N/A",
      fechaCaducidad: this.perecible ? this.fechaCaducidad : "N/A"
    };
  }

  exportarDatos() {
    return {
      producto: this.nombre,
      lote: this.perecible ? this.lote : "",
      fechaCaducidad: this.perecible ? this.fechaCaducidad : ""
    };
  }
}

module.exports = Producto;
