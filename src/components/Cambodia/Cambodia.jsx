import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import ImageSlider from '../slider/Slider';
import './cambodia.css';

export const Cambodia = ({ scrollToContact }) => {
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
		<div className={getClassName()}>
			<img
				style={
					window.innerWidth > 1024
						? {
								position: 'absolute',
								bottom: '-110px',
								left: '0',
								transform: 'scaleX(-1)',
								zIndex: '99',
								animation: 'moveRight 2s infinite',
						  }
						: getImageStyle()
				}
				src='/mobile/2 cambodia/woman.png'
				alt=''
			/>
			{window.innerWidth < 1024 ? (
				<div className='container'>
					<div className='cambodia_section' {...handlers}>
						{currentSlide === 0 && (
							<div>
								<div className='about_cambodia'>
									<h2 style={{ textTransform: 'uppercase' }}>О Камбодже</h2>
									<p>
										Сегодня Камбоджа — это не только туристический рай, куда
										приезжают ради красивой тропической природы и древних
										храмов, главным из которых является знаменитый Ангкор-Ват,
										но и перспективный рынок для инвестиций.
									</p>
								</div>
								<div className='cambodia_texts'>
									<h2>
										Камбоджа — самая быстро развивающайя экономика в Азии <br />
										<span>(№1 по росту ВВП)</span>
									</h2>
									<h2>
										Туристический бум: <br />{' '}
										<span>1057% рост в 2022 году</span>
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
											Население столицы растёт! 400 000 экспатов в столице (20%
											от всего населения столицы) каждый день ищут квартиры в
											аренду на долгий срок. Спрос на квартиры очень высок!
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
											Стоимость недвижимости в Пном Пене сейчас значительно
											ниже, чем в других столицах Юго-Восточной Азии
										</span>
									</h2>
								</div>
								<img
									className='cambodia_img'
									src='/mobile/2 cambodia/infografic_3.png'
									alt=''
								/>
								<div className='cambodia_texts'>
									<h2>
										Иностранцы могут купить квартиру в полную собственность
									</h2>
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
										<span>Камбоджа</span> — это инвестиционная
										привлекательность,
										<span>
											{' '}
											магнит для туристов, новые рынки и возможности для
											выгодного вложения средств!
										</span>
									</h2>
								</div>
								<div className='cambodia_last_texts'>
									<button onClick={scrollToContact}>оставить заявку</button>
									<p>И получить подробные материалы о налогах и пр.</p>
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
					<div>
						<h2 className='cambodia_title'>О Камбодже</h2>
						<p className='cambodia_subtitle'>
							Сегодня Камбоджа — это не только туристический рай, куда приезжают
							ради красивой тропической природы и древних храмов, главным из
							которых является знаменитый Ангкор-Ват, но и перспективный рынок
							для инвестиций.
						</p>
					</div>
					<div className='cambodia_section-flex'>
						<div>
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
					</div>
				</div>
			)}
		</div>
	);
};
