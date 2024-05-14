// src/pages/Home.js
import React from 'react';
import './Home.css';
import Header from '../components/Header';



function Home() {
    return (
        <div className="home">
            <div className="container">
            <Header />
            <div className="middle_texts_section">
                <div className="middle_texts">
                    <h2>
                        <span> Инвестиции </span>
                        в недвижимость Камбоджи "под ключ"
                    </h2>
                    <p>  Мы предлагаем вам инвестиции в недвижимость Камбоджи "под ключ" </p>
                </div>

            </div>
            <div className="middle_button">
                <a href="">узнать больше</a>
            </div>
            </div>
        </div>

    );
}

export default Home;
