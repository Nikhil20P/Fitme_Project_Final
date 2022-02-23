package com.fitme.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fitme.model.Admin;
import com.fitme.services.IAdminService;

@RestController
@CrossOrigin
public class AdminController implements IAdminController{
	
	
	
	@Autowired
    IAdminService iAdminService;
	
	@GetMapping("/")
	public String getadmin() {
		return "Login_done";
	}

	@Override
	 @GetMapping("/admin")
	public List<Admin> getAllAdminDetails() {
		
		return iAdminService.getAdminDetails() ;
	}

	@Override
	@GetMapping("/admin/{Id}")
	public Admin getAdminById(Integer Id) {
		
		return iAdminService.getAdminById(Id);
	}

	@Override
	@PostMapping("/admins")
	public Integer SaveAdmin(@RequestBody Admin admin) {
		iAdminService.saveOrUpdateAdmin(admin);
        return admin.getAdminId();
	}

	
}
