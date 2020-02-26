import React, { Component } from 'react'
import { Container, CodeEditor, Canvas } from '../style/components'


class Playground extends Component {

    state = {}

    handleInput = e => {
        const { name, value } = e.target
        this.setState({[name]: value})
    }

    draw = e => {

        const canvas = this.refs.canvas
        const ctx = canvas.getContext('2d')
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        let commands = []

        for (let value in this.state) {
            commands.push(this.state[value])
        }

        commands.forEach(com => {

            const command = com.split(' ')
    
            switch (command[0]) {
                case 'circle':
                    ctx.beginPath()
                    ctx.arc(250, 250, command[1], 0, 2 * Math.PI)
                    ctx.stroke()
                    break
                case 'square':
                    ctx.beginPath()
                    ctx.strokeRect(250, 250, command[1], command[1])
                    ctx.stroke()
                    break
            }
        })

    }

    componentDidMount() {}

    render() {
        return (
            <Container>
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
            </Container>
        )
    }
}

export default Playground
