package com.example.msventas.entity;

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
    private Double cantidad;
    private Double precioU;
    private Double subtotal;
    private Double total_factura;
    private Integer productoId;

    public VentaDetalle(){
        this.cantidad = (double) 0;
        this.precioU = (double) 0;
        this.subtotal = (double) 0;
        this.total_factura = (double) 0;
    }
}
