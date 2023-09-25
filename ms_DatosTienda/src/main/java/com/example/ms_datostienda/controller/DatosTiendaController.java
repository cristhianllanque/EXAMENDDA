package com.example.ms_datostienda.controller;

import com.example.ms_datostienda.entity.DatosTienda;
import com.example.ms_datostienda.service.DatosTiendaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/DatosTienda")
public class DatosTiendaController {
    @Autowired
    private DatosTiendaService datosTiendaService;
    @GetMapping
    public ResponseEntity<List<DatosTienda>> list(){
        return ResponseEntity.ok().body(datosTiendaService.listar());
    }
    @PostMapping()
    public  ResponseEntity<DatosTienda> save(@RequestBody DatosTienda datosTienda){
        return  ResponseEntity.ok(datosTiendaService.guardar(datosTienda));
    }
    @PutMapping()
    public ResponseEntity<DatosTienda> update(@RequestBody DatosTienda datosTienda){
        return ResponseEntity.ok(datosTiendaService.actualizar(datosTienda));
    }
    @GetMapping("/{id}")
    public ResponseEntity<DatosTienda> listById(@PathVariable(required = true)Integer id){
        return ResponseEntity.ok().body(datosTiendaService.listarPorId(id).get());

    }
    @DeleteMapping("/{id}")
    public String deleteById(@PathVariable(required = true)Integer id){
        datosTiendaService.eliminarPorId(id);

        return"Eliminacion Correcta";

    }


}
