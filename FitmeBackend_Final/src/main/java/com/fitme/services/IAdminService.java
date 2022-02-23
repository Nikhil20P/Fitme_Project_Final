package com.fitme.services;

import java.util.List;

import com.fitme.model.Admin;


public interface IAdminService {

	List<Admin> getAdminDetails();

	Admin getAdminById(Integer id);

	void saveOrUpdateAdmin(Admin admin);
	
	void deleteAdmin(Integer id);

    void updateAdmin(Admin admin, Integer id);
	 
}
