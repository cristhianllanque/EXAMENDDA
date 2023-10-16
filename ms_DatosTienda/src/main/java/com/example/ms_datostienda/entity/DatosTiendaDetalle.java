package com.example.ms_datostienda.entity;

import com.example.ms_datostienda.controller.Categoria;
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity

public class DatosTiendaDetalle {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Double cantidad;
    private Double precioU;
    private Double subtotal;
    private Double total_factura;
    private Integer productoId;
    @Transient
private Categoria categoria;
    public DatosTiendaDetalle(){
        this.cantidad = (double) 0;
        this.precioU = (double) 0;
        this.subtotal = (double) 0;
        this.total_factura = (double) 0;
    }
}
