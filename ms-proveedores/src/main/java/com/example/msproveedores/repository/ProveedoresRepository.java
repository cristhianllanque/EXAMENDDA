package com.example.msproveedores.repository;

import com.example.msproveedores.entity.Proveedores;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProveedoresRepository extends
        JpaRepository<Proveedores,Integer > {
}
