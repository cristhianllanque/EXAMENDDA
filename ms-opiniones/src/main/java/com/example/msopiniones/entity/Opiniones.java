package com.example.msopiniones.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

import java.time.LocalDateTime;

@Entity
@Data
public class Opiniones {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long productId;
    private String comentario;
    private Integer calificacion;
    private String nombreUsuario;
    private LocalDateTime fechaPublicacion;

    public void setId(int i) {
    }
}
