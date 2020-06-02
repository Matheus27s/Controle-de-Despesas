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
import control.expenses.modelUtil.CategoryUtil;
import control.expenses.modelUtil.RecipeUtil;
import control.expenses.repository.RecipeRepository;

@RestController
@CrossOrigin
@RequestMapping("/status")
public class StatusController {
		
	@Autowired
	private RecipeRepository recipeRepository;
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<Iterable<RecipeUtil>> get(@PathVariable(value = "id") Long id) {
		
		List<RecipeUtil> allRecipeUtil = new ArrayList<RecipeUtil>();
		
		Optional<Recipe> recipe = recipeRepository.findById(id);
		List<CategoryUtil> allCategoryUtil = new ArrayList<CategoryUtil>();
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
			
			
			CategoryUtil categoryUtil = new CategoryUtil();
			categoryUtil.setName(category.getName());
			categoryUtil.setValue(aux);
			categoryUtil.setColor(category.getColor());
			allCategoryUtil.add(categoryUtil);
			aux = 0;	
		}
		
		RecipeUtil recipeUtil = new RecipeUtil();
		recipeUtil.setValue(recipe.get().getValue());
		recipeUtil.setDateMonth(recipe.get().getDateMonth());
		recipeUtil.setId(recipe.get().getId());
		recipeUtil.setCategoriesUtil(allCategoryUtil);
		
//		-------------------------------------------------------------------------------------
		
		Optional<Recipe> recipe1;
		
		if(id == 4) {
			recipe1 = recipeRepository.findById(id) ;
		} else {
			recipe1 = recipeRepository.findById(id - 1) ;
		}		
		
		List<CategoryUtil> allCategoryUtil1 = new ArrayList<CategoryUtil>();
		float aux1 = 0;
		
		Set<Category> semRepeticao1 = new HashSet<Category>();
		
		for(Move move : recipe1.get().getMoves()) {			
			semRepeticao1.add(move.getCategory());
		}
				
		for( Category category : semRepeticao ) {
						
			for(Move move : category.getMoves()) {
				
				if(move.getRecipe().getId() == recipe1.get().getId()) {
					aux = aux + move.getValue();
				} 
				
			}
			
			
			CategoryUtil categoryUtil = new CategoryUtil();
			categoryUtil.setName(category.getName());
			categoryUtil.setValue(aux);
			categoryUtil.setColor(category.getColor());
			allCategoryUtil1.add(categoryUtil);
			aux = 0;	
		}
		
		RecipeUtil recipeUtil1 = new RecipeUtil();
		recipeUtil1.setValue(recipe1.get().getValue());
		recipeUtil1.setDateMonth(recipe1.get().getDateMonth());
		recipeUtil1.setId(recipe1.get().getId());
		recipeUtil1.setCategoriesUtil(allCategoryUtil1);
		
		allRecipeUtil.add(recipeUtil1);
		allRecipeUtil.add(recipeUtil); 
		
		return ResponseEntity.ok(allRecipeUtil);
				
	}
	
}
