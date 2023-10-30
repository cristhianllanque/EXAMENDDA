package com.example.datostiendaservice.service;

import com.example.datostiendaservice.entity.DatosTienda;

import java.util.List;
import java.util.Optional;

public interface DatosTiendaService {
    List<DatosTienda> listar();

    DatosTienda guardar(DatosTienda datosTienda);

    DatosTienda actualizar(DatosTienda datosTienda);

    Optional<DatosTienda> listarPorId(Integer id);

    void eliminarPorId(Integer id);
}
