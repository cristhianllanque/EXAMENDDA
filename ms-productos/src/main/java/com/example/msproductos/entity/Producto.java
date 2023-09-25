package com.example.msproductos.entity;

import jakarta.persistence.*;
import jdk.jfr.Category;

@Entity
public class Producto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String mombre;
    private String descripcion;
    private double precioVenta;
    private double getPrecioCompra;
    private int catidadEnStoock;

    @ManyToOne
    @JoinColumn(name = "categoria_id")
    private Categoria categoria;

    public void setID_Producto(Long id) {
    }

    //---
}
