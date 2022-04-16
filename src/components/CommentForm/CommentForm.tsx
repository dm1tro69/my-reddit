import React, {ChangeEvent, FormEvent, useContext, useRef, useState} from 'react';
import styles from "./CommentForm.module.css";
import {commentContext} from "../../context/commentContext";
import {useSelector, useStore} from "react-redux";
import {RootState} from "../../App";



const CommentForm = () => {


    const value = useSelector((state: RootState)=> state.commentText)

     const { onChange} = useContext(commentContext)

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        onChange(e.target.value)
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()

    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <textarea value={value} onChange={handleChange} className={styles.input}/>
            <button type={'submit'} className={styles.button}>Комментировать</button>
        </form>
    );
};

export default CommentForm;
