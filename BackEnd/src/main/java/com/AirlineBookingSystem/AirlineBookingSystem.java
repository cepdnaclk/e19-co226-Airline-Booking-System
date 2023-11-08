package com.AirlineBookingSystem;

import com.AirlineBookingSystem.Model.BookingModel;
import com.AirlineBookingSystem.Repository.BookingRepository;
import org.modelmapper.ModelMapper;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;



@SpringBootApplication
public class AirlineBookingSystem {

    public static void main(String[] args) {
        SpringApplication.run(AirlineBookingSystem.class, args);
    }

    @Bean
    public ModelMapper modelMapper(){
        return new ModelMapper();
    }




}
