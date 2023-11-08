package com.AirlineBookingSystem.Service;
import com.AirlineBookingSystem.Dto.AirportDto;
import com.AirlineBookingSystem.Model.AirportModel;
import com.AirlineBookingSystem.Repository.AirportRepository;
import com.AirlineBookingSystem.Utill.VariableList;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class AirportService {

    @Autowired
    private AirportRepository airportRepository;

    @Autowired
    private ModelMapper modelMapper;
    public String saveAirport(AirportDto airportDto){
        if (airportRepository.existsById(airportDto.getAirportCode())){
            return VariableList.RSP_DUPLICATED;
        }else {

            airportRepository.save(modelMapper.map(airportDto, AirportModel.class));
            return VariableList.RSP_SUCCESS;

        }
    }

    public String updateAirport(AirportDto airportDto) {
        if (airportRepository.existsById(airportDto.getAirportCode())) {
            airportRepository.save(modelMapper.map(airportDto,AirportModel.class));
            return VariableList.RSP_SUCCESS;
        } else {
            return VariableList.R$P_NO_DATA_FOUND;
        }

    }

    public List<AirportDto> getAllAirport(){
        List<AirportModel> airportList= airportRepository.findAll();
        return modelMapper.map(airportList, new TypeToken<ArrayList<AirportDto>>(){

        }.getType());
    }

    public String deleteAirport(int airportCode){
        if (airportRepository.existsById(airportCode)){
            airportRepository.deleteById(airportCode);
            return VariableList.RSP_SUCCESS;
        }else {
            return VariableList.R$P_NO_DATA_FOUND;
        }
    }
}
