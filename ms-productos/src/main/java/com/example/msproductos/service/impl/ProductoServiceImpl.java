package com.example.msproductos.service.impl;

import com.example.msproductos.entity.Producto;
import com.example.msproductos.repository.ProductoRepository;
import com.example.msproductos.service.ProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductoServiceImpl implements ProductoService {
    @Autowired
    private ProductoRepository productoRepository;
    @Override
    public List<Producto> listar() { return productoRepository.findAll();}

    @Override
    public Producto guardar(Producto producto) { return productoRepository.save(producto);}

    @Override
    public Producto actualizar(Producto producto) { return productoRepository.save(producto);}

    @Override
    public Optional<Producto> listarPorId(Integer id) {
        Producto producto = productoRepository.findById(id).get();

        return Optional.empty();
    }

    @Override
    public void eliminarPorId(Integer id) {productoRepository.deleteById(id); }
}
