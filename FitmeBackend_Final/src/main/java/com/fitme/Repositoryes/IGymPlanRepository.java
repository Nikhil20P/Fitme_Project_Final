package com.fitme.Repositoryes;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fitme.model.GymPlan;

public interface IGymPlanRepository extends JpaRepository<GymPlan, Integer> {

}
