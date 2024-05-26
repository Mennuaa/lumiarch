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
								601 NORTHEAST 1ST AVE, <br /> MIAMI, FL 33132
							</p>
							<a href='tel:8(800)999-99-99'>8(800)999-99-99</a>
						</div>
					</div>
					<div className='footer_section-down'>
						<p>
							политика <br /> конфиденциальности
						</p>
						<div className='footer_section-social'>
							<a href=''>
								<img src='images/icon/icon-inst.svg' alt='' />
							</a>
							<a href=''>
								<img src='images/icon/facebook.svg' alt='' />
							</a>
							<a href=''>
								<img src='images/icon/telega.svg' alt='' />
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
