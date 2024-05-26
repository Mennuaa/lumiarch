import React, { useEffect, useState } from 'react'
import TextSlider from '../slider/TextSlider'
import './object.css'
import Lightbox from 'react-awesome-lightbox'
import 'react-awesome-lightbox/build/style.css'
import { useSwipeable } from 'react-swipeable';

export const Object = ({ onChangeSlide }) => {
	const [currentSlide, setCurrentSlide] = useState(0)
	const slides = [
		{
			label: 'Wealth Mansion',
			first_text: "Инвестиции в недвижимость Камбоджи 'под ключ'",
			second_text:
				'Мы предлагаем: гарантированный возврат инвестиций в недвижимость Пном Пеня напрямую от застройщика',
			background: '/mobile/wealth/wm_back.webp',
			backgroundLarge: '/desktop/backs/bg-wm1.webp',

			icons: ['/images/icon1.svg', '/images/icon2.svg', '/images/icon3.svg'],
		},
		{
			label: 'Le Conde BKK',
			first_text:
				'Инвестируйте в самую быстроразвивающуюся страну Юго-Восточной Азии',
			second_text:
				'№1 по росту ВВП, долларизированная экономика, выгодные условия налогообложения, гарантированный возврат инвестиций',

			background: '/mobile/lecondo/lecode_back.png',
			backgroundLarge: '/desktop/backs/bg-wm2.webp',
			icons: ['/images/icon4.svg', '/images/icon5.svg', '/images/icon6.svg'],
		},
	]
	const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 992)

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

	const handlers = useSwipeable({
        onSwipedLeft: () => nextSlide(),
        onSwipedRight: () => prevSlide(),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true // This will allow dragging with the mouse as well
    });

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
	const [photoIndex, setPhotoIndex] = useState(0);

    // Define images for each slide
    const images = [
        'mobile/wealth/arch_photos_tumb_1.webp',
        'mobile/wealth/arch_photos_tumb_2.webp',
        'mobile/wealth/arch_photos_tumb_3.webp',
        'images/Screenshot1.png',
        'images/Screenshot2.png',
        'images/Screenshot3.png',
        'images/Screenshot4.png',
    ];

    const imagess = [
        'mobile/lecondo/galary1.jpg',
        'mobile/lecondo/galary2.jpg',
        'mobile/lecondo/galary3.jpg',
        'mobile/lecondo/galary4.jpg',
        'mobile/lecondo/galary5.jpg',
        'mobile/lecondo/galary6.jpg',
        'mobile/lecondo/galary7.jpg',
    ];
	return (
		<div
			className='investment'
			style={{
				backgroundImage: `url(${backgroundImage})`,
				backgroundPosition: 'center',
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				// minHeight: 900,
			}}
		>
			<div className='container'>
				<div className='object_section' {...handlers}>
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
									<img src='images/icon/Vector.svg' className='vector' alt='' />
									<p>
										Предложение с самым высоким прогнозируемым ростом стоимости
										в Камбодже
									</p>
								</li>
								<li>
									<img src='images/icon/Vector.svg' className='vector' alt='' />
									<p>
										Роскошный образ жизни и выгодная инвестиция в самом сердце
										Пномпеня
									</p>
								</li>
								<li>
									<img src='images/icon/Vector.svg' className='vector' alt='' />
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
							<h2>Le Conde BKK1</h2>

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
