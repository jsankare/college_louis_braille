import styles from '../styles/contact.module.css';

const contactInformations = [
    {
        title: "Email",
        value: "Cliquez pour prendre contact avec nous !",
        icon: "/mail.svg",
        link: "mailto:lbjewels77@gmail.com",
    },
    {
        title: "Adresse",
        value: "123 Rue de la Mode, Paris, France",
        icon: "/location.svg",
        link: "https://www.google.com/maps/place/Middle+School+Louis+Braille/@48.8965192,2.8051504,17z/data=!3m1!4b1!4m6!3m5!1s0x47e61d97445f427b:0x7545200b47346b3!8m2!3d48.8965192!4d2.8051504!16s%2Fg%2F1th27pxs?hl=en&entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoASAFQAw%3D%3D"
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
                                    <a href={contact.link} className={styles.value}>{contact.value}</a>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className={styles.card}>
                        <h3>Notre Vente Physique</h3>
                        <p>
                            Rejoignez-nous lors de notre prochain événement de vente où vous pourrez découvrir nos produits en
                            personne et obtenir des conseils de style personnalisés de notre équipe. 
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
