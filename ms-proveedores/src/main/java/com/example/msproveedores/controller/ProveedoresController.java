package com.example.msproveedores.controller;

import com.example.msproveedores.entity.Proveedores;
import com.example.msproveedores.service.ProveedoresService;
import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/proveedores")
public class ProveedoresController {
    @Autowired
    private ProveedoresService proveedoresService;
    @GetMapping()
    public ResponseEntity<List<Proveedores>> list() {
        return ResponseEntity.ok().body(proveedoresService.listar());
    }
    @PostMapping()
    public ResponseEntity<Proveedores> save(@RequestBody Proveedores proveedores) {return ResponseEntity.ok(proveedoresService.guardar(proveedores));
    }
    @PutMapping()
    public ResponseEntity<Proveedores> update(@RequestBody Proveedores proveedores) {return ResponseEntity.ok(proveedoresService.actualizar(proveedores));
    }
    @CircuitBreaker(name = "proveedoresListarPorIdCB", fallbackMethod = "fallBackProveedoresListarPorIdCB")
    @GetMapping("/{id}")
    public ResponseEntity<Proveedores> listById(@PathVariable(required = true) Integer id) {
        return ResponseEntity.ok().body(proveedoresService.listarPorId(id).get());
    }

    @DeleteMapping("/{id}")
    public String deleteById(@PathVariable(required = true) Integer id) {proveedoresService.eliminarPorId(id);
        return "Eliminacion Correcta";
    }
    private ResponseEntity<Proveedores> fallBackProveedoresListarPorIdCB(@PathVariable(required = true) Integer id, RuntimeException e) {
        Proveedores proveedores = new Proveedores();
        proveedores.setId(90000);
        return ResponseEntity.ok().body(proveedores);
    }
}
