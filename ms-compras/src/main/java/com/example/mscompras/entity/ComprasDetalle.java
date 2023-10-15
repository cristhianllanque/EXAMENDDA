package com.example.mscompras.entity;

import com.example.mscompras.dto.Producto;
import jakarta.persistence.*;
import lombok.Data;


@Entity
@Data
public class ComprasDetalle {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Double cantidad;
    private Double precio;
    private Integer productoId;
    @Transient
    private Producto producto;

    public ComprasDetalle() {
        this.cantidad = (double) 0;
        this.precio = (double) 0;

    }
}

