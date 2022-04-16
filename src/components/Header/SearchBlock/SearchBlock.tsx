import React, {FC, useContext} from 'react';
import styles from "./SearchBlock.module.css";
import UserBlock from "./UserBlock/UserBlock";
import {useUserData} from "../../../hooks/useUserData";
import {tokenContext} from "../../../context/tokenContext";
import {userContext} from "../../../context/userContext";



const SearchBlock = () => {

     const {iconImg, name} = useContext(userContext)

    return (
        <div className={styles.searchBlock}>
            <UserBlock username={name} avatarSrc={iconImg}/>
        </div>
    );
};

export default SearchBlock;
