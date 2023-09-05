import React from 'react'
import tranzacsiya from '../../img/transaction.png'
import sty from './tranzacsiyaStyle.module.css'
export default function TranzAcsiyalar() {
    return (
        <div>
            <div className={sty.kuzatuv}>
                <div className='SecondPage'>
                    <div className='containerSecondPage'>
                        <div className='infoSection'>
                            <p className='title'>TRANZAKSIYALAR</p>
                            <h5>Barcha tranzaksiyalar qo’lingizda</h5>
                            <p className={sty.midletext}>Barcha sotgan va sotib olgan mahsulotlaringizni istalgan paytda ko’rishingiz mumkin. Qarzga sotilgan mahsulotlarni puli to’langanligini ham belgilash mumkin.</p>
                        </div>
                        <div className='imgSection'>
                            <img src={tranzacsiya} alt="" />
                        </div>
                    </div>
                </div>
            </div>




        </div>
    )
}
