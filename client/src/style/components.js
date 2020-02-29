import styled from 'styled-components'

export const Container = styled.main`
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background: rgb(70,70,85);
    article {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        width: 90vw;
    }
`

export const CodeEditor = styled.section`
    @import url('https://fonts.googleapis.com/css?family=PT+Mono&display=swap');
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
            color: rgb(255,133,82);
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
    background: tomato;
    color: rgb(253,253,253);
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
        background: rgb(87,70,123);
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
            background: rgb(255,133,82);
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
        background: greenyellow;
        color: rgb(87,70,123);
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
        color: rgb(255,133,82);
        align-self: flex-start;
    }
    span {
        color: rgb(253,253,253);
    }
`

export const ProfileHeader = styled.header`
    width: 100vw;
    height: 300px;
    background: rgb(87,70,123);
    padding: 0 5vw;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        margin-right: 50px;
    }
    div {
        width: 300px;
        display: flex;
        flex-direction: column;
        h2 {
        font-size: 3rem;
        color: rgb(253,253,253);
        padding-bottom: 30px;
            span {
                font-size: 3rem;
                color: rgb(255,133,82);
            }
        }
        p {
            font-size: 2rem;
            color: rgb(253,253,253);
        }
    }
`

export const DetailContainer = styled.main`
    width: 100vw;
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: rgb(70,70,85);
    section {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        width: 80vw;
    }
    div {
        display: flex;
        flex-direction: column;
    }
    article {
        width: 500px;
        height: 100px;
        background: white;
        margin-bottom: 20px;
        border-radius: 5px;
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
    color: rgb(255,133,82);
    span {
        color: rgb(253,253,253);
    }
}
`