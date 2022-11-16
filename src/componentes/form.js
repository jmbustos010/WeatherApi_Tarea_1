import React, {useState} from "react";

const Form = ({nuevaUbi}) =>{
    const [city, setCity] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        console.log({city});
        if(city === "" || !city) return;

        nuevaUbi(city);
    }

    return(
        <div className="container">
            <form onSubmit={onSubmit}>
                <div className="input-group mb-3 mx-auto">
                    <input type="text" className="form-control" placeholder="Ciudad" onChange={(e) => setCity(e.target.value)}></input>
                    <button className="input-gruoup-text ms-1" type="submt">Buscar</button>
                </div>
            </form>
        </div>
    );

}

export default Form;
