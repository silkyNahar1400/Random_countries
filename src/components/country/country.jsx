import React from 'react';
import "./country.css"

const Country = (props) => {
const {name:{official}, population, region, capital, flags:{svg}} = props.country;
    return (
        <div className="country">
            <h1>{official}</h1>
            <img src={svg} alt="country-flag" />
            <p>{population}</p>
            <p><small>{capital}</small></p>
            <p><strong>{region}</strong></p>
            <button onClick={()=> props.addCountryHandle(props.country)} >Add Country</button>
        </div>
    )
}
export default Country;