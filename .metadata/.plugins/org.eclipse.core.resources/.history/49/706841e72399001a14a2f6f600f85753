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

import control.expenses.model.Move;
import control.expenses.model.Recipe;
import control.expenses.repository.CategoryRepository;
import control.expenses.repository.MoveRepository;
import control.expenses.repository.RecipeRepository;
import control.expenses.repository.UserRepository;

@RestController
@CrossOrigin
@RequestMapping("/moves")
public class MoveController {
		
	@Autowired
	private RecipeRepository recipeRepository;
	
	@Autowired
	private MoveRepository moveRepository;
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<Move> get(@PathVariable(value = "id") Long id) {
			
		Optional<Move> expense =  moveRepository.findById(id);
		return ResponseEntity.ok(expense.get());
		
	}
	
	@PostMapping
	public ResponseEntity<Move> insert( @RequestBody Move move ) {
		
		Optional<Recipe> recipe = recipeRepository.findById(move.getRecipe().getId());
				
		if( move.getTypeMove() == 1 ) {
			recipe.get().increment(move.getValue());
			
		} else {
			recipe.get().decrement(move.getValue());
		}
		
		recipeRepository.save(recipe.get());
		
		move.setRecipe(recipe.get());
				
		move = moveRepository.save(move);
		return ResponseEntity.ok(move);
		
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity remove( @PathVariable( name = "id")  Long id ) {
						
		Optional<Move> move = moveRepository.findById(id);
		Optional<Recipe> recipe = recipeRepository.findById(move.get().getRecipe().getId());
		
		if( move.get().getTypeMove() == 1 ) {
			recipe.get().decrement(move.get().getValue());
			
		} else {
			recipe.get().increment(move.get().getValue());
		}
		
		
		moveRepository.deleteById(id);
		return new ResponseEntity("OK!!", HttpStatus.OK);
	}
	
}
