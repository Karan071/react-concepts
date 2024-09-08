import React, { useState } from 'react'
import useDebounce from '../Hooks/useDebounce';

const SearchBar = () => {
    const [inputValue,setInputValue] = useState('');
    const debouncedValue = useDebounce(inputValue,500); //500 milli-secs debounce delay


  return (
    <div>
        <p>Debounced value is {debouncedValue}</p>
        <input 
        type="text"
        value = {inputValue}
        onChange = {(e) => setInputValue(e.target.value)}
        placeholder = "Search .."/>
    </div>
  )
}

export default SearchBar;