package control.expenses.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import control.expenses.model.Recipe;
import control.expenses.repository.RecipeRepository;

@Service
public class ManipulateSalary {
	
	@Autowired
	private RecipeRepository salaryRepository;
		
	public void incrementSalary( Recipe salary ) {
		
	}
	
	public Recipe decrementSalary() {
		
		salaryRepository.findById(1L);
		return new Recipe();
	
		
	}

}
