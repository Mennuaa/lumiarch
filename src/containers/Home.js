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
import './Home.css';
import { Acquaintance } from '../components/Popups/Acquaintance/Acquaintance';

function Home() {
    const [currentSection, setCurrentSection] = useState(0);
    const [isAtBottom, setIsAtBottom] = useState(false);
    const sectionRefs = [
        useRef(null), useRef(null), useRef(null), useRef(null),
        useRef(null), useRef(null), useRef(null), useRef(null),
        useRef(null), useRef(null)
    ];

    const observer = useRef(new IntersectionObserver((entries) => {
        const visibleEntry = entries.find(entry => entry.isIntersecting);
        if (visibleEntry) {
            const index = sectionRefs.findIndex(ref => ref.current === visibleEntry.target);
            setCurrentSection(index);
        }
    }, { threshold: 0.5 }));

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
            setCurrentSection(nextSection);
        }
    };
    const [background, setBackground] = useState('/images/bg1.webp')
	const [backgroundCambodia, setBackgroundCambodia] = useState(
		'/mobile/2 cambodia/bg-scroll.webp'
	)
	const [show, setShow] = useState(true)
	window.onscroll = function () {
		window.scrollY <= 1000 ? setShow(true) : setShow(false)
		console.log(show)
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
    return (
        <div className='home'>
            <Header />
            <div  ref={sectionRefs[0]}>< Investments onChangeSlide={handleSlideChange} /></div>
            <div  ref={sectionRefs[1]}><Cambodia onChangeSlide={handleSlideChangeCambodia} id='cambodia' /></div>
            {/* <div  ref={sectionRefs[2]}><Acquaintance /></div> */}
            <div  ref={sectionRefs[2]}><Object onChangeSlide={handleSlideChangeObject} /></div>
            <div ref={sectionRefs[3]}><Desc onChangeSlide={handleSlideChangeDesc}/></div>
            <div ref={sectionRefs[4]}><Utils onChangeSlide={handleSlideChangeDesc} /></div>
            <div ref={sectionRefs[5]}><Space onChangeSlide={handleSlideChangeDesc} /></div>
            <div ref={sectionRefs[6]}><Arch onChangeSlide={handleSlideChangeDesc} /></div>
            <div ref={sectionRefs[7]}><Video /></div>
            <div ref={sectionRefs[8]}><Faq /></div>
            <div ref={sectionRefs[9]}><About /></div>
            <Footer />
            <div className='middle_button'>
				<a href=''>узнать больше</a>
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
        </div>
    );
}

export default Home;