import React, {ChangeEvent, FormEvent} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState, updateComment} from '../../store'
import CommentForm from "../CommentForm/CommentForm";


const CommentFormContainer = () => {

    const value = useSelector((state: RootState) => state.commentText)

    const dispatch = useDispatch()

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(updateComment(e.target.value))
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()

    }

    return (
       <CommentForm value={value} onChange={handleChange} onSubmit={handleSubmit}/>
    );
};

export default CommentFormContainer;
