import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { MyContext } from '../Context'
import { Card, ProfileHeader, GallerySection, DetailContainer } from '../style/components'

const DEFAULT_PHOTO = 'https://res.cloudinary.com/evilvic/image/upload/v1582908337/paleta/paleta_logo.png'

const Profile = () => {

    const context = useContext(MyContext)
    const navigate = useNavigate()

    const [editing, setEditing] = useState(false)
    const [bio, setBio] = useState('')
    const [photoUrl, setPhotoUrl] = useState('')

    useEffect(() => {
        if (!context.state.isLoading && !context.state.isLoggedIn) navigate('/login')
    }, [context.state.isLoggedIn, context.state.isLoading, navigate])

    const { isLoggedIn, loggedUser, gallery } = context.state

    const startEditing = () => {
        setBio(loggedUser.bio || '')
        setPhotoUrl(loggedUser.photoUrl || '')
        setEditing(true)
    }

    const cancelEditing = () => {
        setEditing(false)
    }

    const saveProfile = async () => {
        await context.updateProfile({ bio, photoUrl })
        setEditing(false)
    }

    if (!isLoggedIn || !loggedUser) {
        return <DetailContainer><h6>Loading...</h6></DetailContainer>
    }

    return (
        <>
            <ProfileHeader>
                <img src={(editing ? photoUrl : loggedUser.photoUrl) || DEFAULT_PHOTO} alt={loggedUser.username} />
                <div>
                    <h2><span>@</span>{loggedUser.username}</h2>
                    {editing ? (
                        <>
                            <input
                                value={photoUrl}
                                onChange={e => setPhotoUrl(e.target.value)}
                                placeholder="Photo URL"
                                style={{
                                    fontSize: '1.3rem', padding: '8px 12px', borderRadius: '5px',
                                    border: 'none', outline: 'none', marginBottom: '8px'
                                }}
                            />
                            <textarea
                                value={bio}
                                onChange={e => setBio(e.target.value)}
                                placeholder="Write something about yourself..."
                                rows={3}
                                style={{
                                    fontSize: '1.3rem', padding: '8px 12px', borderRadius: '5px',
                                    border: 'none', outline: 'none', marginBottom: '10px',
                                    resize: 'vertical', fontFamily: "'Comfortaa', sans-serif"
                                }}
                            />
                            <div style={{ display: 'flex', gap: '10px' }}>
                                <button onClick={saveProfile} style={{
                                    background: 'rgb(115,106,203)', color: 'rgb(253,253,253)',
                                    fontFamily: "'Fredoka One', sans-serif", fontSize: '1.2rem',
                                    padding: '6px 16px', borderRadius: '5px', border: 'none', outline: 'none'
                                }}>Save</button>
                                <button onClick={cancelEditing} style={{
                                    background: 'rgb(86,86,100)', color: 'rgb(253,253,253)',
                                    fontFamily: "'Fredoka One', sans-serif", fontSize: '1.2rem',
                                    padding: '6px 16px', borderRadius: '5px', border: 'none', outline: 'none'
                                }}>Cancel</button>
                            </div>
                        </>
                    ) : (
                        <>
                            <p>{loggedUser.bio || 'No bio yet'}</p>
                            <button onClick={startEditing} style={{
                                marginTop: '12px', background: 'rgb(285,151,192)', color: 'rgb(253,253,253)',
                                fontFamily: "'Fredoka One', sans-serif", fontSize: '1.2rem',
                                padding: '6px 16px', borderRadius: '5px', border: 'none', outline: 'none',
                                alignSelf: 'flex-start'
                            }}>Edit profile</button>
                        </>
                    )}
                </div>
            </ProfileHeader>
            <GallerySection>
                {gallery && gallery.map((project, idx) => {
                    if (project.authorId === loggedUser._id) return (
                        <Card key={project._id}>
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
