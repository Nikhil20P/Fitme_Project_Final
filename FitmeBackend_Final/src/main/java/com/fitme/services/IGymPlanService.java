package com.fitme.services;

import java.util.List;

import com.fitme.model.GymPlan;

public interface IGymPlanService {

	List<GymPlan> getAllGymPlan();

	GymPlan getGymPlanById(Integer gymPlanId);

	void deleteGymPlan(Integer gymPlanId);

	void saveOrUpdateGymPlan(GymPlan gymplan);

	void updateGymPlan(GymPlan gymplan,Integer gymPlanId);
	
	

}
