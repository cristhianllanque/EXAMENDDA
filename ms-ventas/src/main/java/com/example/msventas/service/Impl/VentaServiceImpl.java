package com.example.msventas.service.Impl;

import com.example.msventas.entity.Venta;
import com.example.msventas.repository.VentaRepository;
import com.example.msventas.service.VentaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class VentaServiceImpl implements VentaService {
    @Autowired
    private VentaRepository ventaRepository;

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
    @Override
    public void eliminarPorId(Integer id) {
        ventaRepository.deleteById(id);
    }
}
