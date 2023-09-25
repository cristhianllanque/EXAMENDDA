package com.example.msventas.dto;

import lombok.Data;

@Data
public class Cliente {
    private Integer id;
    private String nombre;
    private String dni;
    private String dirreccion;
    private Integer telefono;
}
