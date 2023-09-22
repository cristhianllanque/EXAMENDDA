package com.example.msproductos.service;

import com.example.msproductos.entity.Producto;

import java.util.List;

public interface ProductoService {
    Producto guardarProducto(Producto producto);
    Producto obtenerProductoPorId(Long id);
    List<Producto> obtenerTodosLosProductos();
    void eliminarProducto(Long id);
}
