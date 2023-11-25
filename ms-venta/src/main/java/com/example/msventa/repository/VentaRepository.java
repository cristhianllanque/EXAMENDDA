package com.example.msventa.repository;

import com.example.msventa.entity.Venta;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VentaRepository extends
        JpaRepository<Venta,Integer > {
}
