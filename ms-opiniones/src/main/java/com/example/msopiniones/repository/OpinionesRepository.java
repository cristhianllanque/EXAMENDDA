package com.example.msopiniones.repository;

import com.example.msopiniones.entity.Opiniones;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OpinionesRepository extends
        JpaRepository<Opiniones, Integer> {

    List<Opiniones> findByProductId(Integer productId);

    List<Opiniones> findByNombreUsuario(String nombreUsuario);
}
