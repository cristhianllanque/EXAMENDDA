package com.example.msventa.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class VentaDetalle {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private double montoIGV; // El monto total del IGV en la venta.
    private double porcentajeIGV; // El porcentaje de IGV aplicado a la venta (por ejemplo, 18%).
    private String tipoIGV; // Puede ser "Gravado" o "Exonerado" para indicar si el producto está sujeto al IGV o no.

}
