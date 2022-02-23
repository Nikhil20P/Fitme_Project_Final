package com.fitme.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table
public class Diet {

	
	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    @Column
	    private Integer dietId;
	    @Column(unique = true)
	    private Float calorie;
	    @Column
	    private String diets;

	    public Integer getDietId() {
	        return dietId;
	    }

	    public void setDietId(Integer dietId) {
	        this.dietId = dietId;
	    }

	    public Float getCalorie() {
	        return calorie;
	    }

	    public void setCalorie(Float calorie) {
	        this.calorie = calorie;
	    }

	    public String getDiets() {
	        return diets;
	    }

	    public void setDiets(String diets) {
	        this.diets = diets;
	    }
	
	
}
