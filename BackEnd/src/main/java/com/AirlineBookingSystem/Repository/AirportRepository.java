package com.AirlineBookingSystem.Repository;

import com.AirlineBookingSystem.Model.AirportModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AirportRepository extends JpaRepository<AirportModel,Integer> {



}
