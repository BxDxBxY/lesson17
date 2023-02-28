import React, { Component } from 'react'

export default class Table extends Component {
    constructor(props){
        super(props)
        this.btnAddUser = React.createRef()
        this.inpFirstName = React.createRef()
        this.inpLastName = React.createRef()
        this.inpAddress = React.createRef()
        this.btnDelete = React.createRef()
    }
    state = ({
        table: [
            {
                id:  1,
                name: "Jack",
                lastName: "Stiven",
                address: "London"
            }
        ],
        searchedTable: []
    })
    
    addUserFunc=()=>{
        const {table} = this.state
        if(this.inpFirstName.current.value !== "" && this.inpLastName.current.value !== "" && this.inpAddress.current.value !== ""){

            table.push(
                {
                    id: table.length + 1,
                    name: this.inpFirstName.current.value,
                    lastName: this.inpLastName.current.value,
                    address: this.inpAddress.current.value
            }
            )
            this.inpFirstName.current.value = ""
            this.inpLastName.current.value = ""
            this.inpAddress.current.value = ""
            this.setState({table})
        }else {
            // setInterval(() => {
                console.error("ERROR 404 NOT FOUND")
            // }, 1000);
        }
        }
        deleteUser = (evt) => {
            const {table} = this.state
            table.splice( +evt.target.id - 1, 1)
            this.setState({table})
        }
        deleteAll=()=>{
            this.setState({table: []})
        }
        searchUser=(evt) => {
            const {table, searchedTable} = this.state
            let value = evt.target.value.toLowerCase()
            if(value !== ""){
                table.map((obj)=> {if(obj.name.toLowerCase().includes(value)){ if(!searchedTable.includes(obj)) searchedTable.push(obj)} })
                this.setState({searchedTable})
            }else if(value === ""){
                this.setState({searchedTable: []})
            }

        }
        render() {
            return (
                <div>
                
                <div className='p-5 bg-cyan-300'>
                <div className='space-x-2 items-start flex flex-col justify-start mx-auto w-[100%] '>
                <div className='flex space-x-2'>
                <label className='space-y-2 uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' htmlFor="">
                <p className='text-2xl'>FIRST NAME</p>
                <input ref={this.inpFirstName} className='p-3 focus:outline-none ring-2 w-[300px] bg-blue-200 ring-blue-600 focus:bg-white text-blue-600 outline-2 outline-blue-600 rounded-md' type="text" placeholder='Jane' name="" id="" />
                </label>
                <label className='space-y-2 uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' htmlFor="">
                <p className='text-2xl'>LAST NAME</p>
                <input ref={this.inpLastName} className='p-3 focus:outline-none ring-2 w-[300px] bg-blue-200 ring-blue-600 focus:bg-white text-blue-600 outline-2 outline-blue-600 rounded-md' type="text" placeholder='Foster' name="" id="" />
                </label>
                </div>
                <div className='flex space-x-3 items-end justify-between'>
                <label className='space-y-2 uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' htmlFor="">
                <p className='text-2xl'>Address</p>
                <input ref={this.inpAddress} className='p-3 focus:outline-none ring-2 w-[300px] bg-blue-200 ring-blue-600 focus:bg-white text-blue-600 outline-2 outline-blue-600 rounded-md' type="text" placeholder='Foster' name="" id="" />
                </label>
                <button onClick={this.addUserFunc} className='px-4 py-2 text-2xl bg-cyan-700 text-white rounded-md'>Add User</button>
                </div>
                </div>
                <div className='flex space-x-10 mb-10'>
                <div className='my-4 p-5 space-y-4 bg-fuchsia-600 w-[300px]'>
                    <p className='text-4xl font-bold text-white'>Search...</p>
                    <input onChange={this.searchUser} className='ring-2 focus:ring-blue-600 focus:ring-4 outline-blue-400 py-2 px-4 ring-blue-400' type="text"/>
                </div>
                <div>
                {this.state.searchedTable.length ?  <div className='bg-slate-500 ring-4 flex items-center justify-center p-8 w-fit mx-auto'>
                <table>
                <thead>
                <tr className="text-2xl text-white border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                <th scope="col" className="px-6 py-4" >Id</th>
                <th scope="col" className="px-6 py-4" >Name</th>
                <th scope="col" className="px-6 py-4" >Last name</th>
                <th scope="col" className="px-6 py-4" >Adress</th>
                </tr>
                </thead>
                <tbody>
                {
                    this.state.searchedTable.map((obj, index)=>(
                        <tr className='text-2xl font-mono text-white border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-cyan-500 dark:hover:bg-cyan-600' key={index}>
                        <td className='  cursor-pointer font-bold whitespace-nowrap px-6 py-4 text-red-400'>{obj.id}</td>
                        <td className='  cursor-pointer whitespace-nowrap px-6 py-4 font-medium'>{obj.name}</td>
                        <td className='  cursor-pointer whitespace-nowrap px-6 py-4 font-medium'>{obj.lastName}</td>
                        <td className='  cursor-pointer whitespace-nowrap px-6 py-4 font-medium'>{obj.address}</td>
                        </tr>
                        ))
                    }
                    </tbody>
                    </table>
                    </div>:""
                }
                </div>
                </div>
                {
                    this.state.table.length ?  <div className='bg-slate-500 ring-4 flex items-center justify-center p-8 w-fit mx-auto'>
                <table>
                <thead>
                <tr className="text-2xl text-white border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                <th scope="col" className="px-6 py-4" >Id</th>
                <th scope="col" className="px-6 py-4" >Name</th>
                <th scope="col" className="px-6 py-4" >Last name</th>
                <th scope="col" className="px-6 py-4" >Adress</th>
                <th scope="col" className=""><button onClick={this.deleteAll} className='px-6 py-2 bg-red-800 rounded-md'><span className='text-red-600'>&#10006;</span> All Users</button></th>
                </tr>
                </thead>
                <tbody>
                {
                    this.state.table.map((obj, index)=>(
                        <tr className='text-2xl font-mono text-white border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-cyan-500 dark:hover:bg-cyan-600' key={index}>
                        <td className='  cursor-pointer font-bold whitespace-nowrap px-6 py-4 text-red-400'>{obj.id}</td>
                        <td className='  cursor-pointer whitespace-nowrap px-6 py-4 font-medium'>{obj.name}</td>
                        <td className='  cursor-pointer whitespace-nowrap px-6 py-4 font-medium'>{obj.lastName}</td>
                        <td className='  cursor-pointer whitespace-nowrap px-6 py-4 font-medium'>{obj.address}</td>
                        <td className='  cursor-pointer whitespace-nowrap  font-medium'><button onClick={this.deleteUser} className='px-6 py-2 bg-red-800 rounded-md' ref={this.btnDelete} id={obj.id}><span className='text-red-400'>&#10006;</span> User</button></td>
                        </tr>
                        ))
                    }
                    </tbody>
                    </table>
                    </div>: ""
                }
                </div>
                
                    </div>
                    )
                }
            }
            