import React, {useState, useEffect} from 'react';
import Countries from "./Component/Countries";
import Search from "./Component/Search";
import "./app.css";

const url = "https://restcountries.com/v3.1/all"

const App = () => {
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState(countries);

    const fetchData =  async (url) =>{
        setLoading(true);
        try{
            const response= await fetch(url);
            const data= await response.json();
            setCountries(data);
            setFilteredCountries(data);
            setLoading(false);
            setError(null);
        }catch(error) {
            setLoading(false);
            setError(error);
        }
    }

    useEffect(() => {
        fetchData(url)
    },[]);

    const handleRemoveCountry = (name) => {
        const filter = filteredCountries.filter((country) => country.name.common != name);
        setFilteredCountries(filter);
    }

    const handleSearchCountry = (searchValue) => {
        const value = searchValue.toLowerCase();
        const newCountries = countries.filter((country) => {
            const countryName = country.name.common.toLowerCase();
            return countryName.startsWith(value);
        });
        setFilteredCountries(newCountries);
    }

    return (
        <>
            <h1>Country App</h1>
            <br/>
            <Search onSearchCountry={handleSearchCountry}/>
            {isLoading && <h2>Loading...</h2>}
            {error && <h2>{error.message}</h2>}
            {countries && <Countries countries={filteredCountries} onRemoveCountry={handleRemoveCountry}/>}
        </>
    );
};

export default App;
