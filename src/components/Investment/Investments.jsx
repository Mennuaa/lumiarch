import React, { useState } from 'react'
import './investment.css'

export const Investments = ({ onChangeSlide }) => {
	const slides = [
		{
			first_text: "Инвестиции в недвижимость Камбоджи 'под ключ'",
			second_text:
				'Мы предлагаем: гарантированный возврат инвестиций в недвижимость Пном Пеня напрямую от застройщика',
			background: '/images/bg1.webp',
			icons: ['/images/icon1.svg', '/images/icon2.svg', '/images/icon3.svg'],
		},
		{
			first_text:
				'Инвестируйте в самую быстроразвивающуюся страну Юго-Восточной Азии',
			second_text:
				'№1 по росту ВВП, долларизированная экономика, выгодные условия налогообложения, гарантированный возврат инвестиций',
			background: '/images/bg2.webp',
			icons: ['/images/icon4.svg', '/images/icon5.svg', '/images/icon6.svg'],
		},
		{
			first_text: 'Бесплатно открываем счет в банке, оформляем карту VISA',
			second_text: '',
			list: [
				'ROI проекта 20% годовых',
				'Первый взнос 10%',
				'Беспроцентная рассрочка',
				'Возможность оплаты в криптовалюте USDT',
			],
			background: '/images/bg3.webp',
		},
		{
			first_text:
				'Расчет финансового плана и бесплатная консультация от экспертов',
			second_text: '',
			background: '/images/bg4.webp',
			list: [
				'Мы полностью сопровождаем сделку до и после покупки. Подробнее в разделе Investor Journey',
				'Наша экспертиза на местном рынке - ваше преимущество',
			],
			clue: 'Заполните форму - получите 1 звезду. Мы предлагаем 15% скидку от застройщика, возможность перевода средств в условиях финансовых ограничений в России, расскажем всё про выгодные и безопасный инвестиции в Азии',
		},
		{
			first_text: 'Роскошные апартаменты для тех, кто ценит жизнь в стиле люкс',
			second_text: '',
			background: '/images/bg5.webp',
			list: [
				'ЖК сдается полностью готовым для жизни. Квартиры с эффектным дизайном “под ключ”.',
				'В комплексе есть все удобства: Infinity-бассейн на крыше, Sky-бар, тренажерный зал, спа-зона, детская зона, магазины, ресторан Мишлен и многое другое.',
			],
		},
		{
			first_text:
				'Мы готовы рассказать все подробности — налоги, риски, инсайты',
			second_text: '',
			terms:
				'Нажимая на кнопку, вы принимаете политику конфиденциальности и даете согласие на обработку персональных данных',
			background: '/images/bg6.webp',
		},
	]

	const [currentSlide, setCurrentSlide] = useState(0)

	const changeSlide = newSlide => {
		setCurrentSlide(newSlide)
		onChangeSlide(slides[newSlide])
	}

	const nextSlide = () => changeSlide((currentSlide + 1) % slides.length)
	const prevSlide = () =>
		changeSlide((currentSlide - 1 + slides.length) % slides.length)

	const getFirstWordAndRest = text => {
		const [firstWord, ...restOfText] = text.trim().split(' ')
		return { firstWord, restOfText: restOfText.join(' ') }
	}

	const { firstWord, restOfText } = getFirstWordAndRest(
		slides[currentSlide].first_text
	)
	const progressBarLeft = `${(currentSlide / slides.length) * 110}%`

	return (
		<div
			className='investment'
			style={{
				backgroundImage: `url(${slides[currentSlide].background})`,
				backgroundPosition: 'center',
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
			}}
		>
			<div className='container'>
				<div className='investment_section'>
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
							<h2>
								<span> {firstWord} </span>
								{restOfText}
							</h2>
							{currentSlide === 1 && (
								<div className='second_icon'>
									<img src='/images/icon/second_slide.svg' alt='Check Icon' />
								</div>
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
							<div className='inputs'>
								<input type='text' placeholder='ваше имя' />
								<input type='tel' placeholder='ваш телефон +7' />
								<button>Отправить</button>
								<p>{slides[currentSlide].terms}</p>
							</div>
						)}
						{currentSlide === 3 && (
							<div className='clue'>
								<img src='/images/icon/Star 3.svg' alt='' />
								<div className='clue_section'>
									<h6>Подсказка</h6>
									<p>{slides[currentSlide].clue}</p>
								</div>
							</div>
						)}
					</div>
					<div className='slider'>
						<div className='slider_section'>
							<button className='slider_button' onClick={prevSlide}>
								<img src='/images/icon/prev.svg' alt='Previous' />
							</button>
							<div className='slider_slide'>
								<div className='slider_scroll-amount'>{`0${currentSlide + 1}/0${
									slides.length
								}`}</div>
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
					</div>
				</div>
			</div>
		</div>
	)
}
