import React from 'react';
import Comments from '../Comments/Comments';
import Input from '../CommentInput/Input'

export default function CommentPage({ match }) {

    const {
        params: { title },
    } = match

    return (
        <div style={{height: '100vh'}}>
            <Comments title={title} />
            <Input title={title} />
        </div>
    )
}
