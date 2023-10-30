package com.example.mscliente.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Cliente {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String nombre;
    private String numeroTelefono;
    private String direccion;
    private String correoElectronico;
    private String numeroIdentificacion;
    private String fechaNacimiento;
    private String historialCompras;
    private String preferenciasMarca;
    private String metodoPago;
    private String estadoCuenta;
    private String notificacionesPreferidas;
    private String historialServicioCliente;
    private String marcasPreferenciales;
    private String productosProximos;
}
