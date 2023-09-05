import React from 'react'
import './style.css'
import { Logo } from '../../svg'
import phone from '../../img/phone.svg'
import flag from '../../img/uzbFlag.png'

export default function Header() {
    return (
        <div className='header'>
            <div className='container flex'>
                <Logo />
                <div className='headerWrapper'>
                    <div className='headerWrapLeftInfo'>
                        <span className='quetion'>KimlarUchun?</span>
                        <span className='navigation'>Narxlar</span>
                    </div>
                    <div className='HearderWrapperRightInfo'>
                        <div className='contact'>
                            <img src={phone} alt="/" />
                            <span className='phonNumber'>+998999999999</span>
                        </div>
                        <div className='leanguage'>
                            <img className='imgFlag' src={flag} alt="/" />
                            <select className='select'>
                                <option value="uzb">Uzb</option>
                                <option value="rus">Rus</option>
                                <option value="eng">Eng</option>
                            </select>
                        </div>
                        <a className="kirish" href="/">Kirish</a>
                        <button className='royxatBtn'>Ro'yxatdan o'tish</button>
                    </div>
                </div>
            </div>

        </div>
    )
}



