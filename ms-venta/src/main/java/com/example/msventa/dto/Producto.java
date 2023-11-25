package com.example.msventa.dto;

import lombok.Data;

@Data
public class Producto {
    private String mombre;
    private String descripcion;
    private double precioVenta;
    private double getPrecioCompra;
    private int catidadEnStoock;
    private Categoria categoria;
}
