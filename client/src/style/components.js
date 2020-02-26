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