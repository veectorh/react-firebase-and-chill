import React, { useContext, useEffect } from 'react';
import { CommentStyle } from './styles'
import firebase from '../config';
import { QueryContext } from '../Context';

export default function Comments({ title }) {

    const db = firebase.database();

    const {com, isLD} = useContext(QueryContext);
    const [comments, setComments] = com;
    const [isLoading, setIsLoading] = isLD;

    let allComments = []

    useEffect(() => {
        //access firestore
         db.ref(`allComments/${title}`).on("value", snapshot => {
            
            allComments = [];

            snapshot.forEach(snap => {
              allComments.push(snap.val());
            });
            setComments(allComments);
          });
     }, []);

     if (isLoading === true & allComments.length > 1) {
         
        let newComments = []

        db.ref("allComments/").on("value", snapshot => {
            
            snapshot.forEach(snap => {
              newComments.push(snap.val());
            });
            setComments(newComments);
          });
          setIsLoading(false)
     }
    
    return (
        <div>
            <CommentStyle>
                {comments.map((comment, index) => (
                    <p key={index}>{comment}</p>
                ))}
            </CommentStyle>
        </div>
    )
}
