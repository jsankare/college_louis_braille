import styles from '../styles/about.module.css';
import Slider from '../components/ui/Slider';

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

const Members = [
    {
        name: "Léa",
        role: "Gestion",
    },
    {
        name: "Emilie",
        role: "Gestion",
        picture: "/images/allmight.webp",
        slogan: "Ici une phrase d'accroche définie par la personne",
    },
    {
        name: "Ioana",
        role: "Gestion",
    },
    {
        name: "Oriane",
        role: "Gestion",
    },
    {
        name: "Valentin",
        role: "Gestion",
    },
    {
        name: "Thiago",
        role: "Finance",
        picture: "/images/luffy.webp"
    },
    {
        name: "Lucas",
        role: "Finance",
    },
    {
        name: "Nolan",
        role: "Finance",
    },
    {
        name: "Thyméo",
        role: "Finance",
    },
    {
        name: "Lana",
        role: "Marketing",
        picture: "/images/pan.webp"
    },
    {
        name: "Hugo",
        role: "Marketing",
    },
    {
        name: "Eleona",
        role: "Marketing",
    },
    {
        name: "Maëlys",
        role: "Marketing",
    },
    {
        name: "Cécilia",
        role: "Marketing",
        slogan: "Ici une phrase d'accroche définie par la personne",
    },
    {
        name: "Nolhane",
        role: "Vente",
    },
    {
        name: "Matéo",
        role: "Vente",
        picture: "/images/skeleton.webp"
    },
    {
        name: "Amani",
        role: "Vente",
    },
    {
        name: "Emma",
        role: "Vente",
    },
    {
        name: "Kassidie",
        role: "Production",
        slogan: "Ici une phrase d'accroche définie par la personne",
    },
    {
        name: "Meghna",
        role: "Production",
    },
    {
        name: "Maxime",
        role: "Production",
    },
    {
        name: "Timéo",
        role: "Production",
    },
    {
        name: "Sacha",
        role: "Production",
    },
    {
        name: "Tiago",
        role: "Production",
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
                <h2>Notre équipe</h2>
                <Slider members={Members} />
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