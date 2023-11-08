package com.AirlineBookingSystem.Repository;

import com.AirlineBookingSystem.Model.ReservationModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReservationRepository extends JpaRepository<ReservationModel,Integer> {
}
