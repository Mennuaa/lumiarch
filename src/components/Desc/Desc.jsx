import React, { useContext, useEffect, useState } from 'react';
import TextSlider from '../slider/TextSlider';
import './desk.css';
import Lightbox from 'react-awesome-lightbox';
import 'react-awesome-lightbox/build/style.css';
import { ConfigContext } from '../../App';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Desc = ({ onChangeSlide }) => {
	useEffect(() => {
		AOS.init({
		  duration: 1200, 
		});
	  }, []);
	const config = useContext(ConfigContext);

	const slides = [
		{
			label: config.Ru_objects_arrow1,
			first_text: "Инвестиции в недвижимость Камбоджи 'под ключ'",
			second_text:
				'Мы предлагаем: гарантированный возврат инвестиций в недвижимость Пном Пеня напрямую от застройщика',
			background: '#4A4A4A',
			backgroundLarge: '/desktop/backs/bg-wm2.webp',
			icons: ['/images/icon1.svg', '/images/icon2.svg', '/images/icon3.svg'],
		},
		{
			label: config.Ru_objects_arrow2,
			first_text:
				'Инвестируйте в самую быстроразвивающуюся страну Юго-Восточной Азии',
			second_text:
				'№1 по росту ВВП, долларизированная экономика, выгодные условия налогообложения, гарантированный возврат инвестиций',
			backgroundLarge: '/leconde/leconde_back_2.webp',
			background: '#2566AF',
			icons: ['/images/icon4.svg', '/images/icon5.svg', '/images/icon6.svg'],
		},
	];

	const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 992);
	const [currentSlide, setCurrentSlide] = useState(0); // Assuming you have a way to set the current slide

	useEffect(() => {
		const handleResize = () => {
			setIsLargeScreen(window.innerWidth > 1024);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const backgroundImage = isLargeScreen
		? slides[currentSlide].backgroundLarge
		: slides[currentSlide].background;

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

	const wealthPhotos = [
		'desktop/wm_2/wm_gym_tumb.webp',
		'desktop/wm_2/wm_infinitypool_tumb.webp',
		'desktop/wm_2/wm_michelin_tumb.webp',
		'desktop/wm_2/wm_swimiming_sofa_tumb.webp',
	];
	const wealthPhotosWithoutThumb = wealthPhotos.map((img) => img.replace('_tumb', ''));
	const [isWealthOpen, setIsWealthOpen] = useState(false);
	const [wealthIndex, setWealthIndex] = useState(0);
	const lecondePhotos = [
		'desktop/leconde_about/leconde_building_tumb.webp',
		'desktop/leconde_about/leconde_city_tumb.webp',
		'desktop/leconde_about/leconde_stairs_tumb.webp',
	];
	const lecondePhotosWithoutThumb = lecondePhotos.map((img) => img.replace('_tumb', ''));
	const [isLecondeOpen, setIsLecondOpen] = useState(false);
	const [lecondeIndex, setLecondIndex] = useState(0);

	const progressBarLeft = `${(currentSlide / slides.length) * 100}%`;

	return (
		<div
			className='investment desc'
			style={
				isLargeScreen
					? {
							backgroundImage: `url(${backgroundImage})`,
							backgroundPosition: 'center',
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat',
							transition: 'background-color 0.5s ease-in-out',
							position: 'relative',
					  }
					: {
							position: 'relative',
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
									<h2  className='mainh2' style={{ fontWeight: '300' }} dangerouslySetInnerHTML={{ __html: config.Ru_wm_general_header }}></h2>
									<p dangerouslySetInnerHTML={{ __html: config.Ru_wm_general_text1 }}></p>
									<img
										style={{ margin: '20px 0' }}
										src='mobile/wealth/wm_pool.webp'
										alt='Wealth Mansion Pool'
									/>
									<p dangerouslySetInnerHTML={{ __html: config.Ru_wm_general_text2 }}></p>
								</div>
							)}
							{currentSlide === 1 && (
								<div className='wealth'>
									<h2 style={{ fontWeight: '300' }} dangerouslySetInnerHTML={{ __html: config.Ru_leconde_general_header }}></h2>
									<p dangerouslySetInnerHTML={{ __html: config.Ru_leconde_general_text1 }}></p>
									<img
										style={{ margin: '20px 0' }}
										src='mobile/wealth/Infinity pool (1) 1.jpg'
										alt='Infinity Pool'
									/>
									<p dangerouslySetInnerHTML={{ __html: config.Ru_leconde_general_text2 }}></p>
								</div>
							)}
						</>
					) : (
						<>
							{currentSlide === 0 && (
								<div className='wealth'>
									<h2 data-aos="fade-up" className='mainh2' style={{ fontWeight: '300' }} dangerouslySetInnerHTML={{ __html: config.Ru_wm_general_header }}></h2>
									<p data-aos="fade-up" style={{ marginBottom: '30px' }} dangerouslySetInnerHTML={{ __html: config.Ru_wm_general_text1 }}></p>
									<div className='large_wealth'>
										<p data-aos="fade-up" dangerouslySetInnerHTML={{ __html: config.Ru_wm_general_text2 }}></p>
									</div>
									<div className='large_wealth' style={{ marginTop: '30px' }}>
										{wealthPhotos.map((image, index) => (
											<img
											data-aos="fade-up"
												key={index}
												src={image}
												alt=''
												onClick={() => {
													setWealthIndex(index);
													setIsWealthOpen(true);
												}}
												style={{ cursor: 'pointer', height: '100%' }}
											/>
										))}
									</div>
								</div>
							)}
							{currentSlide === 1 && (
								<div className='wealth'>
									<h2 data-aos="fade-up" className='mainh2' style={{ fontWeight: '300' }} dangerouslySetInnerHTML={{ __html: config.Ru_leconde_general_header }}></h2>
									<p data-aos="fade-up" style={{ marginBottom: '30px' }} dangerouslySetInnerHTML={{ __html: config.Ru_leconde_general_text1 }}></p>
									<div className=''>
										<p data-aos="fade-up" dangerouslySetInnerHTML={{ __html: config.Ru_leconde_general_text2 }}></p>
									</div>
									<div className='large_wealth'>
										{lecondePhotos.map((image, index) => (
											<img
											data-aos="fade-up"
												key={index}
												src={image}
												alt=''
												onClick={() => {
													setLecondIndex(index);
													setIsLecondOpen(true);
												}}
												style={{ cursor: 'pointer', height: '100%' }}
											/>
										))}
									</div>
								</div>
							)}
						</>
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
						images={lecondePhotosWithoutThumb.map((img) => ({ url: img }))}
						startIndex={lecondeIndex}
						onClose={() => setIsLecondOpen(false)}
						toolbarButtons={[]}
					/>
				)}
				{isWealthOpen && (
					<Lightbox
						images={wealthPhotosWithoutThumb.map((img) => ({ url: img }))}
						startIndex={wealthIndex}
						onClose={() => setIsWealthOpen(false)}
						toolbarButtons={[]}
					/>
				)}
				
			</div>
		</div>
	);
};
