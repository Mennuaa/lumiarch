import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import './contact.css';
import axios from 'axios';
import { Oval } from 'react-loader-spinner';
import { ConfigContext } from '../../App';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Contact({ name: initialName, phone: initialPhone }) {
    useEffect(() => {
		AOS.init({
		  duration: 1200, 
		});
	  }, []);
    const [name, setName] = useState(initialName || '');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState(initialPhone || '');
    const [questions, setQuestions] = useState('');
    const [isLoading, setIsLoading] = useState(false);
	const config = useContext(ConfigContext);

    useEffect(() => {
        setName(initialName || '');
        setPhone(initialPhone || '');
    }, [initialName, initialPhone]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'phone':
                setPhone(value);
                break;
            case 'questions':
                setQuestions(value);
                break;
            default:
                break;
        }
    };

    const validateEmail = (email) => {
        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return emailRegex.test(email);
    };

    const validatePhone = (phone) => {
        const phoneRegex = /^\+?[0-9\s()-]+$/;
        return phoneRegex.test(phone) && phone.length >= 7;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let isValid = true;

        if (!name.trim()) {
            toast.error('Пожалуйста, введите ваше имя и фамилию');
            isValid = false;
        }

        if (!validateEmail(email)) {
            toast.error('Введите корректный email');
            isValid = false;
        }

        if (!validatePhone(phone)) {
            toast.error('Телефон должен содержать только цифры, пробелы, скобки или тире и быть не короче 7 символов');
            isValid = false;
        }

        if (isValid) {
            setIsLoading(true);
            try {
                const userIp = await getUserIp(); // Function to fetch the user's IP address
                const userAgent = navigator.userAgent; // Get the user agent from the browser
        
                const response = await axios.post('http://landing.lumiarch.ru/api/detailed-form', {
                    name,
                    phone,
                    email,
                    question: questions || '',
                    ip: userIp,
                    userAgent: userAgent,
                }, {
                    headers: {
                        'Content-Type': 'application/json; charset=UTF-8'
                    }
                });
                if (response.status === 200) {
                    toast.success('Спасибо за вашу заявку! Мы свяжемся с вами в ближайшее время.');
                }
            } catch (error) {
                console.error('Ошибка при отправке формы', error);
                toast.error('Ошибка при отправке формы, попробуйте еще раз.');
            } finally {
                setIsLoading(false);
            }
        }
        
        async function getUserIp() {
            try {
                const response = await axios.get('https://api.ipify.org?format=json');
                return response.data.ip;
            } catch (error) {
                console.error('Error fetching user IP address', error);
                return null;
            }
        }
        
    };

    return (
        <div
            className='form__section'
            style={{
                background: window.innerWidth <= 768 ? "url('images/bg-form.png')" : "url('desktop/contact-bg.webp')",
                width: '100%',
                height: 'max-content',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
            }}
        >
            <div className='container' style={{ width: '100%' }}>
                <div className='form__section-flex'>
                    <h2 data-aos="fade-right" className='mainh2' dangerouslySetInnerHTML={{ __html: config.Ru_contactus_header }}>
                       
                    </h2>
                    <form onSubmit={handleSubmit}>
                        <input
                        data-aos="fade-up"
                            type='text'
                            name='name'
                            placeholder={config.Ru_contactus_form_name}
                            value={name}
                            onChange={handleChange}
                        />
                        <input
                        data-aos="fade-up"
                        type='email'
                            name='email'
                            placeholder={config.Ru_contactus_form_email}
                            value={email}
                            onChange={handleChange}
                        />
                        <input
                        data-aos="fade-up"
                        type='tel'
                            name='phone'
                            placeholder={config.Ru_contactus_form_phone}
                            value={phone}
                            onChange={handleChange}
                        />
                        <textarea
                        data-aos="fade-up"
                        name='questions'
                            placeholder={config.Ru_contactus_form_questions}
                            value={questions}
                            onChange={handleChange}
                        ></textarea>
                        
                        <button data-aos="fade-up" type='submit' disabled={isLoading}>{config.Ru_contactus_form_submit}</button>
                        {isLoading && (
                            <div className="loading-overlay">
                                <Oval
                                    height={100}
                                    width={100}
                                    color="blue"
                                    visible={true}
                                    ariaLabel='oval-loading'
                                    secondaryColor="blue"
                                    strokeWidth={2}
                                    strokeWidthSecondary={2}
                                />
                                <style jsx>{`
                                    .loading-overlay {
                                        position: fixed;
                                        top: 0;
                                        left: 0;
                                        width: 100%;
                                        height: 100%;
                                        background: rgba(255, 255, 255, 0.8);
                                        display: flex;
                                        justify-content: center;
                                        align-items: center;
                                        z-index: 9999;
                                    }
                                `}</style>
                            </div>
                        )}
                        <p data-aos="fade-up">
                           {config.Ru_contactus_form_tip}
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}
