"use client";

import { useState } from 'react';
import styles from '../styles/products.module.css';
import ProductCard from '../components/ui/productCard';

const products = [
    {
        name: 'Product 1',
        description: 'Description of Product 1',
        image: '/assets/background.webp',
    },
    {
        name: 'Product 2',
        description: 'Description of Product 2',
        image: '/assets/background.webp',
    },
    {
        name: 'Product 3',
        description: 'Description of Product 3',
        image: '/assets/background.webp',
    },
    {
        name: 'Product 4',
        description: 'Description of Product 4',
        image: '/assets/background.webp',
    },
]

export default function Products() {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    return (
        <div className={styles.wrapper}>
            <section className={styles.container}>
                <h1>Choisissez votre style</h1>
            </section>
            <section className={styles.products}>
                {products.map((product, index) => (
                    <div key={index} className={styles.productCard}>
                        <ProductCard
                            product={product}
                            isActive={index === selectedIndex}
                            onClick={() => setSelectedIndex(index)}
                        />
                    </div>
                ))}
            </section>
        </div>
    );
}
