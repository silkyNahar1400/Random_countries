import './App.css';
import React, {useState, useEffect} from'react';
import Country from "./components/country/country"
import Cart from './components/cart/cart';

function App() {
const [country, setCountry] = useState([]);
const [cart, setCart] = useState([]);

const addCountryHandle = (e)=> {
      const newCountry = [...cart, e];
      setCart(newCountry);
      console.log(cart);
    };
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => setCountry(data));
  }, []);
  return (
    <div className="App">
      <h1 className='h1'>Nations Of The World</h1> 
      <div className='flex'> 
      <div>   {country.map((c) => <Country country ={c}  addCountryHandle = {addCountryHandle} />)} </div>
      <div className='two' > <Cart cart = {cart} /> </div>
      </div>
     
    </div>
  );
}

export default App;
