import React, { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { MyContext } from '../Context'
import { Card, ProfileHeader, GallerySection, DetailContainer } from '../style/components'

const Profile = () => {

    const context = useContext(MyContext)
    const navigate = useNavigate()

    useEffect(() => {
        if (!context.state.isLoggedIn) return navigate('/login')
        context.updateGallery()
    }, [context.state.isLoggedIn, navigate, context.updateGallery])

    const { isLoggedIn, loggedUser, gallery } = context.state

    if (!isLoggedIn) {
        return <DetailContainer><h6>Loading...</h6></DetailContainer>
    }

    return (
        <>
            <ProfileHeader>
                <img src={loggedUser.photoUrl} alt={loggedUser.username} />
                <div>
                    <h2><span>@</span>{loggedUser.username}</h2>
                    <p>{loggedUser.bio}</p>
                </div>
            </ProfileHeader>
            <GallerySection>
                {gallery && gallery.map((project, idx) => {
                    if (project.author.username === loggedUser.username) return (
                        <Card key={idx}>
                            <img src={project.photoUrl} alt={project.title} />
                            <div style={{ display: 'flex', justifyContent: 'space-between', width: '230px'}}>
                                <div style={{display: 'flex', flexDirection: 'column'}}>
                                    <h3>{project.title}</h3>
                                    <h4><span>by </span>{project.author.username}</h4>
                                </div>
                                <button onClick={() => context.deleteProject(project._id)}
                                    style={{
                                        marginTop:'10px',
                                        width: '30px',
                                        height: '30px',
                                        background: 'rgb(285,151,192)',
                                        color: 'white',
                                        borderRadius: '50%',
                                        border: 'none',
                                        outline: 'none',
                                        position: 'relative',
                                        fontSize: '2rem'
                                    }}
                                >✕</button>
                            </div>
                        </Card>
                    )
                    return null
                })}
            </GallerySection>
        </>
    )
}

export default Profile
