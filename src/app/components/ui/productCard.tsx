import styles from "../../styles/components/productCard.module.css";

interface product {
    name: string;
    description: string;
    image: string;
}

interface Props {
    product: product;
    isActive?: boolean;
    onClick?: () => void;
}

export default function ProductCard({ product, isActive = false, onClick }: Props) {
    return (
        <div className={`${styles.wrapper} ${isActive ? styles.active : ''}`} onClick={onClick}>
            <img src={product.image} alt={product.name} className={styles.image} />
            <div className={styles.overlay}></div>
            <div className={styles.content}>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
            </div>
        </div>
    );
}
