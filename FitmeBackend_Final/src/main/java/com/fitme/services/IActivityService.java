package com.fitme.services;

import java.util.List;

import com.fitme.model.Activity;

public interface IActivityService {

	List<Activity> getAllDetail();

	Activity getActivityDetailById(Integer id);

	void deleteById(Integer id);

	void saveActivity(Activity activity);

	void updateActivity(Activity activity, Integer id);

	

}
