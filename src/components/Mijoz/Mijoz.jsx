import React from 'react'
import sty from './Tabs.module.css'
import mijoz from '../../img/mijoz.png'
export default function Mijoz() {
    return (
        <div className={sty.mijozPage}>
            <div className='maxsulotlar'>
                <div className='containerSecondPage'>
                    <div className='imgSection'>
                        <img src={mijoz} />
                    </div>
                    <div className='infoSection'>
                        <p className='title'>MIJOZ</p>
                        <h5>Mijozlar bilan bir tizimda bo’lish</h5>
                        <p className={sty.text}>Tizimga mijozlaringizni kiritishingiz mumkin. Mahsulot sotayotganda qaysi mijozga sotayotganingizni ham ko’rsatish imkoningiz bor. Mijozlar shaxs, yoki korxona bo’lishi mumkin</p>

                    </div>



                </div>
            </div>
        </div>
    )
}


