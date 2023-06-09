import { useState } from "react";
import Head from "next/head";
import Nav from "@/components/Nav";
import Sidebar from "@/components/SideBar";
import { AiOutlineSearch } from "react-icons/ai";
import { BiFilter } from "react-icons/bi";
import styles from "@/styles/transaction.module.css";

const Transactions = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Sidebar collapsed={collapsed} toggleCollapsed={toggleCollapsed} />

        <div className={styles.board}>
          <Nav />

          <div className={styles.history}>
            <p>Transaction history</p>
            <div className={styles.historyTop}>
              <div className={styles.input}>
                <input type="text" />
                <AiOutlineSearch />
              </div>
              <div className={styles.topBut}>
                <button>
                  Filter <BiFilter />
                </button>
                <button>Export</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Transactions;
