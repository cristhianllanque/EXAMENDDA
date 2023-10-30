package com.example.msventas.entity;

import com.example.msventas.dto.Producto;
import jakarta.persistence.*;
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
