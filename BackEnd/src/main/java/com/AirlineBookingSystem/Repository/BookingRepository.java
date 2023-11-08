package com.AirlineBookingSystem.Repository;

import com.AirlineBookingSystem.Model.BookingModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BookingRepository extends JpaRepository<BookingModel,Integer> {

    // Add a new method to find bookings by email
    List<BookingModel> findByEmail(String email);

}
