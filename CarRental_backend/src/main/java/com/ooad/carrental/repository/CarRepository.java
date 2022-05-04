package com.ooad.carrental.repository;

import java.util.List;
import com.ooad.carrental.model.car.Car;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CarRepository extends MongoRepository<Car,String>{
    public List<Car> findByCarLocationId(String cid);
}