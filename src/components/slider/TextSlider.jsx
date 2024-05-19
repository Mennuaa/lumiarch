import React, { useState } from 'react';
import './slider.css';

function TextSlider({ slides, currentSlide, prevSlide, nextSlide, setSlideName }) {
    const slidesLength = slides.length;
    const progressBarLeft = `${(100 / slidesLength) * currentSlide}%`;
    const [currentLabel, setCurrentLabel] = useState(slides[currentSlide].label);

    const handleLabelChange = (e) => {
        const newLabel = e.target.value;
        setCurrentLabel(newLabel);
        setSlideName(currentSlide, newLabel); // Update the parent component with the new label
    };

    return (
        <div className="slider_sec">
            <div className='slider'>
                <div className='slider_section'>
                    <button className='slider_button' onClick={prevSlide}>
                        <img src='/images/icon/prev.svg' alt='Previous' />
                    </button>
                    <div className='slider_slide'>
                        <div className='slider_scroll-progres'>
                            {/* Display all slide labels with conditional styling */}
                            {slides.map((slide, index) => (
                                <p className='slider_scroll-amount' key={index} style={{
                                    position: 'absolute',
                                    left: index === 0 ? 0 : 'auto',
                                    right: index === 1 ? 0 : 'auto',
                                    bottom: 10,
                                    color: currentSlide === index ? 'white' : 'gray', // Active slide label is white, others are gray
                                    fontWeight: currentSlide === index ? 'bold' : 'normal'
                                }}>
                                    {slide.label}
                                </p>
                            ))}

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

export default TextSlider;