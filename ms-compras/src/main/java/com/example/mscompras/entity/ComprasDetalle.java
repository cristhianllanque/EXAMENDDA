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
    private Double precio_u;
    private Double precio_t;


    public ComprasDetalle() {
        this.cantidad = (double) 0;
        this.precio_u = (double) 0;
        this.precio_t = (double) 0;

    }
}

