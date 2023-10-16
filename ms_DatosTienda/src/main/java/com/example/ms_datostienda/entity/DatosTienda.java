package com.example.ms_datostienda.entity;

import com.example.ms_datostienda.controller.Proveedores;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
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
private String telefono;
private String direcion;
private String razon;
    private Integer ProveedoresId;
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "datostienda_id")
    private List<DatosTiendaDetalle> datosTiendaDetalles;
    @Transient
    private Proveedores proveedores;

}
