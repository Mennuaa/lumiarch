import React from 'react'
import './popup.css'
const Popup = () => {
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
			<ul className='popup_list'>
				<li>Пример раскрывающегося на весь экран pop-up окна</li>
				<li>Закрывается нажатием на Х</li>
				<li> Поверх всех элементов</li>
				<li> Фон полупрозрачен</li>
			</ul>
		</div>
	)
}

export default Popup
