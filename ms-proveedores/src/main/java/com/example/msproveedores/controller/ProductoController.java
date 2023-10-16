package com.example.msproveedores.controller;

import com.example.msproveedores.entity.Producto;
import com.example.msproveedores.entity.Proveedores;
import com.example.msproveedores.service.ProductoService;
import com.example.msproveedores.service.ProveedoresService;
import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/producto")
public class ProductoController {
    @Autowired
    private ProductoService productoService;
    @GetMapping()
    public ResponseEntity<List<Producto>> list() {
        return ResponseEntity.ok().body(productoService.listar());
    }
    @PostMapping()
    public ResponseEntity<Producto> save(@RequestBody Producto producto) {return ResponseEntity.ok(productoService.guardar(producto));
    }
    @PutMapping()
    public ResponseEntity<Producto> update(@RequestBody Producto producto) {return ResponseEntity.ok(productoService.actualizar(producto));
    }
    @CircuitBreaker(name = "productoListerPorIdCB", fallbackMethod = "fallBackProductoListarPorIdCB")
    @GetMapping("/{id}")
    public ResponseEntity<Producto> listById(@PathVariable(required = true) Integer id) {
        return ResponseEntity.ok().body(productoService.listarPorId(id).get());
    }

    @DeleteMapping("/{id}")
    public String deleteById(@PathVariable(required = true) Integer id) {productoService.eliminarPorId(id);
        return "Eliminacion Correcta";
    }
    private ResponseEntity<Producto> fallBackProductoListarPorIdCB(@PathVariable(required = true) Integer id, RuntimeException e) {
        Producto producto = new Producto();
        producto.setId(90000);
        return ResponseEntity.ok().body(producto);
    }
}