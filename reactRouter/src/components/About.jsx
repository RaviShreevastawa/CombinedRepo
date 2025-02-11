import React from 'react'
import Rachit from '../assets/Rachit-4.jpg'

function About() {
  return (
    <div className='rachit h-full w-full shadow-lg p-5 shadow-yellow-400'>
        <img 
        onClick={function (){
          alert('the picture clicked')
        }}
        src={Rachit} alt="Rachit" />
    </div>
  )
}

export default About
