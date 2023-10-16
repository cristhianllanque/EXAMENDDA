package com.example.mscompras.entity;

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

    public ComprasDetalle() {
        this.cantidad = (double) 0;
        this.precio = (double) 0;

    }
}

