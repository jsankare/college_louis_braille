import CustomLink from "@/app/components/ui/customLink";
import styles from "./page.module.css";

export default function Home() {
    return (
        <section className={styles.container}>
            <section className={styles.heroSection}>
                <div className={styles.background}></div>
                <div className={styles.content}>
                    <h1>JEWELS</h1>
                    <p>bijoux désirés, à toi de les personnaliser</p>
                    <CustomLink link="/products" label="Voir les produits" background={true} />
                </div>
            </section>
            <section className={styles.bottomSection}>
                <div>
                    <h3>Bonjour, bienvenue chez Jewels ! Nous espérons que vous trouverez votre bijou à personnaliser.</h3>
                </div>
                <div className={styles.bottomSection__mission}>
                    <h2>Notre mission</h2>
                    <p>Pour chaque achat effectué, une partie des bénéfices sera reversée pour soutenir les enfants
                        dans le besoin. Ensemble, nous pouvons faire une différence tout en étant stylés.</p>
                </div>
            </section>
        </section>
    );
}
