package com.example.msproveedores.service;

import com.example.msproveedores.entity.Producto;
import com.example.msproveedores.entity.Proveedores;

import java.util.List;
import java.util.Optional;

public interface ProductoService {
    public List<Producto> listar();

    public Producto guardar(Producto producto);

    public Producto actualizar(Producto producto);

    public Optional<Producto> listarPorId(Integer id);

    public void eliminarPorId(Integer id);
}
