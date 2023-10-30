package com.example.msventas.entity;

import com.example.msventas.dto.Cliente;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;
import java.util.List;

@Entity
@Data
public class Venta {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String fechaVenta;
    private String vendedor;
    private String numeroSerie;
    private String modeloCelular;
    private String marca;
    private double precioVenta;
    private String metodoPago;
    private String estadoCelular;
    private String condicionCelular;
    private String accesoriosIncluidos;
    private String garantia;
    private String ubicacionVenta;
    private String notas;
    private String estadoVenta;
    private String canalesVenta;
    private double descuentosPromociones;
    private double costosEnvio;
    private String informacionEnvio;
    private Integer clienteId;
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "venta_id")
    private List<VentaDetalle> ventaDetalles;
   @Transient
    private Cliente cliente;

    public Venta(){
        this.precioVenta = (double) 0;
        this.descuentosPromociones = (double) 0;
        this.costosEnvio = (double) 0;
    }

}
