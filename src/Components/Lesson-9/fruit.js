import React, { Component } from 'react'

export default class fruit extends Component {
  render() {
    return (
        <div className='flex justify-between w-[100%]'>
      <div className='p-4 flex bg-yellow-600 flex-col space-y-2'>
        <img src={this.props.link} alt="fruit" />
        <div className='flex text-2xl bg-yellow-500 flex-col items-center justify-center'>
            <p className=' text-white'>{this.props.name}</p>
            <b>{this.props.cost}</b>
        </div>
      </div>
      <div className='p-4 flex bg-yellow-600 flex-col space-y-2'>
        <img src={this.props.link} alt="fruit" />
        <div className='flex text-2xl bg-yellow-500 flex-col items-center justify-center'>
            <p className=' text-white'>{this.props.name}</p>
            <b>{this.props.cost}</b>
        </div>
      </div>
      <div className='p-4 flex bg-yellow-600 flex-col space-y-2'>
        <img src={this.props.link} alt="fruit" />
        <div className='flex text-2xl bg-yellow-500 flex-col items-center justify-center'>
            <p className=' text-white'>{this.props.name}</p>
            <b>{this.props.cost}</b>
        </div>
      </div>
      <div className='p-4 flex bg-yellow-600 flex-col space-y-2'>
        <img src={this.props.link} alt="fruit" />
        <div className='flex text-2xl bg-yellow-500 flex-col items-center justify-center'>
            <p className=' text-white'>{this.props.name}</p>
            <b>{this.props.cost}</b>
        </div>
      </div>
      </div>
    )
  }
}
