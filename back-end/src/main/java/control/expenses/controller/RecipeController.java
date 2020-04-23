package control.expenses.controller;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import control.expenses.model.Recipe;
import control.expenses.model.User;
import control.expenses.repository.CategoryRepository;
import control.expenses.repository.MoveRepository;
import control.expenses.repository.RecipeRepository;
import control.expenses.repository.UserRepository;

@RestController
@CrossOrigin
@RequestMapping("/salaries")
public class RecipeController {
	
	@Autowired
	private UserRepository userRepository;

	@Autowired
	private CategoryRepository categoryRepository;
	
	@Autowired
	private MoveRepository moveRepository;
	
	@Autowired
	private RecipeRepository recipeRepository;
	
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<Recipe> init(@PathVariable(value = "id") Long id) {
		
		Optional<Recipe> salary =  recipeRepository.findById(id);
		return ResponseEntity.ok(salary.get());
		
	}
	
	@PostMapping("")
	public ResponseEntity<Recipe> insert( @RequestBody Recipe recipe ) throws ParseException {			
		
		recipe = recipeRepository.save(recipe);
		return ResponseEntity.ok(recipe);
		
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<String> remove( @PathVariable( name = "id" ) Long id ) {
		userRepository.deleteById(id);
		return new ResponseEntity("OK!!", HttpStatus.OK);
	}
	
	@GetMapping()
	public  ResponseEntity<User> login( @RequestParam( value = "login" ) String login ) {
		
		User user = userRepository.login(login);
		return ResponseEntity.ok(user);
	}

}