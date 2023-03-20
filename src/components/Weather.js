import React from "react";
const Weather= (props)=>{
    return(
        <div>
           {
            props.tempreature && <p>Tempreature: <span>{props.tempreature}</span></p> 
            }
           {
            props.city && <p>City: <span>{props.city}</span></p> 
            }
           {
            props.country && <p>Country: <span>{props.country}</span> </p> 
            }
           { 
           props.humidity && <p>Humidity: <span>{props.humidity}</span> </p> 
           }
           {
            props.description && <p>Description: <span>{props.description}</span> </p>
           }
           { 
           props.erorr && <p>Erorr: <span>{props.console.error}</span></p> }
        </div>
    )

}
export default Weather;