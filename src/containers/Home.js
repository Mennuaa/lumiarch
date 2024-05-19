import React, { useState, useRef, useEffect, useCallback } from 'react';
import About from '../components/About/About';
import { Arch } from '../components/Arch/Arch';
import { Cambodia } from '../components/Cambodia/Cambodia';
import { Desc } from '../components/Desc/Desc';
import Faq from '../components/Faq/Faq';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header';
import { Investments } from '../components/Investment/Investments';
import { Object } from '../components/Object/Object';
import { Space } from '../components/Space/Space';
import { Utils } from '../components/Utils/Utils';
import Video from '../components/Video/Video';
import { toast } from 'react-toastify'; 
import './Home.css';
import { Acquaintance } from '../components/Popups/Acquaintance/Acquaintance';
import Contact from '../components/Contact/Contact';

function Home() {
    const [currentSection, setCurrentSection] = useState(0);
    const [isAtBottom, setIsAtBottom] = useState(false);
    const sectionRefs = [
        useRef(null), useRef(null), useRef(null), useRef(null),
        useRef(null), useRef(null), useRef(null), useRef(null),
        useRef(null), useRef(null),useRef(null),
    ];

    const observer = useRef(new IntersectionObserver((entries) => {
        const visibleEntry = entries.find(entry => entry.isIntersecting);
        if (visibleEntry) {
            const index = sectionRefs.findIndex(ref => ref.current === visibleEntry.target);
            console.log(`Current intersecting section index: ${index}`);  // Log the current section index
            setCurrentSection(index);
        }
    }, { threshold: 0.5 }));
    
    useEffect(() => {
        console.log(`Current section updated to: ${currentSection}`);  // Log when the current section updates
    }, [currentSection]);

    useEffect(() => {
        sectionRefs.forEach((ref) => {
            if (ref.current) {
                observer.current.observe(ref.current);
            }
        });

        return () => {
            sectionRefs.forEach(ref => {
                if (ref.current) {
                    observer.current.unobserve(ref.current);
                }
            });
        };
    }, [sectionRefs]);

    const checkScrollBottom = useCallback(() => {
        const yPos = window.scrollY;
        const windowHeight = window.innerHeight;
        const totalScrollHeight = document.documentElement.scrollHeight;
        setIsAtBottom(totalScrollHeight - (yPos + windowHeight) < 1);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', checkScrollBottom);
        return () => window.removeEventListener('scroll', checkScrollBottom);
    }, [checkScrollBottom]);

    const scrollToNextSection = () => {
        const nextSection = currentSection + 1;
        if (nextSection < sectionRefs.length) {
            sectionRefs[nextSection].current.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setCurrentSection(nextSection);  // Update the current section state
        }
    };
    
    useEffect(() => {
        // Set up an event listener for a scroll button or another trigger
        const button = document.getElementById('nextSectionButton');
        if (button) {
            button.addEventListener('click', scrollToNextSection);
        }
    
        return () => {
            if (button) {
                button.removeEventListener('click', scrollToNextSection);
            }
        };
    }, [scrollToNextSection]);
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
        setShowContact(prev => !prev);
    };
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        questions: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const validateEmail = (email) => {
        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return emailRegex.test(email);
    };

    const validatePhone = (phone) => {
        const phoneRegex = /^[0-9\s()-]+$/;
        return phoneRegex.test(phone) && phone.length >= 7;
    };

    const handleSubmit = (e) => {
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

        // Optionally validate questions
        if (!formData.questions.trim()) {
            toast.error('Пожалуйста, задайте ваш вопрос');
            isValid = false;
        }

        if (isValid) {
            console.log('Form is valid:', formData);
            toast.success('Спасибо за вашу заявку! Мы свяжемся с вами в ближайшее время.');
            setShowContact(false);
            // Here you would typically handle the form submission, e.g., sending data to a server
        }
    };
    // Inline styles for the sliding contact form
    const contactFormStyle = {
        background: "transparent",
        opacity: '1',
        position: 'fixed',
        top: '30%',
        right: showContact ? '0' : '-100%', // Slide in and out
        transition: 'all 0.5s ease-in-out', // Smooth transition
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'end',
        backdropFilter: 'blur(10px)',
        zIndex: 10 // Make sure it's above other content
    };


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
    return (
        <div className='home'>
            <Header sectionRefs={sectionRefs} />
            <div ref={sectionRefs[0]}>< Investments onChangeSlide={handleSlideChange} /></div>
            <div ref={sectionRefs[1]}><Cambodia onChangeSlide={handleSlideChangeCambodia} id='cambodia' /></div>
            {/* <div  ref={sectionRefs[2]}><Acquaintance /></div> */}
            <div ref={sectionRefs[2]}><Object onChangeSlide={handleSlideChangeObject} /></div>
            <div ref={sectionRefs[3]}><Desc onChangeSlide={handleSlideChangeDesc} /></div>
            <div ref={sectionRefs[4]}><Utils onChangeSlide={handleSlideChangeDesc} /></div>
            <div ref={sectionRefs[5]}><Space onChangeSlide={handleSlideChangeDesc} /></div>
            <div ref={sectionRefs[6]}><Arch onChangeSlide={handleSlideChangeDesc} /></div>
            <div ref={sectionRefs[7]}><Video /></div>
            <div ref={sectionRefs[8]}><Faq /></div>
            <div ref={sectionRefs[9]}><About /></div>
            <div ref={sectionRefs[10]}><Contact /></div>
            <Footer />
            <div className='middle_button'>
                   
                <a   onClick={toggleContactForm}>узнать больше</a>
            </div>
        
            <div className='middle_buttons'>
                <img src='/images/icon/calculator-icon.svg' alt='Calculator' />
                {currentSection < sectionRefs.length - 1 && (
                    <div className='middle_buttons-scroll' onClick={scrollToNextSection}>
                        <p>ВНИЗ</p>
                        <img src='/images/icon/arrow-down-questions.svg' alt='Arrow Down' />
                    </div>
                )}
                <img src='/images/icon/share-icon.svg' alt='Share' />
            </div>
            {
            showContact && (
                <div
                className="form__section"
                style={contactFormStyle}
            >
                <img
                      onClick={toggleContactForm}
                    style={{ height: '54px', width: '54px', marginBottom: '20px' }}
                    src='mobile/close.png'
                    alt=''
                />
               <form onSubmit={handleSubmit}>
            <input type='text' name='name' placeholder='имя и фамилия' value={formData.name} onChange={handleChange} />
            <input type='email' name='email' placeholder='email' value={formData.email} onChange={handleChange} />
            <input type='tel' name='phone' placeholder='ваш телефон' value={formData.phone} onChange={handleChange} />
            <textarea name='questions' placeholder='ваши вопросы' value={formData.questions} onChange={handleChange}></textarea>
            <button type='submit'>оТПРАВИТЬ</button>
            <p>
                Нажимая на кнопку, вы принимаете политику конфиденциальности и
                даете согласие на обработку персональных данных
            </p>
        </form>
            </div>
            )
          }

        </div>
    );
}

export default Home;