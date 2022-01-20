package com.JhonMed.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.JhonMed.model.Comentario;
import com.JhonMed.repository.ComentarioRepository;

@RestController
@RequestMapping("/comentarios")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ComentarioController {

	@Autowired
	private ComentarioRepository comentarioRepository;

	@GetMapping
	public ResponseEntity<List<Comentario>> getAll() {
		return ResponseEntity.ok(comentarioRepository.findAll());
	}

	@GetMapping("/{id}")
	public ResponseEntity<Comentario> getById(@PathVariable long id) {
		return comentarioRepository.findById(id)
				.map(resp -> ResponseEntity.ok(resp))
				.orElse(ResponseEntity.notFound().build());
	}

	@PostMapping
	public ResponseEntity<Comentario> postComentario(@Valid @RequestBody Comentario comentario) {
		return ResponseEntity.status(HttpStatus.CREATED).body(comentarioRepository.save(comentario));
	}

	@PutMapping
	public ResponseEntity<Comentario> putComentario(@Valid @RequestBody Comentario comentario) {
		return comentarioRepository.findById(comentario.getId())
			.map(resp -> ResponseEntity.status(HttpStatus.OK).body(comentarioRepository.save(comentario)))
			.orElse(ResponseEntity.status(HttpStatus.BAD_REQUEST).build());
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteComentario(@PathVariable long id) {
		return comentarioRepository.findById(id)
			.map(resposta -> {
				comentarioRepository.deleteById(id);
				return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
			})
			.orElse(ResponseEntity.status(HttpStatus.NOT_FOUND).build());
	}
}