import styled from 'styled-components'
import { colors } from './index'

export const Container = styled.main`
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background: ${colors.black};
    article {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        width: 90vw;
    }
`

export const CodeEditor = styled.section`
    width: 500px;
    height: 500px;
    overflow: scroll;
    background: rgb(87,70,123);
    border-radius: 5px;
    padding: 10px;
    box-sizing: border-box;
    div {
        display: flex;
        margin-bottom: 3px;
        label {
            width: 25px;
            display: flex;
            justify-content: flex-end;
            font-family: 'PT Mono', monospace;
            font-size: 20px;
            color: ${colors.lightPink};
            margin-right: 10px;
        }
        input {
            width: 445px;
            background: transparent;
            border: none;
            outline: none;
            font-family: 'PT Mono', monospace;
            font-size: 20px;
            color: rgb(253,253,253);
        }
    }
`

export const Canvas = styled.canvas`
    border-radius: 5px;
    background: rgb(253,253,253);
    width: 500px;
    height: 500px;
`

export const Navbar = styled.nav`
    width: 100vw;
    height: 10vh;
    padding: 0 5vw;
    background: rgb(86,86,100);
    display: flex;
    justify-content: space-between;
    align-items: center;
    article {
        a {
            margin: 0;
            padding: 0;
            display: flex;
        }
    }
    img {
        width: 50px;
        height: 50px;
        margin-right: 10px;
    }
    p {
        color: rgb(253,253,253);
        font-family: 'Baloo', sans-serif;
        font-size: 3rem;
        margin: 0 30px 0 0;
        padding: 0;
    }
    a {
        color: rgb(253,253,253);
        text-decoration: none;
        font-family: 'Fredoka One', sans-serif;
        font-size: 1.5rem;
        padding: 10px 15px;
        margin-left: 5px;
        border-radius: 5px;
    }
    section {
        display: flex;
        width: 80vw;
        justify-content: space-between;
        align-items: center;
    }
    button {
        border: none;
        outline: none;
    }
`

export const LogoutButton = styled.button`
    background: ${colors.lightPink};
    color: ${colors.white};
    font-family: 'Fredoka One', sans-serif;
    font-size: 1.5rem;
    padding: 10px 15px;
    margin-left: 5px;
    border-radius: 5px;
`

export const StyledForm = styled.main`
    width: 100vw;
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    div {
        width: 150px;
        height: 500px;
        background: ${colors.lightPurple};
        border-radius: 5px 0 0 5px;
    }
    form {
        width: 400px;
        height: 500px;
        background: rgb(253,253,253);
        border-radius: 0 5px 5px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        h2 {
            font-family: 'Baloo', sans-serif;
            font-size: 3rem;
            padding:20px;
            color: rgb(70,70,85);
        }
        input {
            width: 250px;
            height: 40px;
            margin: 0 0 20px 0;
            padding: 15px 22px;
            font-size: 1.2rem;
            text-align: center;
        }
        label {
            font-size: 1.2rem;
            margin: 5px;
            color: rgb(86,86,100);
        }
        button {
            width: 250px;
            height: 40px;
            margin: 20px 0 20px 0;
            background: ${colors.lightPink};
            border: none;
            outline: none;
            padding: 10px;
            border-radius: 5px;
            color: rgb(253,253,253);
            font-family: 'Fredoka One', sans-serif;
            font-size: 1.5rem;
        }
    }
`

export const Title = styled.header`
    width: 100vw;
    height: 100px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 5vw;
    input {
        background: transparent;
        border: none;
        outline: none;
        color: rgb(253,253,253);
        font-family: 'Fredoka One', sans-serif;
        font-size: 3rem;
        margin-left: 40px;
        width: 500px;
    }
    button {
        width: 75px;
        background: ${colors.lightPink};
        color: ${colors.white};
        font-family: 'Fredoka One', sans-serif;
        font-size: 1.5rem;
        padding: 10px 15px;
        border-radius: 5px;
        border: none;
        outline: none;
    }
`

export const Menu = styled.div`
    width: 75px;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    button {
        background: rgb(255,133,82);
        width: 75px;
        height: 75px;
        border: none;
        outline: none;
        border-radius: 5px;
        color: rgb(253,253,253);
        i {
            font-size: 2rem;
        }
   }
`

export const GallerySection = styled.section`
    width: 100vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 75px 5vw; 
`

export const Card = styled.article`
    width: 260px;
    height: 320px;
    background: rgb(86,86,100);
    border-radius: 5px;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    img {
        background: white;
        width: 240px;
        height: 240px;
        border-radius: 5px;
        margin-bottom: 10px;
    }
    h3 {
        font-size: 2rem;
        color: rgb(253,253,253);
        align-self: flex-start;
        margin-bottom: 5px;
    }
    h4 {
        font-size: 1.5rem;
        color: ${colors.lightPink};
        align-self: flex-start;
    }
    span {
        color: rgb(253,253,253);
    }
`

