import React, { useState } from 'react'
import './Header.css'
export default function Header({ sectionRefs, quickMenu }) {
	const [burger, setBurger] = useState(false)
	const [showLogo, setShowLogo] = useState(true)
	window.onscroll = function () {
		window.scrollY <= 100 ? setShowLogo(true) : setShowLogo(false)
	}
	const handleMenuClick = sectionIndex => {
		setBurger(false) // Close the burger menu
		sectionRefs[sectionIndex].current.scrollIntoView({ behavior: 'smooth' }) // Scroll to the section
	}
	return (
		<header className='header'>
			<div className='container'>
				{window.innerWidth > 1024 ? (
					<div className='header__inner'>
						<div
							style={{
								width: '100%',
							}}
						>
							<div className='header__inner-left'>
								<div className='header__inner-logo'>
									<div className='logo-section'>
										<img src='/images/logo.png' alt='Logo' className='logo' />
									</div>
									<div className='stars'>
										<span className='star'>★</span>
										<span className='star'>★</span>
										<span className='star'>☆</span>
										<span className='star'>☆</span>
										<span className='star'>☆</span>
									</div>
								</div>

								{!quickMenu ||
									(window.scrollY > 280 && (
										<div
											className='menu-icon'
											onClick={() => setBurger(!burger)}
										>
											<div className='line'></div>
											<div className='line'></div>
											<div className='line'></div>
										</div>
									))}
							</div>
						</div>
					</div>
				) : (
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
				)}
			</div>
			{burger && (
				<div className={burger ? 'burger__overflow' : ''}>
					<div className={burger ? 'burger_active' : 'burger'}>
						<button className='burger_close' onClick={() => setBurger(!burger)}>
							<img
								style={{ height: '54px', width: '54px' }}
								src='mobile/close.png'
								alt=''
							/>
						</button>
						<ul className='burger_menu'>
							<li onClick={() => handleMenuClick(0)}>главная</li>
							<li onClick={() => handleMenuClick(1)}>О Камбодже</li>
							<li onClick={() => handleMenuClick(3)}>Wealth Mansion </li>
							<li onClick={() => handleMenuClick(2)}>Le Conde</li>
							<li onClick={() => handleMenuClick(7)}>видео</li>
							{/* <li onClick={() => handleMenuClick(4)}>карта</li> */}
							<li onClick={() => handleMenuClick(8)}>FAQ</li>
							<li onClick={() => handleMenuClick(9)}>О НАС</li>
							<li onClick={() => handleMenuClick(9)}>отзывы</li>
							<li onClick={() => handleMenuClick(10)}>контакты</li>
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
				</div>
			)}
		</header>
	)
}
