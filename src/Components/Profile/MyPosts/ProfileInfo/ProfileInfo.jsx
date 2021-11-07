import React, { useState } from "react";
import Preloader from "../../../Common/Preloader/Preloader";
import s from "./profileinfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../../assets/images/user.jpg";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({ status, updateStatus, profile, isOwner, savePhoto, saveProfile }) => {
  // debugger;

    let[editMode, setEditMode] = useState(false);

  if (!profile) {
    return <Preloader />;
  }

  const onMainFotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };

  const onSubmit = (formData) => {//to do fix then
    saveProfile(formData).then(
      () => {
        setEditMode(false);
      })
      
  };

  return (
    <div>
      <div className={s.descriptionBlock}>
        <img
          src={profile.photos.large || userPhoto}
          className={s.mainPhoto}
          alt="user"
        />
        {isOwner && <input type={"file"} onChange={onMainFotoSelected} />}
        {editMode 
        ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/> 
        : <ProfileData goToEditMode={() => {
              setEditMode(true)}} profile={profile} isOwner={isOwner}/>
              }
        
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      </div>
    </div>
  );
};

const ProfileData = ({profile, isOwner, goToEditMode}) => {
  return (
    <div>
        { isOwner && <div><button onClick={goToEditMode}>Edit</button></div> }
      <div>
        <b>Full name</b> : {profile.fullName}
      </div>
      <div>
        <b>Looking for a job</b> : {profile.lookingForAJob ? "yes" : "no"}
      </div>
      {profile.lookingForAJob && (
        <div>
          <b> My professionals skillz</b>: {profile.lookingForAJobDescription}
        </div>
      )}
      <div>
        <b>About me:</b> : {profile.aboutMe}
      </div>
      <div>
        <b>Contacts:</b> :{" "}
        {Object.keys(profile.contacts).map((key) => {
          return (
            <Contact
              key={key}
              contactTitle={key}
              contactValue={profile.contacts[key]}
            />
          );
        })}
      </div>
    </div>
  );
};


const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div className={s.contact}>
      <b>{contactTitle}</b>:{contactValue}
    </div>
  );
};

export default ProfileInfo;
