import React from 'react'
import style from './ProgressScale.module.css';

const ProgressScale = ({ base_stat, nameStat }) => {
    return (
        <div className={style.wrapper__state}>
            <div className={style.state__text}>
                {nameStat}:
            </div>
            <div className={style.plenum_inner}>
                <div className={style.plenum_progress} style={
                    {
                        width: base_stat,
                    }
                } ></div>
            </div>
        </div>
    )
}

export default ProgressScale;