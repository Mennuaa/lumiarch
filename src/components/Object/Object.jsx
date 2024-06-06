import React, { useContext, useEffect, useState } from 'react'
import TextSlider from '../slider/TextSlider'
import './object.css'
import Lightbox from 'react-awesome-lightbox'
import 'react-awesome-lightbox/build/style.css'
import { useSwipeable } from 'react-swipeable';
import { ConfigContext } from '../../App'
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Object = ({ onChangeSlide }) => {
	const config = useContext(ConfigContext);

	const [currentSlide, setCurrentSlide] = useState(0)
	const slides = [
		{
			label: config.Ru_objects_arrow1,
			first_text: config.Ru_wm_header,
			second_text:
				'Мы предлагаем: гарантированный возврат инвестиций в недвижимость Пном Пеня напрямую от застройщика',
			background: '/mobile/wealth/wm_back.webp',
			backgroundLarge: '/desktop/backs/bg-wm1.webp',

			icons: ['/images/icon1.svg', '/images/icon2.svg', '/images/icon3.svg'],
		},
		{
			label: config.Ru_objects_arrow2,
			first_text: config.Ru_leconde_header,
			second_text:
				'№1 по росту ВВП, долларизированная экономика, выгодные условия налогообложения, гарантированный возврат инвестиций',

			background: '/leconde/leconde_back.webp',
			backgroundLarge: '/leconde/leconde_back.webp',
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
	useEffect(() => {
		AOS.init({
		  duration: 1200, 
		});
	  }, []);
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
							<h2 data-aos="fade-right"  className='mainh2'>{config.Ru_wm_header}</h2>
							<ul>
								<li data-aos="fade-right" >
									<img src='images/icon/Vector.svg' className='vector' alt='' />
									<p>
										{config.Ru_wm_slogan_1}
									</p>
								</li>
								<li data-aos="fade-right" >
									<img src='images/icon/Vector.svg' className='vector' alt='' />
									<p>
										{config.Ru_wm_slogan_2}
									</p>
								</li>
								<li data-aos="fade-right" >
									<img src='images/icon/Vector.svg' className='vector' alt='' />
									<p>
										{config.Ru_wm_slogan_3}
									</p>
								</li>
								<li data-aos="fade-right" >
									<img src='images/icon/Vector.svg' className='vector' alt='' />
									<p>
										{config.Ru_wm_slogan_4}
									</p>
								</li>
							</ul>
							<TextSlider
					slides={slides}
					currentSlide={currentSlide}
					prevSlide={prevSlide}
					nextSlide={nextSlide}
				/>
						</div>
					)}

					{currentSlide === 1 && (
						<div>
							<h2 data-aos="fade-right"  className='mainh2'>{config.Ru_leconde_header}</h2>

							<ul>
								<li data-aos="fade-right" >
									<img src='images/icon/Vector.svg' alt='' />
									<p >
										{config.Ru_leconde_slogan_1}
									</p>
								</li>
								<li data-aos="fade-right" >
									<img src='images/icon/Vector.svg' alt='' />
									<p>
										{config.Ru_leconde_slogan_2}
									</p>
								</li>
								<li data-aos="fade-right" >
									<img src='images/icon/Vector.svg' alt='' />
									<p>
										{config.Ru_leconde_slogan_3}
									</p>
								</li>
							</ul>
							<TextSlider
					slides={slides}
					currentSlide={currentSlide}
					prevSlide={prevSlide}
					nextSlide={nextSlide}
				/>
						</div>
					)}
				</div>
				
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
