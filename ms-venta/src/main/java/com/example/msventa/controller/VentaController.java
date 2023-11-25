package com.example.msventa.controller;

import com.example.msventa.entity.Venta;
import com.example.msventa.service.VentaService;
import com.example.msventa.entity.Venta;
import com.example.msventa.service.VentaService;
import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/venta")
public class VentaController {
    @Autowired
    private VentaService ventaService;
    @GetMapping()
    public ResponseEntity<List<Venta>> list() {
        return ResponseEntity.ok().body(ventaService.listar());
    }
    @PostMapping()
    public ResponseEntity<Venta> save(@RequestBody Venta venta) {return ResponseEntity.ok(ventaService.guardar(venta));
    }
    @PutMapping()
    public ResponseEntity<Venta> update(@RequestBody Venta venta) {return ResponseEntity.ok(ventaService.actualizar(venta));
    }
    @CircuitBreaker(name = "ventaListarPorIdCB", fallbackMethod = "fallBackVentaListarPorIdCB")
    @GetMapping("/{id}")
    public ResponseEntity<Venta> listById(@PathVariable(required = true) Integer id) {
        return ResponseEntity.ok().body(ventaService.listarPorId(id).get());
    }

    @DeleteMapping("/{id}")
    public String deleteById(@PathVariable(required = true) Integer id) {ventaService.eliminarPorId(id);
        return "Eliminacion Correcta";
    }
    private ResponseEntity<Venta> fallBackVentaListarPorIdCB(@PathVariable(required = true) Integer id, RuntimeException e) {
        Venta venta = new Venta();
        venta.setId(90000);
        return ResponseEntity.ok().body(venta);
    }
}
