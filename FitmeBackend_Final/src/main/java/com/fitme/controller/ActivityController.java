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

import com.fitme.model.Activity;
import com.fitme.services.IActivityService;

@RestController
@CrossOrigin
public class ActivityController implements IActivityController {
	
	@Autowired
	IActivityService iActivityService;

	@Override
	@GetMapping("/Activity")
	public List<Activity> getAllDetail() {
		return iActivityService. getAllDetail();
	}

	@Override
	@GetMapping("/Activity/{id}")
	public Activity getActivityDetailById(@PathVariable ("id") Integer id) {
		return iActivityService.getActivityDetailById(id);
	}

	@Override
	@DeleteMapping("/Activitydelete/{id}")
	public void deleteById(@PathVariable("id") Integer id) {
       iActivityService.deleteById(id);		
	}

	@Override
	@PostMapping("/Activitysave")
	public Integer saveActivity(@RequestBody Activity activity) {
		iActivityService.saveActivity(activity);
		return activity.getId();
	}

	@Override
	@PostMapping("/Activityupdate")
	public Activity updateActivity(@RequestBody Activity activity) {
		 iActivityService.saveActivity(activity);
		 return activity;
	}
	

}
