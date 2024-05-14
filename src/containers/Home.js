// src/pages/Home.js
import React from 'react';
import Header from '../components/Header';
import { Investments } from '../components/Investment/Investments';
import './Home.css';



function Home() {
    return (
        <div className="home">
            <Header />
            <Investments/>
            <div className="middle_button">
                <a href="">узнать больше</a>
            </div>
            <div className="middle_buttons">
                <img src="/images/icon/calculator-icon.svg" alt="" />
                <div className='middle_buttons-scroll'>
                    <p>ВНИЗ</p>
                    <img src="/images/icon/arrow-down-questions.svg" alt="" />
                </div>
                <img src="/images/icon/share-icon.svg" alt="" />
            </div>
        </div>
    );
}

export default Home;
