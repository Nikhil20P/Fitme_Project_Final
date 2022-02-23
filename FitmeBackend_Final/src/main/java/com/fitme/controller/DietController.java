package com.fitme.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fitme.model.Diet;
import com.fitme.services.IDietService;

@RestController
@CrossOrigin
public class DietController implements IDietController{
	
	
	@Autowired
    IDietService iDietService;

	@Override
    @GetMapping("/diets")
    public List<Diet> getAllDiets(){

        return iDietService.getDietDetails();
    }

	@Override
    @GetMapping("/diet/id/{dietId}")
    public Diet getDietDetailsById(@PathVariable("dietId") Integer dietId){

        return iDietService.getDietById(dietId);
    }

	 @Override
	    @DeleteMapping("deleteDiet/{dietId}")
	    public  void deleteDietById(@PathVariable("dietId") Integer dietId){

	        iDietService.deleteDiet(dietId);
	    }

	 @Override
	    @PostMapping("/diets")
	    public Integer saveDiet(@RequestBody Diet diet){

	        iDietService.saveOrUpdateDiet(diet);
	        return diet.getDietId();
	    }

	 @Override
	    @PostMapping("/diet")
	    public Diet updateDiet(@RequestBody Diet diet){

	        iDietService.saveOrUpdateDiet(diet);
	        return  diet;
	    }

	 @Override
	    @GetMapping("/diet/calorie/{calorie}")
	    public Diet getDietByCalories(@PathVariable("calorie") Float calorie){

	        return iDietService.getDietByCalories(calorie);
	    }

	    

}
