package com.fitme.Repositoryes;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fitme.model.Activity;

public interface IActivityRpositary extends JpaRepository<Activity, Integer> {

}
