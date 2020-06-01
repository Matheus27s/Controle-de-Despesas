package control.expenses.controller;

import java.util.Base64;
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

import control.expenses.model.User;
import control.expenses.repository.UserRepository;

@RestController
@CrossOrigin
@RequestMapping("/users")
public class IndexController {
	
	@Autowired
	private UserRepository userRepository;
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<User> get(@PathVariable(value = "id") Long id) {
		
		Optional<User> user =  userRepository.findById(id);
		return ResponseEntity.ok(user.get());
		
	}
	
	@PostMapping
	public ResponseEntity<User> insert( @RequestBody User user ) {
		
		if(user.getProfile() != null ) {
			
			String encodedString = Base64.getEncoder().encodeToString(user.getProfile().getBytes());
			user.setProfile(encodedString);
			
		} else {
			user.setProfile("");
		}
		
		Optional<User> aux = userRepository.findById(user.getId());
		user.setRecipes(aux.get().getRecipes());
		
		user = userRepository.save(user);
		return ResponseEntity.ok(user);
		
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<String> remove( @PathVariable( name = "id" ) Long id ) {
		userRepository.deleteById(id);
		return new ResponseEntity("OK!!", HttpStatus.OK);
	}

}
