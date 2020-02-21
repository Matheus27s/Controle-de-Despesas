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

import control.expenses.model.Salary;
import control.expenses.model.User;
import control.expenses.repository.CategoryRepository;
import control.expenses.repository.ExpenseRepository;
import control.expenses.repository.SalaryRepository;
import control.expenses.repository.UserRepository;

@RestController
@CrossOrigin
@RequestMapping("/salaries")
public class SalaryController {
	
	@Autowired
	private UserRepository userRepository;

	@Autowired
	private CategoryRepository categoryRepository;
	
	@Autowired
	private ExpenseRepository expenseRepository;
	
	@Autowired
	private SalaryRepository salaryRepository;
	
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<Salary> init(@PathVariable(value = "id") Long id) {
		
		Optional<Salary> salary =  salaryRepository.findById(id);
		return ResponseEntity.ok(salary.get());
		
	}
	
	@PostMapping("/")
	public ResponseEntity<Salary> insert( @RequestBody Salary salary ) throws ParseException {
				
		System.out.println(salary.getData());
			
		
		salary = salaryRepository.save(salary);
		return ResponseEntity.ok(salary);
		
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