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

// import React, {ChangeEvent, FormEvent, useState} from 'react';
//
// const CommentForm = () => {
//     const [value, setValue] = useState('')
//     const [touched, setTouched] = useState(false)
//     const [valueError, setValueError] = useState('')
//
//     const handleSubmit = (e: FormEvent) => {
//         e.preventDefault()
//         setValueError(validateValue())
//         setTouched(true)
//         const isFormValid = !validateValue()
//         if (!isFormValid) return
//         alert('form send')
//     }
//     const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
//          setValue(e.target.value)
//     }
//
//     function validateValue() {
//         if (value.length <=3) return 'Введите болбше 3-х символов'
//         return ''
//     }
//
//
//     return (
//         <div>
//             <form className={styles.form} onSubmit={handleSubmit}>
//                 <textarea value={value} onChange={handleChange} className={styles.input} aria-invalid={valueError ? 'true': undefined}/>
//                 {touched && valueError && (<div>{valueError}</div>)}
//                 <button type={'submit'} className={styles.button}>Комментировать</button>
//                 </form>
//         </div>
//     );
// };
//
// export default CommentForm;
