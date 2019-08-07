import React from "react";

const weather= (props) =>{
 return (
    <div  className="weather__info" >
		{
			props.Time&& <p className="weather__key">Date&Time:
			<span className="weather__value"> {props.Time} </span>
			</p>
		
		}
		{
			props.city && props.country && <p className="weather__key">Location:
			<span className="weather__value"> {props.city},{props.country}</span>
			</p>
		
		}
		{
			props.temperature && <p className="weather__key">Temperature: 
			<span className="weather__value"> {props.temperature} </span>
			</p>
		} 
		{
			props.maximum && <p className="weather__key">Maximum Temperature: 
			<span className="weather__value"> {props.maximum} </span>
			</p>
		} 
		{
			props.minimum && <p className="weather__key">Minimum Temperature: 
			<span className="weather__value"> {props.minimum} </span>
			</p>
		} 
		{ 
			props.humidity && <p className="weather__key">Humidty: 
			<span className="weather__value"> {props.humidity}</span>
			</p>
		}
		{
			props.description && <p className="weather__key"> Conditions: 
			<span className="weather__value"> {props.description}</span>
			</p>
		}
		{
			props.error && <p className="weather__error"> {props.error}</p>
		}
			
	</div>
 );

}

export default weather;