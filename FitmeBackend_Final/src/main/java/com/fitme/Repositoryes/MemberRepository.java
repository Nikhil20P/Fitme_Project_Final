package com.fitme.Repositoryes;

import java.util.List;
import org.hibernate.Session;
import javax.persistence.EntityManager;
import org.springframework.data.jpa.repository.support.SimpleJpaRepository;
import org.springframework.stereotype.Repository;

import com.fitme.model.Member;

@Repository
public class MemberRepository  extends SimpleJpaRepository<Member,Integer> implements IMemberRepository{

	private EntityManager entityManager;

    public MemberRepository(EntityManager en) {
        super(Member.class ,en);
        this.entityManager=en;
    }

    @Override
    public EntityManager getEntityManager() {
        return this.entityManager;
    }

    public void searchName(String name){

        Session session = (Session) getEntityManager().getDelegate();
        session.enableFilter("nameFilter").setParameter("name",name);

    }
    public  void ageFilter(Integer minAge, Integer maxAge){

        Session session = (Session) getEntityManager().getDelegate();
        session.enableFilter("ageFilter").setParameter("minAge",minAge).setParameter("maxAge",maxAge);
    }

    public List<Member> searchNameFilter(String name){

        searchName(name);
        List<Member> members = findAll();
        return members;
    }

    public List<Member> searchAgeFilter(Integer minAge, Integer maxAge){

        ageFilter(minAge,maxAge);
        List<Member> members = findAll();
        return members;
    }

	
	

}
