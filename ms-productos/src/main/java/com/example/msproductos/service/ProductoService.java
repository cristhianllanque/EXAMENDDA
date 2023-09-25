package com.example.msproductos.service;

import com.example.msproductos.entity.Producto;

import java.util.List;

public interface ProductoService {
    Producto guardarProducto(Producto producto);
    Producto actualizarProducto(Long id, Producto producto);
    void eliminarProducto(Long id);
    List<Producto> obtenerTodosLosProductos();
    Producto obtenerProductoPorId(Long id);
}
