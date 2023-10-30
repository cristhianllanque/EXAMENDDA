package com.example.msproductos.controller;

import com.example.msproductos.entity.Productos;
import com.example.msproductos.service.ProductosService;
import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/productos")
public class ProductosController {
    @Autowired
    private ProductosService productosService;

    @GetMapping()
    public ResponseEntity<List<Productos>> list() {
        return ResponseEntity.ok().body(productosService.listar());
    }

    @PostMapping()
    public ResponseEntity<Productos> save(@RequestBody Productos producto) {
        return ResponseEntity.ok(productosService.guardar(producto));
    }

    @PutMapping()
    public ResponseEntity<Productos> update(@RequestBody Productos producto) {
        return ResponseEntity.ok(productosService.actualizar(producto));
    }

    @CircuitBreaker(name = "productosListarPorIdCB", fallbackMethod = "fallBackProductosListarPorIdCB")
    @GetMapping("/{id}")
    public ResponseEntity<Productos> listById(@PathVariable(required = true) Integer id) {
        return ResponseEntity.ok().body(productosService.listarPorId(id).orElse(null));
    }

    @DeleteMapping("/{id}")
    public String deleteById(@PathVariable(required = true) Integer id) {
        productosService.eliminarPorId(id);
        return "";
    }

    private ResponseEntity<Productos> fallBackProductosListarPorIdCB(@PathVariable(required = true) Integer id, RuntimeException e) {
        Productos producto = new Productos();
        producto.setId(90000);
        return ResponseEntity.ok().body(producto);
    }
}