export const ProfileHeader = styled.header`
    width: 100vw;
    padding: 40px 10vw;
    background: rgb(87,70,123);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        object-fit: cover;
        flex-shrink: 0;
    }
    & > div {
        display: flex;
        flex-direction: column;
        max-width: 500px;
        h2 {
            font-size: 3rem;
            color: rgb(253,253,253);
            margin-bottom: 10px;
            span {
                font-size: 3rem;
                color: ${colors.lightPink};
            }
        }
        p {
            font-size: 1.4rem;
            line-height: 2rem;
            color: rgb(253,253,253);
        }
    }
`

export const DetailContainer = styled.main`
    width: 100vw;
    min-height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: rgb(70,70,85);
    padding: 30px 0;
    h6 {
        color: ${colors.white};
        font-size: 2rem;
    }
    & > section {
        display: flex;
        justify-content: center;
        align-items: stretch;
        gap: 15px;
    }
`

export const CodeViewer = styled.section`
    width: 400px;
    height: 500px;
    overflow-y: auto;
    background: rgb(87,70,123);
    border-radius: 5px;
    padding: 10px;
    box-sizing: border-box;
    div {
        display: flex;
        margin-bottom: 3px;
        label {
            width: 25px;
            display: flex;
            justify-content: flex-end;
            font-family: 'PT Mono', monospace;
            font-size: 14px;
            color: ${colors.lightPink};
            margin-right: 10px;
            flex-shrink: 0;
        }
        span {
            font-family: 'PT Mono', monospace;
            font-size: 14px;
            color: ${colors.white};
        }
    }
`

export const DetailCanvas = styled.div`
    background: rgb(86,86,100);
    width: 500px;
    height: 500px;
    border-radius: 5px;
    display: flex;
    flex-direction:column;
    align-items: center;
    padding: 10px 0;
    img {
        width: 480px;
        height: 480px;
        border-radius: 5px;
        background: white;
    }
`

export const DetailTitle = styled.header`
width: 100vw;
height: 100px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
padding: 0 5vw;
h1 {
    color: rgb(253,253,253);
    font-size: 3rem;
    margin-left: 80px;
}
p {
    color: rgb(253,253,253);
    font-size: 2rem;
    margin-left: 80px;
    color: ${colors.lightPink};
    span {
        color: rgb(253,253,253);
    }
}
`

export const StyledComment = styled.article`
    width: 100%;
    min-height: 80px;
    background: rgb(86,86,100);
    margin-bottom: 10px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding: 10px 15px;
    gap: 10px;
    flex-shrink: 0;
    img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-bottom: 5px;
    }
    h6 {
        color: ${colors.lightPink};
        font-size: 1.1rem;
    }
    p {
        color: rgb(253,253,253);
        font-size: 1.3rem;
        flex: 1;
    }
`

export const CommentInput = styled.form`
    width: 100%;
    min-height: 80px;
    background: white;
    margin-bottom: 10px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    gap: 10px;
    background: rgb(86,86,100);
    padding: 10px 15px;
    flex-shrink: 0;
    textarea {
        border-radius: 5px;
        font-size: 1.3rem;
        padding: 8px;
        flex: 1;
    }
    button {
        width: 75px;
        background: ${colors.lightPurple};
        color: ${colors.white};
        font-family: 'Fredoka One', sans-serif;
        font-size: 1.5rem;
        padding: 10px 15px;
        border-radius: 5px;
        border: none;
        outline: none;
        }
`

export const CommentsContainer = styled.div`
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 450px;
    height: 500px;
`

export const MainHeader = styled.header`
    width: 100vw;
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-left: 25vw;
    h1 {
        color: ${colors.blue};
        font-size: 5rem;
        width: 650px;
        font-family: 'Fredoka One', sans-serif;
    }
    h2 {
        color: ${colors.lightPink};
        font-size: 5rem;
        width: 650px;
        font-family: 'Fredoka One', sans-serif;
    }
    p {
        color: white;
        font-size: 3rem;
        width: 550px;
        line-height: 3.5rem;
        padding-top: 30px;
        span {
            font-size: 3.5rem;
            font-family: 'Baloo', sans-serif;
        }
    }
    a {
        width: 250px;
        height: 40px;
        margin: 20px 0 20px 0;
        background: ${colors.purple};
        border: none;
        outline: none;
        padding: 10px;
        border-radius: 5px;
        color: rgb(253,253,253);
        font-family: 'Fredoka One', sans-serif;
        font-size: 1.5rem;
        text-align: center;
        margin-left: 30vw;
        margin-top: 30px;
    }
`

export const StyledInfo = styled.div`
    width: 500px;
    height: 500px;
    overflow: scroll;
    background: rgb(87,70,123);
    border-radius: 5px;
    padding: 30px;
    box-sizing: border-box;
    h3 {
        font-size: 3rem;
        color: ${colors.lightPink};
        font-family: 'Fredoka One', sans-serif;
        margin-bottom: 20px;
    }
    h4 {
        font-size: 2.5rem;
        color: ${colors.yellow};
        margin-bottom: 5px;
        i {
            font-size: 2rem;
            color: ${colors.blue};
        }
    }
    p {
        color: ${colors.white};
        font-size: 1.5rem;
        margin-bottom: 20px;
    }
`