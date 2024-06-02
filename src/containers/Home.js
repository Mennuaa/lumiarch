import React, { useCallback, useEffect, useRef, useState } from 'react'
import { toast } from 'react-toastify'
import About from '../components/About/About'
import { Arch } from '../components/Arch/Arch'
import { Cambodia } from '../components/Cambodia/Cambodia'
import Contact from '../components/Contact/Contact'
import { Desc } from '../components/Desc/Desc'
import Faq from '../components/Faq/Faq'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header'
import { Investments } from '../components/Investment/Investments'
import { Object } from '../components/Object/Object'
import { Space } from '../components/Space/Space'
import { Utils } from '../components/Utils/Utils'
import Video from '../components/Video/Video'
import './Home.css'
import axios from 'axios'

function Home() {
	const [currentSection, setCurrentSection] = useState(0)
	const [isAtBottom, setIsAtBottom] = useState(false)
	const sectionRefs = [
		useRef(null),
		useRef(null),
		useRef(null),
		useRef(null),
		useRef(null),
		useRef(null),
		useRef(null),
		useRef(null),
		useRef(null),
		useRef(null),
		useRef(null),
	]
	const scrollToContact = () => {
		// alert('scrollToContact')
		sectionRefs[10].current.scrollIntoView({ behavior: 'smooth' })
	}
	const observer = useRef(
		new IntersectionObserver(
			entries => {
				const visibleEntry = entries.find(entry => entry.isIntersecting)
				if (visibleEntry) {
					const index = sectionRefs.findIndex(
						ref => ref.current === visibleEntry.target
					)
					console.log(`Current intersecting section index: ${index}`) // Log the current section index
					setCurrentSection(index)
				}
			},
			{ threshold: 0.5 }
		)
	)

	useEffect(() => {
		console.log(`Current section updated to: ${currentSection}`) // Log when the current section updates
	}, [currentSection])

	useEffect(() => {
		sectionRefs.forEach(ref => {
			if (ref.current) {
				observer.current.observe(ref.current)
			}
		})

		return () => {
			sectionRefs.forEach(ref => {
				if (ref.current) {
					observer.current.unobserve(ref.current)
				}
			})
		}
	}, [sectionRefs])

	const checkScrollBottom = useCallback(() => {
		const yPos = window.scrollY
		const windowHeight = window.innerHeight
		const totalScrollHeight = document.documentElement.scrollHeight
		setIsAtBottom(totalScrollHeight - (yPos + windowHeight) < 1)
	}, [])

	useEffect(() => {
		window.addEventListener('scroll', checkScrollBottom)
		return () => window.removeEventListener('scroll', checkScrollBottom)
	}, [checkScrollBottom])

	const scrollToNextSection = () => {
		const nextSection = currentSection + 1
		if (nextSection < sectionRefs.length) {
			sectionRefs[nextSection].current.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			})
			setCurrentSection(nextSection) // Update the current section state
		}
	}

	useEffect(() => {
		// Set up an event listener for a scroll button or another trigger
		const button = document.getElementById('nextSectionButton')
		if (button) {
			button.addEventListener('click', scrollToNextSection)
		}

		return () => {
			if (button) {
				button.removeEventListener('click', scrollToNextSection)
			}
		}
	}, [scrollToNextSection])
	const [background, setBackground] = useState('/images/bg1.webp')
	const [backgroundCambodia, setBackgroundCambodia] = useState(
		'/mobile/2 cambodia/bg-scroll.webp'
	)
	const [show, setShow] = useState(true)
	window.onscroll = function () {
		window.scrollY <= 1000 ? setShow(true) : setShow(false)
		console.log(show)
	}
	const [showContact, setShowContact] = useState(false)
	const toggleContactForm = () => {
		setShowContact(!showContact)
	}
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		questions: '',
	})

	const handleChange = e => {
		const { name, value } = e.target
		setFormData(prevState => ({
			...prevState,
			[name]: value,
		}))
	}

	const validateEmail = email => {
		const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
		return emailRegex.test(email)
	}

	const validatePhone = phone => {
		const phoneRegex = /^\+?[0-9\s()-]+$/
		return phoneRegex.test(phone) && phone.length >= 7
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		let isValid = true;

		// Validate name
		if (!formData.name.trim()) {
			toast.error('Пожалуйста, введите ваше имя и фамилию');
			isValid = false;
		}

		// Validate email
		if (!validateEmail(formData.email)) {
			toast.error('Введите корректный email');
			isValid = false;
		}

		// Validate phone
		if (!validatePhone(formData.phone)) {
			toast.error('Телефон должен содержать только цифры, пробелы, скобки или тире и быть не короче 7 символов');
			isValid = false;
		}

		if (isValid) {
			// setIsLoading(true);
			try {
				const response = await axios.post('http://landing.lumiarch.ru/api/detailed-form', {
					name: formData.name,
					phone: formData.phone,
					email: formData.email,
					question: formData.questions || '',
				}, {
					headers: {
						'Content-Type': 'application/json; charset=UTF-8'
					}
				});
				if (response.status === 200) {
					setShowContact(false);
					toast.success('Спасибо за вашу заявку! Мы свяжемся с вами в ближайшее время.');
				}
			} catch (error) {
				console.error('Ошибка при отправке формы', error);
				setShowContact(false);
				toast.success('Спасибо за вашу заявку! Мы свяжемся с вами в ближайшее время.');

			} finally {
				// setIsLoading(false);
			}
		}
	};

	// Inline styles for the sliding contact form
	const contactFormStyle = {
		background: 'transparent',
		opacity: '1',
		position: 'fixed',
		top: '0',
		right: showContact ? '0' : '-100%', // Slide in and out
		transition: 'all 0.5s ease-in-out', // Smooth transition
		display: 'flex',
		height: '100vh',
		flexDirection: 'column',
		// alignItems: 'end',
		backdropFilter: 'blur(10px)',
		zIndex: 40,
	}
	const [showShare, setShowShare] = useState(false)
	const toggleShareForm = () => {
		setShowShare(prev => !prev)
	}

	const handleSlideChange = slide => {
		setBackground(slide.background)
	}
	const handleSlideChangeCambodia = slide => {
		setBackground(slide.background)
	}

	const handleSlideChangeObject = slide => {
		setBackground(slide.background)
	}

	const handleSlideChangeDesc = slide => {
		setBackground(slide.background)
	}
	const [burger, setBurger] = useState(false)
	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const formSectionStyle = {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
        backdropFilter: showContact ? 'blur(10px)' : 'blur(0)',
        WebkitBackdropFilter: showContact ? 'blur(10px)' : 'blur(0)',
        opacity: showContact ? '1' : '0', // Initially hidden
        transition: 'backdrop-filter 0.5s ease-in-out, opacity 0.5s ease-in-out', // Smooth transition
        zIndex: '1000',
    };

	const quickMenu = window.innerWidth > 1024 ? true : false
	return (
		<div className='home'>
			<style>
				
			</style>
			<Header sectionRefs={sectionRefs} quickMenu={quickMenu} burger={burger} setBurger={setBurger} />
			<div ref={sectionRefs[0]}>
				<Investments
					name={name} setName={setName} phone={phone} setPhone={setPhone}
					sectionRefs={sectionRefs}
					setBurger={setBurger}
					scrollToContact={scrollToContact}
					onChangeSlide={handleSlideChange}
					quickMenu={quickMenu}
				/>
			</div>
			<div ref={sectionRefs[1]}>
				<Cambodia
					scrollToContact={scrollToContact}
					onChangeSlide={handleSlideChangeCambodia}
					id='cambodia'
				/>
			</div>
			{/* <div  ref={sectionRefs[2]}><Acquaintance /></div> */}
			<div ref={sectionRefs[2]}>
				<Object onChangeSlide={handleSlideChangeObject} />
			</div>
			<div ref={sectionRefs[3]}>
				<Desc onChangeSlide={handleSlideChangeDesc} />
			</div>
			<div ref={sectionRefs[4]}>
				<Utils onChangeSlide={handleSlideChangeDesc} />
			</div>
			<div ref={sectionRefs[5]}>
				<Space scrollToContact={scrollToContact} onChangeSlide={handleSlideChangeDesc} />
			</div>
			<div ref={sectionRefs[6]}>
				<Arch onChangeSlide={handleSlideChangeDesc} />
			</div>

			<div ref={sectionRefs[7]}>
				<Video />
			</div>
			<div ref={sectionRefs[8]}>
				<Faq scrollToContact={scrollToContact} />
			</div>
			<div ref={sectionRefs[9]}>
				<About scrollToContact={scrollToContact} />
			</div>
			<div ref={sectionRefs[10]}>
				<Contact name={name} phone={phone} />
			</div>
			<Footer />
			<div className='middle_button'>
				<a onClick={toggleContactForm}>узнать больше</a>
			</div>

			<div className='middle_buttons'>
				{/* <img src='/images/icon/calculator-icon.svg' alt='Calculator' /> */}
				<div></div>
				{currentSection < sectionRefs.length - 10 && (
					<div className='middle_buttons-scroll' onClick={scrollToNextSection}>
						<p>ВНИЗ</p>
						<img src='/images/icon/arrow-down-questions.svg' alt='Arrow Down' />
					</div>
				)}
				{showShare && (
					<div className='share_section'>
						<p>Поделиться</p>
						<button className='share_close'>
							<img onClick={toggleShareForm} src='mobile/close.png' alt='' />
						</button>
						<div className='links' style={{ margin: 0 }}>
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
				)}

				{/* <img
					onClick={toggleShareForm}
					src='/images/icon/share-icon.svg'
					alt='Share'
				/> */}
			</div>
			{showContact && (
				 <div>
				 <style>
					 {`
					 .form__section {
						 position: fixed;
						 top: 0;
						 left: 0;
						 width: 100%;
						 height: 100%;
						 display: flex;
						 justify-content: center;
						 align-items: center;
						 background: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
						 backdrop-filter: blur(0);
						 -webkit-backdrop-filter: blur(0);
						 opacity: 0; /* Initially hidden */
						 transition: backdrop-filter 1s ease-in-out, opacity 1s ease-in-out; /* Smooth transition */
						 z-index: 1000;
					 }
	 
					 .form__section.visible {
						 backdrop-filter: blur(10px);
						 -webkit-backdrop-filter: blur(10px);
						 opacity: 1; /* Make it visible */
					 }
					 `}
				 </style>
				 {showContact && (
					 <div className={`form__section ${showContact ? 'visible' : ''}`}>
						 <form onSubmit={handleSubmit}>
							 <div className="close__share">
								 <img
									 onClick={toggleContactForm}
									 style={{ height: '54px', width: '54px', marginBottom: '20px' }}
									 src='mobile/close.png'
									 alt=''
								 />
							 </div>
							 <input
								 type='text'
								 name='name'
								 placeholder='имя и фамилия'
								 value={formData.name}
								 onChange={handleChange}
							 />
							 <input
								 type='email'
								 name='email'
								 placeholder='email'
								 value={formData.email}
								 onChange={handleChange}
							 />
							 <input
								 type='tel'
								 name='phone'
								 placeholder='ваш телефон'
								 value={formData.phone}
								 onChange={handleChange}
							 />
							 <textarea
								 name='questions'
								 placeholder='ваши вопросы'
								 value={formData.questions}
								 onChange={handleChange}
							 ></textarea>
							 <button type='submit'>оТПРАВИТЬ</button>
							 <p>
								 Нажимая на кнопку, вы принимаете политику конфиденциальности и
								 даете согласие на обработку персональных данных
							 </p>
						 </form>
					 </div>
				 )}
				 <a onClick={toggleContactForm}>узнать больше</a>
			 </div>
			)}
		</div>
	)
}

export default Home
