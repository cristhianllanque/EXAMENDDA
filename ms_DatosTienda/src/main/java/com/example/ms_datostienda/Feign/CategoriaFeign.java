package com.example.ms_datostienda.Feign;

import com.example.ms_datostienda.controller.Categoria;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
@FeignClient(name = "ms-Dastos-tienda-servise", path = "/categoria")

public interface CategoriaFeign {
    @GetMapping
    public ResponseEntity<Categoria> listById(@PathVariable(required = true) Integer id);
}
