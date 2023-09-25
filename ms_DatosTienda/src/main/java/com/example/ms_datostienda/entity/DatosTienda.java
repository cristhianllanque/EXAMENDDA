package com.example.ms_datostienda.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

import java.util.Date;

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

}
