package com.fitme.controller;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.fitme.model.GymPlan;

public interface IGymPlan {
   @GetMapping("/getplans")
	List<GymPlan> getAllGymPlan();
   @GetMapping("/getplan/{gymPlanId}")
   GymPlan getGymPlanDetails(@PathVariable ("gymPlanId") Integer id);
   @DeleteMapping("/gymplan/{gymPlanId}")
   void deleteGymPlanById(@PathVariable ("gymPlanId") Integer id);
   @PostMapping("/savegymplan")
   Integer saveGymPlan(@RequestBody GymPlan gymplan);
   @PostMapping("/gymplanupdate")
   GymPlan updateGymPlan(@RequestBody GymPlan gymplan );
	
	
}
 