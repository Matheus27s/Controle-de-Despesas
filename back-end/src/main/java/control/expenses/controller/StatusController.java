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
import control.expenses.model.Move;
import control.expenses.model.Recipe;
import control.expenses.modelUtil.CategoryStatus;
import control.expenses.repository.RecipeRepository;

@RestController
@CrossOrigin
@RequestMapping("/status")
public class StatusController {
		
	@Autowired
	private RecipeRepository recipeRepository;
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<Iterable<CategoryStatus>> get(@PathVariable(value = "id") Long id) {
		
		Optional<Recipe> recipe = recipeRepository.findById(id);
		List<CategoryStatus> allCategoryStatus = new ArrayList<CategoryStatus>();
		float aux = 0;
		
		Set<Category> semRepeticao = new HashSet<Category>();
		
		for(Move move : recipe.get().getMoves()) {			
			semRepeticao.add(move.getCategory());
		}
				
		for( Category category : semRepeticao ) {
						
			for(Move move : category.getMoves()) {
				
				if(move.getRecipe().getId() == recipe.get().getId()) {
					aux = aux + move.getValue();
				} 
				
			}
			
			
			CategoryStatus categoryStatus = new CategoryStatus();
			categoryStatus.setName(category.getName());
			categoryStatus.setValue(aux);
			categoryStatus.setColor(category.getColor());
			allCategoryStatus.add(categoryStatus);
			aux = 0;	
		}
			
		return ResponseEntity.ok(allCategoryStatus);
		
	}
	
}
