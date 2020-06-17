import React, { useState } from 'react'
import s from './Info.module.css'
import photo from '../img/photo.png'
import photo1 from '../img/photo1.png'
import photo2 from '../img/photo2.png'
import light from '../img/light.jpg'
import choose from '../img/choose.png'

const stateDescription = [
    {
        name: 'Класс:',
        description: 'Standart'
    },
    {
        name: 'Потребляемая мощность:',
        description: '59 Вт'
    },
    {
        name: 'Сила света:',
        description: '3459 Люмен = 7.5 лапм накаливания по 40 Вт'
    },
    {
        name: 'Гарантия:',
        description: '3 года'
    },
    {
        name: 'Монтаж:',
        description: 'Да'
    },
    {
        name: 'Итого сумма:',
        description: '2594 рублей'
    },
]
const stateNavBar = ['Обучающее видео', 'Оформление заказа', 'Оплата', 'Доставка', 'Гарантия', 'Возраст', 'Контакты']

const Info = (props) => {
    const [NumberOfPhoto, setNumberOfPhoto] = useState(1);
    const [ChooseKindLight, setKindOfLigth] = useState(1);
    return (
        <div className = {s.container}>
            <div className = {s.photo}>
                {NumberOfPhoto === 1 ? <img alt = '' className = {ChooseKindLight === 2 ? s.photos1 : ChooseKindLight === 3 ? s.photos2 : s.photos} src = {photo} /> :
                    NumberOfPhoto === 2 ? <img alt = '' className = {ChooseKindLight === 2 ? s.photos1 : ChooseKindLight === 3 ? s.photos2 : s.photos} src = {photo1} /> :
                        <img alt = '' className = {ChooseKindLight === 2 ? s.photos1 : ChooseKindLight === 3 ? s.photos2 : s.photos} src = {photo2} />}

                <div className = {s.turn}>
                    <span onClick={() => { setNumberOfPhoto(1) }} className = {NumberOfPhoto === 1 ? s.circle1 : s.circle}></span>
                    <span onClick={() => { setNumberOfPhoto(2) }} className = {NumberOfPhoto === 2 ? s.circle1 : s.circle}></span>
                    <span onClick={() => { setNumberOfPhoto(3) }} className = {NumberOfPhoto === 3 ? s.circle1 : s.circle}></span>
                </div>
            </div>
            <div className = {s.line}></div>
            <div className = {s.MainInformation}>
                <div className = {s.Information}>
                    <table>
                        {stateDescription.map(x =>
                            x.name === 'Класс:' ? <tr><td><div className = {s.name}>{x.name}</div></td>
                                <td><div className = {s.description}><button>{x.description}</button></div></td></tr> :
                                <tr><td><div className = {s.name}>{x.name}</div></td>
                                    <td><div className = {s.description}>{x.description}</div></td></tr>


                        )}
                    </table>
                </div>
                <div className = {s.chooseLight}>
                    <div className = {s.choose}>
                        <span className = {s.Info}>
                            <div onClick = {() => { props.setInfoAbout(true) }} className = {s.InfoButton}>i</div></span>
                        <span className = {s.chooseColor}><div className = {s.chooseColorButton}>Выберите цвет свечения</div></span>
                    </div>
                    <div className = {s.choosePhoto}>
                        <div className = {s.light}>{ChooseKindLight === 1 ? <img alt = '' className = {s.imgChoose} src = {choose} /> : ''}
                            <img alt = '' onClick={() => { setKindOfLigth(1) }} className = {s.LightPhoto} src = {light} />
                            <div className = {s.kind}>Теплый</div></div>
                        <div className = {s.light}>{ChooseKindLight === 2 ? <img alt='' className={s.imgChoose} src = {choose} /> : ''}
                            <img onClick={() => { setKindOfLigth(2) }} alt='' className = {s.LightPhoto} src = {light} />
                            <div className = {s.kind}>Дневной</div></div>
                        <div className = {s.light}>{ChooseKindLight === 3 ? <img alt='' className = {s.imgChoose} src = {choose} /> : ''}
                            <img alt = '' onClick={() => { setKindOfLigth(3) }} className = {s.LightPhoto} src = {light} />
                            <div className = {s.kind}>Холодный</div></div>
                    </div>
                </div>
            </div>
            {props.isMenuClick === true ?
                <div className = {s.menu}>
                    {stateNavBar.map(x =>
                        <div>
                            <div className = {s.point}>{x}</div>
                            <div className = {s.NavBarLine}></div>
                        </div>
                    )}

                </div> :
                ''}
        </div>
    )
}

export default Info