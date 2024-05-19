import React, { useState } from 'react'
import './desk.css'
import ImageSlider from '../slider/Slider'
import TextSlider from '../slider/TextSlider'

export const Desc = ({ onChangeSlide }) => {
	const slides = [
		{
			label: "Wealth Mansion",
			first_text: "Инвестиции в недвижимость Камбоджи 'под ключ'",
			second_text:
				'Мы предлагаем: гарантированный возврат инвестиций в недвижимость Пном Пеня напрямую от застройщика',
			background: '#4A4A4A',
			icons: ['/images/icon1.svg', '/images/icon2.svg', '/images/icon3.svg'],
		},
		{
			label: "Le Condo BKK",
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
				<div className='object_section '>
					{currentSlide === 0 && (
						<div className='wealth'>
							<h2>Wealth Mansion</h2>
							<p>
								Представляем вашему вниманию <span> Wealth Mansion </span> —
								роскошный жилой комплекс бизнес-класса в центре камбоджийской
								столицы Пномпень. Срок сдачи - второй квартал 2024. Все квартиры
								с дизайнерской отделкой и готовы к заезду.
							</p>
							<img src='mobile/wealth/wm_pool.webp' alt='' />
							<p>
								<span> Wealth Mansion </span> — проект от крупнейшего
								конгломерата из Китая, компании CSCEC. За годы работы эта
								компания успела построить Международный коммерческий центр в
								Гонконге (самый высокий небоскреб в городе), мечеть Джамаа
								эль-Джазаир в Алжире (третью по величине мечеть в мире
								стоимостью 1,5 млрд. долларов США), новую столицу Египта и
								Гигафабрику Tesla в Шанхае.
							</p>
						</div>
					)}

					{currentSlide === 1 && (
						<div className='wealth'>
							<h2>le CONDO BKK1</h2>
							<p>
								Представляем вашему вниманию <span> Wealth Mansion </span> —
								роскошный жилой комплекс бизнес-класса в центре камбоджийской
								столицы Пномпень. Срок сдачи - второй квартал 2024. Все квартиры
								с дизайнерской отделкой и готовы к заезду.
							</p>
							<img src='mobile/wealth/wm_pool.webp' alt='' />
							<p>
								<span> Wealth Mansion </span> — проект от крупнейшего
								конгломерата из Китая, компании CSCEC. За годы работы эта
								компания успела построить Международный коммерческий центр в
								Гонконге (самый высокий небоскреб в городе), мечеть Джамаа
								эль-Джазаир в Алжире (третью по величине мечеть в мире
								стоимостью 1,5 млрд. долларов США), новую столицу Египта и
								Гигафабрику Tesla в Шанхае.
							</p>
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
