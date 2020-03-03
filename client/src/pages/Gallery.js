import React from 'react'
import { Link } from 'react-router-dom'
import { MyContext } from '../Context'
import { GallerySection, Card, DetailContainer } from '../style/components'

const Gallery = () => {
    return (
        <MyContext.Consumer>
            {context => {

                const { gallery } = context.state

                if (gallery)
                return (
                    <>
                        <GallerySection>
                            {context.state.gallery.map((project, idx) => (
                                <Link onClick={() => context.getArt(project._id)} to='/detail' key={idx}>
                                    <Card key={idx}>
                                    <img src={project.photoUrl} alt={project.title} />
                                    <h3>{project.title}</h3>
                                    <h4><span>by </span>{project.author.username}</h4>
                                    </Card>
                                </Link>
                            ))}
                        </GallerySection>
                    </>
                )
                else return <><DetailContainer><h6>Loading...</h6></DetailContainer></>
            }}
        </MyContext.Consumer>
    )
}

export default Gallery
