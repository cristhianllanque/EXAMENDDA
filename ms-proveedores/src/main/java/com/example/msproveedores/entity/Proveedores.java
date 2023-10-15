package com.example.msproveedores.entity;

import jakarta.persistence.*;
import lombok.Data;
@Entity
@Data
public class Proveedores {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String nombre;
    private String direccion;
    private String telefono;
    private String correo;
    private String productos_suministrados;


}
