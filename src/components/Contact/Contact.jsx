import React, { useState } from 'react'
import { toast } from 'react-toastify';
export default function Contact() {
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
        const phoneRegex = /^\+?[0-9\s()-]+$/;
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
        

        if (isValid) {
            console.log('Form is valid:', formData);
            toast.success('Спасибо за вашу заявку! Мы свяжемся с вами в ближайшее время.');

        }
    };

  return (
    <div
    className='form__section'
    style={{
        background: "url('images/bg-form.png')",
        width: '100%',
        height: 'max-content',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    }}
>
    <div className='container'>
        <h2>
            <div>скорее</div> Напишите нам!
        </h2>
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
</div>
  )
}
