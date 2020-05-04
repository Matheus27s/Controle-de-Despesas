package control.expenses.controller;

import java.util.Optional;

import javax.websocket.server.PathParam;

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

import control.expenses.model.User;
import control.expenses.repository.CategoryRepository;
import control.expenses.repository.MoveRepository;
import control.expenses.repository.UserRepository;

@RestController
@CrossOrigin
@RequestMapping("/users")
public class IndexController {
	
	@Autowired
	private UserRepository userRepository;

	@Autowired
	private CategoryRepository categoryRepository;
	
	@Autowired
	private MoveRepository expenseRepository;
	
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<User> init(@PathVariable(value = "id") Long id) {
		
		Optional<User> user =  userRepository.findById(id);
		return ResponseEntity.ok(user.get());
		
	}
	
	@PostMapping("/")
	public ResponseEntity<User> insert( @RequestBody User user ) {
		
		user = userRepository.save(user);
		return ResponseEntity.ok(user);
		
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<String> remove( @PathVariable( name = "id" ) Long id ) {
		userRepository.deleteById(id);
		return new ResponseEntity("OK!!", HttpStatus.OK);
	}
	
	@PostMapping()
	public  ResponseEntity<User> login( @RequestParam( value = "login" ) String login ) {
		
		User user = userRepository.login(login);
		return ResponseEntity.ok(user);
	}
	
	

}
