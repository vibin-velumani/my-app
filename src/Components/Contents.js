import React from "react"
import {useState,location} from 'react';
import { useLocation } from "react-router-dom";

 
 
 function  Contents()  {
	const location=useLocation()
	 
	  
	const  [inputValue, setInputValue] =  useState('');

	const  handleChange = (event) => {
		setInputValue(event.target.value);
	};

return  (
	<div>
		<h1>hello {location.state.id} </h1>
<form>
	<label>Input Value:
	<input  type="text"  value={inputValue} onChange={handleChange} />
	</label>
	<p>Input Value: {inputValue}</p>
</form>
</div>
)
};
export default Contents;

