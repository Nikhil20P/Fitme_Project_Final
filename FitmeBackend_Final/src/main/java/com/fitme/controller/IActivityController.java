package com.fitme.controller;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.fitme.model.Activity;

public interface IActivityController {
	
	@GetMapping("/Activity")
	List<Activity> getAllDetail();
	@GetMapping("/Activity/{id}")
	Activity getActivityDetailById(@PathVariable ("id") Integer id);
	@DeleteMapping("/Activitydelete/{id}")
	void deleteById(@PathVariable ("id") Integer id);
	@PostMapping("/Activitysave")
	Integer saveActivity(@RequestBody Activity activity);
	@PostMapping("/Activityupdate")
	Activity updateActivity(@RequestBody Activity activity);
	
	
	

}
