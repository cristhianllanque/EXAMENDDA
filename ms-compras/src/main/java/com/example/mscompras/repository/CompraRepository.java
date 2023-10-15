package com.example.mscompras.repository;

import com.example.mscompras.entity.Compras;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CompraRepository extends JpaRepository<Compras, Integer> {
}
