package com.AirlineBookingSystem.Controller;

import com.AirlineBookingSystem.Dto.BookingDto;
import com.AirlineBookingSystem.Dto.ResponseDto;
import com.AirlineBookingSystem.Service.BookingService;
import com.AirlineBookingSystem.Utill.VariableList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "api/v1/booking")
@CrossOrigin
public class BookingController {

    @Autowired
    private BookingService bookingService;

    @Autowired
    private ResponseDto responseDto;

    @PostMapping(value = "/saveBooking")
    public ResponseEntity saveBooking(@RequestBody BookingDto bookingDto) {
        try {
            String res = bookingService.saveBooking(bookingDto);
            if (res.equals("00")) {
                responseDto.setCode(VariableList.RSP_SUCCESS);
                responseDto.setMessage("Success");
                responseDto.setContent(bookingDto);
                return new ResponseEntity(responseDto, HttpStatus.ACCEPTED);
            } else if (res.equals("06 ")) {
                responseDto.setCode(VariableList.RSP_DUPLICATED);
                responseDto.setMessage("Booking already exists");
                responseDto.setContent(bookingDto);
                return new ResponseEntity(responseDto, HttpStatus.BAD_REQUEST);
            } else {
                responseDto.setCode(VariableList.RSP_FAIL);
                responseDto.setMessage("Error");
                responseDto.setContent(null);
                return new ResponseEntity(responseDto, HttpStatus.BAD_REQUEST);
            }
        } catch (Exception ex) {
            responseDto.setCode(VariableList.RSP_ERROR);
            responseDto.setMessage(ex.getMessage());
            responseDto.setContent(null);
            return new ResponseEntity(responseDto, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping(value = "/getBooking/{bookingId}")
    public ResponseEntity getBookingById(@PathVariable("bookingId") int flightId) {
        try {
            BookingDto bookingDto = bookingService.getBookingById(flightId);
            if (bookingDto != null) {
                responseDto.setCode(VariableList.RSP_SUCCESS);
                responseDto.setMessage("Success");
                responseDto.setContent(bookingDto);
                return new ResponseEntity(responseDto, HttpStatus.OK);
            } else {
                responseDto.setCode(VariableList.R$P_NO_DATA_FOUND);
                responseDto.setMessage("Booking not found");
                responseDto.setContent(null);
                return new ResponseEntity(responseDto, HttpStatus.NOT_FOUND);
            }
        } catch (Exception ex) {
            responseDto.setCode(VariableList.RSP_ERROR);
            responseDto.setMessage(ex.getMessage());
            responseDto.setContent(null);
            return new ResponseEntity(responseDto, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping(value = "/getBookingsByEmail")
    public ResponseEntity getBookingsByEmail(@RequestParam String email) {
        try {
            List<BookingDto> bookings = bookingService.getBookingsByEmail(email);
            if (!bookings.isEmpty()) {
                responseDto.setCode(VariableList.RSP_SUCCESS);
                responseDto.setMessage("Success");
                responseDto.setContent(bookings);
                return new ResponseEntity(responseDto, HttpStatus.OK);
            } else {
                responseDto.setCode(VariableList.R$P_NO_DATA_FOUND);
                responseDto.setMessage("No bookings found for the given email");
                responseDto.setContent(null);
                return new ResponseEntity(responseDto, HttpStatus.NOT_FOUND);
            }
        } catch (Exception ex) {
            responseDto.setCode(VariableList.RSP_ERROR);
            responseDto.setMessage(ex.getMessage());
            responseDto.setContent(null);
            return new ResponseEntity(responseDto, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Other booking endpoints (update, delete, get by ID, etc.)
}
