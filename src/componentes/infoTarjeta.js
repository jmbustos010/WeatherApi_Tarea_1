import React from "react";
import Spinner from './spinnerCarga';

const tarjeta = ({mostrarInfo,cargartarjeta,clima}) =>{
    let hoy = new Date();
    let dia = hoy.getDate();
    let mes = hoy.getMonth() + 1;
    let año = hoy.getFullYear();
    let fecha = dia + '/' + mes + '/' + año;
    let url = "";
    let imgUrl = "";

    if(cargartarjeta){
        return <Spinner/>
    }

    if(mostrarInfo){
        url = "http://openweathermap.org/img/w/";
        imgUrl = url + clima.weather[0].icon + ".png"

    }

    return(
        <div className="mt-5 ">

            {
                mostrarInfo === true ? (
                    <div className="container"> 
                        <div className="card mb-3 mx-auto bg-dark text-light">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="https://cdn-icons-png.flaticon.com/256/2134/2134677.png" className="mt-2 mb-2" alt="..."></img>
                                </div>
                                <div className="col-md-8">
                                    <div className="Card-body text-start mt-2">
                                    <h1>{clima.name}</h1>
                                    <h4 className="mt-3">Fecha: {fecha}</h4>
                                    <h4 className="mt-3">Temperatura: {(clima.main.temp - 273.15).toFixed(1)}°C</h4>
                                    <h4 className="mt-3">Vientos: {clima.wind.speed} Km/h</h4>
                                    <h4>{clima.weather[0].description}<img src={imgUrl} alt="..."/></h4>
                                    
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                ):(
                    <h2 className='text-light'>Sin información disponible</h2>
                )
            }

        </div>
    );
}

export default tarjeta;