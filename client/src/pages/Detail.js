import React, { useContext, useEffect } from 'react'
import { MyContext } from '../Context'
import { DetailContainer, DetailCanvas, DetailTitle } from '../style/components'

const Detail = () => {

    const context = useContext(MyContext)

    useEffect(() => {
        context.state.art = null
    })

    return (
        <MyContext.Consumer>
            {context => {
                
                const { art } = context.state
                console.log(art)
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
                                    <img src={context.state.art.photoUrl} />
                                </DetailCanvas>
                                <div>
                                    <article></article>
                                    <article></article>
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
