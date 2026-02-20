import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MyContext } from '../Context'
import { GallerySection, Card, DetailContainer } from '../style/components'

const Gallery = () => {
    const context = useContext(MyContext)
    const { gallery } = context.state

    if (!gallery) {
        return <DetailContainer><h6>Loading...</h6></DetailContainer>
    }

    return (
        <GallerySection>
            {gallery.map((project, idx) => (
                <Link onClick={() => context.getArt(project._id)} to='/detail' key={idx}>
                    <Card>
                        <img src={project.photoUrl} alt={project.title} />
                        <h3>{project.title}</h3>
                        <h4><span>by </span>{project.author.username}</h4>
                    </Card>
                </Link>
            ))}
        </GallerySection>
    )
}

export default Gallery
