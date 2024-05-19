import React, { useState } from 'react'
import './about.css'
 // Assuming you're using react-toastify for toasts

const About = () => {

	return (
		<div className='about'>
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
					<button className='about_button'>оставить заявку</button>
				</div>
			</div>
			<div className='container'>
				<div className='section'>
					<h2>О НАС</h2>
					<p>
						LumiArch — китайская инвестиционная компания, специализирующаяся на
						Камбодже. Наша команда опытных профессионалов занимается только
						топовыми проектами от лучших застройщиков ЮВА. Мы готовы предложить
						вам лучшую недвижимость на рынке и обеспечить выгодное вложение
						ваших инвестиций.
					</p>
				</div>
				<br />
				<div className='section'>
					<h2>отзывы</h2>
					<div className='reviews'>
						<h4>Лилиана Перова</h4>
						<p>
							Инвестиции в недвижимость - это один из наиболее надежных способов
							приумножения капитала. Недвижимость обладает стабильностью и
							высокой ликвидностью, что делает ее привлекательным объектом для
							инвесторов. Благодаря постоянному росту спроса на жилье и
							коммерческие площади, инвестиции в недвижимость обещают хорошие
							доходы в долгосрочной перспективе.
						</p>
						<p className='reviews_data'>23.04.24</p>
					</div>
				</div>
			</div>
			
		</div>
	)
}

export default About
