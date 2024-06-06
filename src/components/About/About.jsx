import React, { useContext, useEffect } from 'react'
import './about.css'
import { ConfigContext } from '../../App';
import MainButton from '../buttons/MainButton';
import AOS from 'aos';
import 'aos/dist/aos.css';
const About = ({scrollToContact}) => {
	const config = useContext(ConfigContext);
	useEffect(() => {
		AOS.init({
		  duration: 1200, 
		});
	  }, []);
	return (
		<div
			className='about'
			style={
				window.innerWidth > 768
					? {
							backgroundImage: `url('images/img-calculator.png')`,
							width: '100%',
							height: 'max-content',
							minHeight: '100vh',
							backgroundPosition: 'center',
							backgroundSize: 'cover',
					  }
					: {}
			}
		>
			<div className='about_center'>
				<div className='container'>
					<div className='about_desktop object_section'>
						<div className='about_sector'>
							<h2 data-aos="fade-right" className='mainh2'>{config.Ru_about_header}</h2>
							<p data-aos="fade-right">
								{config.Ru_about_subheader}
							</p>
							<MainButton data-aos="fade-right" text={config.Ru_faq_submit} onClick={scrollToContact} />
							<p data-aos="fade-right" className='about_sector-down'>{config.Ru_faq_submit_tip}</p>
						</div>
						<div data-aos="fade-left" className='about_reviews'>
							<h2 className='mainh2'>{config.Ru_reviews_header}</h2>
							<div className='review'>
								<div className='reviews_details'>
									<div className='reviews_details-up'>
										<h4>{config.Ru_review1_name}</h4>
										<p>{config.Ru_review1_date}</p>
									</div>
									<p>
									{config.Ru_review1_text}
									</p>
								</div>
								<div className='reviews_details'>
									<div className='reviews_details-up'>
										<h4>{config.Ru_review2_name}</h4>
										<p>{config.Ru_review2_date}</p>
									</div>
									<p>
									{config.Ru_review2_text}
									</p>
								</div>
								
								
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='about_content'>
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
						
						<button className='about_button' onClick={scrollToContact}>оставить заявку</button>
					</div>
				</div>
				<div className='container'>
					<div className='section'>
						<h2 className='mainh2'>О НАС</h2>
						<p>
							LumiArch — китайская инвестиционная компания, специализирующаяся
							на Камбодже. Наша команда опытных профессионалов занимается только
							топовыми проектами от лучших застройщиков ЮВА. Мы готовы
							предложить вам лучшую недвижимость на рынке и обеспечить выгодное
							вложение ваших инвестиций.
						</p>
					</div>
					<br />
					<div className='section'>
						<h2 className='mainh2'>отзывы</h2>
						<div className='reviews'>
							<h4>Лилиана Перова</h4>
							<p>
								Инвестиции в недвижимость - это один из наиболее надежных
								способов приумножения капитала. Недвижимость обладает
								стабильностью и высокой ликвидностью, что делает ее
								привлекательным объектом для инвесторов. Благодаря постоянному
								росту спроса на жилье и коммерческие площади, инвестиции в
								недвижимость обещают хорошие доходы в долгосрочной перспективе.
							</p>
							<p className='reviews_data'>23.04.24</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About
