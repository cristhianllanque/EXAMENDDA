package com.example.mscompras.controller;

import com.example.mscompras.dto.Proveedor;
import com.example.mscompras.entity.Compras;
import com.example.mscompras.service.CompraService;
import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/compra")
public class CompraController {
    @Autowired
    private CompraService compraService;

    @GetMapping()
    public ResponseEntity<List<Compras>> list() {
        return ResponseEntity.ok(compraService.listar());
    }

    @PostMapping()
    public ResponseEntity<Compras> save(@RequestBody Compras compras) {
        return ResponseEntity.ok(compraService.guardar(compras));
    }

    @PutMapping()
    public ResponseEntity<Compras> update(@RequestBody Compras compras) {
        return ResponseEntity.ok(compraService.actualizar(compras));
    }
    @CircuitBreaker(name = "compraListarPorIdCB", fallbackMethod = "fallBackCompraListarPorIdCB")
    @GetMapping("/{id}")
    public ResponseEntity<Compras> listById(@PathVariable(required = true) Integer id) {
        return ResponseEntity.ok().body(compraService.listarPorId(id).get());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<List<Compras>> deleteById(@PathVariable(required = true) Integer id) {
        compraService.eliminarPorId(id);
        return ResponseEntity.ok(compraService.listar());
    }
    private ResponseEntity<Compras> fallBackCompraListarPorIdCB(@PathVariable(required = true) Integer id, RuntimeException e) {
        Compras compras = new Compras();
        compras.setId(90000);
        Proveedor proveedor = new Proveedor();
        proveedor.setNombre("Recurso no disponible del nombre del proveedor");
        proveedor.setDireccion("no tiene direccion");
        proveedor.set(proveedor);
        return ResponseEntity.ok().body(compras);
    }

}
