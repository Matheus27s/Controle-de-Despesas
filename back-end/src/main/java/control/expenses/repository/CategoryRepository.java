package control.expenses.repository;
import org.springframework.data.repository.CrudRepository;
import control.expenses.model.Category;

public interface CategoryRepository extends CrudRepository<Category, Long> {

}
