import Link from "next/link";
import styles from "./customLink.module.css";

export default function CustomLink({label, link, background}: { label: string; link: string; background?: boolean; }) {
    return (
        <Link href={link} className={background ? styles.customlink__background : ''}>
            {label}
        </Link>
    );
}
