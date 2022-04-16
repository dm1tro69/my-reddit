import React, {FC} from 'react';
import styles from "./MenuListItem.module.css";
import BlockIcon from "../../../../icons/BlockIcon";
import WarningIcon from "../../../../icons/WarningIcon";

interface IMenuListItemProps {
  postId: string
}

const MenuListItem: FC<IMenuListItemProps> = ({postId}) => {
    return (
        <ul>
            <li onClick={()=> console.log(postId)} className={styles.menuItem}>
                <BlockIcon/>Скрыть
            </li>
            <div className={styles.divider}/>
            <li className={styles.menuItem}>
                <WarningIcon/>Пожаловаться
            </li>
        </ul>
    );
};

export default MenuListItem;
