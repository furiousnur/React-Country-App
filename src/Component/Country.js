import React from 'react';
import style from "./country.module.css";
const Country = (props) => {
    const {name, flags, capital, population, area} = props.country;

    const handleRemoveContry =(name)=>{
        alert(name);
    }

    return (
        <article className={style.country}>
            <img className={style.flag} src={flags.png} alt={name.common}/>
            <h3>Name: {name.common}</h3>
            <h3>Population: {population}</h3>
            <h3>Capital: {capital}</h3>
            <h3>Area: {area}</h3>

            <button className={style.btn} onClick={()=>{
                handleRemoveContry(name.common)
            }}>
                Remove {name.common}
            </button>
        </article>
    );
};

export default Country;
