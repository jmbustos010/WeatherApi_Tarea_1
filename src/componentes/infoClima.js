import React, {useState} from "react";
import Infotarjeta from './infoTarjeta';
import Form from "./form";

const InfoClima = () =>{
    let ulrClima = "https://api.openweathermap.org/data/2.5/weather?&appid=737153cecf10cc04f1f8410ca4c0ef92&lang=es";
    let ubicacion = "&q=";

    const [clima, setClima] = useState([]);
    const [carga, setCarga] = useState(false);
    const [tarjeta, setTarjeta] = useState(false);
    const [locacion, setLocacion] = useState("");

    const getLocation = async(loc) => {
        setCarga(true);
        setLocacion(loc);

        ulrClima = ulrClima + ubicacion + loc;

        await fetch(ulrClima).then((response) =>{
            if(!response.ok) throw {response}
            return response.json();
        }).then((infoClima) => {
            console.log(infoClima);
            setClima(infoClima);

            setCarga(false);
            setTarjeta(true);

        }).catch(error =>{
            console.log(error);
            setCarga(false);
            setTarjeta(false);

        });

    }

    return(
        <React.Fragment>
            <Form
                nuevaUbi = {getLocation}
            />
            <Infotarjeta
                mostrarInfo = {tarjeta}
                cargartarjeta = {carga}
                clima= {clima}
            />
        </React.Fragment>

    );

}

export default InfoClima;
