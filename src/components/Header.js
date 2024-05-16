import React, { useState } from 'react'
import './Header.css'
export default function Header() {
	const [burger, setBurger] = useState(false)
	const [showLogo, setShowLogo] = useState(true)
	window.onscroll = function () {
		window.scrollY <= 796
			? setShowLogo(true)
			: window.scrollY >= 7600
			? setShowLogo(true)
			: setShowLogo(false)
	}
	return (
		<header className='header'>
			<div className='container'>
				<div className='header__inner'>
					<div className='menu-icon' onClick={() => setBurger(!burger)}>
						<div className='line'></div>
						<div className='line'></div>
						<div className='line'></div>
					</div>
					<div className='logo-section'>
						{showLogo && (
							<img src='/images/logo.png' alt='Logo' className='logo' />
						)}
					</div>
					<div className='stars'>
						<span className='star'>★</span>
						<span className='star'>★</span>
						<span className='star'>☆</span>
						<span className='star'>☆</span>
						<span className='star'>☆</span>
					</div>
				</div>
			</div>
			<div className={burger ? 'burger_active' : 'burger'}>
				<button className='burger_close' onClick={() => setBurger(!burger)}>
					<img src='images/icon/X.svg' alt='' />
				</button>
				<ul className='burger_menu'>
					<li>главная</li>
					<li>О Камбодже</li>
					<li>Le Condo</li>
					<li>видео</li>
					<li>карта</li>
					<li>investor journey</li>
					<li>FAQ</li>
					<li>О НАС</li>
					<li>отзывы</li>
					<li>контакты</li>
				</ul>
				<div className='links'>
					<a href=''>
						<img src='images/icon/icon-inst.svg' alt='' />
					</a>
					<a href=''>
						<img src='images/icon/facebook.svg' alt='' />
					</a>
					<a href=''>
						<img src='images/icon/telega.svg' alt='' />
					</a>
					<a href=''>
						<img src='images/icon/linkedin.svg' alt='' />
					</a>
					<a href=''>
						<img src='images/icon/whatss.svg' alt='' />
					</a>
				</div>
			</div>
		</header>
	)
}
