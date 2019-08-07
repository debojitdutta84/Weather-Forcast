import React from "react";  
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";


const API_KEY = "fbe5f09db47471754f4b22b6367a6bb2";


class App extends React.Component
{
	
	state= {
		Time: undefined,
		temperature: undefined, 
		maximum : undefined,
		minimum : undefined,
		city: undefined,
		country: undefined,
		humidity: undefined,
		description: undefined,
		error: undefined
		
	}
	
	getWeather = async(e) => {
		
		e.preventDefault();
		const city=e.target.elements.city.value;
		const country=e.target.elements.country.value;
		
		
		const api_call= await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
		const data=await api_call.json();
		if(city&& country)
		{
			console.log(data);
		this.setState({
			Time: new Date().toLocaleString(),
			temperature: data.main.temp,
			maximum: data.main.temp_max,
			minimum: data.main.temp_min,
			city: data.name,
			country: data.sys.country,
			humidity: data.main.humidity,
			description: data.weather[0].description,
			error: ""
		})
		}
		else
		{
			this.setState({
		    Time: undefined,
			temperature: undefined,
			maximum: undefined,
			minimum: undefined,
			city: undefined,
			country: undefined,
			humidity: undefined,
			description: undefined,
			error: "please enter the value"
			})
			
		}
	}
	
	render()
	{
		return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles />
                </div>
                <div className="col-xs-7 form-container">
                  <Form getWeather={this.getWeather} />
                  <Weather 
				    Time={this.state.Time}
                    temperature={this.state.temperature} 
					maximum ={this.state.maximum}
					minimum ={this.state.minimum}
                    humidity={this.state.humidity}
                    city={this.state.city}
                    country={this.state.country}
                    description={this.state.description}
                    error={this.state.error}
                    />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
  



export default App;
