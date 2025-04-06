import styles from '../styles/contact.module.css';

const contactInformations = [
    {
        title: "Email",
        value: "contact@me.com",
        icon: "/mail.svg",
    },
    {
        title: "Adresse",
        value: "123 Rue de la Mode, Paris, France",
        icon: "/location.svg",
    },
];

export default function Contact() {
    return (
        <div className={styles.wrapper}>
            <section className={styles.container}>
                <h1>Nous Contacter</h1>

                <div className={styles.grid}>
                    <div className={styles.left}>
                        {contactInformations.map((contact) => (
                            <div className={styles.info} key={contact.title}>
                                <img src={contact.icon} alt={contact.title} className={styles.icon} />
                                <div>
                                    <h3 className={styles.title}>{contact.title}</h3>
                                    <p className={styles.value}>{contact.value}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className={styles.card}>
                        <h3>Visit Our Physical Sale</h3>
                        <p>
                            Join us at our upcoming sale event where you can experience our products in person and get
                            personalized styling advice from our team.
                        </p>
                        <div className={styles.event}>
                            <img src="/clock.svg" alt="clock" className={styles.icon} />
                            <p>15 Mai 2025 | 12:30 - 14:00</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
