import React, {ChangeEvent, FC, FormEvent} from 'react';
import styles from "./CommentForm.module.css";


interface ICommentFormProps {
    value: string
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
    onSubmit: (e: FormEvent) => void
}

const CommentForm:FC<ICommentFormProps> = ({value, onSubmit, onChange}) => {



    return (
        <form className={styles.form} onSubmit={onSubmit}>
            <textarea value={value} onChange={onChange} className={styles.input}/>
            <button type={'submit'} className={styles.button}>Комментировать</button>
        </form>
    );
};

export default CommentForm;
