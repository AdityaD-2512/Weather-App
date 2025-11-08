import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import { useState } from 'react';
import { colors } from '@mui/material';

export default function SearchBox({updateInfo}){            //props of weather app passed in this
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);                   //if error occurs this  will be displayed and we are using try catch 


    const API_URL = "http://api.openweathermap.org/data/2.5/weather" ; //after ? sign we will remove  the query parameters
    const API_KEY = "6d1dc1bb889973c212b5aafb206a242d";

    let getWeatherInfo = async () =>{   // async function to get the weather info

        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);    //  fetch the data from the API
            let jsonResponse = await response.json();   //  convert the response to JSON
            // console.log(jsonResponse);      //   print the JSON response (data in form  of key-value pairs {object})

            let result = {                  //   create an object to store the weather info
                city : city,
                temp : jsonResponse.main.temp,
                tempMin : jsonResponse.main.temp_min,
                tempMax : jsonResponse.main.temp_max,
                humidity : jsonResponse.main.humidity,
                feelsLike : jsonResponse.main.feels_like,
                weather : jsonResponse.weather[0].description,
            };
            console.log(result);
            return result;
        } catch(err){
            throw err;
        }
        
    };


    let handleChange = (event) =>{
        setCity(event.target.value);
    }

    let handleSubmit = async (event) =>{            //object or array always pass in a function for re-rendering.. fetching data in async and await
        try{
            event.preventDefault();
            console.log(city);
            setCity("");
            let  newInfo = await getWeatherInfo();
            updateInfo(newInfo);
        }catch(err){
            setError(true);
        }
    };

    return(
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
            <TextField required id="city" label="City Name" variant="outlined" value={city} onChange={handleChange}/>
            <br></br>
            <br></br>
            <Button variant="contained" type='submit'>Search</Button>
            {error && <p style={{color: "red"}}>no such place exists!!</p>}
            </form>
        </div>
    )
}