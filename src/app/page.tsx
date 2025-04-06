import CustomLink from "@/app/components/ui/customLink";
import styles from "./page.module.css";

export default function Home() {
    return (
        <section className={styles.container}>
            <section className={styles.heroSection}>
                <img src="/assets/logo-circle.webp" alt="Logo" className={styles.logo} />
                <div className={styles.background}></div>
                <div className={styles.content}>
                    <h1>JEWELS</h1>
                    <p>bijoux désirés, à toi de les personnaliser</p>
                    <CustomLink link="/products" label="Voir les produits" background={true} />
                </div>
            </section>
            <section className={styles.bottomSection}>
                <div>
                    <h3>Bonjour, bienvenue chez Jewels&nbsp;! Nous espérons que vous trouverez votre bijou à personnaliser.</h3>
                </div>
            </section>
        </section>
    );
}
