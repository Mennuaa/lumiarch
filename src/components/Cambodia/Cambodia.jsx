import React, { useState, useEffect, useContext } from 'react';
import { useSwipeable } from 'react-swipeable';
import ImageSlider from '../slider/Slider';
import './cambodia.css';
import { ConfigContext } from '../../App';
import MainButton from '../buttons/MainButton';
import AOS from 'aos';
import 'aos/dist/aos.css';
export const Cambodia = ({ scrollToContact }) => {
	const config = useContext(ConfigContext);
	useEffect(() => {
		AOS.init({
		  duration: 1200, 
		});
	  }, []);
	const [currentSlide, setCurrentSlide] = useState(0);
	const slides = 4;

	const handlers = useSwipeable({
		onSwipedLeft: () => nextSlide(),
		onSwipedRight: () => prevSlide(),
		preventDefaultTouchmoveEvent: true,
		trackMouse: true, // This will allow dragging with the mouse as well
	});

	const nextSlide = () => setCurrentSlide((currentSlide + 1) % slides);
	const prevSlide = () => setCurrentSlide((currentSlide - 1 + slides) % slides);

	const getClassName = () =>
		`investment cambodia ${
			['left-side', 'center-side', 'right-side'][currentSlide] || ''
		}`;
	const progressBarLeft = `${(currentSlide / slides) * 100}%`;

	const getImageStyle = () =>
		[
			{ position: 'absolute', bottom: '-110px', right: '-95px' },
			{ position: 'absolute', bottom: '-110px', right: '-35px' },
			{ position: 'absolute', bottom: '-110px', right: '65px' },
			{ display: 'none' },
		][currentSlide];

	useEffect(() => {
		const handleMouseMove = (e) => {
			const bg = document.querySelector('.cambodia');
			const x = (e.clientX / window.innerWidth) * 100;
			const y = (e.clientY / window.innerHeight) * 100;
			bg.style.backgroundPosition = `${x}% ${y}%`;
		};

		document.addEventListener('mousemove', handleMouseMove);

		return () => {
			document.removeEventListener('mousemove', handleMouseMove);
		};
	}, []);

	return (
		<div className={getClassName()} >
			
			{window.innerWidth < 1024 ? (
				<div className='container'>
					<img
					 data-aos="fade-left"
				style={
					window.innerWidth > 1024
						? {
								position: 'absolute',
								bottom: '-30px',
								left: '0',
								transform: 'scaleX(-1)',
								zIndex: '9',
								animation: 'moveRight 2s infinite',
								width: '250px',
						  }
						: getImageStyle()
				}
				src='/mobile/2 cambodia/woman.png'
				alt=''
			/>
					<div className='cambodia_section' {...handlers}>
						{currentSlide === 0 && (
							<div>
								<div className='about_cambodia'>
									<h2 style={{ textTransform: 'uppercase' }} dangerouslySetInnerHTML={{ __html: config.Ru_Cambodia_header }}></h2>
									<p dangerouslySetInnerHTML={{ __html: config.Ru_Cambodia_subheader }}></p>
								</div>
								<div className='cambodia_texts'>
									<h2 dangerouslySetInnerHTML={{ __html: config.Ru_Cambodia_tip1 }}></h2>
									<h2 dangerouslySetInnerHTML={{ __html: config.Ru_Cambodia_tip2 }}></h2>
								</div>
								<img
									className='cambodia_img'
									src='/mobile/2 cambodia/infografic_1.png'
									alt=''
								/>
							</div>
						)}
						{currentSlide === 1 && (
							<div>
								<div className='cambodia_texts'>
									<h2 dangerouslySetInnerHTML={{ __html: config.Ru_Cambodia_tip3 }}></h2>
								</div>
								<img
									className='cambodia_img'
									src='/mobile/2 cambodia/infografic_2.png'
									alt=''
								/>
								<div className='cambodia_texts'>
									<h2 dangerouslySetInnerHTML={{ __html: config.Ru_Cambodia_tip4 }}></h2>
								</div>
							</div>
						)}
						{currentSlide === 2 && (
							<div>
								<div className='cambodia_texts'>
									<h2 dangerouslySetInnerHTML={{ __html: config.Ru_Cambodia_tip5 }}></h2>
								</div>
								<img
									className='cambodia_img'
									src='/mobile/2 cambodia/infografic_3.png'
									alt=''
								/>
								<div className='cambodia_texts'>
									<h2 dangerouslySetInnerHTML={{ __html: config.Ru_Cambodia_tip6 }}></h2>
								</div>
							</div>
						)}
						{currentSlide === 3 && (
							<div>
								<div className='cambodia_texts' style={{ width: '92%' }}>
									<h2 dangerouslySetInnerHTML={{ __html: config.Ru_Cambodia_tip7 }}></h2>
									<h2 dangerouslySetInnerHTML={{ __html: config.Ru_Cambodia_tip8 }}></h2>
									<h2 dangerouslySetInnerHTML={{ __html: config.Ru_Cambodia_tip9 }}></h2>
								</div>
								<div className='cambodia_last_texts'>
									<button onClick={scrollToContact} dangerouslySetInnerHTML={{ __html: config.Ru_Cambodia_submit }}></button>
									<p dangerouslySetInnerHTML={{ __html: config.Ru_Cambodia_submit_tip }}></p>
								</div>
							</div>
						)}
					</div>
					<ImageSlider
						slides={slides}
						currentSlide={currentSlide}
						prevSlide={prevSlide}
						nextSlide={nextSlide}
					/>
				</div>
			) : (
				<div className='container'>
				<div className='cambodia_section'>
				<img
				style={
					window.innerWidth > 1024
						? {
								left: '-100px',
								position: 'absolute',
								bottom: '-30px',
								transform: 'scaleX(-1)',
								zIndex: '9',
								animation: 'moveRight 2s infinite',
								width: '250px',
						  }
						: getImageStyle()
				}
				src='/mobile/2 cambodia/woman.png'
				alt=''
			/>
				<div >
						<h2  data-aos="fade-up" className='cambodia_title' dangerouslySetInnerHTML={{ __html: config.Ru_Cambodia_header }}></h2>
						<p data-aos="fade-up" className='cambodia_subtitle' dangerouslySetInnerHTML={{ __html: config.Ru_Cambodia_subheader }}></p>
					</div>
					<div className='cambodia_section-flex'>
						<div>
							<div className='cambodia_texts'>
								<h2 data-aos="fade-up" dangerouslySetInnerHTML={{ __html: config.Ru_Cambodia_tip1 }}></h2>
								<h2 data-aos="fade-up" dangerouslySetInnerHTML={{ __html: config.Ru_Cambodia_tip2 }}></h2>
							</div>
							<img
							data-aos="fade-up"
								className='cambodia_img'
								src='/mobile/2 cambodia/infografic_1.png'
								alt=''
							/>
						</div>
						<div>
							<div className='cambodia_texts'>
								<h2 data-aos="fade-up" dangerouslySetInnerHTML={{ __html: config.Ru_Cambodia_tip3 }}></h2>
							</div>
							<img
							data-aos="fade-up"
								className='cambodia_img'
								src='/mobile/2 cambodia/infografic_2.png'
								alt=''
							/>
							<div className='cambodia_texts'>
								<h2 data-aos="fade-up" dangerouslySetInnerHTML={{ __html: config.Ru_Cambodia_tip4 }}></h2>
							</div>
						</div>
						<div>
							<div className='cambodia_texts'>
								<h2 data-aos="fade-up" dangerouslySetInnerHTML={{ __html: config.Ru_Cambodia_tip5 }}></h2>
							</div>
							<img
							data-aos="fade-up"
								className='cambodia_img'
								src='/mobile/2 cambodia/infografic_3.png'
								alt=''
							/>
							<div className='cambodia_texts'>
								<h2 data-aos="fade-up" dangerouslySetInnerHTML={{ __html: config.Ru_Cambodia_tip6 }}></h2>
							</div>
						</div>
						<div>
							<div className='cambodia_texts' style={{ width: '92%' }}>
								<h2 data-aos="fade-up" dangerouslySetInnerHTML={{ __html: config.Ru_Cambodia_tip7 }}></h2>
								<h2 data-aos="fade-up" dangerouslySetInnerHTML={{ __html: config.Ru_Cambodia_tip8 }}></h2>
								<h2 data-aos="fade-up" dangerouslySetInnerHTML={{ __html: config.Ru_Cambodia_tip9 }}></h2>
							</div>
							<div className='cambodia_last_texts'>
								<MainButton dataAos="fade-up" text={config.Ru_Cambodia_submit} onClick={scrollToContact} />
								{/* <button onClick={scrollToContact} dangerouslySetInnerHTML={{ __html: config.Ru_Cambodia_submit }}></button> */}
								<p data-aos="fade-up" dangerouslySetInnerHTML={{ __html: config.Ru_Cambodia_submit_tip }}></p>
							</div>
						</div>
					</div>
					</div>
				</div>
			)}
		</div>
	);
};
