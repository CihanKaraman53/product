import React, { FC } from "react";
import "./SortButton.css";
import UpArrow from "../../assets/icon/arrowUp.svg";

interface SortButtonProps {
  onClick?(): void;
  sortType: "desc" | "asc";
}

const SortButton: FC<SortButtonProps> = ({ onClick, sortType }) => {
  return (
    <div className="sortbutton-wrapper">
      <a onClick={onClick}>
        <span>{sortType === "asc" ? "Fiyat yüksek" : "Fiyat düşük"}</span>
        <img src={UpArrow} alt="arrow icon"></img>
      </a>
    </div>
  );
};

export default SortButton;
