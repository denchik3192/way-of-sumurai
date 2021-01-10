import React from 'react';
import s from './profileinfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://images.wallpaperscraft.ru/image/gory_nebo_bali_voskhod_solntsa_kintamani_indoneziya_95497_1920x1080.jpg' width="70%" alt="" />
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>

    )
}

export default ProfileInfo;