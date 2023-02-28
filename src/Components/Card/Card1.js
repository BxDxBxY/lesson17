import React, { Component } from 'react'

export class Card1 extends Component {
  static propTypes = {}

  render() {
    return (
      <div className={` ${this.props.style}`} >
        <img src={this.props.src} alt="img" className='rounded-xl' width={200} height={200} />
        <div className='flex flex-col items-center w-[150px]'>
        <p className= {`${this.props.bg} cursor-pointer`}>{this.props.text}</p>
        <b className={`${this.props.bg2}`}>{this.props.cost}</b> 
        </div>
      </div>
    )
  }
}

export default Card1