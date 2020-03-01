import React, { useContext, useEffect } from 'react'
import { MyContext } from '../Context'
import { DetailContainer, DetailCanvas, DetailTitle, CommentInput, StyledComment } from '../style/components'

const Detail = () => {

    const context = useContext(MyContext)

    useEffect(() => {
        context.state.art = null
    })

    return (
        <MyContext.Consumer>
            {context => {
                
                const { art } = context.state
                if (art)
                return (
                    <>
                        <DetailContainer>
                            <DetailTitle>
                                <h1>{context.state.art.title}</h1>
                                <p><span>by </span> {context.state.art.author.username}</p>
                            </DetailTitle>
                            <section>
                                <DetailCanvas>
                                    <img src={context.state.art.photoUrl} alt={context.state.art.title}/>
                                </DetailCanvas>
                                <div>
                                    <CommentInput>
                                        <textarea rows='3' cols='40' placeholder='Write a comment.'></textarea>
                                        <button>SEND</button>
                                    </CommentInput>
                                    {context.state.comments.map((comment, idx) => {
                                        if (context.state.art._id === comment.project._id) return (
                                            <StyledComment key={idx}>
                                                <div>
                                                    <img src={comment.author.photoUrl} alt={comment.author.username}/>
                                                    <h6>{comment.author.username}</h6>
                                                </div>
                                                <p>{comment.content}</p>
                                            </StyledComment>
                                        )
                                    })}
                                </div>
                            </section>
                        </DetailContainer>
                    </>
                )
                else return <>Loading...</>
            }}
        </MyContext.Consumer>
    )
}

export default Detail
