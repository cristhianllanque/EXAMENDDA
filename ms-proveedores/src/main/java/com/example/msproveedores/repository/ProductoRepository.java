package com.example.msproveedores.repository;

import com.example.msproveedores.entity.Producto;
import com.example.msproveedores.entity.Proveedores;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductoRepository extends
        JpaRepository<Producto,Integer > {
}
