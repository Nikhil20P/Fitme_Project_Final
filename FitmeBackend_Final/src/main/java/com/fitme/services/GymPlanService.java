package com.fitme.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fitme.Repositoryes.IGymPlanRepository;
import com.fitme.model.GymPlan;

@Service
public class GymPlanService  implements IGymPlanService{
	
	@Autowired
	IGymPlanRepository igymplanrepository;

	@Override
	public List<GymPlan> getAllGymPlan() {
		return igymplanrepository.findAll();
	}

	@Override
	public GymPlan getGymPlanById(Integer gymPlanId) {
		Optional<GymPlan> value = igymplanrepository.findById(gymPlanId);
    	if(value.isPresent()) {
    		return value.get();
    	}else {
    		return null;
    	}
	}

	@Override
	public void deleteGymPlan(Integer gymPlanId) {
		igymplanrepository.deleteById(gymPlanId);
		
	}

	@Override
	public void saveOrUpdateGymPlan(GymPlan gymplan) {
		igymplanrepository.save(gymplan);
		
	}

	@Override
	public void updateGymPlan(GymPlan gymplan, Integer gymPlanId) {
	igymplanrepository.save(gymplan);
		
	}
	
	
	
	
	

}
