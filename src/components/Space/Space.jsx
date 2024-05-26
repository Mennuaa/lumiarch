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
		description: 'Бассейн с видом на город',
	},
	{
		src: 'mobile/wm_amenities_arch/wm_public_2_tumb.webp',
		title: '02',
		description: 'Sky Garden',
	},
	{
		src: 'mobile/wm_amenities_arch/wm_public_3_tumb.webp',
		title: '03',
		description: 'Детская игровая зона',
	},
	{
		src: 'mobile/wm_amenities_arch/wm_public_4_tumb.webp',
		title: '04',
		description: 'Библиотека',
	},
	{
		src: 'mobile/wm_amenities_arch/wm_public_5_tumb.webp',
		title: '05',
		description: 'Фитнесс-зал',
	},
	{
		src: 'mobile/wm_amenities_arch/wm_public_6_tumb.webp',
		title: '06',
		description: 'Sky-бар',
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

export const Space = ({ onChangeSlide }) => {
	const [photoIndex, setPhotoIndex] = useState(null)
	const [isOpen, setIsOpen] = useState(false)

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
					? {
							background: 'url(mobile/wealth/main-bg-descktop.jpg)',
							backgroundPosition: 'center',
							backgroundRepeat: 'no-repeat',
							backgroundSize: 'cover',
							transition: 'background-color 0.5s ease-in-out',
							position: 'relative',
							height: '100vh',
					  }
					: {
							backgroundColor: currentSlide === 0 ? '#4A4A4A' : '#2566AF',
							transition: 'background-color 0.5s ease-in-out',
							position: 'relative',
							minHeight: 900,
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
							<div className='space_sector'>
								<div className='space_sector-left'>
									<h2>wealth mansion</h2>
									<p>
										Еще больше фотографий из Wealth Mansion! Здание построено
										при участии известных архитекторов. Каждая деталь продумана.
										Жильцы имеют доступ ко всем внутренним общественным
										пространствам, который соответствуют 5 звездам.
									</p>
									<div className='space_sector-img'>
										<img src='mobile/wm_amenities_arch/wm_arch_1.webp' alt='' />
										<img src='mobile/wm_amenities_arch/wm_arch_2.webp' alt='' />
										<img src='mobile/wm_amenities_arch/wm_arch_3.webp' alt='' />
										<img src='mobile/wm_amenities_arch/wm_arch_4.webp' alt='' />
										<img src='mobile/wm_amenities_arch/wm_arch_5.webp' alt='' />
										<img src='mobile/wm_amenities_arch/wm_arch_5.webp' alt='' />
										<img src='mobile/wm_amenities_arch/wm_arch_6.webp' alt='' />
										<img src='mobile/wm_amenities_arch/wm_arch_7.webp' alt='' />
									</div>
								</div>
								<div className='space_sector-rigth'>
									<h4>ОБЩЕСТВЕННЫЕ ПРОСТРАНСТВА В ЖК</h4>
									<p>
										Еще больше фотографий из Wealth Mansion! Здание построено
										при участии известных архитекторов. Каждая деталь продумана.
										Жильцы имеют доступ ко всем внутренним общественным
										пространствам, который соответствуют 5 звездам.
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
													style={{ cursor: 'pointer' }}
												/>
												<h2>{image.title}</h2>
												<p>{image.description}</p>
											</div>
										))}
									</div>
									<div className='space_sector-btn'>
										<a href=''>оставить заявку</a>
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
					{isOpen && (
						<Lightbox
							images={imagesWithoutThumb.map(img => ({ url: img }))}
							startIndex={photoIndex}
							onClose={() => setIsOpen(false)}
							toolbarButtons={[]}
						/>
					)}
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
									<span> Wealth Mansion </span> имеет внутреннюю инфраструктуру,
									соответствующую уровню 5 звезд. Владельцам квартир будут
									доступны все общественные пространства. Каждую фотографию
									можно увеличить и прочитать подробности.
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
												style={{ cursor: 'pointer' }}
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
								<h2>Le Conde bkk1</h2>
								<h3>ОБЩЕСТВЕННЫЕ ПРОСТРАНСТВА В ЖК</h3>
								<p className='space_text'>
									<span> Wealth Mansion </span> имеет внутреннюю инфраструктуру,
									соответствующую уровню 5 звезд. Владельцам квартир будут
									доступны все общественные пространства. Каждую фотографию
									можно увеличить и прочитать подробности.
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
												style={{ cursor: 'pointer' }}
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
					{isOpen && (
						<Lightbox
							images={imagesWithoutThumb.map(img => ({ url: img }))}
							startIndex={photoIndex}
							onClose={() => setIsOpen(false)}
							toolbarButtons={[]}
						/>
					)}
				</div>
			</div>
		</div>
	)
}
