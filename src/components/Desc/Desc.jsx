import React, { useEffect, useState } from 'react'
import TextSlider from '../slider/TextSlider'
import './desk.css'

export const Desc = ({ onChangeSlide }) => {
	const slides = [
		{
			label: 'Wealth Mansion',
			first_text: "Инвестиции в недвижимость Камбоджи 'под ключ'",
			second_text:
				'Мы предлагаем: гарантированный возврат инвестиций в недвижимость Пном Пеня напрямую от застройщика',
			background: '#4A4A4A',
			backgroundLarge: '/desktop/backs/bg-wm2.webp',
			icons: ['/images/icon1.svg', '/images/icon2.svg', '/images/icon3.svg'],
		},
		{
			label: 'Le Conde BKK',
			first_text:
				'Инвестируйте в самую быстроразвивающуюся страну Юго-Восточной Азии',
			second_text:
				'№1 по росту ВВП, долларизированная экономика, выгодные условия налогообложения, гарантированный возврат инвестиций',
			backgroundLarge: '/desktop/backs/bg-wm2.webp',
			background: '#2566AF',
			icons: ['/images/icon4.svg', '/images/icon5.svg', '/images/icon6.svg'],
		},
	]

	const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 992)
	const [currentSlide, setCurrentSlide] = useState(0) // Assuming you have a way to set the current slide

	useEffect(() => {
		const handleResize = () => {
			setIsLargeScreen(window.innerWidth > 1024)
		}

		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	const backgroundImage = isLargeScreen
		? slides[currentSlide].backgroundLarge
		: slides[currentSlide].background

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
	console.log(backgroundImage)
	return (
		<div
			className='investments'
			style={
				isLargeScreen
					? {
							backgroundImage: `url(${backgroundImage})`,
							backgroundPosition: 'center',
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat',
							transition: 'background-color 0.5s ease-in-out',
					  }
					: {
							backgroundColor: backgroundImage,
					  }
			}
		>
			<div className='container'>
				<div className='object_section'>
					{!isLargeScreen ? (
						<>
							{currentSlide === 0 && (
								<div className='wealth'>
									<h2>Wealth Mansion</h2>
									<p>
										Представляем вашему вниманию <span> Wealth Mansion </span> —
										роскошный жилой комплекс бизнес-класса в центре
										камбоджийской столицы Пномпень. Срок сдачи - второй квартал
										2024. Все квартиры с дизайнерской отделкой и готовы к
										заезду.
									</p>
									<img
										src='mobile/wealth/wm_pool.webp'
										alt='Wealth Mansion Pool'
									/>
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
									<h2>Le Conde BKK1</h2>
									<p>
										Представляем вашему вниманию <span> Wealth Mansion </span> —
										роскошный жилой комплекс бизнес-класса в центре
										камбоджийской столицы Пномпень. Срок сдачи - второй квартал
										2024. Все квартиры с дизайнерской отделкой и готовы к
										заезду.
									</p>
									<img
										src='mobile/wealth/Infinity pool (1) 1.jpg'
										alt='Infinity Pool'
									/>
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
						</>
					) : (
						<>
							{currentSlide === 0 && (
								<div className='wealth'>
									<h2>Wealth Mansion</h2>
									<p>
										Представляем вашему вниманию <span> Wealth Mansion </span> —
										роскошный жилой комплекс бизнес-класса в центре
										камбоджийской столицы Пномпень. Срок сдачи - второй квартал
										2024. Все квартиры с дизайнерской отделкой и готовы к
										заезду.
									</p>
									<div className='large_wealth'>
										<p>
											<span> Wealth Mansion </span> — проект от крупнейшего
											конгломерата из Китая, компании CSCEC. За годы работы эта
											компания успела построить Международный коммерческий центр
											в Гонконге (самый высокий небоскреб в городе), мечеть
											Джамаа эль-Джазаир в Алжире (третью по величине мечеть в
											мире стоимостью 1,5 млрд. долларов США), новую столицу
											Египта и Гигафабрику Tesla в Шанхае.
										</p>
										<img
											src='mobile/wealth/Infinity pool (1) 1.jpg'
											alt='Infinity Pool'
										/>
									</div>
									<div className='large_wealth'>
										<img
											src='mobile/wealth/Infinity pool (1) 1.jpg'
											alt='Infinity Pool'
										/>

										<img
											src='mobile/wealth/Infinity pool (1) 1.jpg'
											alt='Infinity Pool'
										/>
										<img
											src='mobile/wealth/Infinity pool (1) 1.jpg'
											alt='Infinity Pool'
										/>
									</div>
								</div>
							)}
							{currentSlide === 1 && (
								<div className='wealth'>
									<h2>Le Conde BKK1</h2>
									<p>
										Представляем вашему вниманию <span> Wealth Mansion </span> —
										роскошный жилой комплекс бизнес-класса в центре
										камбоджийской столицы Пномпень. Срок сдачи - второй квартал
										2024. Все квартиры с дизайнерской отделкой и готовы к
										заезду.
									</p>
									<div className='large_wealth'>
										<p>
											<span> Wealth Mansion </span> — проект от крупнейшего
											конгломерата из Китая, компании CSCEC. За годы работы эта
											компания успела построить Международный коммерческий центр
											в Гонконге (самый высокий небоскреб в городе), мечеть
											Джамаа эль-Джазаир в Алжире (третью по величине мечеть в
											мире стоимостью 1,5 млрд. долларов США), новую столицу
											Египта и Гигафабрику Tesla в Шанхае.
										</p>
										<img
											src='mobile/wealth/Infinity pool (1) 1.jpg'
											alt='Infinity Pool'
										/>
									</div>
									<div className='large_wealth'>
										<img
											src='mobile/wealth/Infinity pool (1) 1.jpg'
											alt='Infinity Pool'
										/>

										<img
											src='mobile/wealth/Infinity pool (1) 1.jpg'
											alt='Infinity Pool'
										/>
										<img
											src='mobile/wealth/Infinity pool (1) 1.jpg'
											alt='Infinity Pool'
										/>
									</div>
								</div>
							)}
						</>
					)}
				</div>

				{}
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
