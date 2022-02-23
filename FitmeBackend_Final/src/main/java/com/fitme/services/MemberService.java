package com.fitme.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fitme.Repositoryes.MemberRepository;
import com.fitme.model.Member;

@Service
public class MemberService  implements IMemberService {
	
	
	
	
	@Autowired
    MemberRepository memberRepository;

	@Override
	 public List<Member> getAllMember(){

	       return memberRepository.findAll();
	    }

	@Override
	public Member getMemberById(Integer memberId) {
		Optional<Member> value= memberRepository.findById(memberId);
		if(value.isPresent()) {
    		return value.get();
    	}else {
    		return null;
    	}
	}

	@Override
	public void deleteMember(Integer memberId) {
		 memberRepository.deleteById(memberId);
		
	}

	@Override
	public void saveOrUpdateMember(Member member) {
		 memberRepository.save(member);
	}

	@Override
	public void updateMember(Member member, Integer memberId) {
		memberRepository.save(member);
		
	}

	@Override
	public List<Member> getMemberByName(String name) {
		 return  memberRepository.searchNameFilter(name);
	}

	@Override
	public List<Member> getMemberByAge(Integer minAge, Integer maxAge) {
		 return  memberRepository.searchAgeFilter(minAge,maxAge);
	}

}
