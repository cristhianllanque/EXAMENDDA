package com.example.datostiendaservice.service.impl;

import com.example.datostiendaservice.entity.DatosTienda;
import com.example.datostiendaservice.repository.DatosTiendaRepository;
import com.example.datostiendaservice.service.DatosTiendaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DatosTiendaServiceImpl implements DatosTiendaService {
    @Autowired
    private DatosTiendaRepository datosTiendaRepository;

    @Override
    public List<DatosTienda> listar() {
        return datosTiendaRepository.findAll();
    }

    @Override
    public DatosTienda guardar(DatosTienda datosTienda) {
        return datosTiendaRepository.save(datosTienda);
    }

    @Override
    public DatosTienda actualizar(DatosTienda datosTienda) {
        return datosTiendaRepository.save(datosTienda);
    }

    @Override
    public Optional<DatosTienda> listarPorId(Integer id) {
        return datosTiendaRepository.findById(id);
    }

    @Override
    public void eliminarPorId(Integer id) {
        datosTiendaRepository.deleteById(id);
    }
}
