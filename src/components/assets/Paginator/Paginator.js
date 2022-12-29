import { Button } from "@mui/material";
import React, { useState } from "react";
import style from "./Paginator.module.css";

const Paginator = ({
  totalItemsCount,
  pageSize,
  currentPage,
  onPageChanged,
  portionSize,
  isDisable,
}) => {
  const pagesCount = Math.ceil(totalItemsCount / pageSize);
  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  const portionCount = Math.ceil(pagesCount / portionSize);
  const [portionNumber, setPortionNumber] = useState(1);
  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  const rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div className={style.paginator}>
      {portionNumber > 1 && (
        <Button
          onClick={() => setPortionNumber(portionNumber - 1)}
          variant="outlined"
          className={style.buttonControl}
        >
          Prev
        </Button>
      )}
      {pages
        .filter(
          (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
        )
        .map((p) => {
          return (
            <Button
              className={currentPage === p ? style.activeButton : null}
              key={p}
              onClick={() => onPageChanged(p)}
              disabled={isDisable}
            >
              {p}
            </Button>
          );
        })}
      {portionCount > portionNumber && (
        <Button
          onClick={() => setPortionNumber(portionNumber + 1)}
          variant="outlined"
          className={style.buttonControl}
        >
          Next
        </Button>
      )}
    </div>
  );
};

export default Paginator;
