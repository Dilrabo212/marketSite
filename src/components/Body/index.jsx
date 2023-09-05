import React, { useEffect } from 'react'
import './bodyStyle.css'
import { Icon1, Icon2, Icon3, Icon4, Icon5, Icon6, Icon7, Icon8 } from '../../svg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Body() {

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
    return (
        <div className=' body'>
            <div className='containerBody'>
                <div className='infoWrapBody'>
                    <h1>Har qanday biznes uchun to'g'ri keladi</h1>
                    <p>Boshqar sizning talablaringizga qarab moslasha oladi, bu xoh kichik biznes bo’lsin, xoh katta korxona</p>
                </div>
                <div className='cardWrap'>
                    <div className='miniCardRov'>
                        <div className='card'
                            data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">

                            <Icon1 />
                            <span className='nameCard'> Suppermarketlar</span>
                        </div>

                        <div className='card'
                            data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">
                            <Icon2 />
                            <span className='nameCard'> Aptekalar</span>
                        </div>
                        <div className='card'
                            data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">
                            <Icon3 />
                            <span className='nameCard'> Parfumeriya</span>
                        </div>
                        <div className='card'
                            data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">
                            <Icon4 />
                            <span className='nameCard'> Santexnika</span>
                        </div>
                    </div>
                    <div className='miniCardRov'>
                        <div className='card'
                            data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">
                            <Icon5 />
                            <span className='nameCard'> Oziq-ovqat do'konlari</span>
                        </div>
                        <div className='card'
                            data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">
                            <Icon6 />
                            <span className='nameCard'> Kiyim do'konlari</span>
                        </div>
                        <div className='card'
                            data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">
                            <Icon7 />
                            <span className='nameCard'> Qurilish mollari</span>
                        </div>
                        <div className='card'
                            data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">
                            <Icon8 />
                            <span className='nameCard'> Har turdagi biznes</span>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
