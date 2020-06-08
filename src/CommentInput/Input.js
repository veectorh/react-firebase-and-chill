import React, { useState, useContext } from 'react';
import { FormGroup } from './styles';
import firebase from '../config';
import { QueryContext } from '../Context';


export default function Input({ title }) {

    const db = firebase.database();

    const [myComment, setMyComment] = useState('')
    const {com, isLD} = useContext(QueryContext);
    const [comments, setComments] = com;
    const [isLoading, setIsLoading] = isLD;

    const handleChange = (e) => {
        setMyComment(e.currentTarget.value)
    }
    const createComment = (e) => {
        setIsLoading(true)
        e.preventDefault()
        db.ref(`allComments/${title}/`)
        .push(myComment)
        .then(_ => {
          setMyComment('')
        });
    }

    return (
        <div>
            <FormGroup>
                <input placeholder='type comments here' type='text' value={myComment} onChange={handleChange} />
                <button onClick={createComment}>Send</button>
            </FormGroup>
        </div>
    )
}
