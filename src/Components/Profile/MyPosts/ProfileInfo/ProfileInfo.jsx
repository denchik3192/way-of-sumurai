import React from 'react';
import Preloader from '../../../Common/Preloader/Preloader';
import s from './profileinfo.module.css';

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img src='https://images.wallpaperscraft.ru/image/gory_nebo_bali_voskhod_solntsa_kintamani_indoneziya_95497_1920x1080.jpg' width="70%" alt="" />
            </div>
            <div className={s.descriptionBlock}>
            <img src={props.profile.photos.large}/>
                ava + {props.profile.aboutMe}
            </div>
        </div>

    )
}

export default ProfileInfo;