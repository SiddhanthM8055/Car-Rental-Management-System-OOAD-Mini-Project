package com.ooad.carrental.repository;

import com.ooad.carrental.model.account.Admin;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface AdminRepository extends MongoRepository<Admin,String>{

    Admin findByEmail(String email);
    
}