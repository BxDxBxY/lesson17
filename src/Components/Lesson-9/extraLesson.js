import React, { Component } from 'react'
import Fruit from './fruit'
import Banana from '../../Assets/Images/banana.png'
import Grape from '../../Assets/Images/grape.png'
import Avacado from '../../Assets/Images/avocado.png'
export default class extraLesson extends Component {
    state = ({
        column: "Bunch of Bananas",
        chosenImages: [],
        chosenImg: ""
    })
     fileSave=(evt)=>{
        const {chosenImages} = this.state
        let file = evt.target.files[0]
        !chosenImages.includes(file) && chosenImages.push(file)
        this.setState({
            chosenImages
        })
     }
  render() {
    return (
      <div className='flex flex-col items-center my-[40px] justify-start'>
        <ul className='flex my-4 bg-slate-900 rounded-md text-white py-4 px-8  space-x-4 justify-between w-auto'>
            <li onClick={()=>this.setState({column: "Bunch of Bananas"})} className={`cursor-pointer text-2xl ${this.state.column === "Bunch of Bananas" && "text-red-400"}`}>Bunch of Bananas</li>
            <li onClick={()=>this.setState({column: "Grapes"})} className={`text-2xl cursor-pointer ${this.state.column === "Grapes" && "text-red-400"}`}>Grapes</li>
            <li onClick={()=>this.setState({column: "Avacado"})} className={`text-2xl cursor-pointer ${this.state.column === "Avacado" && "text-red-400"}`}>Avacado</li>
        </ul>
        {
            this.state.column === "Bunch of Bananas" && <Fruit link={Banana} cost={"30$"} name="Bunch of Bananas" /> 
        }
        {
            this.state.column === "Grapes" && <Fruit link={Grape} cost={"33$"} name="Grapes" /> 
        }
        {
            this.state.column === "Avacado" && <Fruit link={Avacado} cost={"99.99$"} name="Avocado" /> 
        }
        <div className='py-4 text-4xl rounded-md px-6 w-[1250px] flex-wrap flex space-x-[100px] space-y-4 bg-sky-600 text-white'>
        <div className=' space-y-4'>
            <p>Choose File</p>
            <input autoFocus={true} className='outline-2 outline-cyan-800 overflow-hidden w-[270px] cursor-pointer' type="file" accept=" image/jpeg, image/png, image/jpg, image/webp" onChange={this.fileSave} />
        </div>
        {
            (this.state.chosenImages).map((item, index)=>
        <div key={index} className='flex flex-col items-start '>
            <img src={URL.createObjectURL(item)} className={"object-contain"} alt="Your file" width={"400px"} h={"400px"} />
            <p className='text-2xl font-bold text-white m-0 flex-col flex p-2 bg-sky-800'>{item.name}<span className='text-red-400'>{(item.size / 1024).toFixed(2)}kb in size</span></p>
        </div>

            )
        }

            <link rel="stylesheet" href={this.state.chosenFile} />
        </div>
      </div>
    )
  }
}
