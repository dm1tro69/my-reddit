import React, {ChangeEvent, useState} from 'react';
import styles from "./Title.module.css";
import Post from "../../../Post/Post";

const Title = () => {
    const [isModalOpened, setIsModalOpened] = useState(false)

    const handleModalOpened = (e: any) => {
      e.stopPropagation()
        setIsModalOpened(true)
    }

    return (
        <h2 className={styles.title}>
            <a href="#post.url" className={styles.postLink} onClick={handleModalOpened}>
                А также базовые сценарии поведения пользователей сервиса.
            </a>
            {isModalOpened && (
                <Post onClose={()=> setIsModalOpened(false)}/>
            )}
        </h2>
    );
};

export default Title;
