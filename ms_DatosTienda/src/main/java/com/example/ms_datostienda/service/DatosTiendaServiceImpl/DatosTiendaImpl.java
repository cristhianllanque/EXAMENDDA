package com.example.ms_datostienda.service.DatosTiendaServiceImpl;

import com.example.ms_datostienda.Feign.ProveedoresFeign;
import com.example.ms_datostienda.controller.Proveedores;
import com.example.ms_datostienda.entity.DatosTienda;
import com.example.ms_datostienda.repository.DatosTiendaRepository;
import com.example.ms_datostienda.service.DatosTiendaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service

public class DatosTiendaImpl implements DatosTiendaService {

@Autowired
private DatosTiendaRepository datosTiendaRepository;
@Autowired
    ProveedoresFeign proveedoresFeign;
    @Override
    public List<DatosTienda> listar() {
        return datosTiendaRepository.findAll() ;
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
        DatosTienda datosTienda = datosTiendaRepository.findById(id).get();
        Proveedores proveedores = proveedoresFeign.listById(datosTienda.getProveedoresId()).getBody();
        datosTienda.getProveedores(proveedores);
        return Optional.of(datosTienda);
    }
    @Override
    public void eliminarPorId(Integer id) {
    datosTiendaRepository.deleteById(id);

    }
}
