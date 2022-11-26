import Image from 'next/image'
import styles from '../styles/Featured.module.css'

const Featured = () => {

    const images = [
        "/img/featured.png",
        "/img/featured2.png",
        "/img/featured3.png"
    ]

    return (
        <div className={styles.img}>
            <img src="/img/featured.jpg" alt='' className={styles.imagen} />
        </div>
    )
}

export default Featured