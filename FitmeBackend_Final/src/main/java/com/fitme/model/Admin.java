package com.fitme.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table
public class Admin {
	     @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    @Column
	    private Integer adminId;
	    @Column
	    private String adminName;
	    @Column
	    private String adminPass;
	    @Column
	    private String  adminEMail;

	    private String roles;
	    
	    public String getRoles() {
			return roles;
		}

		public void setRoles(String roles) {
			this.roles = roles;
		}
	    public int getAdminId() {
	        return adminId;
	    }

	    public void setAdminId(int adminId) {
	        this.adminId = adminId;
	    }

	    public String getAdminName() {
	        return adminName;
	    }

	    public void setAdminName(String adminName) {
	        this.adminName = adminName;
	    }

	    public String getAdminPass() {
	        return adminPass;
	    }

	    public void setAdminPass(String adminPass) {
	        this.adminPass = adminPass;
	    }

	    public String getAdminEMail() {
	        return adminEMail;
	    }

	    public void setAdminEMail(String adminEMail) {
	        this.adminEMail = adminEMail;
	    }
	
	
	
	
	
}
