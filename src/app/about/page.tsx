import styles from '../styles/about.module.css';

const Values = [
    {
        icon: '🎨',
        text: 'Excellence du design - Chaque pièce est fabriquée avec une attention particulière aux détails',
    },
    {
        icon: '💝',
        text: 'Impact social - Soutenir les enfants dans le besoin grâce à nos ventes',
    },
    {
        icon: '🌱',
        text: 'Innovation - Repousser constamment les limites de la personnalisation',
    },
    {
        icon: '🤝',
        text: 'Communauté - Construire des relations solides avec nos clients',
    },
]

export default function About() {
    return (
        <div className={styles.wrapper}>
            <section className={styles.header}>
                <h1>A propos de Jewels</h1>
                <p>
                    Fondée par des étudiants passionnés, JEWELS représente le parfait mélange de style,
                    d&#39;innovation et de responsabilité sociale. Notre parcours a commencé avec une idée simple : 
                    créer des accessoires personnalisables qui non seulement ont fière allure, mais qui font 
                    également une différence dans le monde.
                </p>
            </section>
            <section className={styles.values}>
                <h2>Nos valeurs</h2>
                <div className={styles.valuesContainer}>
                    <ul>
                        {Values.map((value, index) => (
                            <li key={index} className={styles.valueItem}>
                                <span className={styles.icon}>{value.icon}</span>
                                <span className={styles.text}>{value.text}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
            <section className={styles.promise}>
                <h2>Notre promesse</h2>
                <p>
                    Nous nous engageons à offrir des produits de la plus haute qualité, tout en ayant un impact positif sur la société. 
                    Chaque achat contribue à améliorer la vie des enfants dans le besoin.
                </p>
            </section>
        </div>
    );
}
