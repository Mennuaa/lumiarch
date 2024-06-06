import React, { useContext, useEffect, useState } from 'react'
import './Faq.css'
import { ConfigContext } from '../../App';
import MainButton from '../buttons/MainButton';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Faq = ({scrollToContact}) => {


	useEffect(() => {
		AOS.init({
		  duration: 1200, 
		});
	  }, []);
	const config = useContext(ConfigContext);

	const [open, setOpen] = useState(false)
	const [open1, setOpen1] = useState(false)
	const [open2, setOpen2] = useState(false)
	function handelOpen() {
		setOpen(!open)
	}
	function handelOpen1() {
		setOpen1(!open1)
	}
	function handelOpen2() {
		setOpen2(!open2)
	}
	return (
		<div
			className='faq'
			style={
				window.innerWidth > 768
					? {
							background: 'url(mobile/lecondo/faq_bg.jpg)',
							backgroundSize: 'cover',
							backgroundPosition: 'center',
							backgroundRepeat: 'no-repeat',
					  }
					: {}
			}
		>
			<div className='container'>
				<div className='faq_inner'>
					<h2 data-aos="fade-up" className='mainh2'>{config.Ru_faq_header}</h2>

					<div className='faq_section'>
						<div className='acardenons'>
							<div data-aos="fade-right" className='acardenon'>
								<div  onClick={() => handelOpen()} className='acardenon_up'>
									<p data-aos="fade-right">
										{config.Ru_faq_question_1}
									</p>
									<img
									data-aos="fade-right"
										className={open ? 'arrow_top' : 'arrow_down'}
										src='images/icon/arrow-down-questions.svg'
										alt=''
									/>
								</div>
								<p className={open ? 'acardenon_p' : 'open'}>
									{config.Ru_faq_answer_1}
								</p>
							</div>
							<div data-aos="fade-right" className='acardenon'>
								<div  onClick={() => handelOpen1()} className='acardenon_up'>
									<p>
										{config.Ru_faq_question_2}
									</p>
									<img
										className={open1 ? 'arrow_top' : 'arrow_down'}
										src='images/icon/arrow-down-questions.svg'
										alt=''
									/>
								</div>
								<p className={open1 ? 'acardenon_p' : 'open'}>
									{config.Ru_faq_answer_2}
								</p>
							</div>
							<div data-aos="fade-right" className='acardenon'>
								<div  onClick={() => handelOpen2()} className='acardenon_up'>
									<p>
										{config.Ru_faq_question_3}
									</p>
									<img
										className={open2 ? 'arrow_top' : 'arrow_down'}
										src='images/icon/arrow-down-questions.svg'
										alt=''
									/>
								</div>
								<p className={open2 ? 'acardenon_p' : 'open'}>
									{config.Ru_faq_answer_3}
								</p>
							</div>
						</div>
						<div data-aos="fade-left" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
							<MainButton text={config.Ru_faq_submit}  onClick={scrollToContact}/>
							{/* <a onClick={scrollToContact} className='faq_btn'>
								{config.Ru_faq_submit}
							</a> */}
							<p className='faq_btn_text'>
								{config.Ru_faq_submit_tip}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Faq
