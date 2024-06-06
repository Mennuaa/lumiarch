import React, { useState, useEffect, useRef } from 'react';
import './text-slider.css';
import { useSwipeable } from 'react-swipeable';

function TextSlider({ slides, currentSlide, prevSlide, nextSlide, setSlideName }) {
    const slidesLength = slides.length;
    const progressBarLeft = `${(100 / slidesLength) * currentSlide}%`;
    const [currentLabel, setCurrentLabel] = useState(slides[currentSlide].label);
    const sliderRef = useRef(null);

    const handleLabelChange = (e) => {
        const newLabel = e.target.value;
        setCurrentLabel(newLabel);
        setSlideName(currentSlide, newLabel); // Update the parent component with the new label
    };

    const handlers = useSwipeable({
        onSwipedLeft: () => nextSlide(),
        onSwipedRight: () => prevSlide(),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true 
    });

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'ArrowLeft') {
                prevSlide();
            } else if (event.key === 'ArrowRight') {
                nextSlide();
            }
        };

        const sliderElement = sliderRef.current;
        sliderElement.addEventListener('keydown', handleKeyDown);

        return () => {
            sliderElement.removeEventListener('keydown', handleKeyDown);
        };
    }, [prevSlide, nextSlide]);

    useEffect(() => {
        // Ensure the current label is updated when the current slide changes
        setCurrentLabel(slides[currentSlide].label);
    }, [currentSlide, slides]);

    return (
        <div className="text-slider_sec" {...handlers} tabIndex="0" ref={sliderRef}>
            <div className='text-slider'>
                <div className='text-slider_section'>
                    <button className='text-slider_button' onClick={prevSlide}>
                        <img src='/images/icon/prev.svg' alt='Previous' />
                    </button>
                    <div className='text-slider_slide'>
                        <div className='text-slider_scroll-progres'>
                            {/* Display all slide labels with conditional styling */}
                            {slides.map((slide, index) => (
                                <p className='text-slider_scroll-amount' key={index} style={{
                                    position: 'absolute',
                                    left: index === 0 ? 0 : 'auto',
                                    right: index === 1 ? 0 : 'auto',
                                    bottom: 10,
                                    fontSize: 14,
                                    color: currentSlide === index ? 'white' : 'gray', // Active slide label is white, others are gray
                                    fontWeight: currentSlide === index ? 'bold' : 'normal'
                                }}>
                                    {slide.label}
                                </p>
                            ))}

                            <div
                                className='text-slider_scroll-progres_bar'
                                style={{
                                    left: progressBarLeft,
                                    width: `${100 / slidesLength}%`,
                                }}
                            ></div>
                        </div>
                    </div>
                    <button className='text-slider_button' onClick={nextSlide}>
                        <img src='/images/icon/next.svg' alt='Next' />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TextSlider;
