package control.expenses.repository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import control.expenses.model.Recipe;
import control.expenses.model.User;

public interface RecipeRepository extends CrudRepository<Recipe, Long> {
	
	@Query( "select u from users u where u.login = ?1" )
	public User login(String login);
	
}
