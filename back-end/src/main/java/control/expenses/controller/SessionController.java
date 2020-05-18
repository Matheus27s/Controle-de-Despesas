package control.expenses.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import control.expenses.model.User;
import control.expenses.repository.UserRepository;

@RestController
@CrossOrigin
@RequestMapping("/sessions")
public class SessionController {
	
	@Autowired
	private UserRepository userRepository;
	
	@PostMapping
	public  ResponseEntity<User> login( @RequestBody User user ) {
						
		user = userRepository.login(user.getLogin());
		return ResponseEntity.ok(user);
	}

}
