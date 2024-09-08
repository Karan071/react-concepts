import React, { useEffect, useState } from 'react'

const useInterval = (fn, timeout) => {
    
    useEffect(() => {
        const intervalId = setInterval(fn,timeout);
        return() => clearInterval(intervalId);

    },[fn,timeout])
    
}

export default useInterval