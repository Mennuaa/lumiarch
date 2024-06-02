import React from 'react'
import './footer.css'
const Footer = () => {
	return (
		<footer className='footer'>
			<div className='container'>
				<div className='footer_section'>
					<div className='footer_section-top'>
						<a href=''>
							<img src='images/logo.png' alt='' style={{ width: '120px' , height: 'auto' }} />
						</a>
						<div className='footer_section-addres'>
							<p>
							1159 National Road Nº 2, <br /> Phnom Penh, Phnom Penh

							</p>
							<a href='tel:8(800)999-99-99'>+84 855824522</a>
						</div>
					</div>
					<div className='footer_section-down'>
						<p>
							{/* политика <br /> конфиденциальности */}
						</p>
						<div className='footer_section-social'>
						<a href='https://www.instagram.com/lumiarch.ru'>
								<img src='images/icon/icon-inst.svg' alt='' />
							</a>
							<a href='https://www.facebook.com/lumiarch.global'>
								<img src='images/icon/facebook.svg' alt='' />
							</a>
							<a href='https://t.me/iceoleg'>
								<img src='images/icon/telega.svg' alt='' />
							</a>
							<a href='https://www.linkedin.com/company/lumiarchglobal'>
								<img src='images/icon/linkedin.svg' alt='' />
							</a>
							<a href='https://wa.me/+84855824522'>
								<img src='images/icon/whatss.svg' alt='' />
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
