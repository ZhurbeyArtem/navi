import style from './CustomCard.module.css'
import { IHero } from "../../interfaces/Hero.interfaces"
import { FC } from "react"
import { Link } from 'react-router-dom'

const CustomCard: FC<IHero> = ({
  id,
  name,
  height,
  mass,
  hair_color,
  skin_color,
  eye_color,
  gender
}) => {
  return (
    <div className={style.card} title={name}>
      <div className={style.cardHeader}>
        <h3 className={style.cardTitle}>{name}</h3>
        <Link className={style.cardLink} to={`actor/${id}`}>More info</Link>
      </div>
      <div className={style.cardBody}>
        <div className={style.cardGrid}><span>Height</span><p>{height}</p></div>
        <div className={style.cardGrid}><span>Mass</span><p>{mass}</p></div>
        <div className={style.cardGrid}><span>Hair color</span><p>{hair_color}</p></div>
        <div className={style.cardGrid}><span>Skin color</span> <p>{skin_color}</p></div>
        <div className={style.cardGrid}><span>Eye color</span><p>{eye_color}</p></div>
        <div className={style.cardGrid}><span>Gender</span><p>{gender}</p></div>
      </div>
    </div>
  )
}

export default CustomCard