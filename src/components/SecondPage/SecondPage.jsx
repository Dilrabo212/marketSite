import React from 'react'
import './style.css'
import savdo1 from '../../img/savdo.img1.png'

export default function SecondPage() {
    return (
        <div className='SecondPage'>
            <div className='containerSecondPage'>
                <div className='infoSection'>
                    <p className='title'>SAVDO</p>
                    <h5>Savdogarlar uchun eng qulay imkoniyatlar</h5>
                    <ul className='list'>
                        <li>
                            Mahsulotlaringizni savdo sahifasida soting
                        </li>
                        <li>
                            Qarzga sotilgan mahsulotlarni hisoblash

                        </li>
                        <li>
                            Xarid qilish va sotish bo'yicha batafsil ma'lumotlarni olish
                        </li>
                    </ul>
                </div>
                <div className='imgSection'>
                    <img src={savdo1} alt="" />
                </div>
            </div>
        </div>
    )
}
