import React, {FC, useContext} from 'react';
import styles from "./SearchBlock.module.css";
import UserBlock from "./UserBlock/UserBlock";
import {useUserData} from "../../../hooks/useUserData";
import {tokenContext} from "../../../context/tokenContext";
import {useSelector} from "react-redux";
import {RootState} from "../../store/reducer";
import {userContext} from "../../../context/userContext";



const SearchBlock = () => {

     // const {iconImg, name} = useContext(userContext)

    const {data, loading} = useUserData()




    return (
        <div className={styles.searchBlock}>

            <UserBlock username={data.name} avatarSrc={data.iconImg} loading={loading}/>
        </div>
    );
};

export default SearchBlock;
