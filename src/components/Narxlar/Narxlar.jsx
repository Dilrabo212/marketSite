import React from 'react'
import sty from './narxlarStyle.module.css'
export default function Narxlar() {
    return (
        <div className={sty.narxlar}>
            <div className={sty.containerNarxlar}>
                <div className={sty.infoSection}>
                    <h3 className={sty.title}>Narxlar</h3>
                    <p className={sty.text}>Tizimdan foydalanish uchun oylik to'lov tarif rejalariga mos ravishda belgilanadi.
                        Agar 17% tejamoqchi bo'lsangiz, bir yilga to'lov qilishni tavsiya qilamiz.</p>
                </div>
                <div className={sty.price}>
                    <div className={sty.section1}>
                        <span className={sty.span1}>To'lov muddati
                        </span>
                        <button className={sty.buttonCheked1}>Oylik</button>
                        <button className={sty.buttonCheked2}>Yillik</button>
                    </div>
                    <div className={sty.section2}>
                        <div className={sty.card}>
                            <button className={sty.btn} >
                                Lite
                            </button>
                            <span className={sty.spantitle}>
                                Kichik biznes
                            </span>
                            <b className={sty.b}>490.000 <span className={sty.span}>SO'M / YIL</span></b>
                        </div>
                        <div className={sty.card}>
                            <button className={sty.btn1}>
                                Standart
                            </button>
                            <span className={sty.spantitle}>
                                O'rta biznes
                            </span>
                            <b className={sty.b}>990.000 <span className={sty.span}>SO'M / YIL</span></b>

                        </div>
                        <div className={sty.card}>
                            <button className={sty.btn2}>
                                Premium
                            </button>
                            <span className={sty.spantitle}>
                                Katta bizness
                            </span>
                            <b className={sty.b}>1 990.000 <span className={sty.span}>SO'M / YIL</span></b>
                        </div>
                    </div>

                </div>

                <div>

                    <table className={sty.tableStyle} >
                        <tbody className={sty.tableStyle} >
                            <tr>
                                <td>Statistika
                                    <svg data-v-0d60cb94="" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path data-v-0d60cb94="" d="M8 16C12.4187 16 16 12.4187 16 8C16 3.58125 12.4187 0 8 0C3.58125 0 0 3.58125 0 8C0 12.4187 3.58125 16 8 16ZM6.75 10.5H7.5V8.5H6.75C6.33437 8.5 6 8.16562 6 7.75C6 7.33437 6.33437 7 6.75 7H8.25C8.66562 7 9 7.33437 9 7.75V10.5H9.25C9.66562 10.5 10 10.8344 10 11.25C10 11.6656 9.66562 12 9.25 12H6.75C6.33437 12 6 11.6656 6 11.25C6 10.8344 6.33437 10.5 6.75 10.5ZM8 6C7.44688 6 7 5.55312 7 5C7 4.44688 7.44688 4 8 4C8.55313 4 9 4.44688 9 5C9 5.55312 8.55313 6 8 6Z" fill="#D9D9D9"></path></svg>
                                </td>
                                <td><svg data-v-0d60cb94="" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path data-v-0d60cb94="" fill-rule="evenodd" clip-rule="evenodd" d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM16.5962 7.19711C16.2057 6.80658 15.5725 6.80658 15.182 7.19711L12 10.3791L8.81802 7.19711C8.4275 6.80658 7.79433 6.80658 7.40381 7.19711L7.05025 7.55066C6.65973 7.94118 6.65973 8.57435 7.05025 8.96487L10.2322 12.1469L6.6967 15.6824C6.30618 16.0729 6.30617 16.7061 6.6967 17.0966L7.05025 17.4502C7.44078 17.8407 8.07394 17.8407 8.46447 17.4502L12 13.9146L15.5355 17.4502C15.9261 17.8407 16.5592 17.8407 16.9497 17.4502L17.3033 17.0966C17.6938 16.7061 17.6938 16.0729 17.3033 15.6824L13.7678 12.1469L16.9497 8.96487C17.3403 8.57435 17.3403 7.94118 16.9497 7.55066L16.5962 7.19711Z" fill="#F95A5A"></path></svg></td>
                                <td><svg data-v-0d60cb94="" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path data-v-0d60cb94="" d="M12 24C18.6281 24 24 18.6281 24 12C24 5.37188 18.6281 0 12 0C5.37188 0 0 5.37188 0 12C0 18.6281 5.37188 24 12 24ZM17.2969 9.79688L11.2969 15.7969C10.8562 16.2375 10.1438 16.2375 9.70781 15.7969L6.70781 12.7969C6.26719 12.3562 6.26719 11.6438 6.70781 11.2078C7.14844 10.7719 7.86094 10.7672 8.29688 11.2078L10.5 13.4109L15.7031 8.20312C16.1437 7.7625 16.8562 7.7625 17.2922 8.20312C17.7281 8.64375 17.7328 9.35625 17.2922 9.79219L17.2969 9.79688Z" fill="#4BAE4F"></path></svg></td>
                                <td><svg data-v-0d60cb94="" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path data-v-0d60cb94="" d="M12 24C18.6281 24 24 18.6281 24 12C24 5.37188 18.6281 0 12 0C5.37188 0 0 5.37188 0 12C0 18.6281 5.37188 24 12 24ZM17.2969 9.79688L11.2969 15.7969C10.8562 16.2375 10.1438 16.2375 9.70781 15.7969L6.70781 12.7969C6.26719 12.3562 6.26719 11.6438 6.70781 11.2078C7.14844 10.7719 7.86094 10.7672 8.29688 11.2078L10.5 13.4109L15.7031 8.20312C16.1437 7.7625 16.8562 7.7625 17.2922 8.20312C17.7281 8.64375 17.7328 9.35625 17.2922 9.79219L17.2969 9.79688Z" fill="#4BAE4F"></path></svg></td>
                            </tr><tr>
                                <td>Ishchilar soni</td>
                                <td>1</td>
                                <td>10</td>
                                <td>∞</td>
                            </tr>
                            <tr>
                                <td>Omborlar soni</td>
                                <td>1</td>
                                <td>150</td>
                                <td>∞</td>
                            </tr>
                            <tr>
                                <td>Yetkazib beruvchi</td>
                                <td>50</td>
                                <td>150</td>
                                <td>∞</td>
                            </tr>
                            <tr>
                                <td>Mijozlar soni</td>
                                <td>50</td>
                                <td>150</td>
                                <td>∞</td>
                            </tr>
                            <tr className={sty.tr2}>
                                <td></td>
                                <td><button className={sty.btn2}>Sinab ko'rish</button></td>
                                <td><button className={sty.btn2}>Sinab ko'rish</button></td>
                                <td><button className={sty.btn2}>Sinab ko'rish</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>



            </div>


        </div>
    )
}
