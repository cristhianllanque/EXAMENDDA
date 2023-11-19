package com.example.mscompras.dto;

import lombok.Data;

@Data
public class Proveedor {
    private Integer id;
    private Integer ruc;
    private String nombre;
    private String direccion;
    private String telefono;
    private String correo;
    private String productos_suministrados;

}
