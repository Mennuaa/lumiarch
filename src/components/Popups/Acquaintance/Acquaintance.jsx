import React from 'react'
import './acquaintance.css'
export const Acquaintance = () => {
	return (
		<div
			className='popup'
			style={{
				background: "url('/images/Popup.png')",
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
			}}
		>
			<button className='popup_close'>
				<img src='mobile/close.png' alt='' />
			</button>
			<h2 className='popup_title'>давайте знакомиться!</h2>
			<p className='popup_subtitle'>
				Меня зовут Олег Морозов. Я помогаю русско-говорящим клиентам в LumiArch
				Global. Я более 10 лет живу в Азии, а также сам тут инвестирую и помогаю
				другим. Я буду рад ответить на ваши вопросы.
			</p>
			<div className='popup_avatar'>
				<img src='mobile/Avatar.png' alt='' />
				<div className='popup_avatar-info'>
					<h3>Олег Морозов</h3>
					<p>LumiArch Global</p>
				</div>
			</div>
			<p className='popup_subtitle'>
				Введите тут ваше имя, это вас ни к чему не обязывает
			</p>
			<form className='popup_form'>
				<input type='text' placeholder='введитет ваше имя' />
			</form>
			<div className='popup_stars'>
				<div className='star'>★</div>
				<div className='star'>☆</div>
				<div className='star'>☆</div>
				<div className='star'>☆</div>
				<div className='star'>☆</div>
			</div>
			<div className='one_more-star'>
				<h4 className='one_more-title'>
					Investor Journey начинается со знакомства!
				</h4>
				<p className='one_more-subtitle'>
					Представьтесь и получите 1 звезду. Мы предлагаем 15% скидку от
					застройщика, возможность перевода средств в условиях финансовых
					ограничений в России, расскажем всё про выгодные и безопасный
					инвестиции в Азии. Консультация бесплатная и ни к чему не обязывает.
				</p>
				<p className='one_more-subtitle1'>
					Ваш прогресс будет виден на самом верху экрана
				</p>
			</div>
		</div>
	)
}
