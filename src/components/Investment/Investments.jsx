import React from 'react'
import './investment.css'
export const Investments = () => {
	return (
		<div className='investment'>
            <div className="container">
                <div className="investment_section">
                    <div className="investment_section-text">
                        <h2 className=''>
                            <div> Инвестиции </div>
                            в недвижимость Камбоджи "под ключ"
                        </h2>
                        <p>Мы предлагаем: гарантированный возврат инвестиций в недвижимость Пном Пеня напрямую от застройщика</p>
                    </div>

                </div>
                <div className="slider">
                    <div className="slider_section">
                        <button className='slider_button'><img src="/images/icon/prev.svg" alt="" /></button>
                        <div className='slider_slide'>
                            <div className="slider_scroll-amount">
                            01/06
                            </div>
                            <div className="slider_scroll-progres">
                                <div className="slider_scroll-progres_bar"></div>
                            </div>
                        </div>
                        <button className='slider_button'><img src="/images/icon/next.svg" alt="" /></button>
                    </div>
                   

                </div>
            </div>
			 
		</div>
	)
}
