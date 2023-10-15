package com.example.mscompras.service.impl;

import com.example.mscompras.dto.Producto;
import com.example.mscompras.dto.Proveedor;
import com.example.mscompras.entity.Compras;
import com.example.mscompras.entity.ComprasDetalle;
import com.example.mscompras.feign.ProductoFeign;
import com.example.mscompras.feign.ProveedorFeign;
import com.example.mscompras.repository.CompraRepository;
import com.example.mscompras.service.CompraService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class CompraServiceImpl implements CompraService {
    @Autowired
    private CompraRepository compraRepository;
    @Autowired
    private ProveedorFeign proveedorFeign;
    @Autowired
    private ProductoFeign productoFeign;

    @Override
    public List<Compras> listar() {
        return compraRepository.findAll();
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
        Proveedor proveedor = proveedorFeign.listById(compras.getProveedorID()).getBody();
        List<ComprasDetalle> comprasDetalles = compras.getComprasDetalles().stream().map(comprasDetalle -> {
            Producto producto = productoFeign.listById(comprasDetalle.getProductoId()).getBody();
            comprasDetalle.setProducto(producto);
            return comprasDetalle;
        }).collect(Collectors.toList());
        compras.setComprasDetalles(comprasDetalles);
        compras.setProveedor(proveedor);
        return Optional.of(compras);
    }


    @Override
    public void eliminarPorId(Integer id) {
        compraRepository.deleteById(id);
    }
}