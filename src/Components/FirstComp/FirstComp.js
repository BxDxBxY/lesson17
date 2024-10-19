import React, { Component } from 'react'

export class FirstComp extends Component {
    static propTypes = {}
    
    render() {
        return (
            <>
            <h1 className='text-5xl'>{this.props.text}</h1>
            <button onClick={this.props.func} className='btn focus:ring-opacity-75 bg-blue-400 hover:bg-red-400 flex focus:ring-blue-400 active:bg-yellow-300 focus:outline-none focus:ring-2 p-1 text-white text-3xl rounded-md'>{this.props.text}</button>
            
            </>
            )
        }
    }
    
    export default FirstComp