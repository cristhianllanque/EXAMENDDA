package com.example.msproductos.entity;

import jakarta.persistence.*;
import lombok.Data;
import java.math.BigDecimal;
import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Data
public class Productos {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String nombreProducto;
    private String marca;
    private String imei;
    private String color;
    private String descripcion;
    private BigDecimal precio;
    private Integer stockDisponible;
    private String numeroSerie;
    private String especificacionesTecnicas;
    private String estadoProducto;
    private String categoriaTipo;
    @Temporal(TemporalType.DATE)
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date fechaIngreso;
}
