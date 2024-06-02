import React, { useState } from 'react'
import Lightbox from 'react-awesome-lightbox'
import 'react-awesome-lightbox/build/style.css'
import { useSwipeable } from 'react-swipeable'
import TextSlider from '../slider/TextSlider'
import './arch.css'

export const Arch = ({ onChangeSlide }) => {
	const slides = [
		{
			label: 'Wealth Mansion',

			first_text: "Инвестиции в недвижимость Камбоджи 'под ключ'",
			second_text:
				'Мы предлагаем: гарантированный возврат инвестиций в недвижимость Пном Пеня напрямую от застройщика',
			background: '#4A4A4A',
			icons: ['/images/icon1.svg', '/images/icon2.svg', '/images/icon3.svg'],
		},
		{
			label: 'Le Conde BKK',
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
		'mobile/wm_amenities_arch/wm_arch_1_tumb.webp',
		'mobile/wm_amenities_arch/wm_arch_2_tumb.webp',
		'mobile/wm_amenities_arch/wm_arch_3_tumb.webp',
		'mobile/wm_amenities_arch/wm_arch_4_tumb.webp',
		'mobile/wm_amenities_arch/wm_arch_5_tumb.webp',
		'mobile/wm_amenities_arch/wm_arch_6_tumb.webp',
		'mobile/wm_amenities_arch/wm_arch_7_tumb.webp',
	]
	const imagesWithoutThumb = images.map(img => img.replace('_tumb', ''))

	const imagess = [
		'mobile/lecondo/galary1.jpg',
		'mobile/lecondo/galary2.jpg',
		'mobile/lecondo/galary3.jpg',
		'mobile/lecondo/galary4.jpg',
		'mobile/lecondo/galary5.jpg',
		'mobile/lecondo/galary6.jpg',
		'mobile/lecondo/galary7.jpg',
	]
	const lecondeImages = [
		'leconde/archs/leconde_arch_1_tumb.webp',
		'leconde/archs/leconde_arch_2_tumb.webp',
		'leconde/archs/leconde_arch_3_tumb.webp',
		'leconde/archs/leconde_arch_4_tumb.webp',
		'leconde/archs/leconde_arch_5_tumb.webp',
		'leconde/archs/leconde_arch_6_tumb.webp',
		'leconde/archs/leconde_arch_7_tumb.webp',
	]

	const lecondeImagesWithoutThumb = lecondeImages.map(img => img.replace('_tumb', ''))
	const [isLecondeOpen, setIsLecondeOpen] = useState(false)
	const [lecondeIndex, setLecondeIndex] = useState(0)
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
	const handlers = useSwipeable({
		onSwipedLeft: () => nextSlide(),
		onSwipedRight: () => prevSlide(),
		preventDefaultTouchmoveEvent: true,
		trackMouse: true, // This will allow dragging with the mouse as well
	})
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
			style={
				window.innerWidth > 768
					? { display: 'none' }
					: {
							backgroundColor: currentSlide === 0 ? '#4A4A4A' : '#2566AF',
							transition: 'background-color 0.5s ease-in-out',
							position: 'relative',
							minHeight: 900,
							display: 'block',
					  }
			}
		>
			<div className='container'>
				<div className='space_section' {...handlers}>
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
										style={{ cursor: 'pointer', margin: '5px', width: index === 0 && window.innerWidth <= 768 ? '92%' : '45%' }}
									/>
								))}
							</div>
						</div>
					)}

					{currentSlide === 1 && (
						<div className='space'>
							<h2>Le Conde bkk1</h2>
							<h3>АРХИТЕКТУРА</h3>
							<p>
								<span> Leconde </span> построен при участии известных
								архитекторов. Каждая деталь продумана!
							</p>
							<div className='image'>
								
							{lecondeImages.map((image, index) => (
												<img
													key={index}
													src={image}
													alt=''
													onClick={() => {
														setLecondeIndex(index)
														setIsLecondeOpen(true)
													}}
													style={{ cursor: 'pointer', margin: '5px', width: index === 0 && window.innerWidth <= 768 ? '92%' : '45%' }}

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
					images={imagesWithoutThumb.map(img => ({ url: img }))}
					startIndex={photoIndex}
					onClose={() => setIsOpen(false)}
					toolbarButtons={[]}
				/>
			)}
			{isLecondeOpen && (
						<Lightbox
							images={lecondeImagesWithoutThumb.map(img => ({ url: img }))}
							startIndex={lecondeIndex}
							onClose={() => setIsLecondeOpen(false)}
							toolbarButtons={[]}
						/>
					)}
		</div>
	)
}
