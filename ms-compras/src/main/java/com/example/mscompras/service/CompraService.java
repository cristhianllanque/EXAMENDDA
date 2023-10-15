package com.example.mscompras.service;
import com.example.mscompras.entity.Compras;

import java.util.List;
import java.util.Optional;
public interface CompraService {
    public List<Compras> listar();

    public Compras guardar(Compras compras);

    public Compras actualizar(Compras compras);

    public Optional<Compras> listarPorId(Integer id);

    public void eliminarPorId(Integer id);
}
