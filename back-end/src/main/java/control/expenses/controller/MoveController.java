package control.expenses.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import control.expenses.model.Category;
import control.expenses.model.Move;
import control.expenses.repository.CategoryRepository;
import control.expenses.repository.MoveRepository;
import control.expenses.repository.UserRepository;

@RestController
@CrossOrigin
@RequestMapping("/moves")
public class MoveController {
	
	@Autowired
	private UserRepository userRepository;

	@Autowired
	private CategoryRepository categoryRepository;
	
	@Autowired
	private MoveRepository moveRepository;
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<Move> init(@PathVariable(value = "id") Long id) {
		
		Optional<Move> expense =  moveRepository.findById(id);
		return ResponseEntity.ok(expense.get());
		
	}
	
	@PostMapping("")
	public ResponseEntity<Move> insert( @RequestBody Move move ) {
		move = moveRepository.save(move);
		return ResponseEntity.ok(move);
		
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity removeMove( @PathVariable( name = "id")  Long id ) {
		moveRepository.deleteById(id);
		return new ResponseEntity("OK!!", HttpStatus.OK);
	}
	
}