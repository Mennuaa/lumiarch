import React, { useEffect, useState } from 'react'
import TextSlider from '../slider/TextSlider'
import './desk.css'
import Lightbox from 'react-awesome-lightbox'
import 'react-awesome-lightbox/build/style.css'

export const Desc = ({ onChangeSlide }) => {
	const slides = [
		{
			label: 'Wealth Mansion',
			first_text: "Инвестиции в недвижимость Камбоджи 'под ключ'",
			second_text:
				'Мы предлагаем: гарантированный возврат инвестиций в недвижимость Пном Пеня напрямую от застройщика',
			background: '#4A4A4A',
			backgroundLarge: '/desktop/backs/bg-wm2.webp',
			icons: ['/images/icon1.svg', '/images/icon2.svg', '/images/icon3.svg'],
		},
		{
			label: 'Le Conde BKK',
			first_text:
				'Инвестируйте в самую быстроразвивающуюся страну Юго-Восточной Азии',
			second_text:
				'№1 по росту ВВП, долларизированная экономика, выгодные условия налогообложения, гарантированный возврат инвестиций',
			backgroundLarge: '/leconde/leconde_back_2.webp',
			background: '#2566AF',
			icons: ['/images/icon4.svg', '/images/icon5.svg', '/images/icon6.svg'],
		},
	]

	const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 992)
	const [currentSlide, setCurrentSlide] = useState(0) // Assuming you have a way to set the current slide

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

	const wealthPhotos = [
		'desktop/wm_2/wm_gym_tumb.webp',
		'desktop/wm_2/wm_infinitypool_tumb.webp',
		'desktop/wm_2/wm_michelin_tumb.webp',
		'desktop/wm_2/wm_swimiming_sofa_tumb.webp',
	]
	const wealthPhotosWithoutThumb = wealthPhotos.map(img => img.replace('_tumb', ''))
	const [isWealthOpen, setIsWealthOpen] = useState(false)
	const [wealthIndex, setWealthIndex] = useState(0)
	const lecondePhotos = [
		'desktop/leconde_about/leconde_building_tumb.webp',
		'desktop/leconde_about/leconde_city_tumb.webp',
		'desktop/leconde_about/leconde_stairs_tumb.webp',
	]
	const lecondePhotosWithoutThumb = lecondePhotos.map(img => img.replace('_tumb', ''))
	const [isLecondeOpen, setIsLecondOpen] = useState(false)
	const [lecondeIndex, setLecondIndex] = useState(0)

	const progressBarLeft = `${(currentSlide / slides.length) * 100}%`
	console.log(backgroundImage)
	return (
		<div
			className='investments desc'
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
			<div className='container'>
				<div className='object_section'>
					{!isLargeScreen ? (
						<>
							{currentSlide === 0 && (
								<div className='wealth'>
									<h2 style={{ fontWeight: '300' }}>Wealth Mansion</h2>
									<p>
										Представляем вашему вниманию <span> Wealth Mansion </span> —
										роскошный жилой комплекс бизнес-класса в центре
										камбоджийской столицы Пномпень. Срок сдачи - второй квартал
										2024. Все квартиры с дизайнерской отделкой и готовы к
										заезду.
									</p>
									<img
										style={{ margin: '20px 0' }}
										src='mobile/wealth/wm_pool.webp'
										alt='Wealth Mansion Pool'
									/>
									<p>
										<span> Wealth Mansion </span> — проект от крупнейшего
										конгломерата из Китая, компании CSCEC. За годы работы эта
										компания успела построить Международный коммерческий центр в
										Гонконге (самый высокий небоскреб в городе), мечеть Джамаа
										эль-Джазаир в Алжире (третью по величине мечеть в мире
										стоимостью 1,5 млрд. долларов США), новую столицу Египта и
										Гигафабрику Tesla в Шанхае.
									</p>
								</div>
							)}
							{currentSlide === 1 && (
								<div className='wealth'>
									<h2 style={{ fontWeight: '300' }}>Le Conde BKK1</h2>
									<p>
									Le Conde Bkk1 — это ЖК премиум-класса по цене бизнес-класса в самом центре столицы Камбоджи. Инвестирование в этот объект дает гарантированный доход от аренды и высокий потенциал рентабельности инвестиций: вы получите до 10% годового дохода от своих вложений.


									</p>
									<img
										style={{ margin: '20px 0' }}
										src='mobile/wealth/Infinity pool (1) 1.jpg'
										alt='Infinity Pool'
									/>
									<p>
									Комплекс от надежного застройщика может похвастаться идеальным расположением в туристическом районе Bkk1 недалеко от Королевского дворца и Серебряной пагоды (более 25% арендаторов ищут жилье именно здесь). Это лучшие апартаменты в городе для проживания с семьей и первый проект в Камбодже, полностью оборудованный системой «Умный дом» от Xiaomi. Послом бренда Le Conde выступает Ее Королевское Высочество, принцесса Norodom Pongsoriya.
									</p>
								</div>
							)}
						</>
					) : (
						<>
							{currentSlide === 0 && (
								<div className='wealth'>
									<h2 style={{ fontWeight: '300' }}>Wealth Mansion</h2>
									<p style={{ marginBottom: '30px' }}>
										Представляем вашему вниманию <span> Wealth Mansion </span> —
										роскошный жилой комплекс бизнес-класса в центре
										камбоджийской столицы Пномпень. Срок сдачи - второй квартал
										2024. Все квартиры с дизайнерской отделкой и готовы к
										заезду.
									</p>
									<div className='large_wealth'>
										<p >
											<span> Wealth Mansion </span> — проект от крупнейшего
											конгломерата из Китая, компании CSCEC. За годы работы эта
											компания успела построить Международный коммерческий центр
											в Гонконге (самый высокий небоскреб в городе), мечеть
											Джамаа эль-Джазаир в Алжире (третью по величине мечеть в
											мире стоимостью 1,5 млрд. долларов США), новую столицу
											Египта и Гигафабрику Tesla в Шанхае.
										</p>
										{/* <img
											src='mobile/wealth/Infinity pool (1) 1.jpg'
											alt='Infinity Pool'
										/> */}
									</div>
									<div className='large_wealth' style={{ marginTop: '30px' }}>
									{wealthPhotos.map((image, index) => (
												<img
													key={index}
													src={image}
													alt=''
													onClick={() => {
														setWealthIndex(index)
														setIsWealthOpen(true)
													}}
													style={{ cursor: 'pointer' ,height: '100%'}}
												/>
										))}
										{/* <img
											src='mobile/wealth/Infinity pool (1) 1.jpg'
											alt='Infinity Pool'
										/>
										<img
											src='mobile/wealth/Infinity pool (1) 1.jpg'
											alt='Infinity Pool'
										/>

										<img
											src='mobile/wealth/Infinity pool (1) 1.jpg'
											alt='Infinity Pool'
										/>
										<img
											src='mobile/wealth/Infinity pool (1) 1.jpg'
											alt='Infinity Pool'
										/> */}
									</div>
								</div>
							)}
							{currentSlide === 1 && (
								<div className='wealth'>
									<h2 style={{ fontWeight: '300' }}>Le Conde BKK1</h2>
									<p style={{ marginBottom: '30px' }}>
									<span> Le Conde Bkk1 </span> — это ЖК премиум-класса по цене бизнес-класса в самом центре столицы Камбоджи. Инвестирование в этот объект дает гарантированный доход от аренды и высокий потенциал рентабельности инвестиций: вы получите до 10% годового дохода от своих вложений.

									</p>
									<div className=''>
										<p>
										Комплекс от надежного застройщика может похвастаться идеальным расположением в туристическом районе Bkk1 недалеко от Королевского дворца и Серебряной пагоды (более 25% арендаторов ищут жилье именно здесь). Это лучшие апартаменты в городе для проживания с семьей и первый проект в Камбодже, полностью оборудованный системой «Умный дом» от Xiaomi. Послом бренда Le Conde выступает Ее Королевское Высочество, принцесса Norodom Pongsoriya.
										</p>
										{/* <img
											src='mobile/wealth/Infinity pool (1) 1.jpg'
											alt='Infinity Pool'
										/> */}
									</div>
									<div className='large_wealth'>
									{lecondePhotos.map((image, index) => (
												<img
													key={index}
													src={image}
													alt=''
													onClick={() => {
														setLecondIndex(index)
														setIsLecondOpen(true)
													}}
													style={{ cursor: 'pointer' ,height: '100%'}}
												/>
										))}
									</div>
								</div>
							)}
						</>
					)}
				</div>

				{isLecondeOpen && (
						<Lightbox
							images={lecondePhotosWithoutThumb.map(img => ({ url: img }))}
							startIndex={lecondeIndex}
							onClose={() => setIsLecondOpen(false)}
							toolbarButtons={[]}
						/>
					)}
					{isWealthOpen && (
						<Lightbox
							images={wealthPhotosWithoutThumb.map(img => ({ url: img }))}
							startIndex={wealthIndex}
							onClose={() => setIsWealthOpen(false)}
							toolbarButtons={[]}
						/>
					)}
				<TextSlider
					slides={slides}
					currentSlide={currentSlide}
					prevSlide={prevSlide}
					nextSlide={nextSlide}
				/>
			</div>
		</div>
	)
}
