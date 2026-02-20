import React from 'react'
import { Link } from 'react-router-dom'
import { MainHeader } from '../style/components'
import Wave from 'react-wavify'

const Home = () => {
    return (
        <>
            <MainHeader>
                <h1>LEARN TO CODE &</h1>
                <h2>CREATE AMAZING ART!</h2>
                <p><span>paleta</span> teaches kids the concepts of coding & logic through making beautiful pictures.</p>
                <Link to='/signup'>START CREATING NOW</Link>
            </MainHeader>
            <Wave
                fill='rgb(145,139,215)'
                paused={false}
                options={{
                    height: 20,
                    amplitude: 10,
                    speed: 0.15,
                    points: 10
                }}
                style={{
                    position: 'fixed',
                    top: '70',
                    display: 'block'
                }}
            />
            <Wave
                fill='rgb(255,151,192)'
                paused={false}
                options={{
                    height: 40,
                    amplitude: 20,
                    speed: 0.15,
                    points: 7
                }}
                style={{
                    position: 'fixed',
                    bottom: '20',
                    display: 'block'
                }}
            />
            <Wave
                fill='rgb(249,240,151)'
                paused={false}
                options={{
                    height: 70,
                    amplitude: 35,
                    speed: 0.15,
                    points: 5
                }}
                style={{
                    position: 'fixed',
                    bottom: '0',
                    display: 'block'
                }}
            />
            <Wave
                fill='rgb(164,230,255)'
                paused={false}
                options={{
                    height: 100,
                    amplitude: 50,
                    speed: 0.15,
                    points: 3
                }}
                style={{
                    position: 'fixed',
                    bottom: '0',
                    display: 'block'
                }}
            />
        </>
    )
}

export default Home
