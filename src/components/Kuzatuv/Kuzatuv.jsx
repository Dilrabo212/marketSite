import React from 'react'
import sty from './Kuzatuvstyle.module.css'
import kuzatuv from '../../img/kuzatuv.png'

export default function Kuzatuv() {
    return (
        <div className={sty.kuzatuv}>
            <div className='SecondPage'>
                <div className='containerSecondPage'>
                    <div className='infoSection'>
                        <p className='title'>KUZATUV</p>
                        <h5>Biznesingizni dunyoning xohlagan nuqtasidan boshqaring</h5>
                        <p className={sty.midletext}>Android uchun bepul Boshqar mobil ilovasi yordamida korxonangizni smartfoningiz orqali boshqaring</p>
                        <ul className='list'>
                            <li>
                                Hisob-kitoblarni tekshirish
                            </li>
                            <li>
                                Qoldirlarni boshqarish

                            </li>
                            <li>
                                Chiqim tranzaksiyalarini qo'shish
                            </li>
                        </ul>
                    </div>
                    <div className='imgSection'>
                        <img src={kuzatuv} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
