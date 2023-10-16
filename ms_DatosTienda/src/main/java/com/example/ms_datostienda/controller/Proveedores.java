package com.example.ms_datostienda.controller;

import lombok.Data;

@Data
public class Proveedores {
    private Integer id;
    private String nombre;
    private String dni;
    private String dirreccion;
    private Integer telefono;
    private String suministracion;
}
