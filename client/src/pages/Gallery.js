import React from 'react'
import { MyContext } from '../Context'
import { GallerySection, Card } from '../style/components'

const Gallery = () => {
    return (
        <MyContext.Consumer>
            {context => (
                <>
                    <GallerySection>
                        {context.state.gallery.map((project, idx) => (
                            <Card key={idx}>
                            <img src={project.photoUrl} alt={project.title} />
                            <h3>{project.title}</h3>
                            <h4><span>by </span>{project.author.username}</h4>
                            </Card>
                        ))}
                    </GallerySection>
                </>
            )}
        </MyContext.Consumer>
    )
}

export default Gallery
