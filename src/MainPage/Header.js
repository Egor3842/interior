import React from 'react'
import s from './Header.module.css'
import basket from '../img/basket.png'

const Header = (props) => {
    return (
        <div className = {s.container}>
            <h4 className = {s.logo}>
                Fulogy
            </h4>
            <div className = {s.menu}>
                <span> <img src = {basket} alt = '' /></span>
                <div className = {s.Amount}>1</div>
                {props.isMenuClick === false ?
                    <span className = {s.burger} onClick = {() => { props.setMenuClick(true) }}>
                        <div className = {s.line}></div>
                        <div className = {s.line}></div>
                        <div className = {s.line}></div>
                    </span> :
                    <span className = {s.burger} onClick = {() => { props.setMenuClick(false) }}>
                        <span className = {s.close}></span>
                    </span>
                }


            </div>
        </div>
    )
}

export default Header