package com.fitme.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table
public class GymPlan {

	
	     @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    @Column
	    private  Integer gymPlanId;
	    @Column
	    private  String name;
	    @Column
	    private  String duration;
		
		
		public Integer getGymPlanId() {
			return gymPlanId;
		}
		public void setGymPlanId(Integer gymPlanId) {
			this.gymPlanId = gymPlanId;
		}
		public String getName() {
			return name;
		}
		public void setName(String name) {
			this.name = name;
		}
		
		
		
		
		
		public String getDuration() {
			return duration;
		}
		public void setDuration(String duration) {
			this.duration = duration;
		}
		public GymPlan() {
			super();
			// TODO Auto-generated constructor stub
		}
		public GymPlan(Integer gymPlanId, String name, String duration) {
			super();
			this.gymPlanId = gymPlanId;
			this.name = name;
			this.duration = duration;
		}
		
		
	    
		
		
	    
		
	    
	  
	    
	    
	    
	    
	    
	    
	    
	
}
