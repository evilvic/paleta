import React, { useEffect, useContext } from 'react'
import { MyContext } from '../Context'
import { Card, ProfileHeader, GallerySection, DetailContainer } from '../style/components'

const Profile = ({ history }) => {

    const context = useContext(MyContext)

    useEffect(() => {
        if (!context.state.isLoggedIn) return history.push('/login')
        context.updateGallery()
    }, [context, history])

    return (
        
        <MyContext.Consumer>
            {context => {

                const { isLoggedIn, loggedUser } = context.state
                
                if (isLoggedIn) 
                return (
                    <>
                        <ProfileHeader>
                            <img src={loggedUser.photoUrl} alt={loggedUser.username} />
                            <div>
                                <h2><span>@</span>{ loggedUser.username }</h2>
                                <p> { loggedUser.bio } </p>
                            </div>
                        </ProfileHeader>
                        <GallerySection>
                            { /*eslint-disable-next-line*/}
                            {context.state.gallery.map((project, idx) => {
                                if (project.author.username === loggedUser.username) return (
                                    
                                        <Card key={idx}>
                                        <img src={project.photoUrl} alt={project.title} />
                                        <h3>{project.title}</h3>
                                        <h4><span>by </span>{project.author.username}</h4>
                                        </Card>
                                    
                                )
                            }
                            )}
                        </GallerySection>
                    </>
                )
                else return <><DetailContainer><h6>Loading...</h6></DetailContainer></>

            }}
        </MyContext.Consumer>
    )
}

export default Profile