package com.example.msproductos.service.impl;

import com.example.msproductos.entity.Productos;
import com.example.msproductos.repository.ProductosRepository;
import com.example.msproductos.service.ProductosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductosServiceImpl implements ProductosService {
    @Autowired
    private ProductosRepository productosRepository;

    @Override
    public List<Productos> listar() {
        return productosRepository.findAll();
    }

    @Override
    public Productos guardar(Productos producto) {
        return productosRepository.save(producto);
    }

    @Override
    public Productos actualizar(Productos producto) {
        return productosRepository.save(producto);
    }

    @Override
    public Optional<Productos> listarPorId(Integer id) {
        return productosRepository.findById(id);
    }

    @Override
    public void eliminarPorId(Integer id) {
        productosRepository.deleteById(id);
    }
}
