package com.example.datostiendaservice.controller;

import com.example.datostiendaservice.entity.DatosTienda;
import com.example.datostiendaservice.service.DatosTiendaService;
import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/datostienda")
public class DatosTiendaController {
    @Autowired
    private DatosTiendaService datosTiendaService;

    @GetMapping()
    public ResponseEntity<List<DatosTienda>> list() {
        return ResponseEntity.ok().body(datosTiendaService.listar());
    }

    @PostMapping()
    public ResponseEntity<DatosTienda> save(@RequestBody DatosTienda datosTienda) {
        return ResponseEntity.ok(datosTiendaService.guardar(datosTienda));
    }

    @PutMapping()
    public ResponseEntity<DatosTienda> update(@RequestBody DatosTienda datosTienda) {
        return ResponseEntity.ok(datosTiendaService.actualizar(datosTienda));
    }

    @CircuitBreaker(name = "datosTiendaListarPorIdCB", fallbackMethod = "fallBackDatosTiendaListarPorIdCB")
    @GetMapping("/{id}")
    public ResponseEntity<DatosTienda> listById(@PathVariable(required = true) Integer id) {
        Optional<DatosTienda> datosTienda = datosTiendaService.listarPorId(id);
        if (datosTienda.isPresent()) {
            return ResponseEntity.ok().body(datosTienda.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteById(@PathVariable(required = true) Integer id) {
        datosTiendaService.eliminarPorId(id);
        return ResponseEntity.ok("Eliminado con éxito");
    }

    private ResponseEntity<DatosTienda> fallBackDatosTiendaListarPorIdCB(@PathVariable(required = true) Integer id, RuntimeException e) {
        DatosTienda datosTienda = new DatosTienda();
        datosTienda.setId(90000);
        return ResponseEntity.ok().body(datosTienda);
    }
}
