import React, {useContext} from 'react';
import styles from './Header.module.css'
import SearchBlock from "./SearchBlock/SearchBlock";
import ThreadTitle from "./ThreadTitle/ThreadTitle";
import SortBlock from "./SortBlock/SortBlock";
import {tokenContext} from "../../context/tokenContext";



const Header = () => {

    const token = useContext(tokenContext)
    return (
        <header className={styles.header}>
                <SearchBlock/>
          <ThreadTitle/>
            <SortBlock/>
        </header>
    );
};

export default Header;
