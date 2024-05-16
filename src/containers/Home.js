import React, { useState } from 'react'
import { Cambodia } from '../components/Cambodia/Cambodia'
import { Desc } from '../components/Desc/Desc'
import Header from '../components/Header'
import { Investments } from '../components/Investment/Investments'
import { Object } from '../components/Object/Object'
import './Home.css'

function Home() {
	const [background, setBackground] = useState('/images/bg1.webp')
	const [backgroundCambodia, setBackgroundCambodia] = useState(
		'/mobile/2 cambodia/bg-scroll.webp'
	)

	const handleSlideChange = slide => {
		setBackground(slide.background)
	}
	const handleSlideChangeCambodia = slide => {
		setBackground(slide.background)
	}

	const handleSlideChangeObject = slide => {
		setBackground(slide.background)
	}

	const handleSlideChangeDesc = slide => {
		setBackground(slide.background)
	}

	return (
		<div className='home'>
			<Header />
			<Investments onChangeSlide={handleSlideChange} />
			<Cambodia id='cambodia' onChangeSlide={handleSlideChangeCambodia} />
			<Object onChangeSlide={handleSlideChangeObject} />
			<Desc onChangeSlide={handleSlideChangeDesc} />
			<div className='middle_button'>
				<a href=''>узнать больше</a>
			</div>
			<div className='middle_buttons'>
				<img src='/images/icon/calculator-icon.svg' alt='Calculator' />
				<div className='middle_buttons-scroll'>
					<p>ВНИЗ</p>
					<img src='/images/icon/arrow-down-questions.svg' alt='Arrow Down' />
				</div>
				<img src='/images/icon/share-icon.svg' alt='Share' />
			</div>
		</div>
	)
}

export default Home
