import styles from './Card.module.css'

function Card({ text }) {
    return (
        <div className={styles.container} >
            <p>{text}</p>
        </div>
    )
}

export default Card;