import React, {ChangeEvent, FC, useState} from 'react';
import styles from "./Title.module.css";
import Post from "../../../Post/Post";

interface ITitleProps {
    title: string
}

const Title: FC<ITitleProps> = (title) => {
    const [isModalOpened, setIsModalOpened] = useState(false)


    const handleModalOpened = (e: any) => {
      e.stopPropagation()
        setIsModalOpened(true)
    }

    return (
        <h2 className={styles.title}>
            <a href="#post.url" className={styles.postLink} onClick={handleModalOpened}>
                {title.title}
            </a>
            {isModalOpened && (
                <Post onClose={()=> setIsModalOpened(false)}/>
            )}
        </h2>
    );
};

export default Title;
