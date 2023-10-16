package com.example.ms_datostienda.Feign;

import com.example.ms_datostienda.controller.Cliente;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "ms-Dastos-tienda-servise", path = "/cliente")
public interface ClienteFeing {
    @GetMapping("/{id}")
    public ResponseEntity<Cliente> listById(@PathVariable(required = true) Integer id);
}
