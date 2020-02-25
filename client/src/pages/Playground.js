import React, { Component } from 'react'

class Playground extends Component {

    state = {
        input1: '',
        input2: ''
    }

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
            <>
                <section>
                    <input 
                        name='input1'
                        value={this.state.input}
                        onChange={this.handleInput}
                        onKeyUp={this.draw}
                    />
                    <input 
                        name='input2'
                        value={this.state.input}
                        onChange={this.handleInput}
                        onKeyUp={this.draw}
                    />
                    <input 
                        name='input3'
                        value={this.state.input}
                        onChange={this.handleInput}
                        onKeyUp={this.draw}
                    />
                </section>
                <canvas ref='canvas' width={500} height={500} style={ {border: 'solid 1px purple'} }/>
            </>
        )
    }
}

export default Playground
