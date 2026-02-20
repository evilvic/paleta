import React, { useContext, useEffect } from 'react'
import { MyContext } from '../Context'
import {
    DetailContainer,
    DetailCanvas,
    DetailTitle,
    CommentInput,
    StyledComment,
    CommentsContainer
} from '../style/components'

const Detail = () => {

    const context = useContext(MyContext)

    useEffect(() => {
        context.updateComments()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const { art, comments, loggedUser, artComment } = context.state

    if (!art) {
        return <DetailContainer><h6>Loading...</h6></DetailContainer>
    }

    return (
        <DetailContainer>
            <DetailTitle>
                <h1>{art.title}</h1>
                <p><span>by </span> {art.author.username}</p>
            </DetailTitle>
            <section>
                <DetailCanvas>
                    <img src={art.photoUrl} alt={art.title}/>
                </DetailCanvas>
                <CommentsContainer>
                    {loggedUser &&
                        <CommentInput onSubmit={context.handleCommentSubmit}>
                            <textarea
                                rows='3'
                                cols='40'
                                placeholder='Write a comment.'
                                name='artComment'
                                onChange={context.handleCommentInput}
                                value={artComment}
                            ></textarea>
                            <button>SEND</button>
                        </CommentInput>
                    }
                    {comments && comments.map((comment, idx) => {
                        if (art._id === comment.project._id) return (
                            <StyledComment key={idx}>
                                <div>
                                    <img src={comment.author.photoUrl} alt={comment.author.username}/>
                                    <h6>{comment.author.username}</h6>
                                </div>
                                <p>{comment.content}</p>
                            </StyledComment>
                        )
                        return null
                    })}
                </CommentsContainer>
            </section>
        </DetailContainer>
    )
}

export default Detail
