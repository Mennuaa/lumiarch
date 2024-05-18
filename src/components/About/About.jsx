import React from 'react'
import './about.css'
const About = () => {
	return (
		<div>
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
			<div
				className='form__section'
				style={{
					background: "url('images/bg-form.png')",
					width: '100%',
					height: 'max-content',
					backgroundPosition: 'center',
					backgroundSize: 'cover',
				}}
			>
				<div className='container'>
					<h2>
						<div>скорее</div> Напишите нам!
					</h2>
					<form>
						<input type='text' placeholder='имя и фамилия' />
						<input type='email' placeholder='email' />
						<input type='tel' placeholder='ваш телефон' />
						<textarea placeholder='ваши вопросы'></textarea>
						<button>оТПРАВИТЬ</button>
						<p>
							Нажимая на кнопку, вы принимаете политику конфиденциальности и
							даете согласие на обработку персональных данных 
						</p>
					</form>
				</div>
			</div>
		</div>
	)
}

export default About
