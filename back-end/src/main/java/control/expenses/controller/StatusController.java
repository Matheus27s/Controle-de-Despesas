package control.expenses.controller;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import control.expenses.model.Category;
import control.expenses.model.Expense;
import control.expenses.model.Salary;
import control.expenses.modelUtil.CategoryStatus;
import control.expenses.repository.CategoryRepository;
import control.expenses.repository.SalaryRepository;

@RestController
@CrossOrigin
@RequestMapping("/status")
public class StatusController {
		
	@Autowired
	private SalaryRepository salaryRepository;
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<Iterable<CategoryStatus>> init(@PathVariable(value = "id") Long id) {
		
		Optional<Salary> salary = salaryRepository.findById(id);
		List<CategoryStatus> allCategoryStatus = new ArrayList<CategoryStatus>();
		float aux = 0;
		
		Set<Category> semRepeticao = new HashSet<Category>();
		
		for(Expense expense : salary.get().getExpenses()) {			
			semRepeticao.add(expense.getCategory());
		}
				
		for( Category category : semRepeticao ) {
						
			for(Expense expense : category.getExpenses()) {
				
				if(expense.getSalary().getId() == salary.get().getId()) {
					aux = aux + expense.getValue();
				} 
				
			}
			
			
			CategoryStatus categoryStatus = new CategoryStatus();
			categoryStatus.setName(category.getName());
			categoryStatus.setValue(aux);
			allCategoryStatus.add(categoryStatus);
			aux = 0;	
		}
			
		return ResponseEntity.ok(allCategoryStatus);
		
	}
	
}