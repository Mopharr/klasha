import React, { useState } from "react";
import styles from "../styles/sidebar.module.css";
import { AiOutlinePieChart, AiOutlineShoppingCart } from "react-icons/ai";
import { BsWallet, BsBarChartLine, BsArrowDownUp } from "react-icons/bs";
import { BiMicrophone, BiHelpCircle } from "react-icons/bi";
import { RiExchangeLine } from "react-icons/ri";
import { CiLink } from "react-icons/ci";
import { CgArrowsExchangeAlt } from "react-icons/cg";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import Link from "next/link";

const Sidebar = ({ toggleCollapsed, collapsed }: any) => {
  const [active, setActive] = useState("1");

  const handleActive = (e: any) => {
    setActive(e.target.value);
    console.log(e.target.value);
    console.log(active);
  };

  return (
    <div className={collapsed ? styles.togleAvtive : styles.sideBar}>
      <div className={styles.navLogo}>
        <img src="/ogo.svg" />
      </div>

      <ul className={styles.navItem}>
        <p>Main pages</p>
        <li
          id="1"
          className={active === "1" ? styles.navActive : styles.navList}
          onClick={handleActive}
        >
          <AiOutlinePieChart style={{ fontSize: "25px" }} />
          <h5> Dashboard </h5>
        </li>
        <li
          id="2"
          className={active === "2" ? styles.navActive : styles.navList}
          onClick={handleActive}
        >
          <BsWallet />
          <h5> Balance</h5>
        </li>
        <li
          id="3"
          className={active === "3" ? styles.navActive : styles.navList}
          onClick={handleActive}
        >
          <BsArrowDownUp />
          <Link href="/transactions">
            <h5>Transactions</h5>
          </Link>
        </li>

        <li
          id="5"
          className={active === "5" ? styles.navActive : styles.navList}
          onClick={handleActive}
        >
          <BsBarChartLine />
          <h5>Analytics</h5>
        </li>

        <li
          id="6"
          className={active === "6" ? styles.navActive : styles.navList}
          onClick={handleActive}
        >
          <BiMicrophone />
          <h5>Marketing</h5>
        </li>
        <li
          id="7"
          className={active === "7" ? styles.navActive : styles.navList}
          onClick={handleActive}
        >
          <RiExchangeLine />
          <h5>Exchange Rates</h5>
        </li>
      </ul>

      <ul className={styles.navItem}>
        <p>Accept Payments</p>
        <li
          id="8"
          className={active === "7" ? styles.navActive : styles.navList}
          onClick={handleActive}
        >
          <AiOutlineShoppingCart />
          <h5>Checkout</h5>
        </li>
        <li
          id="9"
          className={active === "7" ? styles.navActive : styles.navList}
          onClick={handleActive}
        >
          <CiLink />
          <h5>Payment Link</h5>
        </li>
      </ul>

      <ul className={styles.navItem}>
        <p>Send Payments</p>
        <li
          id="10"
          className={active === "7" ? styles.navActive : styles.navList}
          onClick={handleActive}
        >
          <CgArrowsExchangeAlt />
          <h5>Wire</h5>
        </li>
      </ul>

      <div className={collapsed ? styles.navBtnAct : styles.navBtn}>
        {collapsed ? (
          <BiHelpCircle />
        ) : (
          <button className={styles.btn1}>
            <BiHelpCircle /> Support
          </button>
        )}
        {collapsed ? (
          <SlArrowRight
            onClick={toggleCollapsed}
            style={{ cursor: "pointer" }}
          />
        ) : (
          <button onClick={toggleCollapsed} className={styles.btn2}>
            <SlArrowLeft /> Hide Panel
          </button>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
