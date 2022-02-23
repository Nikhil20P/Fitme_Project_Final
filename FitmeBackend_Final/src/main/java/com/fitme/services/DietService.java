package com.fitme.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fitme.Repositoryes.IDietRepository;
import com.fitme.model.Diet;

@Service
public class DietService  implements IDietService{
	
	@Autowired
    IDietRepository iDietRepository;

	@Override
	public List<Diet> getDietDetails(){

        return iDietRepository.findAll();
    }

	 @Override
	    public Diet getDietById(Integer dietId){
	    	Optional<Diet> value = iDietRepository.findById(dietId);
	    	if(value.isPresent()) {
	    		return value.get();
	    	}else {
	    		return null;
	    	}
	    }

	@Override
	 public void saveOrUpdateDiet(Diet diet){

        iDietRepository.save(diet);
    }

	@Override
	public void deleteDiet(Integer dietId){

        iDietRepository.deleteById(dietId);
    }

	@Override
	public void updateDiet(Diet diet, Integer dietId){

        iDietRepository.save(diet);
    }

	@Override
	public Diet getDietByCalories(Float calorie){

	       return iDietRepository.findDietByCalorie(calorie);
	    }
	

}
