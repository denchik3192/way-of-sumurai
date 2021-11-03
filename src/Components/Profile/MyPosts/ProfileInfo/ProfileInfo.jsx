import React from 'react';
import s from './profileinfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = ({status, updateStatus, profile, }) => {

    // if (!profile) { to do!!!!!!!!!
    //     return <Preloader/>
    // }
    return (
        <div>
            {/* <div>
                <img src='https://images.wallpaperscraft.ru/image/gory_nebo_bali_voskhod_solntsa_kintamani_indoneziya_95497_1920x1080.jpg' width="70%" alt="" />
            </div> */}
            <div className={s.descriptionBlock}>
            {/* <img src={profile.photos.large} alt="user"/> */}
                
                {/* <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/> */}
    
            </div>
        </div>

    )
}

export default ProfileInfo;