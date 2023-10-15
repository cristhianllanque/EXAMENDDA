package com.example.mscompras.feign;

import com.example.mscompras.dto.Proveedor;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "ms-proveedores-service", path = "/proveedores")
public interface ProveedorFeign {
    @GetMapping("/{id}")
    public ResponseEntity<Proveedor> listById(@PathVariable(required = true) Integer id);
}
