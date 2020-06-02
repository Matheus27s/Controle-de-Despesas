package control.expenses.model;

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
import javax.persistence.OrderBy;
import javax.persistence.SequenceGenerator;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.ForeignKey;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity( name = "recipes" )
@SequenceGenerator( name = "seq_recipes", sequenceName = "seq_recipes", allocationSize = 1, initialValue = 1 )
public class Recipe implements Serializable {
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue( strategy = GenerationType.SEQUENCE, generator = "seq_recipes" )
	private Long id;
	
	@Temporal( TemporalType.DATE )
	private Date dateMonth;
	
	private Float value;
	
	@JsonBackReference()
	@ManyToOne()
	@ForeignKey( name = "user_id" )
	private User user;
	
	@JsonManagedReference
	@OneToMany( mappedBy = "recipe", cascade = CascadeType.ALL )
	@OrderBy("paymentDate")
	private List<Move> moves = new ArrayList<Move>();
	
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
	
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	
	public List<Move> getMoves() {
		return moves;
	}
	public void setMoves(List<Move> moves) {
		this.moves = moves;
	}
	
	public void increment( float moveValue ) {
		this.setValue(value + moveValue);
	}
	
	public void decrement( float moveValue ) {
		this.setValue(value - moveValue);
	}
	
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		return result;
	}
	
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Recipe other = (Recipe) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}
	@Override
	public String toString() {
		return "Salary [id=" + id + ", data=" + dateMonth + ", value=" + value + ", valueModal=" + ", user="
				+ user + ", expenses=" + moves + "]";
	}
	
	
	
}
