import React, { useState, useEffect } from 'react';
import './Header.css';

export default function Header({ sectionRefs, quickMenu, burger, setBurger }) {
	const [showInner, setShowInner] = useState(true);
	const [showLogo, setShowLogo] = useState(true);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY <= 500) {
				setShowInner(true);
				setShowLogo(true);
			} else {
				setShowInner(false);
				setShowLogo(false);
			}
		};
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const handleMenuClick = (sectionIndex) => {
		setBurger(false); // Close the burger menu
		sectionRefs[sectionIndex].current.scrollIntoView({ behavior: 'smooth' }); // Scroll to the section
	};

	return (
		<header className='header'>
			<div className='container'>
				{window.innerWidth > 1024 ? (
					<div className='header__inner'>
						<div style={{ width: '100%' }}>
							<div className='header__inner-left'>
								<div className='header__inner-logo'>
									{showInner && (
										<>
											<div className='logo-section'>
												<img src='/images/logo.png' alt='Logo' className='logo' />
											</div>
											<div className='stars'>
												<span className='star'>★</span>
												<span className='star'>★</span>
												<span className='star'>★</span>
												<span className='star'>★</span>
												<span className='star'>★</span>
											</div>
										</>
									)}
								</div>
								{!quickMenu || !showLogo ? (
									<div className='menu-icon' onClick={() => setBurger(!burger)}>
										<div className='line'></div>
										<div className='line'></div>
										<div className='line'></div>
									</div>
								) : null}
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
							{showLogo && <img src='/images/logo.png' alt='Logo' className='logo' />}
						</div>
						<div className='stars'>
							<span className='star'>★</span>
							<span className='star'>★</span>
							<span className='star'>★</span>
							<span className='star'>★</span>
							<span className='star'>★</span>
						</div>
					</div>
				)}
			</div>
			<div className={burger ? 'burger__overflow burger__overflow_active' : 'burger__overflow'}>
				<div className={burger ? 'burger_active' : 'burger'}>
					<button className='burger_close' onClick={() => setBurger(!burger)}>
						<img style={{ height: '54px', width: '54px' }} src='mobile/close.png' alt='Close' />
					</button>
					<ul className='burger_menu'>
						<li onClick={() => handleMenuClick(0)}>главная</li>
						<li onClick={() => handleMenuClick(1)}>О Камбодже</li>
						<li onClick={() => handleMenuClick(3)}>Wealth Mansion </li>
						<li onClick={() => handleMenuClick(2)}>Le Conde</li>
						<li onClick={() => handleMenuClick(7)}>видео</li>
						<li onClick={() => handleMenuClick(8)}>FAQ</li>
						<li onClick={() => handleMenuClick(9)}>О НАС</li>
						<li onClick={() => handleMenuClick(9)}>отзывы</li>
						<li onClick={() => handleMenuClick(10)}>контакты</li>
					</ul>
					<div className='links'>
						<a href='https://www.instagram.com/lumiarch.ru'>
							<img src='images/icon/icon-inst.svg' alt='Instagram' />
						</a>
						<a href='https://www.facebook.com/lumiarch.global'>
							<img src='images/icon/facebook.svg' alt='Facebook' />
						</a>
						<a href='https://t.me/iceoleg'>
							<img src='images/icon/telega.svg' alt='Telegram' />
						</a>
						<a href='https://www.linkedin.com/company/lumiarchglobal'>
							<img src='images/icon/linkedin.svg' alt='LinkedIn' />
						</a>
						<a href='https://wa.me/+84855824522'>
							<img src='images/icon/whatss.svg' alt='WhatsApp' />
						</a>
					</div>
				</div>
			</div>
		</header>
	);
}
