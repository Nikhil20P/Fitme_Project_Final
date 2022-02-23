package com.fitme.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.fitme.Repositoryes.IAdminRepository;
import com.fitme.model.Admin;
import com.fitme.model.AdminDetails;

@Service
public class AdminService implements IAdminService, UserDetailsService {
	@Autowired
	IAdminRepository iAdminRepository;

	@Override
	public List<Admin> getAdminDetails(){

        return iAdminRepository.findAll();
    }

	@Override
	public Admin getAdminById(Integer adminId){
    	Optional<Admin> value = iAdminRepository.findById(adminId);
    	if(value.isPresent()) {
    		return value.get();
    	}else {
    		return null;
    	}
    }

	@Override
	 public void saveOrUpdateAdmin(Admin admin){

        iAdminRepository.save(admin);
    }

	@Override
	public void deleteAdmin(Integer adminId){

        iAdminRepository.deleteById(adminId);
    }

	@Override
	public void updateAdmin(Admin admin, Integer adminId){

        iAdminRepository.save(admin);
    }

	@Override
	 public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
   	 Optional<Admin> user = iAdminRepository.findByAdminName(userName);

        user.orElseThrow(() -> new UsernameNotFoundException("Not found: " + userName));

        return user.map(AdminDetails::new).get();
   }
	}

	
	
	
	
 

	
