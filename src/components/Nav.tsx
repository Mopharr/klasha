import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import styles from "@/styles/Home.module.css";
import { RiArrowDropDownLine } from "react-icons/ri";



const Nav = () => {
  return (
    <div className={styles.boardNav}>
      <div className={styles.profile}>
        <FaRegUserCircle className={styles.profileIcon} />
        <RiArrowDropDownLine className={styles.profileIcon} />
      </div>
      <select name="" id="">
        <option value="">En </option>
        <option value="">YR </option>
        <option value="">YR </option>
      </select>
    </div>
  );
};

export default Nav;
