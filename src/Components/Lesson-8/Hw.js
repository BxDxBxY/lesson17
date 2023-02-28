import React, { Component } from 'react'

export default class Hw extends Component {
    constructor(props){
        super(props)
        this.firstBtn = React.createRef()
        this.secondBtn = React.createRef()
        this.inputCheck = React.createRef()
    }
    state = ({
        names: [{
            Name: "Jack Stiven",
            id: 1
        },
        {
            Name: "John Stiven",
            id: 2
        },
        {
            Name: "Liz McDonald",
            id: 3
        }
        ],
        checkedArr:[],
        copiedNames: []
    })
    copyNames = () => {
        // this.firstBtn.current.disabled = true
        this.secondBtn.current.disabled = false
        const {names, copiedNames, checkedArr} = this.state
        let checkedArrMap = checkedArr.map(num => +num)
        for (let i = 0; i < checkedArrMap.length; i++) {
             names.map(obj => {if(obj.id === checkedArrMap[i]){if(!copiedNames.includes(obj)){ return (copiedNames.push(obj))}}})
            }
     this.setState({
        copiedNames,
        names
     })   
    }
    returnDef=()=>{
        this.firstBtn.current.disabled = false
        this.secondBtn.current.disabled = true
        const {copiedNames} = this.state
     this.setState({
        names: copiedNames,
        copiedNames: [],
     })   
    }
    check=(evt)=>{
        const {names, copiedNames, checkedArr} = this.state
        if(evt.target.checked){
            if(!checkedArr.includes(evt.target.id)){
                checkedArr.push(evt.target.id)
            }
        }else if(!evt.target.checked){
            if(checkedArr.includes(evt.target.id)){
                checkedArr.splice(checkedArr.indexOf(evt.target.id), 1)
            }
                copiedNames.map(obj => {if(obj.id === +evt.target.id) {return copiedNames.splice(copiedNames.indexOf(obj), 1)}})
        }
        this.setState({
            names,
            copiedNames,
            checkedArr
        })
    }
  render() {
    const {copiedNames} = this.state
    return (
      <div className='w-[1200px] ring-2 items-center justify-between ring-cyan-400 relative flex p-10 '>
        <div className='w-[45%] ' >
            <button ref={this.firstBtn} onClick={this.copyNames} className='p-[50px] w-[100%] mb-5 uppercase flex items-center justify-center text-4xl font-bold ring-2 active:ring-4 bg-cyan-400 active:bg-fuchsia-600 ring-cyan-700 '>Users</button>
            <ol className='flex list-outside list-decimal flex-col space-y-2 '>
                {
                    this.state.names.map((item, index) =>(
                        <li className='px-2 py-1 ring-2 ring-cyan-200  flex justify-between' key={index}>{item.Name} <input onChange={this.check} ref={this.inputCheck} type="checkbox" id={item.id} /></li>                        
                    ))
                }
            </ol>
        </div>
        <hr className='w-[30%] h-10 rotate-90'/>
        <div className='w-[45%]'>
        <button ref={this.secondBtn}  onClick={this.returnDef} className='p-[50px] w-[100%] mb-5 uppercase flex items-center justify-center text-4xl font-bold ring-2 active:ring-4 bg-cyan-400 active:bg-fuchsia-600 ring-cyan-700 '>Activities</button>
        <ol className='flex list-outside list-decimal flex-col space-y-2 '>
                { copiedNames ? (
                  copiedNames.map((item, index) =>(
                        <li className='px-2 py-1 ring-2 ring-cyan-200  text-cyan-100' key={index}>{item.Name} </li>                        
                    ))
                ): ""
                }
            </ol>

        </div>
      </div>
    )
  }
}
