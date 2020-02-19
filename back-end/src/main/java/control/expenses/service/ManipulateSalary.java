package control.expenses.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import control.expenses.model.Salary;
import control.expenses.repository.SalaryRepository;

@Service
public class ManipulateSalary {
	
	@Autowired
	private SalaryRepository salaryRepository;
		
	public void incrementSalary( Salary salary ) {
		
	}
	
	public Salary decrementSalary() {
		
		salaryRepository.findById(1L);
		return new Salary();
	
		
	}

}
