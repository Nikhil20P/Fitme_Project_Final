package com.fitme.model;

import java.sql.Date;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.Filter;
import org.hibernate.annotations.FilterDef;
import org.hibernate.annotations.ParamDef;




@FilterDef(name = "nameFilter",
parameters = {
        @ParamDef(name = "name", type = "java.lang.String")
})
@FilterDef(name = "ageFilter",
parameters = {
        @ParamDef(name = "minAge", type ="java.lang.Integer"),
       @ParamDef(name = "maxAge", type = "java.lang.Integer")
})

@Filter(name = "nameFilter", condition = "NAME in (:name) ")
@Filter(name = "ageFilter", condition = "age >= :minAge and age <= :maxAge")


@Entity
@Table
public class Member {
	
	
	 @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    @Column
	    private  Integer memberId;
	    @Column(name = "NAME")
	    private  String name;
	    @Column
	    private String email;
	    @Column
	    private long mobileNumber;
	    @Column
	    private String address;
	    @Column
	    private String gender;
	    @Column
	    private float height;
	    @Column
	    private float weight;
	    @Column
	    private Integer age;
	    @Column
	    private Date joiningDate;
	    @Column
	    private String status;
	  
    @OneToOne(cascade = CascadeType.MERGE)
   private GymPlan gymplan;
	   
	    
	    //@JoinColumn(referencedColumnName="gymPlanId")
	  
	   

		public Integer getMemberId() {
			return memberId;
		}

		public void setMemberId(Integer memberId) {
			this.memberId = memberId;
		}

		public String getName() {
			return name;
		}

		public void setName(String name) {
			this.name = name;
		}

		public String getEmail() {
			return email;
		}

		public void setEmail(String email) {
			this.email = email;
		}

		

		

		

		public long getMobileNumber() {
			return mobileNumber;
		}

		public void setMobileNumber(long mobileNumber) {
			this.mobileNumber = mobileNumber;
		}

		public String getAddress() {
			return address;
		}

		public void setAddress(String address) {
			this.address = address;
		}

		public String getGender() {
			return gender;
		}

		public void setGender(String gender) {
			this.gender = gender;
		}

		

		public float getHeight() {
			return height;
		}

		public void setHeight(float height) {
			this.height = height;
		}

		public float getWeight() {
			return weight;
		}

		public void setWeight(float weight) {
			this.weight = weight;
		}

		public void setWeight(Integer weight) {
			this.weight = weight;
		}

		public Integer getAge() {
			return age;
		}

		public void setAge(Integer age) {
			this.age = age;
		}

		public Date getJoiningDate() {
			return joiningDate;
		}

		public void setJoiningDate(Date joiningDate) {
			this.joiningDate = joiningDate;
		}

		public String getStatus() {
			return status;
		}

		public void setStatus(String status) {
			this.status = status;
		}

		public GymPlan getGymplan() {
			return gymplan;
		}

		public void setGymplan(GymPlan gymplan) {
			this.gymplan = gymplan;
		}

	
		

	

}
