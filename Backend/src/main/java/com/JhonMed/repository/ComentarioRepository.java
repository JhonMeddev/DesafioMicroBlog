package com.JhonMed.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.JhonMed.model.Comentario;

@Repository
public interface ComentarioRepository extends JpaRepository<Comentario, Long>{

	public List <Comentario> findAllByTextoContainingIgnoreCase(String texto);
	
}