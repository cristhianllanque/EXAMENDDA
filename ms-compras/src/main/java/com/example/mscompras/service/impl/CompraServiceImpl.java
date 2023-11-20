package com.example.mscompras.service.impl;

import com.example.mscompras.dto.Proveedor;
import com.example.mscompras.entity.Compras;
import com.example.mscompras.feign.ProveedorFeign;
import com.example.mscompras.repository.CompraRepository;
import com.example.mscompras.service.CompraService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CompraServiceImpl implements CompraService {
    @Autowired
    private CompraRepository compraRepository;
    @Autowired
    private ProveedorFeign proveedorFeign;


    @Override
    public List<Compras> listar() {

        List<Compras> compras = compraRepository.findAll();
        List<Compras> comprasList = new ArrayList<>();

        compras.forEach(compra -> {

            Proveedor proveedor = proveedorFeign.listById(compra.getProveedorId()).getBody();
            compra.setProveedor(proveedor);
            comprasList.add(compra);
        });

        return comprasList;
    }

    @Override
    public Compras guardar(Compras compras) {
        return compraRepository.save(compras);
    }

    @Override
    public Compras actualizar(Compras compras) {
        return compraRepository.save(compras);
    }

    @Override
    public Optional<Compras> listarPorId(Integer id) {
        Compras compras = compraRepository.findById(id).get();
        Proveedor proveedor = proveedorFeign.listById(compras.getProveedorId()).getBody();
        compras.setProveedor(proveedor);
        return Optional.of(compras);
    }


    @Override
    public void eliminarPorId(Integer id) {
        compraRepository.deleteById(id);
    }
}