import React, { useEffect, useState } from 'react'

const useIsOnline = () => {
    const [isOnline, setIsOnLine] = useState(window.navigator.onLine);
    
    useEffect(() => {
        window.addEventListener("online",() => setIsOnLine(true));
        window.addEventListener("offline",() => setIsOnLine(false));
    },[])

    return isOnline;
}

export default useIsOnline