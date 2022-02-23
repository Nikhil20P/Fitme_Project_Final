package com.fitme.Repositoryes;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.fitme.model.Diet;

public interface IDietRepository extends JpaRepository<Diet,Integer> {
	
	
	@Query(value = "SELECT * FROM diet WHERE calorie = ROUND(? , -2)",nativeQuery = true)
    Diet findDietByCalorie(Float calorie);   

}
