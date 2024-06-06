import React, { useContext, useEffect, useState } from 'react';
import TextSlider from '../slider/TextSlider';
import './utils.css';
import Lightbox from 'react-awesome-lightbox';
import 'react-awesome-lightbox/build/style.css';
import { useSwipeable } from 'react-swipeable';
import { ConfigContext } from '../../App';
import AOS from 'aos';
import 'aos/dist/aos.css';
export const Utils = ({ onChangeSlide }) => {
	const config = useContext(ConfigContext);
	useEffect(() => {
		AOS.init({
		  duration: 1200, 
		});
	  }, []);
	const [isOpen, setIsOpen] = useState(false);
	const [photoIndex, setPhotoIndex] = useState(0);
	const slides = [
		{
			label: config.Ru_objects_arrow1,
			first_text: "Инвестиции в недвижимость Камбоджи 'под ключ'",
			second_text:
				'Мы предлагаем: гарантированный возврат инвестиций в недвижимость Пном Пеня напрямую от застройщика',
			background: '#4A4A4A',
			icons: ['/images/icon1.svg', '/images/icon2.svg', '/images/icon3.svg'],
		},
		{
			label: config.Ru_objects_arrow2,
			first_text:
				'Инвестируйте в самую быстроразвивающуюся страну Юго-Восточной Азии',
			second_text:
				'№1 по росту ВВП, долларизированная экономика, выгодные условия налогообложения, гарантированный возврат инвестиций',
			background: '#2566AF',
			icons: ['/images/icon4.svg', '/images/icon5.svg', '/images/icon6.svg'],
		},
	];
	const handlers = useSwipeable({
		onSwipedLeft: () => nextSlide(),
		onSwipedRight: () => prevSlide(),
		preventDefaultTouchmoveEvent: true,
		trackMouse: true, // This will allow dragging with the mouse as well
	});
	const [currentSlide, setCurrentSlide] = useState(0);

	const nextSlide = () => {
		const newSlide = (currentSlide + 1) % slides.length;
		setCurrentSlide(newSlide);
		onChangeSlide(slides[newSlide]);
	};

	const prevSlide = () => {
		const newSlide = (currentSlide - 1 + slides.length) % slides.length;
		setCurrentSlide(newSlide);
		onChangeSlide(slides[newSlide]);
	};

	function getFirstWordAndRest(text) {
		const trimmedText = text.trim();
		const words = trimmedText.split(' ');
		const firstWord = words[0];
		const restOfText = words.slice(1).join(' ');
		return { firstWord, restOfText };
	}

	const { firstWord, restOfText } = getFirstWordAndRest(slides[currentSlide].first_text);

	const progressBarLeft = `${(currentSlide / slides.length) * 100}%`;

	const styleMedia = {
		backgroundColor: currentSlide === 0 ? '#4A4A4A' : '#2566AF',
		transition: 'background-color 0.5s ease-in-out',
	};

	const styleDesktop = {
		background:
			currentSlide === 0
				? 'url(mobile/lecondo/galayFon.jpg)'
				: 'url(mobile/lecondo/galayFon.jpg)',
		transition: 'background-color 0.5s ease-in-out',
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		minheight: '100vh',
	};

	const images = [
		'mobile/WM_unit_photos/wm_unit_1_tumb.webp',
		'mobile/WM_unit_photos/wm_unit_2_tumb.webp',
		'mobile/WM_unit_photos/wm_unit_3_tumb.webp',
		'mobile/WM_unit_photos/wm_unit_4_tumb.webp',
		'mobile/WM_unit_photos/wm_unit_5_tumb.webp',
		'mobile/WM_unit_photos/wm_unit_6_tumb.webp',
		'mobile/WM_unit_photos/wm_unit_7_tumb.webp',
		'mobile/WM_unit_photos/wm_unit_8_tumb.webp',
	];
	const imagesWithoutThumb = images.map((img) => img.replace('_tumb', ''));
	const lecondeImages = [
		'leconde/units/leconde_apart_1_tumb.webp',
		'leconde/units/leconde_apart_2_tumb.webp',
		'leconde/units/leconde_apart_3_tumb.webp',
		'leconde/units/leconde_apart_4_tumb.webp',
		'leconde/units/leconde_apart_7_tumb.webp',
		'leconde/units/leconde_apart_8_tumb.webp',
		'leconde/units/leconde_apart_9_tumb.webp',
		'leconde/units/leconde_apart_10_tumb.webp',
	];
	const lecondeImagesWithoutThumb = lecondeImages.map((img) => img.replace('_tumb', ''));

	const [isLecondeOpen, setIsLecondeOpen] = useState(false);
	const [lecondeIndex, setLecondeIndex] = useState(0);

	return (
		<div className='investment' style={window.innerWidth >= 768 ? styleDesktop : styleMedia}>
			<div className='container'>
				<div className='wealth_section object_section' {...handlers}>
					{currentSlide === 0 && (
						<div className='wealth'>
							<h2 data-aos="fade-right" className='mainh2' style={{ fontWeight: '300' }} dangerouslySetInnerHTML={{ __html: config.Ru_wm_units_header }}></h2>
							<h3 data-aos="fade-right" dangerouslySetInnerHTML={{ __html: config.Ru_wm_units_subheader }}></h3>
							<p data-aos="fade-right" dangerouslySetInnerHTML={{ __html: config.Ru_wm_units_description }}></p>
							<div className='images'>
								{images.map((image, index) => (
														<div data-aos="fade-up" key={index} style={{ cursor: 'pointer', width: '95%' , height: '150px', backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}  onClick={() => { setPhotoIndex(index); setIsOpen(true); }} ></div>

								))}
							</div>
						</div>
					)}

					{currentSlide === 1 && (
						<div className='wealth'>
							<h2 data-aos="fade-right" className='mainh2' style={{ fontWeight: '300' }} dangerouslySetInnerHTML={{ __html: config.Ru_leconde_units_header }}></h2>
							<h3 data-aos="fade-right" dangerouslySetInnerHTML={{ __html: config.Ru_leconde_units_subheader }}></h3>
							<p data-aos="fade-right" dangerouslySetInnerHTML={{ __html: config.Ru_leconde_units_description }}></p>
							<div className='images'>
								{lecondeImages.map((image, index) => (
														<div key={index} data-aos="fade-up" style={{ cursor: 'pointer', width: '95%' , height: '150px', backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}  onClick={() => { setLecondeIndex(index); setIsLecondeOpen(true); }} ></div>

								))}
							</div>
						</div>
					)}
					<TextSlider
					slides={slides}
					currentSlide={currentSlide}
					prevSlide={prevSlide}
					nextSlide={nextSlide}
				/>
				</div>
				
				{isLecondeOpen && (
					<Lightbox
						images={lecondeImagesWithoutThumb.map((img) => ({ url: img }))}
						startIndex={lecondeIndex}
						onClose={() => setIsLecondeOpen(false)}
						toolbarButtons={[]}
					/>
				)}
				{isOpen && (
					<Lightbox
						images={imagesWithoutThumb.map((img) => ({ url: img }))}
						startIndex={photoIndex}
						onClose={() => setIsOpen(false)}
						toolbarButtons={[]}
					/>
				)}
			</div>
		</div>
	);
};
