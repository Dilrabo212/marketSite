import React from 'react'
import maxsulotlar from '../../img/savdo2.png'
import sty from './MaxsulotStyle.module.css'

export default function Maxsulotlar() {
    return (
        <div className='maxsulotlar'>
            <div className='containerSecondPage'>
                <div className='imgSection'>
                    <img src={maxsulotlar} />
                </div>
                <div className='infoSection'>
                    <p className='title'>Maxsulotlar</p>
                    <h5>Mahsulotlarni erkin boshqarish</h5>
                    <p className={sty.text}>Dastur orqali mahsulotingizni boshqarishingiz mumkin. Qancha narxga sotib olganingizni yozing. Ularni sotayotganingizda tizim omborda qancha qolgani, qancha foyda qilganingizni ozi hisoblaydi.</p>
                    <div className='list flex'>
                        <button className={sty.btn}>Analitika</button>
                        <button className={sty.btn}>Ombor</button>
                        <button className={sty.btn}>Moliya</button>
                        <button className={sty.btn}>Marketing</button>
                    </div>
                    <hr />
                    <p className={sty.text}>O'rnatilgan hisobotlar biznesingiz haqidagi muhim savollarga javob berishga yordam beradi - qaysi lavozimlar eng daromadli, qaysi xodimlarning o'rtacha tekshiruvi yuqori, oyiga chegirmalarga qancha pul sarflanadi.</p>
                </div>



            </div>
        </div>
    )
}
