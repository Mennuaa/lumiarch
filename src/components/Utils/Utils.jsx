import React, { useState } from 'react'
import './utils.css'

export const Utils = ({ onChangeSlide }) => {
	const slides = [
		{
			first_text: "Инвестиции в недвижимость Камбоджи 'под ключ'",
			second_text:
				'Мы предлагаем: гарантированный возврат инвестиций в недвижимость Пном Пеня напрямую от застройщика',
			background: '#4A4A4A',
			icons: ['/images/icon1.svg', '/images/icon2.svg', '/images/icon3.svg'],
		},
		{
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
								<img src='mobile/wealth/wm_unit_photo_exmp.webp' alt='' />
								<img src='mobile/wealth/wm_unit_photo_exmp.webp' alt='' />
								<img src='mobile/wealth/wm_unit_photo_exmp.webp' alt='' />
								<img src='mobile/wealth/wm_unit_photo_exmp.webp' alt='' />
								<img src='mobile/wealth/wm_unit_photo_exmp.webp' alt='' />
								<img src='mobile/wealth/wm_unit_photo_exmp.webp' alt='' />
								<img src='mobile/wealth/wm_unit_photo_exmp.webp' alt='' />
								<img src='mobile/wealth/wm_unit_photo_exmp.webp' alt='' />
								<img src='mobile/wealth/wm_unit_photo_exmp.webp' alt='' />
								<img src='mobile/wealth/wm_unit_photo_exmp.webp' alt='' />
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
								<img src='mobile/wealth/wm_unit_photo_exmp.webp' alt='' />
								<img src='mobile/wealth/wm_unit_photo_exmp.webp' alt='' />
								<img src='mobile/wealth/wm_unit_photo_exmp.webp' alt='' />
								<img src='mobile/wealth/wm_unit_photo_exmp.webp' alt='' />
								<img src='mobile/wealth/wm_unit_photo_exmp.webp' alt='' />
								<img src='mobile/wealth/wm_unit_photo_exmp.webp' alt='' />
								<img src='mobile/wealth/wm_unit_photo_exmp.webp' alt='' />
								<img src='mobile/wealth/wm_unit_photo_exmp.webp' alt='' />
								<img src='mobile/wealth/wm_unit_photo_exmp.webp' alt='' />
								<img src='mobile/wealth/wm_unit_photo_exmp.webp' alt='' />
							</div>
						</div>
					)}
				</div>
				<div className='slider'>
					<div className='slider_section'>
						<button className='slider_button' onClick={prevSlide}>
							<img src='/images/icon/prev.svg' alt='Previous' />
						</button>
						<div className='slider_slide'>
							<div className='slider_scroll-amount'></div>
							<div className='slider_scroll-progres'>
								<div
									className='slider_scroll-progres_bar'
									style={{
										left: progressBarLeft,
										width: 100 / slides.length + '%',
									}}
								></div>
							</div>
						</div>
						<button className='slider_button' onClick={nextSlide}>
							<img src='/images/icon/next.svg' alt='Next' />
						</button>
					</div>
					<p>ПРЕИМУЩЕСТВА И ФОТО НИЖЕ</p>
				</div>
			</div>
		</div>
	)
}
