import React, {useState} from 'react'
import s from './Footer.module.css'

const state = ['Вариант кухни', 'Размеры', 'Сенсор','Питающий кабель','Цвет свечения',' Монтаж','Корзина']

const Footer = (props) => {
    const [isButtonClick, setButtonClick] = useState(4);
    return (
        <div className = {s.container}>
           <span>{state.map((x, key)=><button className = {isButtonClick === key ? s.color : ''} onClick = {() => {setButtonClick(key)}}>{x}</button>)}</span>
           {props.isMenuClick === true ? <div className = {s.menu}>
           <div  className = {s.point}>Партнерам</div>
            <div className = {s.NavBarLine}></div>
           </div> :''}
        </div>
    )
}

export default Footer