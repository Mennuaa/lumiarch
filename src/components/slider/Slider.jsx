import React from 'react';
import './slider.css';
function ImageSlider({ slides, currentSlide, prevSlide, nextSlide }) {
    const slidesLength = slides.length ? slides.length : slides;
    const progressBarLeft = `${(100 / slidesLength) * currentSlide}%`;
    return (
        <div className="slider_sec">
            <div className='slider'>
                <div className='slider_section'>
                    <button className='slider_button' onClick={prevSlide}>
                        <img src='/images/icon/prev.svg' alt='Previous' />
                    </button>
                    <div className='slider_slide'>

                        <div className='slider_scroll-progres'>
                            <div style={{
                                left: progressBarLeft,
                                width: `${100 / slidesLength}%`,
                            }} className='slider_scroll-amount '>{`0${currentSlide + 1}/0${slidesLength}`}</div>
                            <div
                                className='slider_scroll-progres_bar'
                                style={{
                                    left: progressBarLeft,
                                    width: `${100 / slidesLength}%`,
                                }}
                            ></div>
                        </div>
                    </div>
                    <button className='slider_button' onClick={nextSlide}>
                        <img src='/images/icon/next.svg' alt='Next' />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ImageSlider;