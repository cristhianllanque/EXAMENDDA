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
    private Double cantidad;
    private Double precioU;
    private Double subtotal;
    private Double total_factura;
    private Integer productoId;

    @Transient
    private Producto producto;

    public VentaDetalle(){
        this.cantidad = (double) 0;
        this.precioU = (double) 0;
        this.subtotal = (double) 0;
        this.total_factura = (double) 0;
    }
}
