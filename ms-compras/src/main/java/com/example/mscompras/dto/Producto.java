package com.example.mscompras.dto;

import lombok.Data;

@Data
public class Producto {
    private Integer id;
    private String nombre;
    private String imei;
    private String color;
    private String modelo;
    private String precio;
}
