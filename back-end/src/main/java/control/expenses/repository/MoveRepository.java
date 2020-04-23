package control.expenses.repository;
import org.springframework.data.repository.CrudRepository;
import control.expenses.model.Move;

public interface MoveRepository extends CrudRepository<Move, Long> {
}
