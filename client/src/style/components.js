import styled from 'styled-components'

export const Container = styled.main`
    width: 100vw;
    height: 90vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: rgb(70,70,85);

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
    p {
        color: rgb(253,253,253);
        font-family: 'Baloo', sans-serif;
        font-size: 3rem;
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
            height: 30px;
            margin: 0 0 20px 0;
        }
        label {
            font-size: 1.2rem;
            margin: 5px;
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
`