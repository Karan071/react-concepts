import React, { useEffect, useState } from 'react'
import useDebounce from '../Hooks/useDebounce';

const SearchBar = () => {
    const [inputValue,setInputValue] = useState('');
    const debouncedValue = useDebounce(inputValue,500); //500 milli-secs debounce delay

    //after delay of 500ms we can fetch
    useEffect(()=>{
        fetch("")
    },[debouncedValue])


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