import React from 'react'
import sty from './ishchilarStyle.module.css'
import ishchilar from '../../img/workers.png'

export default function Ishchilar() {
    return (
        <div>
            <div className={sty.mijozPage}>
                <div className='maxsulotlar'>
                    <div className='containerSecondPage'>
                        <div className='imgSection'>
                            <img src={ishchilar} />
                        </div>
                        <div className='infoSection'>
                            <p className='title'>ISHCHILAR</p>
                            <h5>Istalgancha ishchilarni tizimga kiritishingiz mumkin</h5>
                            <p className={sty.text}>Istasangiz ularga tizimdan foydalanish uchun ruxsat bering. Misol uchun bir ishchingiz ombor uchun mahsulot sotib olishga huquqi bo’lsa, ikkinchisi faqat ularni sotish uchun huquqi bo’lsin. Kimdir esa faqat mijozlar bilan shug’ullansin</p>

                        </div>



                    </div>
                </div>
            </div>
        </div>
    )
}
