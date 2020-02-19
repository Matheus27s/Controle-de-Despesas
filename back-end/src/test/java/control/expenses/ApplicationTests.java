package control.expenses;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import control.expenses.model.Category;
import control.expenses.model.Expense;
import control.expenses.model.Salary;
import control.expenses.model.User;
import control.expenses.repository.CategoryRepository;
import control.expenses.repository.ExpenseRepository;
import control.expenses.repository.SalaryRepository;
import control.expenses.repository.UserRepository;
import control.expenses.service.ManipulateSalary;

@SpringBootTest
class ApplicationTests {
	
	@Autowired
	private UserRepository userRepository;

	@Autowired
	private CategoryRepository categoryRepository;
	
	@Autowired
	private ExpenseRepository expenseRepository;
	
	@Autowired
	private SalaryRepository salaryRepository;
	
	
	private ManipulateSalary manpuleSalary = new ManipulateSalary();
	
	@Test
	void contextLoads() {
	}
	
	@Test
	void init() {
		System.out.println("Olá Mundo!");
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
		
		Salary salary = new Salary();
		salary.setValue(1200f);
		
//		Convertendo a data
		
		
				
			
			Optional<User> user = userRepository.findById(1L);
		
		salary.setUser(user.get());
		
		salary = salaryRepository.save(salary);
		
		System.out.println(salary);
		
	}
	
	@Test
	void insertExpense() {//insert an expense with data did entered
		
		Optional <Salary> salary = salaryRepository.findById(1L);
		Optional <Category> category = categoryRepository.findById(3L);
		
		Expense expense = new Expense();
		expense.setName("Testando salary 5");
		expense.setValue(20f);
		expense.setSalary(salary.get());
		expense.setCategory(category.get());			
		
		Expense expenseReturn = expenseRepository.save(expense);
		System.out.println( expenseReturn.getSalary().getValue() );
		
	}
	
	@Test
	void expense() {
		Optional<Expense> expense = expenseRepository.findById(20L);
		System.out.println("Salário: " + expense.get().getSalary());
	}

	
	@Test
	void insertUserWithExpense() { //Method insert user with your expense and expense with your category
		
		User user = new User();
		user.setName("Luma");
		
			Expense expense = new Expense();
			expense.setName("Bloco Maiobão");
			expense.setValue(70f);
				Optional<Category> category = categoryRepository.findById(11L);
			expense.setCategory(category.get());
		
			List<Expense> expenses = new ArrayList<Expense>();
			expenses.add(expense);
				
		user = userRepository.save(user);
		System.out.println(user.getName());
		
	}
	
	
	
	@Test
	void updateExpense() {//update an expense
		
		Optional<Expense> expense = expenseRepository.findById(7L);
		
		expense.get().setName("Pagamento Moto");
		
		Expense repoExpense = expenseRepository.save(expense.get());
		System.out.println(repoExpense);
	}
	
	@Test
	void removeExpense() {//remove an expense
		
		Optional<Expense> expense = expenseRepository.findById(6L);
		expenseRepository.deleteById(expense.get().getId());
		System.out.println("OK!!");
	}
	
	@Test
	void allExpenses() { //show all expenses
		
		Optional<Salary> salary =  salaryRepository.findById(1L);
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
	
	

}
