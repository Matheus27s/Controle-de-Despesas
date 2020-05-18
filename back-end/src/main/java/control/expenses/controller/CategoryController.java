package control.expenses.controller;

import java.text.ParseException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import control.expenses.model.Category;
import control.expenses.repository.CategoryRepository;

@RestController
@CrossOrigin
@RequestMapping("/categories")
public class CategoryController {
	
	@Autowired
	private CategoryRepository categoryRepository;
	
	@GetMapping()
	public ResponseEntity<Iterable<Category>> all() {
		
		Iterable<Category> categories = categoryRepository.findAll();
		return ResponseEntity.ok(categories);
		
	}
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<Category> get(@PathVariable(value = "id") Long id) {
		
		Optional<Category> category =  categoryRepository.findById(id);
		return ResponseEntity.ok(category.get());
		
	}
	
	@PostMapping
	public ResponseEntity<Category> insert( @RequestBody Category category ) throws ParseException {			
		category = categoryRepository.save(category);
		return ResponseEntity.ok(category);
	}
	
}
