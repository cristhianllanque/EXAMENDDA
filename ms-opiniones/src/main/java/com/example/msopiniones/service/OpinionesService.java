package com.example.msopiniones.service;

import com.example.msopiniones.entity.Opiniones;

import java.util.List;
import java.util.Optional;

public interface OpinionesService {
    List<Opiniones> obtenerOpinionesPorProducto (Integer productId);

    Opiniones guardarOpinion(Opiniones opinion);

    Opiniones actualizarOpinion(Opiniones opinion);

    Optional<Opiniones> obtenerOpinionPorId(Integer id);

    void eliminarOpinionPorId(Integer id);

    List<Opiniones> obtenerOpinionesPorUsuario(String nombreUsuario);

    List<Opiniones> obtenerTodasLasOpiniones();
}
