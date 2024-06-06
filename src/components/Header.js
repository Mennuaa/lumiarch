import React, { useState, useEffect, useContext } from 'react';
import './Header.css';
import { ConfigContext } from '../App';

export default function Header({ sectionRefs, quickMenu, burger, setBurger }) {
	const [showInner, setShowInner] = useState(true);
	const [showLogo, setShowLogo] = useState(true);
	const config = useContext(ConfigContext);

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
						<li onClick={() => handleMenuClick(0)}>{config.Ru_menu_main}</li>
						<li onClick={() => handleMenuClick(1)}>{config.Ru_menu_cambodia}</li>
						<li onClick={() => handleMenuClick(3)}>{config.Ru_menu_WM}</li>
						<li onClick={() => handleMenuClick(2)}>{config.Ru_menu_leconde}</li>
						<li onClick={() => handleMenuClick(7)}>{config.Ru_menu_video}</li>
						{/* <li onClick={() => handleMenuClick(7)}>{config.Ru_menu_map}</li> */}
						<li onClick={() => handleMenuClick(8)}>{config.Ru_menu_faq}</li>
						<li onClick={() => handleMenuClick(9)}>{config.Ru_menu_about}</li>
						<li onClick={() => handleMenuClick(9)}>{config.Ru_menu_review}</li>
						<li onClick={() => handleMenuClick(10)}>{config.Ru_menu_contactus}</li>
					</ul>
					<div className='links'>
						<a href={config.Ru_url_instagram}>
							<img src='images/icon/icon-inst.svg' alt='Instagram' />
						</a>
						<a href={config.Ru_url_facebook}>
							<img src='images/icon/facebook.svg' alt='Facebook' />
						</a>
						<a href={config.Ru_url_telegram}>
							<img src='images/icon/telega.svg' alt='Telegram' />
						</a>
						<a href={config.Ru_url_linkedin}>
							<img src='images/icon/linkedin.svg' alt='LinkedIn' />
						</a>
						<a href={config.Ru_url_whatsapp}>
							<img src='images/icon/whatss.svg' alt='WhatsApp' />
						</a>
					</div>
				</div>
			</div>
		</header>
	);
}
