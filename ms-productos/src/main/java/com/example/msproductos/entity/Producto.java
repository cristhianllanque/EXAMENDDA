package com.example.msproductos.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.math.BigDecimal;
import java.util.Date;

@Entity
@Table(name = "Productos")
public class Producto {
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
    private Date fechaIngreso;

    public void setId(int i) {
    }
}
