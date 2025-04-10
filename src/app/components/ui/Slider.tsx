'use client'

import { useState } from 'react';
import styles from "./slider.module.css";

interface SliderProps {
    members: {
        name: string;
        role: string;
    }[];
}

export default function Slider({ members }: SliderProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === members.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? members.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className={styles.slider}>
            <button className={styles.navButton} onClick={prevSlide}>&lt;</button>
            <div className={styles.sliderContent}>
                <div
                    className={styles.sliderTrack}
                    style={{
                        transform: `translateX(-${currentIndex * 100}%)`
                    }}
                >
                    {members.map((member, index) => (
                        <div key={index} className={styles.sliderItem}>
                            <h3>{member.name}</h3>
                            <p>{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
            <button className={styles.navButton} onClick={nextSlide}>&gt;</button>

            <div className={styles.dots}>
                {members.map((_, index) => (
                    <button
                        key={index}
                        className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
}