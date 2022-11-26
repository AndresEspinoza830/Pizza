import Image from 'next/image';
import styles from '../styles/PizzaCard.module.css';

const PizzaCard = () => {
    return (
        <div className={styles.container}>
            <Image src="/img/pizza.png" width="200" height="200" />
            <h1 className={styles.title}>FIORI DI ZUCCA</h1>
            <span className={styles.price}>$19.90</span>
            <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, temporibus.</p>
        </div>
    )
}

export default PizzaCard