import { useEffect, useState } from 'react'

const useDebounce = (value,timeout) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const timeoutNumber = setTimeout(() => {
            setDebouncedValue(value);
        }, timeout)
        
        return () => {
            clearTimeout(timeoutNumber)
        }
    }, [value]);

    return debouncedValue;
}

export default useDebounce


/**
 * Debouncing is a technique used in programming to limit the rate at which a function is executed. It ensures that a function is called only once after a specified delay has passed since the last time the function was invoked. This is particularly useful for optimizing events like search input or window resizing, where rapid firing of events can cause performance issues.

In the case of an input field like a search box, debouncing helps prevent making a request for each keystroke and instead waits until the user has stopped typing for a specified amount of time.
 * 
 */