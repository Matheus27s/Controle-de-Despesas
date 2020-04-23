package control.expenses;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import control.expenses.model.Category;
import control.expenses.model.Move;
import control.expenses.model.Recipe;
import control.expenses.model.User;
import control.expenses.modelUtil.CategoryStatus;
import control.expenses.repository.CategoryRepository;
import control.expenses.repository.MoveRepository;
import control.expenses.repository.RecipeRepository;
import control.expenses.repository.UserRepository;
import control.expenses.service.ManipulateSalary;

@SpringBootTest
class ApplicationTests {
	
	@Autowired
	private UserRepository userRepository;

	@Autowired
	private CategoryRepository categoryRepository;
	
	@Autowired
	private MoveRepository expenseRepository;
	
	@Autowired
	private RecipeRepository salaryRepository;
	
	
	private ManipulateSalary manpuleSalary = new ManipulateSalary();
	
	@Test
	void contextLoads() {
		Optional<User> user = userRepository.findById(1L);
		System.out.println(user.get());
	}
	
	@Test
	void init() {
		
	}
	
	@Test
	void insertUser() { //Method insert user
		
		User user = new User();
		user.setId(1L);
		user.setName("Matheus Sousa Santos");
		user.setLogin("admin");
		user.setPassword("admin");
		user = userRepository.save(user);
		
		System.out.println(user);
		
	}
	
	@Test
	void removeUser() { //Method remove user
		
		Optional<User> user = userRepository.findById(6L);
		userRepository.deleteById(user.get().getId());
		
		System.out.println("OK!!");
		
	}
	
	@Test
	void insertSalary() {
		
		Recipe salary = new Recipe();
		salary.setValue(1200f);
		
//		Convertendo a data
		
		
				
			
			Optional<User> user = userRepository.findById(1L);
		
		salary.setUser(user.get());
		
		salary = salaryRepository.save(salary);
		
		System.out.println(salary);
		
	}
	
	@Test
	void insertExpense() {//insert an expense with data did entered
		
		Optional <Recipe> salary = salaryRepository.findById(1L);
		Optional <Category> category = categoryRepository.findById(3L);
		
		Move expense = new Move();
		expense.setName("Testando salary 5");
		expense.setValue(20f);
		expense.setSalary(salary.get());
		expense.setCategory(category.get());
		expense.setPaymentDate(new Date());
		
		Move expenseReturn = expenseRepository.save(expense);
		System.out.println( expenseReturn.getSalary().getValue() );
		
	}
	
	@Test
	void expense() {
		Optional<Move> expense = expenseRepository.findById(20L);
		System.out.println("Salário: " + expense.get().getSalary());
	}

	
	@Test
	void insertUserWithExpense() { //Method insert user with your expense and expense with your category
		
		User user = new User();
		user.setName("Luma");
		
			Move expense = new Move();
			expense.setName("Bloco Maiobão");
			expense.setValue(70f);
				Optional<Category> category = categoryRepository.findById(11L);
			expense.setCategory(category.get());
		
			List<Move> expenses = new ArrayList<Move>();
			expenses.add(expense);
				
		user = userRepository.save(user);
		System.out.println(user.getName());
		
	}
	
	
	
	@Test
	void updateExpense() {//update an expense
		
		Optional<Move> expense = expenseRepository.findById(7L);
		
		expense.get().setName("Pagamento Moto");
		
		Move repoExpense = expenseRepository.save(expense.get());
		System.out.println(repoExpense);
	}
	
	@Test
	void removeExpense() {//remove an expense
		
		Optional<Move> expense = expenseRepository.findById(6L);
		expenseRepository.deleteById(expense.get().getId());
		System.out.println("OK!!");
	}
	
	@Test
	void allExpenses() { //show all expenses
		
		Optional<Recipe> salary =  salaryRepository.findById(1L);
		System.out.println(salary.get());
		
	}
	
	@Test
	void inserCategory() { //Method insert user with your expense and expense with your category
		
		Category category = new Category();
		category.setName("Lazer");
		
		categoryRepository.save(category);
		
		Category category1 = new Category();
		category1.setName("Comida");
		
		categoryRepository.save(category1);
		
		Category category2 = new Category();
		category2.setName("Conta");
		
		categoryRepository.save(category2);
		
	}
	
	@Test
	void showExpenseForCategory() { //( recebo somente o id do salary )
		
//		Pegar a categoria de cada expense
		
		Optional<Recipe> salary = salaryRepository.findById(2L);
		List<CategoryStatus> allCategoryStatus = new ArrayList<CategoryStatus>();
		float aux = 0;
		
		System.out.println("Expenses do salário " + salary.get().getId());
		
		for(Move expense : salary.get().getExpenses()) {
			System.out.println(expense.getName());
		}
		
		System.out.println(" = = = = = = = = = = = = = = = = = = = = = = = = = = = = = ");
		
		Set<Category> semRepeticao = new HashSet<Category>();

		
		for(Move expense : salary.get().getExpenses()) {
			
			System.out.println("Despesa: " + expense.getName());
			System.out.println("Usuário: " + salary.get().getUser().getName());
			System.out.println("Salário: " + salary.get().getValue());
			System.out.println("Categoria: " + expense.getCategory().getName());
			System.out.println("- -");
			
			semRepeticao.add(expense.getCategory());

		}
		
		System.out.println("Categoria sem repetição -------------");
		
		for( Category category : semRepeticao ) {
			
			System.out.println("Categoria: " + category.getName());
			
			for(Move expense : category.getMoves()) {
				 
				
				if(expense.getSalary().getId() == salary.get().getId()) {
					
					aux = aux + expense.getValue();
					System.out.println("Valor somando: " + aux);				
				} 
				
			}
			
			
			CategoryStatus categoryStatus = new CategoryStatus();
			categoryStatus.setName(category.getName());
			categoryStatus.setValue(aux);
			
			allCategoryStatus.add(categoryStatus);
			
			aux = 0;

			
		}
		
		for(CategoryStatus categoryStatus : allCategoryStatus) {
			
			System.out.println(categoryStatus.getName());
			System.out.println(categoryStatus.getValue());
			
		}
			
			
	}
			

}
