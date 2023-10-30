package com.example.ms_datostienda.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "DatosTienda")
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
