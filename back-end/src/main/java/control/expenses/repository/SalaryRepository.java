package control.expenses.repository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import control.expenses.model.Salary;
import control.expenses.model.User;

public interface SalaryRepository extends CrudRepository<Salary, Long> {
	
	@Query( "select u from users u where u.login = ?1" )
	public User login(String login);
	
}
