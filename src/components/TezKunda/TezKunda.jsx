import React from 'react'
import sty from './TezKundaStyle.module.css'
import img1 from '../../img/photo1.png'
import img2 from '../../img/photo2.png'
import img3 from '../../img/photo3.png'
import img4 from '../../img/photo4.png'


export default function TezKunda() {
    return (<>
        <div className={sty.header}>
            <h1>Tez kunda biznesingiz uchun yanada ko’proq yechimlar</h1>
        </div>
        <div className={sty.tezkunda} >
            <div className={sty.imgColumn1}>
                {/* <img src={img1} alt="" /> */}
                <h5>ONLINE DO'KON</h5>
            </div>
            <div className={sty.imgColumn}>
                <div className={sty.imgMiniBox}><img src={img2} alt="" /></div>
                <div className={sty.imgMiniBox}><img src={img3} alt="" /></div>
            </div>
            <div className={sty.imgColumn}>
                <img className={sty.img4} src={img4} alt="" />
            </div>
        </div>
    </>
    )
}
