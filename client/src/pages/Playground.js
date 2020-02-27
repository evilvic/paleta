import React, { Component } from 'react'
import { Container, CodeEditor, Canvas, Title, Menu } from '../style/components'
import AUTH_SERVICE from '../services/auth'
import PROJECTS_SERVICE from '../services/project'


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
        }
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

        //const { _id } = this.state.loggedUser

        await PROJECTS_SERVICE.create({
            title,
            //author: _id,
            photoUrl,
            input0, input1, input2, input3, input4, input5, input6, input7, input8, input9,
            input10, input11, input12, input13, input14, input15, input16, input17, input18, input19,
            input20, input21, input22, input23, input24, input25, input26, input27, input28, input29,
            input30, input31, input32, input33, input34, input35, input36, input37, input38, input39,
            input40, input41, input42, input43, input44, input45, input46, input47, input48, input49
        })
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
                    {this.state.loggedUser && <input type='text' placeholder='Proyect name'/>}
                </Title>
                <article>
                    <Menu>
                        <button><i className="fas fa-code"></i></button>
                    </Menu>
                    <CodeEditor>
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
                    <Canvas ref='canvas' width={500} height={500} />
                </article>
            </Container>
        )
    }
}

export default Playground
