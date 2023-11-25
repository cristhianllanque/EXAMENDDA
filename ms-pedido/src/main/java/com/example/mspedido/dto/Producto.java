package com.example.mspedido.dto;

import lombok.Data;


@Data

public class Producto {
    private Integer id;
    private String nombreProducto;
    private String marca;
    private String imei;
    private String color;
    private String descripcion;
    private String stockDisponible;
    private String numeroSerie;
    private String especificacionesTecnicas;
    private String estadoProducto;
    private String categoriaTipo;
    private String fechaIngreso;





    private Categoria categoria;
}
