package com.AirlineBookingSystem.Repository;

import com.AirlineBookingSystem.Model.FlightModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FlightRepository extends JpaRepository<FlightModel,Integer> {
}
