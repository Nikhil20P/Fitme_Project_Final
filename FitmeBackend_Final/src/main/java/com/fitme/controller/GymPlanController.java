package com.fitme.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fitme.model.GymPlan;
import com.fitme.services.IGymPlanService;

@RestController
@CrossOrigin
public class GymPlanController implements IGymPlan {
	
	@Autowired
	IGymPlanService igymplanservice;

	@Override
	@GetMapping("/getplans")
	public List<GymPlan> getAllGymPlan() {
		return igymplanservice.getAllGymPlan();
	}

	@Override
	 @GetMapping("/getplan/{gymPlanId}")
	public GymPlan getGymPlanDetails(@PathVariable ("gymPlanId") Integer gymPlanId) {
		return igymplanservice.getGymPlanById(gymPlanId);
	}

	@Override
	 @DeleteMapping("/gymplan/{gymPlanId}")
	public void deleteGymPlanById(@PathVariable ("gymPlanId") Integer gymPlanId) {
		 igymplanservice.deleteGymPlan(gymPlanId);
		
	}

	@Override
	@PostMapping("/savegymplan")
	public Integer saveGymPlan(@RequestBody GymPlan gymplan) {
		igymplanservice.saveOrUpdateGymPlan(gymplan);
		return gymplan.getGymPlanId();
	}

	@Override
	 @PostMapping("/gymplanupdate")
	public GymPlan updateGymPlan(@RequestBody GymPlan gymplan) {
		igymplanservice.saveOrUpdateGymPlan(gymplan);
		return gymplan;
	}

}
