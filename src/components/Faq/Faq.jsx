import React, { useState } from 'react'
import './Faq.css'
const Faq = () => {
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
					<h2 className='faq_title'>вопросы и ответы</h2>

					<div className='faq_section'>
						<div className='acardenons'>
							<div className='acardenon'>
								<div onClick={() => handelOpen()} className='acardenon_up'>
									<p>
										Недвижимость - это важный аспект жизни каждого человека?
									</p>
									<img
										className={open ? 'arrow_top' : 'arrow_down'}
										src='images/icon/arrow-down-questions.svg'
										alt=''
									/>
								</div>
								<p className={open ? 'acardenon_p' : 'open'}>
									Недвижимость - это важный аспект жизни каждого человека, ведь
									именно здесь мы проводим большую часть своего времени. Покупка
									или продажа жилья - ответственный шаг, который требует
									внимательного подхода и основательного изучения рынка. Важно
									помнить, что инвестиции в недвижимость - всегда хороший выбор
									для финансового благополучия и безопасности.
								</p>
							</div>
							<div className='acardenon'>
								<div onClick={() => handelOpen1()} className='acardenon_up'>
									<p>
										Недвижимость - это важный аспект жизни каждого человека?
									</p>
									<img
										className={open1 ? 'arrow_top' : 'arrow_down'}
										src='images/icon/arrow-down-questions.svg'
										alt=''
									/>
								</div>
								<p className={open1 ? 'acardenon_p' : 'open'}>
									Недвижимость - это важный аспект жизни каждого человека, ведь
									именно здесь мы проводим большую часть своего времени. Покупка
									или продажа жилья - ответственный шаг, который требует
									внимательного подхода и основательного изучения рынка. Важно
									помнить, что инвестиции в недвижимость - всегда хороший выбор
									для финансового благополучия и безопасности.
								</p>
							</div>
							<div className='acardenon'>
								<div onClick={() => handelOpen2()} className='acardenon_up'>
									<p>
										Недвижимость - это важный аспект жизни каждого человека?
									</p>
									<img
										className={open2 ? 'arrow_top' : 'arrow_down'}
										src='images/icon/arrow-down-questions.svg'
										alt=''
									/>
								</div>
								<p className={open2 ? 'acardenon_p' : 'open'}>
									Недвижимость - это важный аспект жизни каждого человека, ведь
									именно здесь мы проводим большую часть своего времени. Покупка
									или продажа жилья - ответственный шаг, который требует
									внимательного подхода и основательного изучения рынка. Важно
									помнить, что инвестиции в недвижимость - всегда хороший выбор
									для финансового благополучия и безопасности. Недвижимость -
									это важный аспект жизни каждого человека, ведь именно здесь мы
									проводим большую часть своего времени. Покупка или продажа
									жилья - ответственный шаг, который требует внимательного
									подхода и основательного изучения рынка. Важно помнить, что
									инвестиции в недвижимость - всегда хороший выбор для
									финансового благополучия и безопасности.
								</p>
							</div>
						</div>
						<div className=''>
							<a href='' className='faq_btn'>
								оставить заявку
							</a>
							<p className='faq_btn_text'>
								И получить подробные материалы о налогах и пр.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Faq
