package com.AirlineBookingSystem.Repository;

import com.AirlineBookingSystem.Model.GuestModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GustRepository extends JpaRepository<GuestModel,Integer> {
}