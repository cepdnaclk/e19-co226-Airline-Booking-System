package com.AirlineBookingSystem.Service;

import com.AirlineBookingSystem.Dto.BookingDto;
import com.AirlineBookingSystem.Model.BookingModel;
import com.AirlineBookingSystem.Repository.BookingRepository;
import com.AirlineBookingSystem.Utill.VariableList;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class BookingService {

    @Autowired
    private BookingRepository bookingRepository;

    @Autowired
    private ModelMapper modelMapper;

    public String saveBooking(BookingDto bookingDto) {
        if (bookingRepository.existsById(bookingDto.getFlightId())) {
            return VariableList.RSP_DUPLICATED;
        } else {
            bookingRepository.save(modelMapper.map(bookingDto, BookingModel.class));
            return VariableList.RSP_SUCCESS;
        }
    }


    public BookingDto getBookingById(int flightId) {
        BookingModel bookingModel = bookingRepository.findById(flightId).orElse(null);
        if (bookingModel != null) {
            return modelMapper.map(bookingModel, BookingDto.class);
        }
        return null;
    }

    // Add a method to fetch bookings by email
    public List<BookingDto> getBookingsByEmail(String email) {
        List<BookingModel> bookingsByUserEmail = bookingRepository.findByEmail(email);
        if (!bookingsByUserEmail.isEmpty()) {
            // Convert the List of BookingModel to List of BookingDto
            return bookingsByUserEmail.stream()
                    .map(bookingModel -> modelMapper.map(bookingModel, BookingDto.class))
                    .collect(Collectors.toList());
        }
        return new ArrayList<>(); // Return an empty list if no bookings found for the email
    }


    // Other booking service methods (update, delete, get by ID, etc.)
}
