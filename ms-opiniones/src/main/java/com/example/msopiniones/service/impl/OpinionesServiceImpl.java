package com.example.msopiniones.service.impl;

import com.example.msopiniones.entity.Opiniones;
import com.example.msopiniones.repository.OpinionesRepository;
import com.example.msopiniones.service.OpinionesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OpinionesServiceImpl implements OpinionesService {

    @Autowired
    private OpinionesRepository opinionesRepository;

    @Override
    public List<Opiniones> obtenerOpinionesPorProducto(Integer productId) {

        return opinionesRepository.findByProductId(productId);
    }

    @Override
    public Opiniones guardarOpinion(Opiniones opinion) {

        return opinionesRepository.save(opinion);
    }

    @Override
    public Opiniones actualizarOpinion(Opiniones opinion) {

        return opinionesRepository.save(opinion);
    }

    @Override
    public Optional<Opiniones> obtenerOpinionPorId(Integer id) {

        return opinionesRepository.findById(id);
    }

    @Override
    public void eliminarOpinionPorId(Integer id) {

        opinionesRepository.deleteById(id);
    }

    @Override
    public List<Opiniones> obtenerOpinionesPorUsuario(String nombreUsuario) {

        return opinionesRepository.findByNombreUsuario(nombreUsuario);
    }

    @Override
    public List<Opiniones> obtenerTodasLasOpiniones() {
        return opinionesRepository.findAll();
    }

}
