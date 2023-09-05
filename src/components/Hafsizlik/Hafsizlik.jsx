import React from 'react'
import sty from './hafsizlikStyle.module.css'
import hafsizlik from '../../img/security.png'
export default function Hafsizlik() {
    return (
        <div>
            <div className='SecondPage'>
                <div className='containerSecondPage'>
                    <div className='infoSection'>
                        <p className='title'>XAVFSIZLIK</p>
                        <h5>Eng muhimi: hech qanday o’g’rilikka yo’l qo’yilmaydi</h5>
                        <p className={sty.text} >Odatda eng yoqimsiz narsalardan biri bu hodimlarga ishonchsizlikdir. Bizning dasturimiz shunday aniq hisob olib boradiki ko’nglingiz doim xotirjam bo’lsin. Hech qanday o’grilik, mavhumlikka yo’l qo’yilmaydi. Hammasi shaffof bo’ladi. Telefoningiz orqali har bir operatsiyalarni kuzatib tura olasiz</p>
                    </div>
                    <div className='imgSection'>
                        <img src={hafsizlik} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
