import React, { useState } from 'react'
import './cambodia.css'

export const Cambodia = () => {
	const [currentSlide, setCurrentSlide] = useState(0)
	const slides = 4

	const nextSlide = () => setCurrentSlide((currentSlide + 1) % slides)
	const prevSlide = () => setCurrentSlide((currentSlide - 1 + slides) % slides)

	const getClassName = () =>
		`investment cambodia ${
			['left-side', 'center-side', 'right-side'][currentSlide] || ''
		}`

	const getImageStyle = () =>
		[
			{ position: 'absolute', bottom: '-110px', right: '-95px' },
			{ position: 'absolute', bottom: '-110px', right: '-35px' },
			{ position: 'absolute', bottom: '-110px', right: '65px' },
			{ display: 'none' },
		][currentSlide]

	return (
		<div
			style={{ backgroundImage: `url('mobile/2 cambodia/bg-scroll.webp')` }}
			className={getClassName()}
		>
			<img style={getImageStyle()} src='/mobile/2 cambodia/woman.png' alt='' />
			<div className='container'>
				<div className='cambodia_section'>
					{currentSlide === 0 && (
						<div>
							<div className='about_cambodia'>
								<h2>О Камбодже</h2>
								<p>
									Сегодня Камбоджа — это не только туристический рай, куда
									приезжают ради красивой тропической природы и древних храмов,
									главным из которых является знаменитый Ангкор-Ват, но и
									перспективный рынок для инвестиций.
								</p>
							</div>
							<div className='cambodia_texts'>
								<h2>
									Камбоджа — самая быстро развивающайя экономика в Азии <br />
									<span>(№1 по росту ВВП)</span>
								</h2>
								<h2>
									Туристический бум: <br /> <span>1057% рост в 2022 году</span>
								</h2>
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
								<h2>
									Инвестируйте в бум спроса на недвижимость в Пном Пене:
									<br />
									<br />
									<span>
										Население столицы растёт! 400 000 экспатов в столице (20% от
										всего населения столицы) каждый день ищут квартиры в аренду
										на долгий срок. Спрос на квартиры очень высок!
									</span>
								</h2>
							</div>
							<img
								className='cambodia_img'
								src='/mobile/2 cambodia/infografic_2.png'
								alt=''
							/>
							<div className='cambodia_texts'>
								<h2>
									Возможность купить квартиру за криптовалюту. Низкие налоги
								</h2>
							</div>
						</div>
					)}
					{currentSlide === 2 && (
						<div>
							<div className='cambodia_texts'>
								<h2>
									Эта страна привлекает доступными ценами и простотой
									инвестирования:
									<br />
									<br />
									<span>
										Стоимость недвижимости в Пном Пене сейчас значительно ниже,
										чем в других столицах Юго-Восточной Азии
									</span>
								</h2>
							</div>
							<img
								className='cambodia_img'
								src='/mobile/2 cambodia/infografic_3.png'
								alt=''
							/>
							<div className='cambodia_texts'>
								<h2>Иностранцы могут купить квартиру в полную собственность</h2>
							</div>
						</div>
					)}
					{currentSlide === 3 && (
						<div>
							<div className='cambodia_texts' style={{ width: '92%' }}>
								<h2>
									Свободное обращение доллара:{' '}
									<span>
										никаких ограничений на валютные операции. Камбоджийский
										риель — одна из самых стабильных валют в регионе
									</span>
								</h2>
								<h2>
									Дружелюбное{' '}
									<span>
										отношение к россиянам: неподконтрольность движения средств
										для западных стран
									</span>
								</h2>
								<h2>
									<span>Камбоджа</span> — это инвестиционная привлекательность,
									<span>
										{' '}
										магнит для туристов, новые рынки и возможности для выгодного
										вложения средств!
									</span>
								</h2>
							</div>
							<div className='cambodia_last_texts'>
								<button>оставить заявку</button>
								<p>И получить подробные материалы о налогах и пр.</p>
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
							<div className='slider_scroll-amount'>
								{`0${currentSlide + 1}/0${slides}`}
							</div>
							<div className='slider_scroll-progres'>
								<div
									className='slider_scroll-progres_bar'
									style={{
										left: `${(currentSlide / slides) * 110}%`,
										width: '30%',
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
	)
}
