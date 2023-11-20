package com.example.datostiendaservice.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;
import java.util.List;

@Entity
@Data
public class DatosTienda {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String nombre;
    private String direccion;
    private String ciudad;
    private String telefono;
    private String correoElectronico;
    private String horarioApertura;
    private String horarioCierre;
    private String marcasDisponibles;
    private String tiposProductos;
    private String inventario;
    private String ingresosMensuales;
    private String sitioWeb;
    private String redesSociales;
    private String serviciosAdicionales;
    private String promociones;
}
