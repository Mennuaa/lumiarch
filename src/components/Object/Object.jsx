import React, { useState } from 'react'
import './object.css'
import ImageSlider from '../slider/Slider'
import TextSlider from '../slider/TextSlider'

export const Object = ({ onChangeSlide }) => {
	const slides = [
		{
			label: "Wealth Mansion",
			first_text: "Инвестиции в недвижимость Камбоджи 'под ключ'",
			second_text:
				'Мы предлагаем: гарантированный возврат инвестиций в недвижимость Пном Пеня напрямую от застройщика',
			background: '/mobile/wealth/wm_back.webp',
			icons: ['/images/icon1.svg', '/images/icon2.svg', '/images/icon3.svg'],
		},
		{
			label: "Le Condo BKK",
			first_text:
				'Инвестируйте в самую быстроразвивающуюся страну Юго-Восточной Азии',
			second_text:
				'№1 по росту ВВП, долларизированная экономика, выгодные условия налогообложения, гарантированный возврат инвестиций',

			background: '/mobile/lecondo/lecondo_back.webp',
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

	const progressBarLeft = `${(currentSlide / slides.length) * 100}%`

	return (
		<div
			className='investment'
			style={{
				backgroundImage: `url('${slides[currentSlide].background}')`,
				backgroundPosition: 'center',
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				minHeight: 900,
			}}
		>
			<div className='container'>
				<div className='object_section'>
					{currentSlide === 0 && (
						<div>
							<h2>Wealth Mansion</h2>
							<ul>
								<li>
									<img src='images/icon/Vector.svg' className='vector' alt='' />
									<p>
										45-этажный жилой комплекс бизнес-класса в сердце Пномпеня
									</p>
								</li>
								<li>
									<img src='images/icon/Vector.svg'  className='vector'  alt='' />
									<p>
										Предложение с самым высоким прогнозируемым ростом стоимости
										в Камбодже
									</p>
								</li>
								<li>
									<img src='images/icon/Vector.svg'  className='vector'  alt='' />
									<p>
										Роскошный образ жизни и выгодная инвестиция в самом сердце
										Пномпеня
									</p>
								</li>
								<li>
									<img src='images/icon/Vector.svg'  className='vector'  alt='' />
									<p>
										Совершенно новые стандарты жизни в Пномпене, столице
										Камбоджи
									</p>
								</li>
							</ul>
						</div>
					)}

					{currentSlide === 1 && (
						<div>
							<h2>le CONDO BKK1</h2>

							<ul>
								<li>
									<img src='images/icon/Vector.svg' alt='' />
									<p>
										Идеальный вариант для инвестиций с целью получения высокого
										арендного дохода
									</p>
								</li>
								<li>
									<img src='images/icon/Vector.svg' alt='' />
									<p>
										Высокий спрос из-за идеальной туристической локации: 90%
										квартир уже приобретено
									</p>
								</li>
								<li>
									<img src='images/icon/Vector.svg' alt='' />
									<p>
										Разумные инвестиции и роскошная жизнь в одном из самых
										престижных жилых комплексов Пномпеня
									</p>
								</li>
							</ul>
						</div>
					)}
				</div>
				<TextSlider
                slides={slides}
                currentSlide={currentSlide}
                prevSlide={prevSlide}
                nextSlide={nextSlide}
            />
				{/* <div className='slider'>
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
					<p style={{ marginBottom: '20px', color: '#fffff9a' }}>
						ПРЕИМУЩЕСТВА И ФОТО НИЖЕ
					</p>
				</div> */}
					
			</div>
		</div>
	)
}
