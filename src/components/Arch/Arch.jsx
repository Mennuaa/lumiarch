import React, { useState } from 'react'
import Lightbox from 'react-awesome-lightbox'
import 'react-awesome-lightbox/build/style.css'
import './arch.css'
import ImageSlider from '../slider/Slider'
import TextSlider from '../slider/TextSlider'

export const Arch = ({ onChangeSlide }) => {
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
	const [isOpen, setIsOpen] = useState(false)
	const [photoIndex, setPhotoIndex] = useState(0)

	const images = [
		'mobile/wealth/arch_photos_tumb_1.webp',
		'mobile/wealth/arch_photos_tumb_2.webp',
		'mobile/wealth/arch_photos_tumb_3.webp',
		'images/Screenshot1.png',
		'images/Screenshot2.png',
		'images/Screenshot3.png',
		'images/Screenshot4.png',
	]

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
			style={{
				backgroundColor: currentSlide === 0 ? '#4A4A4A' : '#2566AF',
				transition: 'background-color 0.5s ease-in-out',
				position: 'relative',
				minHeight: 900


			}}
		>
			<div className='container'>
				<div className='space_section'>
					{currentSlide === 0 && (
						<div className='space'>
							<h2>Wealth Mansion</h2>
							<h3>АРХИТЕКТУРА</h3>
							<p>
								<span> Wealth Mansion </span> построен при участии известных
								архитекторов. Каждая деталь продумана!
							</p>
							<div className='image'>
								{images.map((image, index) => (
									<img
										key={index}
										src={image}
										alt=''
										onClick={() => {
											setPhotoIndex(index)
											setIsOpen(true)
										}}
										style={{ cursor: 'pointer', margin: '5px' }}
									/>
								))}
							</div>
						</div>
					)}

					{currentSlide === 1 && (
						<div className='space'>
							<h2>Le condo bkk1</h2>
							<h3>АРХИТЕКТУРА</h3>
							<p>
								<span> Wealth Mansion </span> построен при участии известных
								архитекторов. Каждая деталь продумана!
							</p>
							<div className='image'>
								{images.map((image, index) => (
									<img
										key={index}
										src={image}
										alt=''
										onClick={() => {
											setPhotoIndex(index)
											setIsOpen(true)
										}}
										style={{ cursor: 'pointer', margin: '5px' }}
									/>
								))}
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
			{isOpen && (
				<Lightbox
				images={images.map(img => ({ url: img }))}
				startIndex={photoIndex}
				onClose={() => setIsOpen(false)}
				toolbarButtons={[]} // This effectively hides additional buttons like rotate
			/>
			)}
		</div>
	)
}
