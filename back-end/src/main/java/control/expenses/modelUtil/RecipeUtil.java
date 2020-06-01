package control.expenses.modelUtil;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.ForeignKey;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

public class RecipeUtil implements Serializable {
	
	private Long id;
	@Temporal( TemporalType.DATE )
	private Date dateMonth;
	private Float value;
	
	@JsonManagedReference
	@OneToMany( mappedBy = "recipe", cascade = CascadeType.ALL )
	private List<CategoryUtil> categoriesUtil = new ArrayList<CategoryUtil>();

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Date getDateMonth() {
		return dateMonth;
	}

	public void setDateMonth(Date dateMonth) {
		this.dateMonth = dateMonth;
	}

	public Float getValue() {
		return value;
	}

	public void setValue(Float value) {
		this.value = value;
	}

	public List<CategoryUtil> getCategoriesUtil() {
		return categoriesUtil;
	}

	public void setCategoriesUtil(List<CategoryUtil> categoriesUtil) {
		this.categoriesUtil = categoriesUtil;
	}

	
	
}
