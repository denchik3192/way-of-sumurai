import React from "react";
import { NavLink } from "react-router-dom";
import userPhoto from "../../../src/assets/images/user.jpg";
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";
import s from "./users.module.css";

let Users = ({
  onPageChanged,
  totalUsersCount,
  pageSize,
  currentPage,
  users,
  ...props
}) => {
  return (
    <div>
      <Paginator
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        totalUsersCount={totalUsersCount}
        pageSize={pageSize}
      />
      <div>
        {users.map((u) => (
          <User
            key={u.id}
            user={u}
            followingInProgress={props.followingInProgress}
            unfollow={props.unfollow}
            follow={props.follow}
          />
        ))}
      </div>
    </div>
  );
};

export default Users;
