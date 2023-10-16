package com.example.mscompras.entity;

import com.example.mscompras.dto.Proveedor;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Data
public class Compras {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String Marca;
    private String Categoria;
    private String Descripcion;
    private Integer ProveedorId;
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "compra_id")
    private List<ComprasDetalle> comprasDetalles;
    @Transient
    private Proveedor proveedor;

}
