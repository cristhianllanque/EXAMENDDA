package com.example.datostiendaservice.entity;

import jakarta.persistence.*;
import lombok.Data;
@Entity
@Data
public class DatosTienda {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String nombre;
    private String telefono;
    private String direcion;
    private String razon;
    private String suministrar;
    private String proveedores;
}
