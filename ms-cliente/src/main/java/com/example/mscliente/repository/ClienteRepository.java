package com.example.mscliente.repository;

import com.example.mscliente.entity.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ClienteRepository extends
        JpaRepository<Cliente,Integer > {

}
