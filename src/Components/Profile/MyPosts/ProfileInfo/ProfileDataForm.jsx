import React from "react";
import { reduxForm } from "redux-form";
import  { createField, Input, TextArea } from "../../../Common/FormsControls/FormsControl";
import s from "./profileinfo.module.css";

const ProfileDataForm = ({ handleSubmit , profile, error }) => {
  // debugger
  return (
    <form onSubmit={handleSubmit}>
        <div>
          <button onClick={() => {}}>Save</button>
        </div>

      <div>
        <b>Full name</b> : { createField("Full name", "fullName", [], Input) }
      </div>
      <div>
        <b>Looking for a job</b> : { createField("", "lookingForAJob", [], {type: "checkbox"})}
      </div>
      
        <div>
          <b> My professionals skillz</b>: { createField("skillz", "lookingForAJobDescription", [], TextArea)}
        </div>
      
      <div>
        <b>About me:</b> {profile.aboutMe}
        : { createField("aboutMe", "aboutMe", [], TextArea)}
      </div>
      <div>
        <b>Contacts:</b> :{" "}
        {Object.keys(profile.contacts).map((key) => {
          return (
           <div className="s.contact" key={key}>
             <b>{key} : {createField("key", "contacts" + key, [], Input) }</b>
           </div>
          );
        })}
      </div>
    </form>
  );
};

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm;
