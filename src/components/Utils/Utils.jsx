import React, { useState } from 'react'
import './utils.css'
import ImageSlider from '../slider/Slider'
import TextSlider from '../slider/TextSlider'

export const Utils = ({ onChangeSlide }) => {
	const slides = [
		{
			label:'Wealth Mansion',
			first_text: "Инвестиции в недвижимость Камбоджи 'под ключ'",
			second_text:
				'Мы предлагаем: гарантированный возврат инвестиций в недвижимость Пном Пеня напрямую от застройщика',
			background: '#4A4A4A',
			icons: ['/images/icon1.svg', '/images/icon2.svg', '/images/icon3.svg'],
		},
		{
			label:'Le Condo BKK',
			first_text:
				'Инвестируйте в самую быстроразвивающуюся страну Юго-Восточной Азии',
			second_text:
				'№1 по росту ВВП, долларизированная экономика, выгодные условия налогообложения, гарантированный возврат инвестиций',

			background: '#2566AF',
			icons: ['/images/icon4.svg', '/images/icon5.svg', '/images/icon6.svg'],
		},
	]

	const [currentSlide, setCurrentSlide] = useState(0)

	const nextSlide = () => {
		const newSlide = (currentSlide + 1) % slides.length
		setCurrentSlide(newSlide)
		onChangeSlide(slides[newSlide])
	}

	const prevSlide = () => {
		const newSlide = (currentSlide - 1 + slides.length) % slides.length
		setCurrentSlide(newSlide)
		onChangeSlide(slides[newSlide])
	}
	function getFirstWordAndRest(text) {
		const trimmedText = text.trim()
		const words = trimmedText.split(' ')
		const firstWord = words[0]
		const restOfText = words.slice(1).join(' ')
		return { firstWord, restOfText }
	}

	const { firstWord, restOfText } = getFirstWordAndRest(
		slides[currentSlide].first_text
	)

	const progressBarLeft = `${(currentSlide / slides.length) * 100}%`

	return (
		<div
			className='investment'
			style={{
				backgroundColor: currentSlide === 0 ? '#4A4A4A' : '#2566AF',
				transition: 'background-color 0.5s ease-in-out',
			}}
		>
			<div className='container'>
				<div className='wealth_section '>
					{currentSlide === 0 && (
						<div className='wealth'>
							<h2>Wealth Mansion</h2>
							<h3>ФОТОГРАФИИ КВАРТИР</h3>
							<p>
								В <span> Wealth Mansion </span> имеются студии, 1,2,3-комнатные
								квартиры и виллы.
							</p>
							<div className='images'>
								<img src='mobile/wealth/photo.jpg' alt='' />
								<img src='mobile/wealth/photo2.jpg' alt='' />
								<img src='mobile/wealth/photo3.jpg' alt='' />
								<img src='mobile/wealth/photo4.jpg' alt='' />
								<img src='mobile/wealth/photo5.jpg' alt='' />
								<img src='mobile/wealth/photo6.jpg' alt='' />
								<img src='mobile/wealth/photo7.jpg' alt='' />
								<img src='mobile/wealth/photo8.jpg' alt='' />
								<img src='mobile/wealth/photo9.jpg' alt='' />
								<img src='mobile/wealth/photo10.jpg' alt='' />
							</div>
						</div>
					)}

					{currentSlide === 1 && (
						<div className='wealth'>
							<h2>Le condo bkk1</h2>
							<h3>ФОТОГРАФИИ КВАРТИР</h3>
							<p>
								В <span> Wealth Mansion </span> имеются студии, 1,2,3-комнатные
								квартиры и виллы.
							</p>
							<div className='images'>
								<img src='mobile/lecondo/photo1.jpg' alt='' />
								<img src='mobile/lecondo/photo2.jpg' alt='' />
								<img src='mobile/lecondo/photo3.jpg' alt='' />
								<img src='mobile/lecondo/photo4.jpg' alt='' />
								<img src='mobile/lecondo/photo5.jpg' alt='' />
								<img src='mobile/lecondo/photo6.jpg' alt='' />
								<img src='mobile/lecondo/photo7.jpg' alt='' />
								<img src='mobile/lecondo/photo8.jpg' alt='' />
								<img src='mobile/lecondo/photo9.jpg' alt='' />
								<img src='mobile/lecondo/photo10.jpg' alt='' />
							</div>
						</div>
					)}
				</div>
				<TextSlider
                slides={slides}
                currentSlide={currentSlide}
                prevSlide={prevSlide}
                nextSlide={nextSlide}
            />
			</div>
		</div>
	)
}
