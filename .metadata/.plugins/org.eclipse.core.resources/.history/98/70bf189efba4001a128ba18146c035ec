package control.expenses.repository;
import java.util.Date;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import control.expenses.model.Recipe;

public interface RecipeRepository extends CrudRepository<Recipe, Long> {
	
	@Query( "select r from recipes r where r.dateMonth = ?1" )
	public Recipe getRecipePrevious(Date date);
		
}
