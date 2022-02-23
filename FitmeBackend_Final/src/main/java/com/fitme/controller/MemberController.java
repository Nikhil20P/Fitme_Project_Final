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

import com.fitme.model.Member;
import com.fitme.services.IMemberService;

@RestController
@CrossOrigin
public class MemberController  implements IMemberController{

	
	
	
	
	
	@Autowired
    IMemberService iMemberService;

    @Override
    @GetMapping("/members")
    public List<Member> getAllMembers(){

        return iMemberService.getAllMember();
    }

    @Override
    @GetMapping("/member/id/{memberId}")
    public Member getMemberDetails(@PathVariable("memberId") Integer memberId){

        return iMemberService.getMemberById(memberId);
    }

    @Override
    @DeleteMapping("/memberDelete/{memberId}")
    public  void deleteMemberById(@PathVariable("memberId") Integer memberId){

        iMemberService.deleteMember(memberId);
    }

    @Override
    @PostMapping("/members")
    public Integer saveMember(@RequestBody Member member){

        iMemberService.saveOrUpdateMember(member);
        return member.getMemberId();
    }

    @Override
    @PostMapping("/member")
    public Member updateMember(@RequestBody Member member){

        iMemberService.saveOrUpdateMember(member);
        return  member;
    }

	@Override
    @GetMapping("/member/name/{name}")
	public List<Member> getMemberByNameREST(@PathVariable("name") String name){
        return iMemberService.getMemberByName(name);
    }

	@Override
    @GetMapping("/member/age/{minAge}/{maxAge}")
	 public  List<Member> getMemberByAgeREST(@PathVariable("minAge") Integer minAge, @PathVariable("maxAge") Integer maxAge){
        return iMemberService.getMemberByAge(minAge,maxAge);
    }
	
	
	
	
	
	
	
	
	
	
	
	
	
}


