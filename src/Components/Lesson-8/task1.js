import React, { Component } from 'react'

export default class task1 extends Component {
    state = ({
        res: "Choose",
        on: false,
        on2: false,
        inpValue: "",
        list: [],
        sect: "New DO",
        deletedDOs: []
    })
    returnTrue =(event) =>{
        if(event.target.checked){
            console.log(event.target.checked)
            this.setState({
                on: true,
                on2: false,
                res: "I agree with the Privacy Policy"
            })
        }
    }
    second = (evt) => {
        if(evt.target.checked){
            this.setState({
                on: false,
                on2: true,
                res: "I do not agree with the Privacy Policy"    
            })
        }
    }
    newDo = (evt)=>{
        evt.preventDefault()
        const {inpValue, list} = this.state
        if(inpValue !== ""){     
            list.push(inpValue)
            this.setState({
                inpValue: "",
                list
            })
        }
    }
    addDelDo = (evt)=>{
        const {list, deletedDOs} = this.state
            list.push(deletedDOs[evt.target.id])
            deletedDOs.splice(evt.target.id, 1)
            this.setState({
                list,
                deletedDOs
            })
    }
    saveVal=(evt)=>{
        this.setState({
            inpValue: evt.target.value
        })
    }
    deleteDo=(evt)=>{
        const {list,deletedDOs} = this.state
        deletedDOs.push(list[evt.target.id])
        list.splice(evt.target.id, 1)
        this.setState({
            deletedDOs,
            list
        })
    }
    deleteDelDo=(evt)=>{
        const {deletedDOs} = this.state
        deletedDOs.splice(evt.target.id, 1)
        this.setState({
            deletedDOs,
        })
    }
    editDo=(evt)=>{
        const {list} = this.state
        let en = prompt("Change Do")
        list[evt.target.id] = en
        this.setState({
            list
        })
    }
    showNewDo=()=>{
        this.setState({
            sect: "New DO"
        })
    }
    showSaved=()=>{
        this.setState({
            sect: "Saved"
        })
    }
    showDeleted=()=>{
        this.setState({
            sect: "Deleted"
        })
    }
    render() {
        return (
            <>
            <div className='flex space-x-4 items-center p-5 bg-cyan-400 text-3xl mt-4'>
            <label className='flex space-x-2 items-center' htmlFor="inp1"><p>No</p>
            <input className='w-[30px] h-[30px]' id='inp1' checked={this.state.on2} onChange={this.second} type={'radio'}/>
            </label>
            <label className='flex space-x-2 items-center' htmlFor="inp1"><p>Yes</p>
            <input className='w-[30px] h-[30px]' id='inp1' checked={this.state.on} onChange={this.returnTrue} type={'radio'}/>
            </label>
            <p className='text-4xl text-cyan-900 font-bold'>{this.state.res}</p>
            </div>
            <div className="flex w-[1200px] flex-col">
                <ul className='flex space-x-2 text-2xl font-bold bg-indigo-700 text-white w-[330px] mx-auto mb-5 p-4 rounded-md'>
                    <li onClick={this.showNewDo} className={`${this.state.sect === "New DO" && "text-red-400"} cursor-pointer`}>New DO</li>
                    <li onClick={this.showSaved} className={`${this.state.sect === "Saved" && "text-red-400"} cursor-pointer`}>Saved</li>
                    <li onClick={this.showDeleted} className={`${this.state.sect === "Deleted" && "text-red-400"} cursor-pointer`}>Deleted</li>
                </ul>
                <div className={`w-[50%] ${this.state.sect === "Saved" && "flex "} `}>
                {this.state.sect === "New DO" && <>
                <form onSubmit={this.newDo} className='flex my-2 items-center bg-neutral-800 w-[500px] justify-center space-x-3 mx-auto'>
                    <h1 className='text-2xl text-white'>Add to do: </h1>
                    <input autoFocus={true} value={this.state.inpValue} onChange={this.saveVal} className='ring-2 outline-blue-600 ring-blue-600 rounded-md px-2 py-2 text-blue-600 w-[150px]' id='input1' type="text" />
                    <button type='button' onClick={this.newDo} className='p-4 bg-blue-600 text-white flex items-center justify-center rounded-md'>Add</button>
                </form>
                <div className='flex flex-wrap items-center justify-center '>
                {
                    this.state.list.map((item, index) => (
                        <div key={index + 1} className='flex  flex-col p-3 rounded-md m-2 bg-yellow-500 w-[200px] items-center justify-center'>
                            <p className='text-3xl font-bold text-white'>{item}</p>
                            <div className='flex space-x-2 mt-3 items-center justify-center w-[100px] '>
                                <button onClick={this.editDo} className='p-3 rounded-md bg-yellow-400 ' id={index}>Edit</button>
                                <button onClick={this.deleteDo} className='p-3 rounded-md bg-red-400 ' id={index}>Delete</button>
                            </div>
                        </div>
                    ))
                }
                </div></>}
                {this.state.sect === "Saved" && 
                    this.state.list.map((item, index) => (<div className='flex' key={index}>
                        <div key={index + 1} className='flex flex-col p-3 rounded-md m-2  bg-yellow-500 w-[200px] items-center justify-center'>
                            <p className='text-3xl font-bold text-white'>{item}</p>
                            <div className='flex space-x-2 m-2 mt-3 items-center justify-center w-[100px] '>
                                <button onClick={this.editDo} className='p-3 rounded-md bg-yellow-400 ' id={index}>Edit</button>
                                <button onClick={this.deleteDo} className='p-3 rounded-md bg-red-400 ' id={index}>Delete</button>
                            </div>
                        </div></div>
                    ))
                }
                {this.state.sect === "Deleted" && 
                    this.state.deletedDOs.map((item, index) => (
                        <div key={index + 1} className='flex flex-col p-3 m-2 rounded-md bg-red-500 w-[200px] items-center justify-center'>
                            <p className='text-3xl font-bold text-white'>{item}</p>
                            <div className='flex space-x-2 mt-3 items-center justify-center w-[100px] '>
                                <button onClick={this.addDelDo} className='p-3 rounded-md bg-yellow-400 ' id={index}>Return</button>
                                <button onClick={this.deleteDelDo} className='p-3 rounded-md bg-red-400 ' id={index}>Delete</button>
                            </div>
                        </div>
                    ))
                }

                </div>
            </div>
            </>
            )
        }
    }
    