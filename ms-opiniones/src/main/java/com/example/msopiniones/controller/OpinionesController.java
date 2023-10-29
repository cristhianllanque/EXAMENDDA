package com.example.msopiniones.controller;

import com.example.msopiniones.entity.Opiniones;
import com.example.msopiniones.service.OpinionesService;
import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/opiniones")
public class OpinionesController {
    @Autowired
    private OpinionesService opinionesService;

    @GetMapping()
    public ResponseEntity<List<Opiniones>> list() {
        return ResponseEntity.ok().body(opinionesService.obtenerTodasLasOpiniones());
    }

    @PostMapping()
    public ResponseEntity<Opiniones> save(@RequestBody Opiniones opinion) {
        return ResponseEntity.ok(opinionesService.guardarOpinion(opinion));
    }

    @PutMapping()
    public ResponseEntity<Opiniones> update(@RequestBody Opiniones opinion) {
        return ResponseEntity.ok(opinionesService.actualizarOpinion(opinion));
    }

    @CircuitBreaker(name = "opinionesListarPorIdCB", fallbackMethod = "fallBackOpinionesListarPorIdCB")
    @GetMapping("/{id}")
    public ResponseEntity<Opiniones> listById(@PathVariable(required = true) Integer id) {
        return ResponseEntity.ok(opinionesService.obtenerOpinionPorId(id).orElse(null));
    }

    @DeleteMapping("/{id}")
    public String deleteById(@PathVariable(required = true) Integer id) {
        opinionesService.eliminarOpinionPorId(id);
        return "Eliminación Correcta";
    }

    private ResponseEntity<Opiniones> fallBackOpinionesListarPorIdCB(@PathVariable(required = true) Integer id, RuntimeException e) {
        Opiniones opinion = new Opiniones();
        opinion.setId(90000); // Mantén el valor "90000" como respuesta alternativa
        return ResponseEntity.ok(opinion);
    }
}
