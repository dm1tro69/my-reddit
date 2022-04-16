import React, {FC, useEffect, useRef} from 'react';
import ReactDOM from "react-dom";
import styles from "./Post.module.css";
import CommentFormContainer from "../CommentFormContainer/CommentFormContainer";

interface IPostProps {
    onClose?: ()=> void
}

const Post:FC<IPostProps> = ({onClose}) => {

    const ref = useRef<HTMLDivElement>(null)

    useEffect(()=> {
        function handleClick(e: MouseEvent) {
            if (e.target instanceof Node && !ref.current?.contains(e.target)){
               onClose?.()
            }
        }
        document.addEventListener('click', handleClick)
        return ()=> {
            document.removeEventListener('click', handleClick)
        }
    }, [])

    const node = document.querySelector('#modal_root')
    if (!node) return null
    return ReactDOM.createPortal((
        <div ref={ref} className={styles.modal}>
            <h2>Следует отметить, что новая модель организационной деятельности поможет</h2>
            <div className={styles.content}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolore nam voluptatibus?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolore nam voluptatibus?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolore nam voluptatibus?</p>
            </div>
            <CommentFormContainer/>
        </div>
    ), node)


};

export default Post;
