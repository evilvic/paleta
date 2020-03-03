import React, { Component } from 'react'
import { Container, CodeEditor, Canvas, Title, Menu, StyledInfo } from '../style/components'
import AUTH_SERVICE from '../services/auth'
import PROJECTS_SERVICE from '../services/project'
import Swal from 'sweetalert2'


class Playground extends Component {

    state = {
        title: '',
        loggedUser: null,
        commands: {
            input0: '', input1: '', input2: '', input3: '', input4: '', input5: '', input6: '', input7: '', input8: '', input9: '',
            input10: '', input11: '', input12: '', input13: '', input14: '', input15: '', input16: '', input17: '', input18: '', input19: '',
            input20: '', input21: '', input22: '', input23: '', input24: '', input25: '', input26: '', input27: '', input28: '', input29: '',
            input30: '', input31: '', input32: '', input33: '', input34: '', input35: '', input36: '', input37: '', input38: '', input39: '',
            input40: '', input41: '', input42: '', input43: '', input44: '', input45: '', input46: '', input47: '', input48: '', input49: ''
        },
        buttons: {
            code: true,
            figures: false,
            move: false,
            text: false,
            color: false,
            other: false
        }
    }

    handleCodeButton = e => {
        e.preventDefault()
        this.setState(prevState => ({
            ...prevState,
            buttons: {
                code: true,
                figures: false,
                move: false,
                text: false,
                color: false,
                other: false
            }
        }))
    }

    handleFiguresButton = e => {
        e.preventDefault()
        this.setState(prevState => ({
            ...prevState,
            buttons: {
                code: false,
                figures: true,
                move: false,
                text: false,
                color: false,
                other: false
            }
        }))
    }

    handleMoveButton = e => {
        e.preventDefault()
        this.setState(prevState => ({
            ...prevState,
            buttons: {
                code: false,
                figures: false,
                move: true,
                text: false,
                color: false,
                other: false
            }
        }))
    }

    handleTextButton = e => {
        e.preventDefault()
        this.setState(prevState => ({
            ...prevState,
            buttons: {
                code: false,
                figures: false,
                move: false,
                text: true,
                color: false,
                other: false
            }
        }))
    }

    handleColorButton = e => {
        e.preventDefault()
        this.setState(prevState => ({
            ...prevState,
            buttons: {
                code: false,
                figures: false,
                move: false,
                text: false,
                color: true,
                other: false
            }
        }))
    }

    handleOtherButton = e => {
        e.preventDefault()
        this.setState(prevState => ({
            ...prevState,
            buttons: {
                code: false,
                figures: false,
                move: false,
                text: false,
                color: false,
                other: true
            }
        }))
    }

    handleInput = e => {
        const { name, value } = e.target
        this.setState(prevState => ({
            ...prevState,
            commands: {
                ...prevState.commands,
                [name]: value
            }
        }))
    }

    handleTitleInput = e => {
        const {name, value } = e.target
        this.setState(prevState => ({
            ...prevState,
            [name]: value
        }))
        console.log(this.state)
    }

