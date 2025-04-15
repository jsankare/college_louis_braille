'use client'

import { useState, useMemo } from 'react';
import styles from "./slider.module.css";

interface Member {
    name: string;
    role: string;
}

interface SliderProps {
    members: Member[];
}

export default function Slider({ members }: SliderProps) {
    const [currentRole, setCurrentRole] = useState<string>('Gestion');
    const [currentIndex, setCurrentIndex] = useState(0);

    // Group members by role
    const roleGroups = useMemo(() => {
        const groups: { [key: string]: Member[] } = {};
        members.forEach(member => {
            if (!groups[member.role]) {
                groups[member.role] = [];
            }
            groups[member.role].push(member);
        });
        return groups;
    }, [members]);

    // Get unique roles
    const roles = useMemo(() => Object.keys(roleGroups), [roleGroups]);

    // Get current role members
    const currentMembers = roleGroups[currentRole] || [];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === currentMembers.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? currentMembers.length - 1 : prevIndex - 1
        );
    };

    // Reset current index when changing roles
    const handleRoleChange = (role: string) => {
        setCurrentRole(role);
        setCurrentIndex(0);
    };

    return (
        <div className={styles.sliderContainer}>
            <div className={styles.tabs}>
                {roles.map((role) => (
                    <button
                        key={role}
                        className={`${styles.tab} ${currentRole === role ? styles.activeTab : ''}`}
                        onClick={() => handleRoleChange(role)}
                    >
                        {role}
                        <span className={styles.memberCount}>
                            ({roleGroups[role].length})
                        </span>
                    </button>
                ))}
            </div>

            <div className={styles.slider}>
                <button className={styles.navButton} onClick={prevSlide}>&lt;</button>
                <div className={styles.sliderContent}>
                    <div
                        className={styles.sliderTrack}
                        style={{
                            transform: `translateX(-${currentIndex * 100}%)`
                        }}
                    >
                        {currentMembers.map((member, index) => (
                            <div
                                key={index}
                                className={`${styles.sliderItem} ${index === currentIndex ? styles.active : ''}`}
                            >
                                <h3>{member.name}</h3>
                                <p>{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <button className={styles.navButton} onClick={nextSlide}>&gt;</button>

                <div className={styles.dots}>
                    {currentMembers.map((_, index) => (
                        <button
                            key={index}
                            className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
                            onClick={() => setCurrentIndex(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}