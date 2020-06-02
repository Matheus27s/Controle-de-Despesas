package control.expenses.controller;

import java.util.ArrayList;
import java.util.Calendar;
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
import control.expenses.model.User;
import control.expenses.modelUtil.CategoryUtil;
import control.expenses.modelUtil.RecipeUtil;
import control.expenses.repository.RecipeRepository;
import control.expenses.repository.UserRepository;

@RestController
@CrossOrigin
@RequestMapping("/status")
public class StatusController {
		
	@Autowired
	private RecipeRepository recipeRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<Iterable<RecipeUtil>> get(@PathVariable(value = "id") Long id) {
		
		Optional<Recipe> recipe = recipeRepository.findById(id);
		Optional<User> user = userRepository.findById(recipe.get().getUser().getId());
		
		
		List<Recipe> recipes = new ArrayList<Recipe>();
		List<RecipeUtil> recipeUtils = new ArrayList<RecipeUtil>();

		
		Recipe now = new Recipe();
		Recipe previous = new Recipe();
		int index = 0;
		
		for( Recipe rw: user.get().getRecipes() ) {
			
						
			if( index != 0 && rw.getDateMonth() == recipe.get().getDateMonth()) {
				
				now = rw;	
				
				Calendar dat = Calendar.getInstance();
				dat.setTime(rw.getDateMonth());
				dat.add(Calendar.MONTH, -1);				
				previous = recipeRepository.getRecipePrevious(dat.getTime());
				
				recipes.add(now);
				recipes.add(previous);
			} 
			
			if(index == 0 && rw.getDateMonth() == recipe.get().getDateMonth()) {
				now = rw;
				previous = rw;
				
				recipes.add(now);
				recipes.add(previous);
			}
			
			index = index + 1;
			
		}
		
		for( Recipe rec: recipes ) {
						
//			Usando pra salvar uma lista de categorias.
			List<CategoryUtil> allCategoryUtil = new ArrayList<CategoryUtil>();
			float aux = 0;
			
			Set<Category> noRepeat = new HashSet<Category>();
			
	// # Uso para saber as categorias usadas por um determinado usuário		
			
//			Pega todas as movimentações de um determinado Lançamento e adiciona a sua categoria um uma lista sem repetição( semRepeticao )
			for(Move move : rec.getMoves()) {			
				noRepeat.add(move.getCategory());
			}
			
			
//		    Pega essa lista de categorias inseridas anteriormente		
			for( Category category : noRepeat ) {
							
//			    Passo a ter cada categoria da lista 'semRepetição'...
				
//	          Pego todos as movimentação de uma categoria.
				for(Move move : category.getMoves()) {
					
//					Se a movimentação que estamos lidando é uma movimentação do mês que estamos trabalhando.( Com isso trabalhamos comente com as movimentação do mês )
					if(move.getRecipe().getId() == rec.getId()) {
						
//						Vamos pegar o valor da Movimentação e somar.( Com isso passamos a ter um montante de cada categoria inserida na variável "aux")
						aux = aux + move.getValue();
					} 
					
				}
				
//		# Essa objeto nos ajudará a criar oque será mostrado em tela.
				CategoryUtil categoryUtil = new CategoryUtil();
				
//				A categoria.
				categoryUtil.setName(category.getName());
				
//				O valor da soma das movimentões que são dessa categoria.
				categoryUtil.setValue(aux);
				
//				A cor dessa categoria que será mostrado.
				categoryUtil.setColor(category.getColor());
				
//				Adiciono essa categoria a uma lista que será retornada.
				allCategoryUtil.add(categoryUtil);
				aux = 0;	
			}
			
			
	// # Preciso mostrar esse mesmo sistema para o mês atual e o mês anterior. Por isso o valor  retornado será uma lista de recipes.
			

//			Objeto que será retornado com duas recipes.
			RecipeUtil recipeUtil = new RecipeUtil();
			recipeUtil.setValue(rec.getValue());
			recipeUtil.setDateMonth(rec.getDateMonth());
			recipeUtil.setId(rec.getId());
			recipeUtil.setCategoriesUtil(allCategoryUtil);
			
			recipeUtils.add(recipeUtil); 

		}
			
		return ResponseEntity.ok(recipeUtils);		
	}
	
}
