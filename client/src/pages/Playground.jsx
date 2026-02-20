import React, { useState, useRef, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, CodeEditor, Canvas, Title, Menu, StyledInfo } from '../style/components'
import { MyContext } from '../Context'
import Swal from 'sweetalert2'

const Playground = () => {

    const navigate = useNavigate()
    const canvasRef = useRef(null)
    const context = useContext(MyContext)

    const [title, setTitle] = useState('')

    const initialCommands = {}
    for (let i = 0; i < 50; i++) {
        initialCommands[`input${i}`] = ''
    }
    const [commands, setCommands] = useState(initialCommands)

    const [buttons, setButtons] = useState({
        code: true,
        figures: false,
        move: false,
        text: false,
        color: false,
        other: false
    })

    const setActiveButton = name => e => {
        e.preventDefault()
        setButtons({
            code: false,
            figures: false,
            move: false,
            text: false,
            color: false,
            other: false,
            [name]: true
        })
    }

    const handleInput = e => {
        const { name, value } = e.target
        setCommands(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleTitleInput = e => {
        setTitle(e.target.value)
    }

    const draw = () => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        let commandList = []
        for (let value in commands) {
            commandList.push(commands[value])
        }

        commandList.forEach((com, idx) => {
            const command = com.split(' ')

            let color = 'black'
            let x
            let y

            switch (command[0]) {
                case 'background':
                    ctx.fillStyle = command[1] || color
                    ctx.fillRect(0, 0, 500, 500)
                    ctx.fillStyle = color
                    break
                case 'color':
                    ctx.fillStyle = command[1]
                    break
                case 'circle':
                    for (let i = idx; i >= 0; i--) {
                        if (commandList[i].split(' ')[0] === 'move') {
                            x = commandList[i].split(' ')[1]
                            y = commandList[i].split(' ')[2]
                            i = 0
                        } else {
                            x = 250
                            y = 250
                        }
                    }
                    for (let i = idx; i >= 0; i--) {
                        if (commandList[i].split(' ')[0] === 'color') {
                            color = commandList[i].split(' ')[1]
                            i = 0
                        } else {
                            color = 'black'
                        }
                    }
                    ctx.fillStyle = color
                    ctx.beginPath()
                    ctx.arc(x, y, command[1], 0, 2 * Math.PI)
                    ctx.fill()
                    ctx.stroke()
                    break
                case 'ellipse':
                    for (let i = idx; i >= 0; i--) {
                        if (commandList[i].split(' ')[0] === 'move') {
                            x = commandList[i].split(' ')[1]
                            y = commandList[i].split(' ')[2]
                            i = 0
                        } else {
                            x = 250
                            y = 250
                        }
                    }
                    for (let i = idx; i >= 0; i--) {
                        if (commandList[i].split(' ')[0] === 'color') {
                            color = commandList[i].split(' ')[1]
                            i = 0
                        } else {
                            color = 'black'
                        }
                    }
                    ctx.fillStyle = color
                    ctx.beginPath()
                    ctx.ellipse(x, y, command[1], command[2], 0, 0, 2 * Math.PI)
                    ctx.fill()
                    ctx.stroke()
                    break
                case 'square':
                    for (let i = idx; i >= 0; i--) {
                        if (commandList[i].split(' ')[0] === 'move') {
                            x = commandList[i].split(' ')[1]
                            y = commandList[i].split(' ')[2]
                            i = 0
                        } else {
                            x = 250
                            y = 250
                        }
                    }
                    for (let i = idx; i >= 0; i--) {
                        if (commandList[i].split(' ')[0] === 'color') {
                            color = commandList[i].split(' ')[1]
                            i = 0
                        } else {
                            color = 'black'
                        }
                    }
                    ctx.fillStyle = color
                    ctx.beginPath()
                    ctx.fillRect(x, y, command[1], command[1])
                    ctx.rect(x, y, command[1], command[1])
                    ctx.fill()
                    ctx.stroke()
                    break
                case 'rectangle':
                    for (let i = idx; i >= 0; i--) {
                        if (commandList[i].split(' ')[0] === 'move') {
                            x = commandList[i].split(' ')[1]
                            y = commandList[i].split(' ')[2]
                            i = 0
                        } else {
                            x = 250
                            y = 250
                        }
                    }
                    for (let i = idx; i >= 0; i--) {
                        if (commandList[i].split(' ')[0] === 'color') {
                            color = commandList[i].split(' ')[1]
                            i = 0
                        } else {
                            color = 'black'
                        }
                    }
                    ctx.fillStyle = color
                    ctx.beginPath()
                    ctx.fillRect(x, y, command[1], command[2])
                    ctx.rect(x, y, command[1], command[2])
                    ctx.fill()
                    ctx.stroke()
                    break
                case 'arc':
                    for (let i = idx; i >= 0; i--) {
                        if (commandList[i].split(' ')[0] === 'move') {
                            x = commandList[i].split(' ')[1]
                            y = commandList[i].split(' ')[2]
                            i = 0
                        } else {
                            x = 250
                            y = 250
                        }
                    }
                    for (let i = idx; i >= 0; i--) {
                        if (commandList[i].split(' ')[0] === 'color') {
                            color = commandList[i].split(' ')[1]
                            i = 0
                        } else {
                            color = 'black'
                        }
                    }
                    ctx.fillStyle = color
                    ctx.beginPath()
                    ctx.arc(x, y, command[1], command[2] * Math.PI, command[3] * Math.PI)
                    ctx.fill()
                    ctx.stroke()
                    break
                case 'font':
                    ctx.font = `${command[2]}px ${command[1]}`
                    break
                case 'text':
                    for (let i = idx; i >= 0; i--) {
                        if (commandList[i].split(' ')[0] === 'move') {
                            x = commandList[i].split(' ')[1]
                            y = commandList[i].split(' ')[2]
                            i = 0
                        } else {
                            x = 250
                            y = 250
                        }
                    }
                    for (let i = idx; i >= 0; i--) {
                        if (commandList[i].split(' ')[0] === 'color') {
                            color = commandList[i].split(' ')[1]
                            i = 0
                        } else {
                            color = 'black'
                        }
                    }
                    ctx.fillStyle = color
                    ctx.fillText((`${command[1] || ''} ${command[2] || ''} ${command[3] || ''} ${command[4] || ''} ${command[5] || ''}`), x, y)
                    break
                default:
            }
        })
    }

    const save = async e => {
        e.preventDefault()
        const canvas = canvasRef.current
        const photoUrl = canvas.toDataURL("image/png")

        const inputs = Object.values(commands)

        await context.createProject({
            title,
            photoUrl,
            inputs
        })

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your proyect has been saved',
            showConfirmButton: false,
            timer: 1000
        })

        navigate('/profile')
    }

    const loggedUser = context.state.loggedUser

    return (
        <Container>
            <Title>
                {loggedUser && <button onClick={save}>SAVE</button>}
                {loggedUser && <input type='text' placeholder='Proyect name' name='title' value={title} onChange={handleTitleInput}/>}
            </Title>
            <article>
                <Menu>
                    <button
                        onClick={setActiveButton('code')}
                        style={buttons.code ? {background: 'rgb(164,230,255)'} : {background: 'rgb(86,86,100)'}}
                    ><i className="fas fa-code"></i></button>

                    <button
                        onClick={setActiveButton('figures')}
                        style={buttons.figures ? {background: 'rgb(164,230,255)'} : {background: 'rgb(86,86,100)'}}
                    ><i className="far fa-circle"></i></button>

                    <button
                        onClick={setActiveButton('move')}
                        style={buttons.move ? {background: 'rgb(164,230,255)'} : {background: 'rgb(86,86,100)'}}
                    ><i className="fas fa-arrows-alt"></i></button>

                    <button
                        onClick={setActiveButton('text')}
                        style={buttons.text ? {background: 'rgb(164,230,255)'} : {background: 'rgb(86,86,100)'}}
                    ><i className="fas fa-font"></i></button>

                    <button
                        onClick={setActiveButton('color')}
                        style={buttons.color ? {background: 'rgb(164,230,255)'} : {background: 'rgb(86,86,100)'}}
                    ><i className="fas fa-eye-dropper"></i></button>

                    <button
                        onClick={setActiveButton('other')}
                        style={buttons.other ? {background: 'rgb(164,230,255)'} : {background: 'rgb(86,86,100)'}}
                    ><i className="fas fa-ellipsis-h"></i></button>
                </Menu>

                <CodeEditor
                    style={!buttons.code ? {display: 'none'} : {display: 'block'}}
                >
                    {Array.from(Array(50), (input, idx) => {
                        return (
                            <div key={`input${idx}`}>
                                <label>{idx < 9 ? `0${idx + 1}` : idx + 1}</label>
                                <input
                                    name={`input${idx}`}
                                    value={commands[`input${idx}`]}
                                    onChange={handleInput}
                                    onKeyUp={draw}
                                />
                            </div>
                        )
                    })}
                </CodeEditor>

                {buttons.figures &&
                    <StyledInfo>
                        <h3>FIGURES</h3>
                        <h4>square <i>size</i></h4>
                        <p>Draws a square of a given size.</p>
                        <h4>rectangle <i>width</i> <i>height</i></h4>
                        <p>Draws a rectangle of a given width and height.</p>
                        <h4>circle <i>radius</i> </h4>
                        <p>Draws a circle of a given radius.</p>
                        <h4>ellipse <i>radiusX</i> <i>radiusY</i></h4>
                        <p>Draws an ellipse whit a given radius in X and Y.</p>
                        <h4>arc <i>radius</i> <i>start</i> <i>end</i></h4>
                        <p>Draws an arc of a given radius with a start and end from 0 to 2.</p>
                    </StyledInfo>
                }
                {buttons.move &&
                    <StyledInfo>
                        <h3>MOVEMENT</h3>
                        <h4>move <i>x</i> <i>y</i></h4>
                        <p>Moves to a new position of a given coordinates.</p>
                    </StyledInfo>
                }
                {buttons.text &&
                    <StyledInfo>
                        <h3>TEXT</h3>
                        <h4>text <i>message</i></h4>
                        <p>Prints a given message.</p>
                        <h4>font <i>fontFamily</i> <i>size</i></h4>
                        <p>Changes the font and the size of the message.</p>
                    </StyledInfo>
                }
                {buttons.color &&
                    <StyledInfo>
                        <h3>COLOR</h3>
                        <h4>background <i>color</i></h4>
                        <p>Changes the color of the background.</p>
                        <h4>color <i>color</i></h4>
                        <p>Changes the color of the figures.</p>
                    </StyledInfo>
                }
                {buttons.other &&
                    <StyledInfo>
                        <h3>MISCELLANEOUS</h3>
                        <h4>canvas size</h4>
                        <p>The canvas size is 500x500 pixels.</p>
                        <h4>coordinates</h4>
                        <p>The coordinates start in the upper-left corner.</p>
                    </StyledInfo>
                }
                <Canvas ref={canvasRef} width={500} height={500} />
            </article>
        </Container>
    )
}

export default Playground
