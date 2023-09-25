package com.example.ms_datostienda.service;

import com.example.ms_datostienda.entity.DatosTienda;

import java.util.List;
import java.util.Optional;

public interface DatosTiendaService {
    public List<DatosTienda> listar();
    public DatosTienda guardar(DatosTienda datosTienda);
    public DatosTienda actualizar(DatosTienda datosTienda);
    public Optional<DatosTienda> listarPorId(Integer id);
    public void eliminarPorId(Integer id);
}
