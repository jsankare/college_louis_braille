// import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <p>toto main</p>
        <Link href="/about">Aller à la page À propos</Link>
      </main>
    </div>
  );
}
