package com.fitme.controller;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.fitme.model.Member;

public interface IMemberController {

	
	@GetMapping("/members")
    List<Member> getAllMembers();

    @GetMapping("/member/{memberId}")
    Member getMemberDetails(@PathVariable("memberId") Integer memberId);

    @DeleteMapping("/memberDelete/{memberId}")
    void deleteMemberById(@PathVariable("memberId") Integer memberId);

    @PostMapping("/members")
    Integer saveMember(@RequestBody Member member);

    @PostMapping("/member")
    Member updateMember(@RequestBody Member member);
    
    @GetMapping("/member/name/{name}")
    List<Member> getMemberByNameREST(@PathVariable("name") String name);

    @GetMapping("/member/age/{minAge}/{maxAge}")
    List<Member> getMemberByAgeREST(@PathVariable("minAge") Integer minAge, @PathVariable("maxAge") Integer maxAge);

	
	
}
