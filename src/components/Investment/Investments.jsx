import React, { useEffect, useState } from 'react'
import { useSwipeable } from 'react-swipeable'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ImageSlider from '../slider/Slider'
import './investment.css'
import axios from 'axios'

const initialSlides = [
	{
		first_text: `<span> Инвестиции </span > <br />в недвижимость Камбоджи "под ключ"`,
		second_text:
			'Мы предлагаем: гарантированный возврат инвестиций в недвижимость Пномпеня напрямую от застройщика.',
		background: '/images/bg1.webp',
		backgroundLarge: '/desktop/main/bg1.webp',
		icons: ['/images/icon1.svg', '/images/icon2.svg', '/images/icon3.svg'],
	},
	{
		first_text:
			' <span>Инвестируйте</span> в самую быстроразвивающуюся страну Юго-Восточной Азии',
		second_text:
			'№1 по росту ВВП, долларизированная экономика, выгодные условия налогообложения, гарантированный возврат инвестиций.',
		background: '/images/bg2.webp',
		backgroundLarge: '/desktop/main/bg2.webp',
		icons: ['/images/icon4.svg', '/images/icon5.svg', '/images/icon6.svg'],
	},
	{
		first_text: '<span>Бесплатно </span> открываем счет в банке, оформляем карту VISA',
		second_text: 'ROI проекта 20% годовых, первый взнос от 5%, беспроцентная рассрочка и возможность оплаты в криптовалюте USDT.',
		// list: [
		// 	'ROI проекта 20% годовых',
		// 	'Первый взнос 10%',
		// 	'Беспроцентная рассрочка',
		// 	'Возможность оплаты в криптовалюте USDT',
		// ],
		background: '/images/bg3.webp',
		backgroundLarge: '/desktop/main/bg3.webp',
	},
	{
		first_text:
			'<span> Расчет финансового плана </span> и бесплатная консультация от экспертов',
		second_text: 'Мы полностью сопровождаем сделку до и после покупки. Наша экспертиза на местном рынке - ваше преимущество!',
		background: '/images/bg4.webp',
		backgroundLarge: '/desktop/main/bg4.webp',
		// list: [
		// 	'Мы полностью сопровождаем сделку до и после покупки. Подробнее в разделе Investor Journey',
		// 	'Наша экспертиза на местном рынке - ваше преимущество',
		// ],
		clue: 'Заполните форму - получите 1 звезду. Мы предлагаем 15% скидку от застройщика, возможность перевода средств в условиях финансовых ограничений в России, расскажем всё про выгодные и безопасный инвестиции в Азии',
	},
	{
		first_text: '<span>Роскошные апартаменты </span> для тех, кто ценит жизнь в стиле люкс',
		second_text: '',
		background: '/images/bg5.webp',
		backgroundLarge: '/desktop/main/bg5.webp',
		list: [
			'ЖК сдается полностью готовым для жизни. Квартиры с эффектным дизайном “под ключ”.',
			'В комплексе есть все удобства: Infinity-бассейн на крыше, Sky-бар, тренажерный зал, спа-зона, детская зона, магазины, ресторан Мишлен и многое другое.',
		],
	},
	{
		first_text: '<span>Мы готовы рассказать </span> все подробности — налоги, риски, инсайты',
		done_text: `Ждите от нас звонка
			вы можете продолжить знакомиться с информацией.
			нажмите “вниз” или листайте дальше
			
			`,
		second_text: '',
		terms:
			'Нажимая на кнопку, вы принимаете политику конфиденциальности и даете согласие на обработку персональных данных',
		terms_done:
			'Если у вас появятся дополнительные вопросы, вы можете воспользоваться расширенной формой контактов.',
		background: '/images/bg6.webp',
		backgroundLarge: '/desktop/main/bg6.webp',
	},
]
export const Investments = ({
	sectionRefs,
	scrollToContact,
	onChangeSlide,
	quickMenu,
	setBurger,
	name, setName, phone, setPhone 
}) => {
	const handlers = useSwipeable({
		onSwipedLeft: () => nextSlide(),
		onSwipedRight: () => prevSlide(),
		preventDefaultTouchmoveEvent: true,
		trackMouse: true,
	})
	const [slides, setSlides] = useState(initialSlides)

	const [currentSlide, setCurrentSlide] = useState(0)

	const changeSlide = newSlide => {
		setCurrentSlide(newSlide)
		onChangeSlide(slides[newSlide])
	}
	const [formDone, setFormDone] = useState(false)

	const validateInputs = () => {
		let isValid = true

		// Simple validation for the name
		if (name.trim().length === 0) {
			toast.error('Пожалуйста, введите ваше имя')
			isValid = false
		}

		// Validation for the phone number
		const phoneRegex = /^\+?[0-9\s()-]+$/
		if (!phoneRegex.test(phone) || phone.length < 7) {
			toast.error(
				'Телефон должен содержать только цифры, пробелы, скобки или тире и быть не короче 7 символов'
			)
			isValid = false
		}

		return isValid
	}

	const handleSubmit = async (event) => {
		event.preventDefault()
		if (validateInputs()) {
			try {
				const response = await axios.post('http://landing.lumiarch.ru/api/short-form', {
					name: name,
					phone: phone,
				},
				{
					headers: {
						'Content-Type': 'application/json; charset=UTF-8'
					}
				})
	
				if (response.status === 200) {
					toast.success('Форма была успешно отправлена')
					const updatedSlides = slides.map((slide, index) => {
						if (index === currentSlide) {
							return { ...slide, first_text: slide.done_text || slide.first_text }
						}
						return slide
					})
					setFormDone(true)
					setSlides(updatedSlides)
				}
			} catch (error) {
				console.error('Ошибка при отправке формы', error)
				toast.error('Ошибка при отправке формы')
			}
		}
	}
	const nextSlide = () => changeSlide((currentSlide + 1) % slides.length)
	const prevSlide = () =>
		changeSlide((currentSlide - 1 + slides.length) % slides.length)

	const getFirstWordAndRest = text => {
		const firstWordEndIndex = text.indexOf(' ');
		const firstWord = text.slice(0, firstWordEndIndex);
		const restOfText = text.slice(firstWordEndIndex + 1);
		return { firstWord, restOfText };
	};
	
	const { firstWord, restOfText } = getFirstWordAndRest(
		initialSlides[currentSlide].first_text
	);
	
	const progressBarLeft = `${(currentSlide / slides.length) * 110}%`
	const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 764)
	const handleMenuClick = sectionIndex => {
		setBurger(false) // Close the burger menu
		sectionRefs[sectionIndex].current.scrollIntoView({ behavior: 'smooth' }) // Scroll to the section
	}
	useEffect(() => {
		const handleResize = () => {
			setIsLargeScreen(window.innerWidth > 764)
		}

		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	const backgroundImage = isLargeScreen
		? slides[currentSlide].backgroundLarge
		: slides[currentSlide].background;

		const renderHTML = text => {
			return { __html: text };
		};
		
	return (
		<div
			className='investment'
			style={{
				backgroundImage: `url(${backgroundImage})`,
				backgroundPosition: 'center',
				backgroundSize: 'cover',
				height: '100vh',
				backgroundRepeat: 'no-repeat',
			}}
		>
			<ToastContainer position='top-right' autoClose={5000} />

			<div className='container'>
				<div className='investment_section' {...handlers}>
					<div
						style={{
							display: 'flex',
							alignItems: 'flex-start',
							justifyContent: 'space-between',
							gap: '10px',
						}}
					>
						<div>
							{currentSlide === 2 && (
								<img
									className='visa'
									style={{ width: '30%', height: '30%' }}
									src='/images/icon/visa.svg'
									alt=''
								/>
							)}
							<div className='investment_section-text'>
								{formDone && currentSlide === 5 && (
									<>
									</>
									// <div className='clue_blue'>
									// 	<img src='/images/icon/Star 1.svg' alt='' />
									// 	<div className='clue_section'>
									// 		<p>
									// 			<strong>Ура! Поздравляем! </strong>
									// 			Вы получили 1 звезду. Первый шаг сделан! 15% скидка и
									// 			бесплатная персональная консультация ждут вас.
									// 			<br />
									// 			<br /> Мы рады, что вы не ушли и решили продолжить
									// 			вместе с нами своё инвестиционное путешествие (Investor
									// 			Journey, о нём будет рассказано ниже).
									// 		</p>
									// 	</div>
									// </div>
								)}
								{
									 <h2 dangerouslySetInnerHTML={{ __html: 	initialSlides[currentSlide].first_text }}></h2>
								
								
								}
								{currentSlide === 1 && (
									// <div className='second_icon'>
									// 	<img src='/images/icon/second_slide.svg' alt='Check Icon' />
									// </div>
									<></>
								)}
								<p>{slides[currentSlide].second_text}</p>
								{slides[currentSlide].list && (
									<div className='list'>
										{slides[currentSlide].list.map((item, index) => (
											<li key={index}>{item}</li>
										))}
									</div>
								)}
							</div>
							{currentSlide === 5 && (
								<div>
									<div className='inputs'>
										<div
											style={
												(formDone
													? {
															display: 'flex',
															alignItems: 'center',
															gap: '20px',
													  }
													: {
															display: 'grid',
													  },
												window.innerWidth < 1024
													? {
															display: 'grid',
															gap: '20px',
													  }
													: {
															display: 'flex',
															alignItems: 'center',
															gap: '20px',
													  })
											}
										>
											<input
												className='inputs_input'
												readOnly={formDone}
												type='text'
												placeholder='ваше имя'
												value={name || ''}
												onChange={e => setName(e.target.value)}
											/>
											<input
												className='inputs_input'
												readOnly={formDone}
												type='tel'
												placeholder='ваш телефон +7'
												value={phone}
												onChange={e => setPhone(e.target.value)}
											/>
											{!formDone && currentSlide === 5 && (
											<button className='inputs_input' onClick={handleSubmit}>Сохранить</button>
										)}
										</div>

										
										{!formDone ? (
											<p>{slides[currentSlide]?.terms}</p>
										) : (
											<p>{slides[currentSlide]?.terms_done}</p>
										)}
									</div>
									{formDone && (
										// <div className='clue'>
										// 	<img src='/images/icon/Star 3.svg' alt='' />
										// 	<div className='clue_section'>
										// 		{/* <h6>Подсказка</h6> */}
										// 		<p>
										// 			Чтобы получить еще одну звезду, долистайте страницу до
										// 			конца, изучите предложенные материалы и оставьте
										// 			электронный адрес, на который мы вышлем вам полезную
										// 			ознакомительную информацию о стране, налогах, инсайтах
										// 			и других подробностях региона, которые могут вам
										// 			понадобиться для принятия решения.
										// 			<a onClick={scrollToContact}>Оставить email сейчас</a>
										// 		</p>
										// 	</div>
										// </div>
										<></>
									)}
								</div>
							)}
							{/* {currentSlide === 3 && (
								<div className='clue'>
									<img src='/images/icon/Star 3.svg' alt='' />
									<div className='clue_section'>
										<h6>Подсказка</h6>
										<p>{slides[currentSlide].clue}</p>
									</div>
								</div>
							)} */}
						</div>
						{quickMenu && window.innerWidth > 1024 && (
							<div className='quick_menu'>
								<p>Быстрое меню</p>
								<ul>
									<li onClick={() => handleMenuClick(0)}>главная</li>
									<li onClick={() => handleMenuClick(1)}>О Камбодже</li>
									<li onClick={() => handleMenuClick(3)}>Wealth Mansion </li>
									<li onClick={() => handleMenuClick(2)}>Le Conde</li>
									<li onClick={() => handleMenuClick(7)}>видео</li>
									{/* <li onClick={() => handleMenuClick(4)}>карта</li> */}
									<li onClick={() => handleMenuClick(8)}>FAQ</li>
									<li onClick={() => handleMenuClick(9)}>О НАС</li>
								</ul>
								<a
									style={{ cursor: 'pointer' }}
									onClick={() => setBurger(true)}
									className=''
								>
									Ещё
								</a>
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
			</div>
		</div>
	)
}
