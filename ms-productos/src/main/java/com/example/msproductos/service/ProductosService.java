package com.example.msproductos.service;

import com.example.msproductos.entity.Productos;

import java.util.List;
import java.util.Optional;

public interface ProductosService {
    List<Productos> listar();

    Productos guardar(Productos producto);

    Productos actualizar(Productos producto);

    Optional<Productos> listarPorId(Integer id);

    void eliminarPorId(Integer id);
}
