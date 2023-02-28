import React, { Component } from 'react'

export default class Card2 extends Component {
  render() {
    return (
      <div className='w-[300px] rounded-md border-solid border-2 border-sky-500 p-4 font-bold text-left m-2 space-x-2 space-y-2 border-spacing-9'>
        <h2 className='text-2xl capitalize mb-4'>{this.props.Name}</h2>
        <b>{this.props.typeOff}</b>
        <b>{this.props.mass}</b>
        <p>{this.props.eats}</p>
        <button className='bg-green-500 p-3 ring-2 ring-green-600 text-blue-600 '>More Info</button>
      </div>
    )
  }
}
