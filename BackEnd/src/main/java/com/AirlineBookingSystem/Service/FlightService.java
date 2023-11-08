package com.AirlineBookingSystem.Service;

import com.AirlineBookingSystem.Dto.FlightDto;
import com.AirlineBookingSystem.Model.FlightModel;
import com.AirlineBookingSystem.Repository.FlightRepository;
import com.AirlineBookingSystem.Utill.VariableList;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class FlightService {

    @Autowired
    private FlightRepository flightRepository;

    @Autowired
    private ModelMapper modelMapper;
    public String saveFlight(FlightDto flightDto){
        if (flightRepository.existsById(flightDto.getFlightId())){
            return VariableList.RSP_DUPLICATED;
        }else {

            flightRepository.save(modelMapper.map(flightDto, FlightModel.class));
            return VariableList.RSP_SUCCESS;

        }
    }

    public String updateFlight(FlightDto flightDto) {
        if (flightRepository.existsById(flightDto.getFlightId())) {
            flightRepository.save(modelMapper.map(flightDto,FlightModel.class));
            return VariableList.RSP_SUCCESS;
        } else {
            return VariableList.R$P_NO_DATA_FOUND;
        }

    }

    public List<FlightDto> getAllFlight(){
        List<FlightModel> flightList= flightRepository.findAll();
        return modelMapper.map(flightList, new TypeToken<ArrayList<FlightDto>>(){

        }.getType());
    }

    public String deleteFlight(int flightId){
        if (flightRepository.existsById(flightId)){
            flightRepository.deleteById(flightId);
            return VariableList.RSP_SUCCESS;
        }else {
            return VariableList.R$P_NO_DATA_FOUND;
        }
    }

    public List<FlightDto> getFlightsByDepartureCountryAndDate(String departureCountry, LocalDate flightDate) {
        List<FlightModel> allFlights = flightRepository.findAll();

        return allFlights.stream()
                .filter(flight -> flight.getDepartureCountry().equalsIgnoreCase(departureCountry)
                        && flight.getFlightDate().isEqual(flightDate))
                .map(flight -> modelMapper.map(flight, FlightDto.class))
                .collect(Collectors.toList());
    }


}
