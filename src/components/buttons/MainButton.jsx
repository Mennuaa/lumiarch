import React, { useEffect } from 'react'
import './mainButton.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function MainButton({text , onClick ,dataAos}) {
  useEffect(() => {
		AOS.init({
		  duration: 1200, 
		});
	  }, []);
  return (
    <button  data-aos={dataAos} className='main-button' onClick={onClick} dangerouslySetInnerHTML={{ __html: text }}></button>
  )
}
