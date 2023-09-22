package com.example.msventas.service;

import com.example.msventas.entity.Venta;

import java.util.List;
import java.util.Optional;

public interface VentaService {
    public List<Venta> listar();

    public Venta guardar(Venta venta);

    public Venta actualizar(Venta venta);

    public Optional<Venta> listarPorId(Integer id);

    public void eliminarPorId(Integer id);
}
