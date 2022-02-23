package com.fitme.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table
public class Activity {
	@Id
	@GeneratedValue (strategy = GenerationType.IDENTITY)
	private Integer id;
	@Column
	private String day;
	@Column
	private String workouts;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getDay() {
		return day;
	}
	public void setDay(String day) {
		this.day = day;
	}
	public String getWorkouts() {
		return workouts;
	}
	public void setWorkouts(String workouts) {
		this.workouts = workouts;
	}
	public Activity() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Activity(Integer id, String day, String workouts) {
		super();
		this.id = id;
		this.day = day;
		this.workouts = workouts;
	}
	
	
	
	
	
	
	

}
