package com.example.msproveedores.service.impl;

import com.example.msproveedores.entity.Proveedores;
import com.example.msproveedores.repository.ProveedoresRepository;
import com.example.msproveedores.service.ProveedoresService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProveedoresServiceImpl implements ProveedoresService {
    @Autowired
    private ProveedoresRepository proveedoresRepository;

    @Override
    public List<Proveedores> listar() {
        return proveedoresRepository.findAll();
    }

    @Override
    public Proveedores guardar(Proveedores proveedores) {
        return proveedoresRepository.save(proveedores);
    }

    @Override
    public Proveedores actualizar(Proveedores proveedores) {
        return proveedoresRepository.save(proveedores);
    }

    @Override
    public Optional<Proveedores> listarPorId(Integer id) {
        return proveedoresRepository.findById(id);
    }

    @Override
    public void eliminarPorId(Integer id) {
        proveedoresRepository.deleteById(id);
    }
}
