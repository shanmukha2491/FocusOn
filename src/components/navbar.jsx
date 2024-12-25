import React from 'react'
import { useState, useRef, useEffect } from 'react'
const NavBar = () => {

    const [isAudioPlaying, setIsAudioPlaying] = useState(false)
    const [isIndicatorActive, setIsIndicatorActive] = useState(false)
    const audioElementRef = useRef(null);


    const toggleAudioIndicator = ()=>{
        setIsAudioPlaying((prev)=> !prev);
        setIsIndicatorActive((prev)=> !prev);
      }
    
      useEffect(() => {
        
        if(isAudioPlaying){
          audioElementRef.current.play();
    
        }else{
          audioElementRef.current.pause();
        }
       
      }, [isAudioPlaying])
  return (
   
    <div className="absolute bg-white opacity-65 rounded-lg top-0 right-0 m-8">
        <div className='flex items-center justify-center'>
            <button
        onClick={toggleAudioIndicator}
        className="flex items-center space-x-0.5 bg-r p-5 rounded-lg h-10"
        >
        <audio
            ref={audioElementRef}
            className="hidden"
            src="public/assets/music/lofiMusic.mp3"
            loop
        />
        {[1, 2, 3, 4].map((bar) => (
            <div
            key={bar}
            className={`indicator-line ${isIndicatorActive ? "active" : ""}`}
            style={{ animationDelay: `${bar * 0.1}s` }}
            />
        ))}
        </button>            
        </div>
  </div>
  
    

  )
}

export default NavBar