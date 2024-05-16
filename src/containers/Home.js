import React, { useState } from 'react'
import About from '../components/About/About'
import { Arch } from '../components/Arch/Arch'
import { Cambodia } from '../components/Cambodia/Cambodia'
import { Desc } from '../components/Desc/Desc'
import Faq from '../components/Faq/Faq'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header'
import { Investments } from '../components/Investment/Investments'
import { Object } from '../components/Object/Object'
import { Space } from '../components/Space/Space'
import { Utils } from '../components/Utils/Utils'
import Video from '../components/Video/Video'
import './Home.css'

function Home() {
	const [background, setBackground] = useState('/images/bg1.webp')
	const [backgroundCambodia, setBackgroundCambodia] = useState(
		'/mobile/2 cambodia/bg-scroll.webp'
	)
	const [show, setShow] = useState(true)
	window.onscroll = function () {
		window.scrollY <= 1000 ? setShow(true) : setShow(false)
		console.log(show)
	}

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
			<Utils onChangeSlide={handleSlideChangeDesc} />
			<Space onChangeSlide={handleSlideChangeDesc} />
			<Arch onChangeSlide={handleSlideChangeDesc} />
			<Video />
			<Faq />
			<About />
			<Footer />
			<div className='middle_button'>
				<a href=''>узнать больше</a>
			</div>
			<div className='middle_buttons'>
				<img src='/images/icon/calculator-icon.svg' alt='Calculator' />
				{show && (
					<div className='middle_buttons-scroll'>
						<p>ВНИЗ</p>
						<img src='/images/icon/arrow-down-questions.svg' alt='Arrow Down' />
					</div>
				)}

				<img src='/images/icon/share-icon.svg' alt='Share' />
			</div>
		</div>
	)
}

export default Home
