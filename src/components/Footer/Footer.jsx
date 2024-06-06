import React, { useContext } from 'react'
import './footer.css'
import { ConfigContext } from '../../App';
const Footer = () => {
	const config = useContext(ConfigContext);

	return (
		<footer className='footer'>
			<div className='container'>
				<div className='footer_section object_section' >
					<div className='footer_section-top'>
						<a href=''>
							<img src='images/logo.png' alt='' style={{ width: '120px' , height: 'auto' }} />
						</a>
						<div className='footer_section-addres'>
							<p dangerouslySetInnerHTML={{ __html: config.Ru_footer_address }}>
							

							</p>
							<a href='tel:{config.Ru_footer_phone}'>{config.Ru_footer_phone}</a>
						</div>
					</div>
					<div className='footer_section-down'>
						<p>
							{/* политика <br /> конфиденциальности */}
						</p>
						<div className='footer_section-social'>
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
			</div>
		</footer>
	)
}

export default Footer
