package com.fitme.Repositoryes;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fitme.model.Admin;

public interface IAdminRepository extends JpaRepository<Admin,Integer>{
	Optional<Admin> findByAdminName(String adminName);

}
