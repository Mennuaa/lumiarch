import React, { useState } from 'react'
import Lightbox from 'react-awesome-lightbox'
import 'react-awesome-lightbox/build/style.css'
import { useSwipeable } from 'react-swipeable'
import TextSlider from '../slider/TextSlider'
import './space.css'

const imageDetails = [
	{
		src: 'mobile/wm_amenities_arch/wm_public_1_tumb.webp',
		title: '01',
		description: 'Infinity-бассейн на крыше',
	},
	{
		src: 'mobile/wm_amenities_arch/wm_public_2_tumb.webp',
		title: '02',
		description: 'Мишленовский ресторан',
	},
	{
		src: 'mobile/wm_amenities_arch/wm_public_3_tumb.webp',
		title: '03',
		description: 'Спортзал',
	},
	{
		src: 'mobile/wm_amenities_arch/wm_public_4_tumb.webp',
		title: '04',
		description: 'Коворкинг',
	},
	{
		src: 'mobile/wm_amenities_arch/wm_public_5_tumb.webp',
		title: '05',
		description: 'Детская игровая зона',
	},
	{
		src: 'mobile/wm_amenities_arch/wm_public_6_tumb.webp',
		title: '06',
		description: 'Конференц-зал',
	},
]
const images = [
	'mobile/wm_amenities_arch/wm_public_1_tumb.webp',
	'mobile/wm_amenities_arch/wm_public_2_tumb.webp',
	'mobile/wm_amenities_arch/wm_public_3_tumb.webp',
	'mobile/wm_amenities_arch/wm_public_4_tumb.webp',
	'mobile/wm_amenities_arch/wm_public_5_tumb.webp',
	'mobile/wm_amenities_arch/wm_public_6_tumb.webp',
]

const imagesWithoutThumb = images.map(img => img.replace('_tumb', ''))
const imageDetails2 = [
	{
		src: 'leconde/amenities/leconde_public_1_tumb.webp',
		title: '01',
		description: 'Бассейн с видом на город',
	},
	{
		src: 'leconde/amenities/leconde_public_2_tumb.webp',
		title: '02',
		description: 'Sky Garden',
	},
	{
		src: 'leconde/amenities/leconde_public_3_tumb.webp',
		title: '03',
		description: 'Детская игровая зона',
	},
	{
		src: 'leconde/amenities/leconde_public_4_tumb.webp',
		title: '04',
		description: 'Библиотека',
	},
	{
		src: 'leconde/amenities/leconde_public_5_tumb.webp',
		title: '05',
		description: 'Фитнесс-зал',
	},
	{
		src: 'leconde/amenities/leconde_public_6_tumb.webp',
		title: '06',
		description: 'Sky-бар',
	},
]
const images2 = [
	'leconde/amenities/leconde_public_1_tumb.webp',
	'leconde/amenities/leconde_public_2_tumb.webp',
	'leconde/amenities/leconde_public_3_tumb.webp',
	'leconde/amenities/leconde_public_4_tumb.webp',
	'leconde/amenities/leconde_public_5_tumb.webp',
	'leconde/amenities/leconde_public_6_tumb.webp',
]

const imagesWithoutThumb2 = images2.map(img => img.replace('_tumb', ''))

