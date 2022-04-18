import React, {FC} from 'react';
import styles from "./Title.module.css";
import {Link} from "react-router-dom";

interface ITitleProps {
    title: string
}

const Title: FC<ITitleProps> = (title) => {




    return (
        <h2 className={styles.title}>
            <Link to="/posts/1" className={styles.postLink} >
                {title.title}
            </Link>

        </h2>
    );
};

export default Title;
