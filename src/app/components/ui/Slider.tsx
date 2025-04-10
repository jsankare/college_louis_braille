import styles from "../styles/slider.module.css";

interface SliderProps {
    members: {
        name: string;
        role: string;
    }[];
}

export default function Slider({members}: SliderProps) {
    return (
        <div className={styles.slider}>
            {members.map((member, index) => (
                <div key={index} className={styles.sliderItem}>
                    <h3>{member.name}</h3>
                    <p>{member.role}</p>
                </div>
            ))}
        </div>
    );
}