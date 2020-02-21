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
import control.expenses.model.Expense;
import control.expenses.repository.CategoryRepository;
import control.expenses.repository.ExpenseRepository;
import control.expenses.repository.UserRepository;

@RestController
@CrossOrigin
@RequestMapping("/expenses")
public class ExpenseController {
	
	@Autowired
	private UserRepository userRepository;

	@Autowired
	private CategoryRepository categoryRepository;
	
	@Autowired
	private ExpenseRepository expenseRepository;
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<Expense> init(@PathVariable(value = "id") Long id) {
		
		Optional<Expense> expense =  expenseRepository.findById(id);
		return ResponseEntity.ok(expense.get());
		
	}
	
	@PostMapping("/")
	public ResponseEntity<Expense> insert( @RequestBody Expense expense ) {
		expense = expenseRepository.save(expense);
		return ResponseEntity.ok(expense);
		
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity removeExpense( @PathVariable( name = "id")  Long id ) {
		expenseRepository.deleteById(id);
		return new ResponseEntity("OK!!", HttpStatus.OK);
	}
	
}