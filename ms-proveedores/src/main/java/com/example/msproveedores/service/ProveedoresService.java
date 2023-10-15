package com.example.msproveedores.service;

import com.example.msproveedores.entity.Proveedores;

import java.util.List;
import java.util.Optional;

public interface ProveedoresService {
    public List<Proveedores> listar();

    public Proveedores guardar(Proveedores proveedores);

    public Proveedores actualizar(Proveedores proveedores);

    public Optional<Proveedores> listarPorId(Integer id);

    public void eliminarPorId(Integer id);
}
