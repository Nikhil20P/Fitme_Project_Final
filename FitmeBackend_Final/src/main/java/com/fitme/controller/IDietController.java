package com.fitme.controller;


import org.springframework.web.bind.annotation.*;

import com.fitme.model.Diet;

import java.util.List;

public interface IDietController {
	
	
	
	@GetMapping("/diets")
    List<Diet> getAllDiets();

    @GetMapping("/diet/id/{dietId}")
    Diet getDietDetailsById(@PathVariable("dietId") Integer dietId);

    @DeleteMapping("deleteDiet/{dietId}")
    void deleteDietById(@PathVariable("dietId") Integer dietId);

    @PostMapping("/diets")
    Integer saveDiet(@RequestBody Diet diet);

    @PostMapping("/diet")
    Diet updateDiet(@RequestBody Diet diet);
    
    @GetMapping("/diet/calorie/{calorie}")
	Diet getDietByCalories(Float calorie);

}
