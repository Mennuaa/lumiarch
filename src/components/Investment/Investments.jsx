import React, { useContext, useEffect, useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ImageSlider from '../slider/Slider';
import './investment.css';
import axios from 'axios';
import { ConfigContext } from '../../App';
import MainButton from '../buttons/MainButton';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Investments = ({
  sectionRefs,
  scrollToContact,
  onChangeSlide,
  quickMenu,
  setBurger,
  name,
  setName,
  phone,
  setPhone,
}) => {
  const config = useContext(ConfigContext);
  const initialSlides = [
    {
      first_text: config.Ru_block_1_header,
      second_text: config.Ru_block_1_subheader,
      background: '/images/bg1.webp',
      backgroundLarge: '/desktop/main/bg1.webp',
      icons: ['/images/icon1.svg', '/images/icon2.svg', '/images/icon3.svg'],
    },
    {
      first_text: config.Ru_block_2_header,
      second_text: config.Ru_block_2_subheader,
      background: '/images/bg2.webp',
      backgroundLarge: '/desktop/main/bg2.webp',
      icons: ['/images/icon4.svg', '/images/icon5.svg', '/images/icon6.svg'],
    },
    {
      first_text: config.Ru_block_3_header,
      second_text: config.Ru_block_3_subheader,
      background: '/images/bg3.webp',
      backgroundLarge: '/desktop/main/bg3.webp',
    },
    {
      first_text: config.Ru_block_4_header,
      second_text: config.Ru_block_4_subheader,
      background: '/images/bg4.webp',
      backgroundLarge: '/desktop/main/bg4.webp',
      clue: 'Заполните форму - получите 1 звезду...',
    },
    {
      first_text: config.Ru_block_5_header,
      second_text: config.Ru_block_5_subheader,
      background: '/images/bg5.webp',
      backgroundLarge: '/desktop/main/bg5.webp',
    },
    {
      first_text: config.Ru_block_6_header,
      done_text: 'Ждите от нас звонка...',
      second_text: config.Ru_block_6_subheader,
      terms: config.Ru_block_6_form_tip,
      terms_done: 'Если у вас появятся дополнительные вопросы...',
      background: '/images/bg6.webp',
      backgroundLarge: '/desktop/main/bg6.webp',
    },
  ];
  useEffect(() => {
    AOS.init({
      duration: 1200, 
    });
  }, []);

  const handlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const [slides, setSlides] = useState(initialSlides);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formDone, setFormDone] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 764);

  const changeSlide = (newSlide) => {
    setCurrentSlide(newSlide);
    onChangeSlide(slides[newSlide]);
  };

  const validateInputs = () => {
    let isValid = true;
    if (name.trim().length === 0) {
      toast.error('Пожалуйста, введите ваше имя');
      isValid = false;
    }
    const phoneRegex = /^\+?[0-9\s()-]+$/;
    if (!phoneRegex.test(phone) || phone.length < 7) {
      toast.error('Телефон должен содержать только цифры, пробелы, скобки или тире и быть не короче 7 символов');
      isValid = false;
    }
    return isValid;
  };

  async function getUserIp() {
    try {
      const response = await axios.get('https://api.ipify.org?format=json');
      return response.data.ip;
    } catch (error) {
      console.error('Error fetching user IP address', error);
      return null;
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateInputs()) {
      try {
        const userIp = await getUserIp();
        const userAgent = navigator.userAgent;
        const response = await axios.post(
          'http://landing.lumiarch.ru/api/short-form',
          { name, phone, ip: userIp, userAgent },
          { headers: { 'Content-Type': 'application/json; charset=UTF-8' } }
        );

        if (response.status === 200) {
          toast.success('Форма была успешно отправлена');
          const updatedSlides = slides.map((slide, index) =>
            index === currentSlide ? { ...slide, first_text: slide.done_text || slide.first_text } : slide
          );
          setFormDone(true);
          setSlides(updatedSlides);
        }
      } catch (error) {
        console.error('Ошибка при отправке формы', error);
        toast.error('Ошибка при отправке формы');
      }
    }
  };

  const nextSlide = () => changeSlide((currentSlide + 1) % slides.length);
  const prevSlide = () => changeSlide((currentSlide - 1 + slides.length) % slides.length);

  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth > 764);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const backgroundImage = isLargeScreen ? slides[currentSlide].backgroundLarge : slides[currentSlide].background;

  return (
    <div
      className='investment'
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '100vh',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <ToastContainer position='top-right' autoClose={5000} />

      <div className='container'>
        <div className='investment_section' {...handlers}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '10px' }}>
            <div>
              {currentSlide === 2 && <img className='visa' style={{ width: '30%', height: '30%' }} src='/images/icon/visa.svg' alt='' />}
              <div className='investment_section-text'>
                {formDone && currentSlide === 5 && <></>}
                <h2 data-aos="fade-right" dangerouslySetInnerHTML={{ __html: initialSlides[currentSlide].first_text }}></h2>
                {currentSlide === 1 && <></>}
                <p data-aos="fade-right" dangerouslySetInnerHTML={{ __html: slides[currentSlide].second_text }}></p>
                {slides[currentSlide].list && (
                  <div className='list'>
                    {slides[currentSlide].list.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </div>
                )}
              </div>
              {currentSlide === 5 && (
                <div>
                  <div className='inputs'>
                    <div style={formDone ? { display: 'flex', alignItems: 'center', gap: '20px' } : { display: 'flex' , gap: '70px' , marginTop: '20px' }}>
                      <input
                        className='inputs_input'
                        readOnly={formDone}
                        type='text'
                        placeholder={config.Ru_block_6_form_name}
                        value={name || ''}
                        onChange={(e) => setName(e.target.value)}
                      />
                      <input
                        className='inputs_input'
                        readOnly={formDone}
                        type='tel'
                        placeholder={config.Ru_block_6_form_phone}
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                      {!formDone && currentSlide === 5 && (
                        <MainButton text={'Сохранить'} onClick={handleSubmit} />
                        
                      )}
                    </div>
                    <p>{!formDone ? slides[currentSlide]?.terms : slides[currentSlide]?.terms_done}</p>
                  </div>
                </div>
              )}
            </div>
            {quickMenu && window.innerWidth > 1024 && (
              <div data-aos="fade-left" className='quick_menu'>
                <p>Быстрое меню</p>
                <ul>
                  <li onClick={() => sectionRefs[0].current.scrollIntoView({ behavior: 'smooth' })}>главная</li>
                  <li onClick={() => sectionRefs[1].current.scrollIntoView({ behavior: 'smooth' })}>О Камбодже</li>
                  <li onClick={() => sectionRefs[3].current.scrollIntoView({ behavior: 'smooth' })}>Wealth Mansion</li>
                  <li onClick={() => sectionRefs[2].current.scrollIntoView({ behavior: 'smooth' })}>Le Conde</li>
                  <li onClick={() => sectionRefs[7].current.scrollIntoView({ behavior: 'smooth' })}>видео</li>
                  <li onClick={() => sectionRefs[8].current.scrollIntoView({ behavior: 'smooth' })}>FAQ</li>
                  <li onClick={() => sectionRefs[9].current.scrollIntoView({ behavior: 'smooth' })}>О НАС</li>
                </ul>
                <a style={{ cursor: 'pointer' }} onClick={() => setBurger(true)}>
                  Ещё
                </a>
              </div>
            )}
          </div>

          <ImageSlider data-aos="fade-up" slides={slides} currentSlide={currentSlide} prevSlide={prevSlide} nextSlide={nextSlide} />
        </div>
      </div>
    </div>
  );
};
