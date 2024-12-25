import React, { useEffect, useState } from 'react'

const TimeCard = () => {
    const [currentTime, setCurrentTime] = useState(new Date());


    useEffect(() => {

        const intervalId = setInterval(() => {
    
          setCurrentTime(new Date());
    
        }, 1000); // Update every second
    
    
    
        return () => clearInterval(intervalId); // Cleanup on unmount
    
      }, []);
  return (
    <div
    className='flex h-[150px] bg-white opacity-65 m-4 w-[350px] items-center justify-center shadow-lg rounded-3xl'
    >
        <p className='text-cyan-700 text-7xl font-bold'>{currentTime.toLocaleTimeString()}</p>
    </div>
  )
}

export default TimeCard