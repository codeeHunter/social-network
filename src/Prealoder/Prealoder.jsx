import React from "react";
import s from './Preloader.module.css'

const Preloader = (props) => {
    return (
        <div className={s.preloader}>
            <div className="">
                <img src="https://media1.giphy.com/media/3o7bu3XilJ5BOiSGic/giphy.gif" alt=""/>
            </div>
        </div>
    )
}

export default Preloader