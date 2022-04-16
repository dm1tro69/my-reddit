import React from 'react';
import styles from "./Menu.module.css";
import MenuIcon from "../../../icons/MenuIcon";
import Dropdown from "../../../Dropdown/Dropdown";
import MenuListItem from "./MenuListItem/MenuListItem";

const Menu = () => {
    return (
        <div className={styles.menu}>

            <Dropdown button={
                <button className={styles.menuButton}>
                    <MenuIcon/>
                </button>
            }>
               <div className={styles.dropdown}>
                   <MenuListItem postId={'123'}/>

                   <button className={styles.closeButton}>
                        Закрыть
                   </button>
               </div>

            </Dropdown>

        </div>
    );
};

export default Menu;
