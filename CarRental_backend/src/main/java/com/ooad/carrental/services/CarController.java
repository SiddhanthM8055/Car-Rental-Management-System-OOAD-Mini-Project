package com.ooad.carrental.services;

import com.ooad.carrental.model.car.Car;
import com.ooad.carrental.model.car.RentalLocation;
import com.ooad.carrental.repository.CarRepository;
import com.ooad.carrental.repository.RentalLocationRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CarController {
    @Autowired
    private CarRepository repository;
    @Autowired
    private RentalLocationRepository repository1;
    @CrossOrigin
    @PostMapping(value="/carrentals/addCar")
    public String addPhoto(@RequestBody Car newCar) { 
        Car savedCar = repository.save(newCar);
        return savedCar.getId();
    }
    @CrossOrigin
    @GetMapping(value = "/carrentals/giveCar/{cid}")
    public CarRental getCar(@PathVariable String cid){
        Car car = repository.findById(cid).orElse(null);
        RentalLocation rental = repository1.findById(car.getCarLocationId()).orElse(null);
        CarRental carrental = new CarRental();
        carrental.car = car;
        carrental.rentalLocation = rental;
        return carrental;
    }
}
