package com.example.msventas.repository;

import com.example.msventas.entity.Venta;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VentaRepository extends
        JpaRepository<Venta,Integer > {
}
