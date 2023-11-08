package com.AirlineBookingSystem.Controller;


import com.AirlineBookingSystem.Dto.FlightDto;
import com.AirlineBookingSystem.Dto.ResponseDto;
import com.AirlineBookingSystem.Service.FlightService;
import com.AirlineBookingSystem.Utill.VariableList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.format.DateTimeParseException;
import java.util.List;

@RestController
@RequestMapping(value = "api/v1/flight")
public class FlightController {

    @Autowired
    private FlightService flightService;

    @Autowired
    private ResponseDto responseDto;

    @PostMapping(value = "/saveFlight")
    public ResponseEntity saveFlight(@RequestBody FlightDto flightDto) {

        try {
            String res = flightService.saveFlight(flightDto);
            if (res.equals("00")) {
                responseDto.setCode(VariableList.RSP_SUCCESS);
                responseDto.setMessage("Success");
                responseDto.setContent(flightDto);
                return new ResponseEntity(responseDto, HttpStatus.ACCEPTED);
            } else if (res.equals("06 ")) {

                responseDto.setCode(VariableList.RSP_DUPLICATED);
                responseDto.setMessage("All ready added");
                responseDto.setContent(flightDto);
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

    @PutMapping(value = "/updateFlight")
    public ResponseEntity updateFlight(@RequestBody FlightDto flightDto) {

        try {
            String res = flightService.updateFlight(flightDto);
            if (res.equals("00")) {
                responseDto.setCode(VariableList.RSP_SUCCESS);
                responseDto.setMessage("Success");
                responseDto.setContent(flightDto);
                return new ResponseEntity(responseDto, HttpStatus.ACCEPTED);
            } else if (res.equals("06 ")) {

                responseDto.setCode(VariableList.RSP_DUPLICATED);
                responseDto.setMessage("Flight not funded");
                responseDto.setContent(flightDto);
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

    @GetMapping("/getAllFlight")
    public ResponseEntity getAllFlight(){
        try {

            List<FlightDto> flightDtoList = flightService.getAllFlight();
            responseDto.setCode(VariableList.RSP_SUCCESS);
            responseDto.setMessage("Success");
            responseDto.setContent(flightDtoList);
            return new ResponseEntity(responseDto, HttpStatus.ACCEPTED);
        }catch (Exception ex){
            responseDto.setCode(VariableList.RSP_ERROR);
            responseDto.setMessage(ex.getMessage());
            responseDto.setContent(null);
            return new ResponseEntity(responseDto, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @GetMapping("/getFlightsByDepartureCountryAndDate")
    public ResponseEntity getFlightsByDepartureCountryAndDate(@RequestParam String departureCountry, @RequestParam String flightDate) {
        try {
            LocalDate date = LocalDate.parse(flightDate);
            List<FlightDto> flightDtoList = flightService.getFlightsByDepartureCountryAndDate(departureCountry, date);
            responseDto.setCode(VariableList.RSP_SUCCESS);
            responseDto.setMessage("Success");
            responseDto.setContent(flightDtoList);
            return new ResponseEntity(responseDto, HttpStatus.ACCEPTED);
        } catch (DateTimeParseException ex) {
            responseDto.setCode(VariableList.RSP_ERROR);
            responseDto.setMessage("Invalid date format. Use yyyy-MM-dd format.");
            responseDto.setContent(null);
            return new ResponseEntity(responseDto, HttpStatus.BAD_REQUEST);
        } catch (Exception ex) {
            responseDto.setCode(VariableList.RSP_ERROR);
            responseDto.setMessage(ex.getMessage());
            responseDto.setContent(null);
            return new ResponseEntity(responseDto, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }




    @DeleteMapping(value = "/deleteFlight/{flightId}")
    public ResponseEntity deleteFlight(@PathVariable int flightId) {

        try {
            String res = flightService.deleteFlight(flightId);
            if (res.equals("00")) {
                responseDto.setCode(VariableList.RSP_SUCCESS);
                responseDto.setMessage("Success");
                responseDto.setContent(null);
                return new ResponseEntity(responseDto, HttpStatus.ACCEPTED);
            } else {

                responseDto.setCode(VariableList.RSP_FAIL);
                responseDto.setMessage("No Flight");
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



}
