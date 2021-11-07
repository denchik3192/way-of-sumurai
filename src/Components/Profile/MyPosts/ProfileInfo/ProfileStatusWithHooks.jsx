import React, { useEffect, useState } from "react";

const ProfileStatusWithHooks = (props)=> {
  // debugger;

  console.log(props.status);
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);
  
  useEffect(() => {
    setStatus(props.status);
    // debugger;
  }, [props.status] );

  const activateMode = () => {
    setEditMode(true)
  }

  const deactivateMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  }

  const onStatusChange = (e) => {
    setStatus( e.currentTarget.value );
  };

    return (
      <div>
        { !editMode &&
          <div>
            <b>Satus:</b>
            <span onClick={ activateMode }>
              {" "}
              {props.status || "-----"}{" "}
            </span>
          </div>
        }
        {editMode &&(
          <div>
            <input
            onChange={ onStatusChange }
              autoFocus={true}
              onBlur={ deactivateMode }
              value={ status}
            />
          </div>
        )}
      </div>
    );
  }

  export default ProfileStatusWithHooks;
  