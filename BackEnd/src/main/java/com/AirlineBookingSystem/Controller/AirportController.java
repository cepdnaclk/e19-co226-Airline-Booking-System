package com.AirlineBookingSystem.Controller;
import com.AirlineBookingSystem.Dto.AirportDto;
import com.AirlineBookingSystem.Dto.ResponseDto;
import com.AirlineBookingSystem.Service.AirportService;
import com.AirlineBookingSystem.Utill.VariableList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "api/v1/airport")
public class AirportController {

    @Autowired
    private AirportService airportService;

    @Autowired
    private ResponseDto responseDto;

    @PostMapping(value = "/saveAirport")
    public ResponseEntity saveAirport(@RequestBody AirportDto airportDto) {

        try {
            String res = airportService.saveAirport(airportDto);
            if (res.equals("00")) {
                responseDto.setCode(VariableList.RSP_SUCCESS);
                responseDto.setMessage("Success");
                responseDto.setContent(airportDto);
                return new ResponseEntity(responseDto, HttpStatus.ACCEPTED);
            } else if (res.equals("06 ")) {

                responseDto.setCode(VariableList.RSP_DUPLICATED);
                responseDto.setMessage("All ready added");
                responseDto.setContent(airportDto);
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

    @PutMapping(value = "/updateAirport")
    public ResponseEntity updateAirport(@RequestBody AirportDto airportDto) {

        try {
            String res = airportService.updateAirport(airportDto);
            if (res.equals("00")) {
                responseDto.setCode(VariableList.RSP_SUCCESS);
                responseDto.setMessage("Success");
                responseDto.setContent(airportDto);
                return new ResponseEntity(responseDto, HttpStatus.ACCEPTED);
            } else if (res.equals("06 ")) {

                responseDto.setCode(VariableList.RSP_DUPLICATED);
                responseDto.setMessage("Flight not funded");
                responseDto.setContent(airportDto);
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

    @GetMapping("/getAllAirport")
    public ResponseEntity getAllFlight(){
        try {

            List<AirportDto> airportDtoList = airportService.getAllAirport();
            responseDto.setCode(VariableList.RSP_SUCCESS);
            responseDto.setMessage("Success");
            responseDto.setContent(airportDtoList);
            return new ResponseEntity(responseDto, HttpStatus.ACCEPTED);
        }catch (Exception ex){
            responseDto.setCode(VariableList.RSP_ERROR);
            responseDto.setMessage(ex.getMessage());
            responseDto.setContent(null);
            return new ResponseEntity(responseDto, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping(value = "/deleteAirport/{airportID}")
    public ResponseEntity deleteAirport(@PathVariable int airportID) {

        try {
            String res = airportService.deleteAirport(airportID);
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
