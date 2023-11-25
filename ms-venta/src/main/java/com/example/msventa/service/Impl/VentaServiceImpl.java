package com.example.msventa.service.Impl;

import com.example.msventa.entity.Venta;
import com.example.msventa.repository.VentaRepository;
import com.example.msventa.service.VentaService;
import com.example.msventa.feign.ClienteFeign;
import com.example.msventa.feign.ProductoFeign;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class VentaServiceImpl implements VentaService {
    @Autowired
    private VentaRepository ventaRepository;
    @Autowired
    private ClienteFeign clienteFeign;
    @Autowired
    private ProductoFeign productoFeign;
    @Override
    public List<Venta> listar() {
        return ventaRepository.findAll();
    }
    @Override
    public Venta guardar(Venta venta) {
        return ventaRepository.save(venta);
    }
    @Override
    public Venta actualizar(Venta venta) {
        return ventaRepository.save(venta);
    }
    @Override
    public Optional<Venta> listarPorId(Integer id) {
        return ventaRepository.findById(id);
    }
    //public Optional<Venta> listarPorId(Integer id) {
        //Venta venta = ventaRepository.findById(id).get();
        //Cliente cliente = clienteFeign.listById(venta.getClienteId()).getBody();
        //List<VentaDetalle> ventaDetalles = venta.getVentaDetalles().stream().map(ventaDetalle -> {
            //Producto producto = productoFeign.listById(ventaDetalle.getProductoId()).getBody();
            //ventaDetalle.setProducto(producto);
            //return ventaDetalle;
        //}).collect(Collectors.toList());
        //venta.setVentaDetalles(ventaDetalles);
        //venta.setCliente(cliente);
        //return Optional.of(venta);
    //}
    @Override
    public void eliminarPorId(Integer id) {
        ventaRepository.deleteById(id);
    }
}
