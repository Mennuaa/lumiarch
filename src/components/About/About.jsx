import React from 'react'
import './about.css'
// Assuming you're using react-toastify for toasts

const About = ({scrollToContact}) => {
	return (
		<div
			className='about'
			style={
				window.innerWidth > 768
					? {
							backgroundImage: `url('images/img-calculator.png')`,
							width: '100%',
							height: 'max-content',
							minHeight: '100vh',
							backgroundPosition: 'center',
							backgroundSize: 'cover',
					  }
					: {}
			}
		>
			<div className='about_center'>
				<div className='container'>
					<div className='about_desktop'>
						<div className='about_sector'>
							<h2 className=''>о нас</h2>
							<p>
								LumiArch — китайская инвестиционная компания, специализирующаяся
								на Камбодже. Наша команда опытных профессионалов занимается
								только топовыми проектами от лучших застройщиков ЮВА. Мы готовы
								предложить вам лучшую недвижимость на рынке и обеспечить
								выгодное вложение ваших инвестиций.
							</p>
							<a onClick={scrollToContact}>оставить заявку</a>
							<p className='about_sector-down'>И получить подробные материалы о налогах и пр.</p>
						</div>
						<div className='about_reviews'>
							<h2 className=''>отзывы</h2>
							<div className='review'>
								<div className='reviews_details'>
									<div className='reviews_details-up'>
										<h4>Лилиана Перова</h4>
										<p>23.04.24</p>
									</div>
									<p>
									Инвестиции в недвижимость - это один из наиболее надежных
										способов приумножения капитала. Недвижимость обладает
										стабильностью и высокой ликвидностью, что делает ее
										привлекательным объектом для{' '}
									</p>
								</div>
								<div className='reviews_details'>
									<div className='reviews_details-up'>
										<h4>Лилиана Перова</h4>
										<p>23.04.24</p>
									</div>
									<p>
										Инвестиции в недвижимость - это один из наиболее надежных
										способов приумножения капитала. Недвижимость обладает
										стабильностью и высокой ликвидностью, что делает ее
										привлекательным объектом для{' '}
									</p>
								</div>
								<div className='reviews_details'>
									<div className='reviews_details-up'>
										<h4>Лилиана Перова</h4>
										<p>23.04.24</p>
									</div>
									<p>
										Инвестиции в недвижимость - это один из наиболее надежных
										способов приумножения капитала. Недвижимость обладает
										стабильностью и высокой ликвидностью, что делает ее
										привлекательным объектом для{' '}
									</p>
								</div>
								<div className='reviews_details'>
									<div className='reviews_details-up'>
										<h4>Лилиана Перова</h4>
										<p>23.04.24</p>
									</div>
									<p>
									Инвестиции в недвижимость - это один из наиболее надежных
										способов приумножения капитала. Недвижимость обладает
										стабильностью и высокой ликвидностью, что делает ее
										привлекательным объектом для{' '}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='about_content'>
				<div
					className='container'
					style={{
						backgroundImage: `url('images/img-calculator.png')`,
						width: '100%',
						height: '334px',
						backgroundPosition: 'center',
						backgroundSize: 'cover',
					}}
				>
					<div className='container'>
						<button className='about_button' onClick={scrollToContact}>оставить заявку</button>
					</div>
				</div>
				<div className='container'>
					<div className='section'>
						<h2>О НАС</h2>
						<p>
							LumiArch — китайская инвестиционная компания, специализирующаяся
							на Камбодже. Наша команда опытных профессионалов занимается только
							топовыми проектами от лучших застройщиков ЮВА. Мы готовы
							предложить вам лучшую недвижимость на рынке и обеспечить выгодное
							вложение ваших инвестиций.
						</p>
					</div>
					<br />
					<div className='section'>
						<h2>отзывы</h2>
						<div className='reviews'>
							<h4>Лилиана Перова</h4>
							<p>
								Инвестиции в недвижимость - это один из наиболее надежных
								способов приумножения капитала. Недвижимость обладает
								стабильностью и высокой ликвидностью, что делает ее
								привлекательным объектом для инвесторов. Благодаря постоянному
								росту спроса на жилье и коммерческие площади, инвестиции в
								недвижимость обещают хорошие доходы в долгосрочной перспективе.
							</p>
							<p className='reviews_data'>23.04.24</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About
