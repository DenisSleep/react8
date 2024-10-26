import { Link } from 'react-router-dom'
import style from './Card.module.css'
import card_img from '/src/assets/card.png'

export function Card({id,img,name,price}) {
    return (
        <>
            <div className={style.card}>
                <img src={img} alt={card_img} />
                <p className={style.card_name}>{name}</p>
                <div className={style.card_bottom}>
                    <p className={style.card_price}>{price} ₽</p>
                    <Link to={`/catalog/${id}`} className={style.card_btn}>Подробнее</Link>
                </div>
            </div>
        </>
    )
}