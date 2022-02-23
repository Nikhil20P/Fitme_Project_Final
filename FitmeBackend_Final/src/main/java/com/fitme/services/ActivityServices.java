package com.fitme.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fitme.Repositoryes.IActivityRpositary;
import com.fitme.model.Activity;


@Service
public class ActivityServices implements IActivityService {
	
	@Autowired
	IActivityRpositary iActivityRpositary;

	@Override
	public List<Activity> getAllDetail() {
		// TODO Auto-generated method stub
		return iActivityRpositary.findAll();
	}

	@Override
	public Activity getActivityDetailById(Integer id) {
		Optional<Activity> value = iActivityRpositary.findById(id);
    	if(value.isPresent()) {
    		return value.get();
    	}else {
    		return null;
    	}
    }
	

	@Override
	public void deleteById(Integer id) {
        iActivityRpositary.deleteById(id);		
	}

	@Override
	public void saveActivity(Activity activity) {
     iActivityRpositary.save(activity);		
	}

	@Override
	public void updateActivity(Activity activity, Integer id) {
		iActivityRpositary.save(activity);
		
	}

//	@Override
//	public void updateActivity(Activity activity) {
//    iActivityRpositary.save(activity);		
//	}

	
	
	

}
