import React, { useState, useEffect, useContext } from 'react';
import Lightbox from 'react-awesome-lightbox';
import 'react-awesome-lightbox/build/style.css';
import { useSwipeable } from 'react-swipeable';
import TextSlider from '../slider/TextSlider';
import './space.css';
import { ConfigContext } from '../../App';
import MainButton from '../buttons/MainButton';
import AOS from 'aos';
import 'aos/dist/aos.css';
export const Space = ({ onChangeSlide, scrollToContact }) => {
	const config = useContext(ConfigContext);

	const imageDetails = [
		{
			src: 'mobile/wm_amenities_arch/wm_public_1_tumb.webp',
			title: '01',
			description: config.Ru_wm_amenities_01,
		},
		{
			src: 'mobile/wm_amenities_arch/wm_public_2_tumb.webp',
			title: '02',
			description: config.Ru_wm_amenities_02,
		},
		{
			src: 'mobile/wm_amenities_arch/wm_public_3_tumb.webp',
			title: '03',
			description: config.Ru_wm_amenities_03,
		},
		{
			src: 'mobile/wm_amenities_arch/wm_public_4_tumb.webp',
			title: '04',
			description: config.Ru_wm_amenities_04,
		},
		{
			src: 'mobile/wm_amenities_arch/wm_public_5_tumb.webp',
			title: '05',
			description: config.Ru_wm_amenities_05,
		},
		{
			src: 'mobile/wm_amenities_arch/wm_public_6_tumb.webp',
			title: '06',
			description: config.Ru_wm_amenities_06,
		},
	];
	const images = [
		'mobile/wm_amenities_arch/wm_public_1_tumb.webp',
		'mobile/wm_amenities_arch/wm_public_2_tumb.webp',
		'mobile/wm_amenities_arch/wm_public_3_tumb.webp',
		'mobile/wm_amenities_arch/wm_public_4_tumb.webp',
		'mobile/wm_amenities_arch/wm_public_5_tumb.webp',
		'mobile/wm_amenities_arch/wm_public_6_tumb.webp',
	];
	
	const imagesWithoutThumb = images.map((img) => img.replace('_tumb', ''));
	const imageDetails2 = [
		{
			src: 'leconde/amenities/leconde_public_1_tumb.webp',
			title: '01',
			description: config.Ru_leconde_amenities_01,
		},
		{
			src: 'leconde/amenities/leconde_public_2_tumb.webp',
			title: '02',
			description: config.Ru_leconde_amenities_02,
		},
		{
			src: 'leconde/amenities/leconde_public_3_tumb.webp',
			title: '03',
			description: config.Ru_leconde_amenities_03,
		},
		{
			src: 'leconde/amenities/leconde_public_4_tumb.webp',
			title: '04',
			description: config.Ru_leconde_amenities_04,
		},
		{
			src: 'leconde/amenities/leconde_public_5_tumb.webp',
			title: '05',
			description: config.Ru_leconde_amenities_05,
		},
		{
			src: 'leconde/amenities/leconde_public_6_tumb.webp',
			title: '06',
			description: config.Ru_leconde_amenities_06,
		},
	];
	const images2 = [
		'leconde/amenities/leconde_public_1_tumb.webp',
		'leconde/amenities/leconde_public_2_tumb.webp',
		'leconde/amenities/leconde_public_3_tumb.webp',
		'leconde/amenities/leconde_public_4_tumb.webp',
		'leconde/amenities/leconde_public_5_tumb.webp',
		'leconde/amenities/leconde_public_6_tumb.webp',
	];
	
	const imagesWithoutThumb2 = images2.map((img) => img.replace('_tumb', ''));
	
	const [currentSlide, setCurrentSlide] = useState(0);

	const [photoIndex, setPhotoIndex] = useState(null);
	const [isOpen, setIsOpen] = useState(false);
	const [photoIndex2, setPhotoIndex2] = useState(null);
	const [isOpen2, setIsOpen2] = useState(false);

	const slides = [
		{
			label: config.Ru_objects_arrow1,
			first_text: "Инвестиции в недвижимость Камбоджи 'под ключ'",
			second_text:
				'Мы предлагаем: гарантированный возврат инвестиций в недвижимость Пном Пеня напрямую от застройщика',
			background: '#4A4A4A',
			backgroundLarge: 'mobile/wealth/main-bg-descktop.jpg',
			icons: ['/images/icon1.svg', '/images/icon2.svg', '/images/icon3.svg'],
		},
		{
			label: config.Ru_objects_arrow2,
			first_text:
				'Инвестируйте в самую быстроразвивающуюся страну Юго-Восточной Азии',
			second_text:
				'№1 по росту ВВП, долларизированная экономика, выгодные условия налогообложения, гарантированный возврат инвестиций',
			background: '#2566AF',
			backgroundLarge: 'leconde/leconde_back4.webp',
			icons: ['/images/icon4.svg', '/images/icon5.svg', '/images/icon6.svg'],
		},
	];

	useEffect(() => {
		AOS.init({
		  duration: 1200, 
		});
	  }, []);
	
	const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 992);

	useEffect(() => {
		const handleResize = () => {
			setIsLargeScreen(window.innerWidth > 992);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

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

	const handlers = useSwipeable({
		onSwipedLeft: () => nextSlide(),
		onSwipedRight: () => prevSlide(),
		preventDefaultTouchmoveEvent: true,
		trackMouse: true, // This will allow dragging with the mouse as well
	});

	function getFirstWordAndRest(text) {
		const trimmedText = text.trim();
		const words = trimmedText.split(' ');
		const firstWord = words[0];
		const restOfText = words.slice(1).join(' ');
		return { firstWord, restOfText };
	}

	const { firstWord, restOfText } = getFirstWordAndRest(slides[currentSlide].first_text);

	const progressBarLeft = `${(currentSlide / slides.length) * 100}%`;

	const lecondeImages = [
		'leconde/archs/leconde_arch_1_tumb.webp',
		'leconde/archs/leconde_arch_2_tumb.webp',
		'leconde/archs/leconde_arch_3_tumb.webp',
		'leconde/archs/leconde_arch_4_tumb.webp',
		'leconde/archs/leconde_arch_5_tumb.webp',
		'leconde/archs/leconde_arch_6_tumb.webp',
		'leconde/archs/leconde_arch_7_tumb.webp',
	];

	const lecondeImagesWithoutThumb = lecondeImages.map((img) => img.replace('_tumb', ''));
	const [isLecondeOpen, setIsLecondeOpen] = useState(false);
	const [lecondeIndex, setLecondeIndex] = useState(0);

	const wealthImages = [
		'mobile/wm_amenities_arch/wm_arch_1_tumb.webp',
		'mobile/wm_amenities_arch/wm_arch_2_tumb.webp',
		'mobile/wm_amenities_arch/wm_arch_5_tumb.webp',
		'mobile/wm_amenities_arch/wm_arch_6_tumb.webp',
		'mobile/wm_amenities_arch/wm_arch_7_tumb.webp',
	];

	const wealthImagesWithoutThumb = wealthImages.map((img) => img.replace('_tumb', ''));
	const [isWealthOpen, setIsWealthOpen] = useState(false);
	const [WealthIndex, setWealthIndex] = useState(0);
	const backgroundImage = isLargeScreen ? slides[currentSlide].backgroundLarge : slides[currentSlide].background;

	return (
		<div
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
			<div className='investment' style={window.innerWidth > 768 ? { display: 'block' } : { display: 'none' }}>
				<div className='container'>
					<div className='space_section object_section' {...handlers}>
						{currentSlide === 0 && (
							<div  className='space_sector'>
								<div data-aos="fade-right" className='space_sector-left'>
									<h2 style={{ fontWeight: '300' }} dangerouslySetInnerHTML={{ __html: config.Ru_wm_amenities_header }}></h2>
									<p dangerouslySetInnerHTML={{ __html: config.Ru_wm_arch }}></p>
									<div className='space_sector-img'>
										{wealthImages.map((image, index) => (
											<img
												key={index}
												src={image}
												alt=''
												onClick={() => {
													setWealthIndex(index);
													setIsWealthOpen(true);
													console.log('WealthIndex', WealthIndex);
												}}
												style={{ cursor: 'pointer' }}
											/>
										))}
									</div>
								</div>
								<div data-aos="fade-left" className='space_sector-rigth'>
									<h4 dangerouslySetInnerHTML={{ __html: config.Ru_wm_amenities_subheader }}></h4>
									<p dangerouslySetInnerHTML={{ __html: config.Ru_wm_amenities }}></p>
									<div className='blocks'>
										{imageDetails.map((image, index) => (
											<div className='block' key={index}>
												<img
													src={image.src}
													alt=''
													onClick={() => {
														setPhotoIndex(index);
														setIsOpen(true);
													}}
													style={{ cursor: 'pointer', height: '100%', width: '170px' }}
												/>
												<h2>{image.title}</h2>
												<p>{image.description}</p>
											</div>
										))}
									</div>
									<div className='space_sector-btn'>
										<MainButton text={config.Ru_wm_submit} onClick={scrollToContact} />
										{/* <a onClick={scrollToContact} dangerouslySetInnerHTML={{ __html: config.Ru_wm_submit }}></a> */}
										<p dangerouslySetInnerHTML={{ __html: config.Ru_wm_submit_tip }}></p>
									</div>
								</div>
							</div>
						)}
						{currentSlide === 1 && (
							<div className='space_sector'>
								<div data-aos="fade-right" className='space_sector-left'>
									<h2 dangerouslySetInnerHTML={{ __html: config.Ru_leconde_amenities_header }}></h2>
									<p dangerouslySetInnerHTML={{ __html: config.Ru_leconde_amenities }}></p>
									<div className='space_sector-img'>
										{lecondeImages.map((image, index) => (
											<img
												key={index}
												src={image}
												alt=''
												onClick={() => {
													setLecondeIndex(index);
													setIsLecondeOpen(true);
												}}
												style={{ cursor: 'pointer', height: '100%' }}
											/>
										))}
									</div>
								</div>
								<div data-aos="fade-left" className='space_sector-rigth'>
									<h4 dangerouslySetInnerHTML={{ __html: config.Ru_leconde_amenities_subheader }}></h4>
									<p dangerouslySetInnerHTML={{ __html: config.Ru_leconde_amenities }}></p>
									<div className='blocks'>
										{imageDetails2.map((image, index) => (
											<div className='block' key={index}>
												<img
													src={image.src}
													alt=''
													onClick={() => {
														setPhotoIndex2(index);
														setIsOpen2(true);
													}}
													style={{ cursor: 'pointer', height: '100%', width: '170px' }}
												/>
												<h2>{image.title}</h2>
												<p>{image.description}</p>
											</div>
										))}
									</div>
									<div className='space_sector-btn'>
									<MainButton text={config.Ru_wm_submit} onClick={scrollToContact} />
										
										<p dangerouslySetInnerHTML={{ __html: config.Ru_leconde_submit_tip }}></p>
									</div>
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
					
				</div>
			</div>
			<div style={window.innerWidth > 768 ? { display: 'none' } : { display: 'block' }}>
				<div className='container'>
					<div className='space_section' {...handlers}>
						{currentSlide === 0 && (
							<div className='space'>
								<h2 dangerouslySetInnerHTML={{ __html: config.Ru_wm_amenities_header }}></h2>
								<h3 dangerouslySetInnerHTML={{ __html: config.Ru_wm_amenities_subheader }}></h3>
								<p className='space_text' dangerouslySetInnerHTML={{ __html: config.Ru_wm_arch }}></p>
								<div className='blocks'>
									{imageDetails.map((image, index) => (
										<div className='block' key={index}>
											<img
												src={image.src}
												alt=''
												onClick={() => {
													setPhotoIndex(index);
													setIsOpen(true);
													console.log('image');
												}}
												style={{ cursor: 'pointer', height: '100%' }}
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
								<h2 style={{ fontWeight: '300' }} dangerouslySetInnerHTML={{ __html: config.Ru_leconde_amenities_header }}></h2>
								<h3 dangerouslySetInnerHTML={{ __html: config.Ru_leconde_amenities_subheader }}></h3>
								<p className='space_text' dangerouslySetInnerHTML={{ __html: config.Ru_leconde_arch }}></p>
								<div className='blocks'>
									{imageDetails2.map((image, index) => (
										<div className='block' key={index}>
											<img
												src={image.src}
												alt=''
												onClick={() => {
													setPhotoIndex2(index);
													setIsOpen2(true);
												}}
												style={{ cursor: 'pointer', height: '100%' }}
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
					images={imagesWithoutThumb.map((img) => ({ url: img }))}
					startIndex={photoIndex}
					onClose={() => setIsOpen(false)}
					toolbarButtons={[]}
				/>
			)}
			{isOpen2 && (
				<Lightbox
					images={imagesWithoutThumb2.map((img) => ({ url: img }))}
					startIndex={photoIndex2}
					onClose={() => setIsOpen2(false)}
					toolbarButtons={[]}
				/>
			)}
			{isLecondeOpen && (
				<Lightbox
					images={lecondeImagesWithoutThumb.map((img) => ({ url: img }))}
					startIndex={lecondeIndex}
					onClose={() => setIsLecondeOpen(false)}
					toolbarButtons={[]}
				/>
			)}
			{isWealthOpen && (
				<Lightbox
					images={wealthImagesWithoutThumb.map((img) => ({ url: img }))}
					startIndex={WealthIndex}
					onClose={() => setIsWealthOpen(false)}
					toolbarButtons={[]}
				/>
			)}
		</div>
	);
};
