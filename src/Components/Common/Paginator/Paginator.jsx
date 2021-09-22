import React from "react";
import s from "./paginator.module.css";

let Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged, ...props}) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);

  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  // debugger;
  return <div>
        {pages.map((p) => {
          return <span
              className={currentPage === p && s.selectedPage}
              onClick={() => {
                onPageChanged(p);
              }}>{p}</span>
        })}
      </div>

  };

export default Paginator;