    draw = e => {

        const canvas = this.refs.canvas
        const ctx = canvas.getContext('2d')
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        let commands = []

        for (let value in this.state.commands) {
            commands.push(this.state.commands[value])
        }

        commands.forEach((com, idx) => {

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
                        if (commands[i].split(' ')[0] === 'move') {
                            x = commands[i].split(' ')[1]
                            y = commands[i].split(' ')[2]
                            i = 0
                        } else {
                            x = 250
                            y = 250
                        }
                    }
                    for (let i = idx; i >= 0; i--) {
                        if (commands[i].split(' ')[0] === 'color') {
                            color = commands[i].split(' ')[1]
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
                        if (commands[i].split(' ')[0] === 'move') {
                            x = commands[i].split(' ')[1]
                            y = commands[i].split(' ')[2]
                            i = 0
                        } else {
                            x = 250
                            y = 250
                        }
                    }
                    for (let i = idx; i >= 0; i--) {
                        if (commands[i].split(' ')[0] === 'color') {
                            color = commands[i].split(' ')[1]
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
                        if (commands[i].split(' ')[0] === 'move') {
                            x = commands[i].split(' ')[1]
                            y = commands[i].split(' ')[2]
                            i = 0
                        } else {
                            x = 250
                            y = 250
                        }
                    }
                    for (let i = idx; i >= 0; i--) {
                        if (commands[i].split(' ')[0] === 'color') {
                            color = commands[i].split(' ')[1]
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
                        if (commands[i].split(' ')[0] === 'move') {
                            x = commands[i].split(' ')[1]
                            y = commands[i].split(' ')[2]
                            i = 0
                        } else {
                            x = 250
                            y = 250
                        }
                    }
                    for (let i = idx; i >= 0; i--) {
                        if (commands[i].split(' ')[0] === 'color') {
                            color = commands[i].split(' ')[1]
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
                        if (commands[i].split(' ')[0] === 'move') {
                            x = commands[i].split(' ')[1]
                            y = commands[i].split(' ')[2]
                            i = 0
                        } else {
                            x = 250
                            y = 250
                        }
                    }
                    for (let i = idx; i >= 0; i--) {
                        if (commands[i].split(' ')[0] === 'color') {
                            color = commands[i].split(' ')[1]
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
                        if (commands[i].split(' ')[0] === 'move') {
                            x = commands[i].split(' ')[1]
                            y = commands[i].split(' ')[2]
                            i = 0
                        } else {
                            x = 250
                            y = 250
                        }
                    }
                    for (let i = idx; i >= 0; i--) {
                        if (commands[i].split(' ')[0] === 'color') {
                            color = commands[i].split(' ')[1]
                            i = 0
                        } else {
                            color = 'black'
                        }
                    }
                    ctx.fillStyle = color
                    ctx.fillText(( `${command[1] || ''} ${command[2] || ''} ${command[3] || ''} ${command[4] || ''} ${command[5] || ''}`), x, y)
                    break
                default:
            }
        })

    }

    save = async e => {
        e.preventDefault()
        const canvas = this.refs.canvas
        const photoUrl = canvas.toDataURL("image/png")

        const { title } = this.state

        const {
            input0, input1, input2, input3, input4, input5, input6, input7, input8, input9,
            input10, input11, input12, input13, input14, input15, input16, input17, input18, input19,
            input20, input21, input22, input23, input24, input25, input26, input27, input28, input29,
            input30, input31, input32, input33, input34, input35, input36, input37, input38, input39,
            input40, input41, input42, input43, input44, input45, input46, input47, input48, input49
        } = this.state.commands

        await PROJECTS_SERVICE.create({
            title,
            photoUrl,
            input0, input1, input2, input3, input4, input5, input6, input7, input8, input9,
            input10, input11, input12, input13, input14, input15, input16, input17, input18, input19,
            input20, input21, input22, input23, input24, input25, input26, input27, input28, input29,
            input30, input31, input32, input33, input34, input35, input36, input37, input38, input39,
            input40, input41, input42, input43, input44, input45, input46, input47, input48, input49
        })

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your proyect has been saved',
            showConfirmButton: false,
            timer: 1000
        })

        this.props.history.push('/profile')

    }

    componentDidMount () {
        AUTH_SERVICE.getUser()
        .then(({ data }) => {
            this.setState(prevState => ({
                ...prevState,
                loggedUser: data.user
            }))
        })
        .catch(() => {
            console.log('Somethinmg went wrong...')
        })
        
    }

    render() {
        return (
            <Container>
                <Title>
                    {this.state.loggedUser && <button onClick={this.save}>SAVE</button>}
                    {this.state.loggedUser && <input type='text' placeholder='Proyect name' name='title' value={this.state.title} onChange={this.handleTitleInput}/>}
                </Title>
                <article>
                    <Menu>

                        <button 
                            onClick={this.handleCodeButton}
                            style={this.state.buttons.code ? {background: 'rgb(164,230,255)'} : {background: 'rgb(86,86,100)'}}
                        ><i className="fas fa-code"></i></button>

                        <button 
                            onClick={this.handleFiguresButton}
                            style={this.state.buttons.figures ? {background: 'rgb(164,230,255)'} : {background: 'rgb(86,86,100)'}}
                        ><i className="far fa-circle"></i></button>

                        <button 
                            onClick={this.handleMoveButton}
                            style={this.state.buttons.move ? {background: 'rgb(164,230,255)'} : {background: 'rgb(86,86,100)'}}
                        ><i className="fas fa-arrows-alt"></i></button>

                        <button 
                            onClick={this.handleTextButton}
                            style={this.state.buttons.text ? {background: 'rgb(164,230,255)'} : {background: 'rgb(86,86,100)'}}
                        ><i className="fas fa-font"></i></button>

                        <button 
                            onClick={this.handleColorButton}
                            style={this.state.buttons.color ? {background: 'rgb(164,230,255)'} : {background: 'rgb(86,86,100)'}}
                        ><i className="fas fa-eye-dropper"></i></button>

                        <button 
                            onClick={this.handleOtherButton}
                            style={this.state.buttons.other ? {background: 'rgb(164,230,255)'} : {background: 'rgb(86,86,100)'}}
                        ><i className="fas fa-ellipsis-h"></i></button>

                    </Menu>
                    
                        <CodeEditor
                            style={!this.state.buttons.code ? {display: 'none'} : {display: 'block'} }
                        >
                            {Array.from(Array(50), (input, idx) => {
                                return (
                                    <div key={idx}>
                                        <label>{idx < 9 ? `0${idx + 1}` : idx + 1}</label>
                                        <input 
                                            name={`input${idx}`}
                                            value={this.state.input}
                                            onChange={this.handleInput}
                                            onKeyUp={this.draw}
                                        />
                                    </div>
                                )
                            })}
                        </CodeEditor>
                    
                    {this.state.buttons.figures &&
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
                    {this.state.buttons.move &&
                        <StyledInfo>
                            <h3>MOVEMENT</h3>
                            <h4>move <i>x</i> <i>y</i></h4>
                            <p>Moves to a new position of a given coordinates.</p>
                        </StyledInfo>
                    }
                    {this.state.buttons.text &&
                        <StyledInfo>
                            <h3>TEXT</h3>
                            <h4>text <i>message</i></h4>
                            <p>Prints a given message.</p>
                            <h4>font <i>fontFamily</i> <i>size</i></h4>
                            <p>Changes the font and the size of the message.</p>
                        </StyledInfo>
                    }
                    {this.state.buttons.color &&
                        <StyledInfo>
                            <h3>COLOR</h3>
                            <h4>background <i>color</i></h4>
                            <p>Changes the color of the background.</p>
                            <h4>color <i>color</i></h4>
                            <p>Changes the color of the figures.</p>
                        </StyledInfo>
                    }
                    {this.state.buttons.other &&
                        <StyledInfo>
                            <h3>MISCELLANEOUS</h3>
                            <h4>canvas size</h4>
                            <p>The canvas size is 500x500 pixels.</p>
                            <h4>coordinates</h4>
                            <p>The coordinates start in the upper-left corner.</p>
                        </StyledInfo>
                    }
                    <Canvas ref='canvas' width={500} height={500} />
                </article>
            </Container>
        )
    }
}

export default Playground