export const Space = ({ onChangeSlide , scrollToContact={scrollToContact} }) => {
	const [currentSlide, setCurrentSlide] = useState(0)

	const [photoIndex, setPhotoIndex] = useState(null)
	const [isOpen, setIsOpen] = useState(false)
	const [photoIndex2, setPhotoIndex2] = useState(null)
	const [isOpen2, setIsOpen2] = useState(false)
	const slides = [
		{
			label: 'Wealth Mansion',

			first_text: "Инвестиции в недвижимость Камбоджи 'под ключ'",
			second_text:
				'Мы предлагаем: гарантированный возврат инвестиций в недвижимость Пном Пеня напрямую от застройщика',
			background: '#4A4A4A',
			backgroundLarge : 'mobile/wealth/main-bg-descktop.jpg',
			icons: ['/images/icon1.svg', '/images/icon2.svg', '/images/icon3.svg'],
		},
		{
			label: 'Le Conde BKK',
			first_text:
				'Инвестируйте в самую быстроразвивающуюся страну Юго-Восточной Азии',
			second_text:
				'№1 по росту ВВП, долларизированная экономика, выгодные условия налогообложения, гарантированный возврат инвестиций',

			background: '#2566AF',
			backgroundLarge : 'leconde/leconde_back4.webp',
			icons: ['/images/icon4.svg', '/images/icon5.svg', '/images/icon6.svg'],
		},
	]
	const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 992)

	

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

	const wealthImages = [
		'mobile/wm_amenities_arch/wm_arch_1_tumb.webp',
		'mobile/wm_amenities_arch/wm_arch_2_tumb.webp',
		// 'mobile/wm_amenities_arch/wm_arch_3_tumb.webp',
		// 'mobile/wm_amenities_arch/wm_arch_4_tumb.webp',
		'mobile/wm_amenities_arch/wm_arch_5_tumb.webp',
		'mobile/wm_amenities_arch/wm_arch_6_tumb.webp',
		'mobile/wm_amenities_arch/wm_arch_7_tumb.webp',
	]

	const wealthImagesWithoutThumb = wealthImages.map(img => img.replace('_tumb', ''))
	const [isWealthOpen, setIsWealthOpen] = useState(false)
	const [WealthIndex, setWealthIndex] = useState(0)
	const backgroundImage = isLargeScreen
	? slides[currentSlide].backgroundLarge
	: slides[currentSlide].background
	return (
		<div
		style={
			isLargeScreen
				? {
					backgroundImage: `url(${backgroundImage})`,
					backgroundPosition: 'center',
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
					// height: '100vh',
					transition: 'background-color 0.5s ease-in-out',
					position: 'relative',
				}
				: {
					position: 'relative',
					backgroundColor: backgroundImage,
				}
			}
		>
			<div
				style={
					window.innerWidth > 768 ? { display: 'block' } : { display: 'none' }
				}
			>
				<div className='container'>
					<div className='space_section ' {...handlers}>
						{currentSlide === 0 && (
							<div className='space_sector' >
								<div className='space_sector-left'>
									<h2 style={{ fontWeight: '300' }}>wealth mansion</h2>
									<p>
									Участие пула опытнейших архитекторов позволило создать внутреннее пространство максимально удобным для доступа жильцов и будущих гостей комплекса, а особая проработка мельчайших деталей делают комплекс максимально привлекательным.
									</p>
									<div className='space_sector-img'>
									{wealthImages.map((image, index) => (
												<img
													key={index}
													src={image}
													alt=''
													onClick={() => {
														setWealthIndex(index)
														setIsWealthOpen(true)
														console.log("WealthIndex", WealthIndex);
													}}
													style={{ cursor: 'pointer' }}
												/>
										))}
									</div>
								</div>
								<div className='space_sector-rigth'>
									<h4>ОБЩЕСТВЕННЫЕ ПРОСТРАНСТВА В ЖК</h4>
									<p>
									Жильцам комплекса будет доступна обширная премиальная инфраструктура и многочисленные общественные пространства комплекса, которые соответствуют 5 звездам.
									</p>
									<div className='blocks'>
										{imageDetails.map((image, index) => (
											<div className='block' key={index}>
												<img
													src={image.src}
													alt=''
													onClick={() => {
														setPhotoIndex(index)
														setIsOpen(true)
													}}
													style={{  cursor: 'pointer',height: '100%',width: '170px'}}

												/>
												<h2>{image.title}</h2>
												<p>{image.description}</p>
											</div>
										))}
									</div>
									<div className='space_sector-btn'>
										<a onClick={scrollToContact}>оставить заявку</a>
										<p>И получить подробные материалы о налогах и пр.</p>
									</div>
								</div>
							</div>
						)}
							{currentSlide === 1 && (
							<div className='space_sector'>
								<div className='space_sector-left'>
									<h2>Le Conde</h2>
									<p>
										ЖК предлагает непревзойденные удобства: Infinity pool и Sky-bar на крыше, пышный сад площадью 1000 кв. м на 32 этаже, детский игровой центр Kids Paradise площадью 800 кв. м, имеется торговый центр и 6-этажная парковка.
									</p>
									<div className='space_sector-img'>
									{lecondeImages.map((image, index) => (
												<img
													key={index}
													src={image}
													alt=''
													onClick={() => {
														setLecondeIndex(index)
														setIsLecondeOpen(true)
													}}
													style={{ cursor: 'pointer' ,height: '100%'}}
												/>
										))}
									</div>
								</div>
								<div className='space_sector-rigth'>
									<h4>ОБЩЕСТВЕННЫЕ ПРОСТРАНСТВА В ЖК</h4>
									<p>
									Инфраструктура соответствует 5 звездам, которая также включает тренажерный зал и беговую дорожку 240 м, оборудованные площадки для BBQ, собственная библиотека и большое коворкинг-пространство.
									</p>
									<div className='blocks'>
										{imageDetails2.map((image, index) => (
											<div className='block' key={index}>
												<img
													src={image.src}
													alt=''
													onClick={() => {
														setPhotoIndex2(index)
														setIsOpen2(true)
													}}
													style={{ cursor: 'pointer' , height: '100%' , width: '170px'}}
												/>
												<h2>{image.title}</h2>
												<p>{image.description}</p>
											</div>
										))}
									</div>
									<div className='space_sector-btn'>
										<a onClick={scrollToContact}>оставить заявку</a>
										<p>И получить подробные материалы о налогах и пр.</p>
									</div>
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
			<div
				style={
					window.innerWidth > 768 ? { display: 'none' } : { display: 'block' }
				}
			>
				<div className='container'>
					<div className='space_section ' {...handlers}>
						{currentSlide === 0 && (
							<div className='space'>
								<h2>Wealth Mansion</h2>
								<h3>ОБЩЕСТВЕННЫЕ ПРОСТРАНСТВА В ЖК</h3>
								<p className='space_text'>
								Участие пула опытнейших архитекторов позволило создать внутреннее пространство максимально удобным для доступа жильцов и будущих гостей комплекса, а особая проработка мельчайших деталей делают комплекс максимально привлекательным.
								</p>
								<div className='blocks'>
									{imageDetails.map((image, index) => (
										<div className='block' key={index}>
											<img
												src={image.src}
												alt=''
												onClick={() => {

													setPhotoIndex(index)
													setIsOpen(true)
													console.log('image')

												}}
												style={{ cursor: 'pointer' , height: '100%'}}
											/>
											<h2>{image.title}</h2>
											<p>{image.description}</p>
										</div>
									))}
								</div>
							</div>
						)}
						
						{currentSlide === 1 && (
							<div className='space'>
								<h2 style={{ fontWeight: '300' }}>Le Conde bkk1</h2>
								<h3>ОБЩЕСТВЕННЫЕ ПРОСТРАНСТВА В ЖК</h3>
								<p className='space_text'>
								Инфраструктура соответствует 5 звездам, которая также включает тренажерный зал и беговую дорожку 240 м, оборудованные площадки для BBQ, собственная библиотека и большое коворкинг-пространство.

								</p>
								<div className='blocks'>
									{imageDetails2.map((image, index) => (
										<div className='block' key={index}>
											<img
												src={image.src}
												alt=''
												onClick={() => {
													setPhotoIndex2(index)
													setIsOpen2(true)
												}}
												style={{ cursor: 'pointer' ,height: '100%'}}

											/>
											<h2>{image.title}</h2>
											<p>{image.description}</p>
										</div>
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
			</div>
			{isOpen && (
							<Lightbox
								images={imagesWithoutThumb.map(img => ({ url: img }))}
								startIndex={photoIndex}
								onClose={() => setIsOpen(false)}
								toolbarButtons={[]}
							/>
						)}
						{isOpen2 && (
						<Lightbox
							images={imagesWithoutThumb2.map(img => ({ url: img }))}
							startIndex={photoIndex2}
							onClose={() => setIsOpen2(false)}
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
					{isWealthOpen && (
						<Lightbox
							images={wealthImagesWithoutThumb.map(img => ({ url: img }))}
							startIndex={WealthIndex}
							onClose={() => setIsWealthOpen(false)}
							toolbarButtons={[]}
						/>
					)}
		</div>
	)
}
