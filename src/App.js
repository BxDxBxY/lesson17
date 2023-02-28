
import React, { Component } from 'react'
import Card1 from './Components/Card/Card1'
import Card2 from './Components/Card/Card2'
import img1 from './Assets/Images/img1.png'
import img2 from './Assets/Images/img2.png'
import img3 from './Assets/Images/img3.png'
import img4 from './Assets/Images/img4.png'
import FirstComp from './Components/FirstComp/FirstComp'
import "./index.css"
import Header from './Components/Hw/Header'
import Footer from './Components/Hw/Footer'
import Main from './Components/Hw/Main'
import Nav from './Components/Hw/Nav'
import Audio from './Assets/Audios/Timer_Melody.mp3'
import Task1 from './Components/Lesson-8/task1'
import Hw8 from './Components/Lesson-8/Hw'
import Table from './Components/Lesson-8/Table'
import ExtraLesson9 from './Components/Lesson-9/extraLesson'

export class App extends Component {
  state = ({
    users: [
      {
        id: 1,
        name: 'John',
        surname: "Smith",
        age: 45, 
        num: 100,
        City: "Chicago",
        state: "IL",
        salary: 1000
      },
      {
        id: 2,
        name: 'Jack',
        surname: "Boy",
        age: 19, 
        num: 100,
        City: "Watshington",
        state: "AZ",
        salary: 820
      },
      {
        id: 3,
        name: 'Ross',
        surname: "Boy",
        age: 13, 
        num: 100,
        City: "Watshington",
        state: "AZ",
        salary: 1000
      },
      {
        id: 4,
        name: 'Black',
        surname: "Boy",
        age: 25, 
        num: 100,
        City: "Watshington",
        state: "AZ",
        salary: 1200
      },
      {
        id: 5,
        name: 'SMS',
        surname: "Tek",
        age: 12, 
        num: 100,
        City: "NON",
        state: "London",
        salary: 932
      }
    ],
    metr: 0,
    step: 1,
    num:0,
    word:"Log in",
    word2: "Log in!",
    seconds: "00",
    minutes: "00",
    hours: "00",
    startBtn: false,
    product: "Product 1",
    timerHours: 2,
    timerMinutes: 11,
    timerSeconds: 50,
    counters: []
  })
  filt(){
    this.setState({
      users: this.state.users.filter(obj => {
        if(obj.age >= 18){
          return obj
        }
        else{
          return ""
        }
      })
    })
  }
  change(){
    let {word}= this.state
    if(word === "Log in"){
      this.setState({word: "Welcome", word2: "Log out!"})
    }else{
      this.setState({word: "Log in", word2: "Log in!"})
    }
  }
  word = 87
  enlargeStep(){
    
    let {step} =  this.state
    this.setState({
      step: step + 1
    })    
  }
  move(){
    let {metr, step} =  this.state
    this.setState({
      metr: metr + step
    })
  }
  minus(item, index){
    const {counters} = this.state
    counters[index] = item - 1
    this.setState({
      counters: this.state.counters
    })
  }
  plus(item, index){
    const {counters} = this.state
    counters[index] = item + 1
    this.setState({
      counters: this.state.counters
    })
  }
  createCounter(){
    this.state.counters.push(0)
    this.setState({
      counters: this.state.counters
    })
  }
  Start(){
    let int = setInterval(() => {
      this.setState({
        seconds: +this.state.seconds + 1
      })
      if(this.state.seconds === 59){
        this.setState({
          seconds: 0,
          minutes: +this.state.minutes + 1
        })        
      }
      if(this.state.minutes ===  59){
        this.setState({
          minutes: 0
        }) 
        this.setState({
          hours: +this.state.hours + 1
        })
      }
    }, 1000);
    this.setState({
      startBtn: true,
      int: int
    })
  }
  stop(){
    clearInterval(this.state.int)
    this.setState({
      startBtn: false
    })
  }
  Reset(){
    this.setState({
      seconds: 0,
      minutes: 0,
      hours: 0,
      startBtn: false,
      time: ""
    })
    clearInterval(this.state.int)
  }
  saveInterval(){
    const {hours, minutes, seconds} = this.state
    this.setState({
      time: `${hours}:${minutes}:${seconds}` 
    })
  }
  func = ()=>{
    const {word} = this.state
    if(word === "Log in"){
      this.setState({
        word: "Log out",
      })
    }else{
      this.setState({
        word: "Log in"
      })
    }
    
  }
  filtBySection1(){
    this.setState({ 
      product: "Product 1"
    })
  }
  filtBySection2(){
    this.setState({ 
      product: "Product 2"
    })
  }
  filtBySection3(){
    this.setState({ 
      product: "Product 3"
    })
  }
  filtBySection4(){
    this.setState({ 
      product: "Product 4"
    })
  }
  StartTimer(){
    if(this.state.timerMinutes > 59 ){
      this.setState({
        play: false,
        timerMinutes: 0,
      })
    }
    if(this.state.timerSeconds > 59 ){
      let minutes = Math.floor(this.state.timerSeconds / 60) 
      this.setState({
        play: false,
        timerSeconds: 0,
        timerMinutes: minutes
      })
    }
    if (this.state.timerHours !== 0 || this.state.timerMinutes !== 0 || this.state.timerSeconds !== 0){if(!this.state.timeLeft){
      let timer = setInterval(() => {
        if(this.state.timerSeconds !== 0){
          this.setState({
            timerSeconds: this.state.timerSeconds -1,
            play: false
          })
        }
        if(this.state.timerSeconds <= 0 && this.state.timerMinutes === 0 && this.state.timerHours === 0 ){
          this.setState({
            timerSeconds: 0,
            play: true
          })
          clearInterval(this.state.timeLeft)
          this.setState({
            timeLeft: false
          })        
        }
        if(this.state.timerSeconds === 0 && this.state.timerMinutes !== 0){
          this.setState({
            timerSeconds: 59,
            timerMinutes: this.state.timerMinutes - 1,
            play: false
          })
        }
        if(this.state.timerMinutes === 0 && this.state.timerHours !== 0){
          this.setState({
            timerHours: this.state.timerHours -1,
            timerMinutes: 59,
            timerSeconds: 59,
            play: false
          })
          
        }
        if (this.state.timerMinutes === 0 && this.state.timerHours === 0 && this.state.timerSeconds === 0) {
          this.setState({
            play: true,
            audio: Audio
          })
        }      
      }, 0);
      this.setState({
        timeLeft: timer
      })
    }}
    
  }
  stopTimer(){
    clearInterval(this.state.timeLeft)
    this.setState({
      timeLeft: false
    })
  }
  ResetTimer(){
    clearInterval(this.state.timeLeft)
    this.setState({
      timerMinutes: 0,
      timerHours: 0,
      timerSeconds: 0,
      timeLeft: false
    })
  }
  increaseHours(){
    this.setState({
      timerHours: this.state.timerHours + 1
    })
  }
  render() {
    return (
      <div className=' container max-w-[1400px] mx-auto'>
      {/* table */}
      <div>
      <table className='my-5'>
      <thead>
      <tr>
      <th>ID</th>
      <th>Name</th>
      <th>SurName</th>
      <th>Age</th>
      <th>Dept_number</th>
      <th>City</th>
      <th>State</th>
      <th>Salary</th>
      </tr>
      </thead>
      
      <tbody>
      {
        this.state.users.map((item, index) => {
          return (
            <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.name}</td>
            <td>{item.surname}</td>
            <td>{item.age}</td>
            <td>{item.num}</td>
            <td>{item.City}</td>
            <td>{item.state}</td>
            <td>{item.salary}</td>
            </tr>
            )
          })
        }
        </tbody>
        </table>
        <button className='ring-2 ring-cyan-900 px-4' onClick={()=>this.filt()}>Filter The Table By Age</button>
        </div>
        {/* Change word */}
        <div className='text-2xl m-3 p-4 bg-cyan-700 w-[400px] flex flex-col text-red-600'>
        <h1>{this.state.word}</h1>
        <button className='ring-2 ring-cyan-500' type='button' onClick={()=>this.change()}>{this.state.word2}</button>
        </div>
        {/* Step Task */}
        <ul className='bg-slate-200 p-5 m-4 w-[400px]'>
        <li key={1}><p>{this.state.metr} Metr</p></li>
        <li key={2}><button className='ring-2 ring-slate-400 px-5' onClick={()=>this.move()} type='button'>Go</button></li>
        <hr />
        <li key={3}>Width of Step: {this.state.step} Metr</li>
        <li key={4}><button className='ring-2 ring-slate-400 px-5' onClick={()=>this.enlargeStep()} type='button'>Enlarge Step</button></li>
        </ul>
        <hr />
        {/* Created Counters */}
        <div id='list'>
        <button className='ring-2 active:ring-4 active:bg-indigo-900 bg-indigo-700 shadow-lg text-2xl text-white ring-indigo-600 p-[20px] my-3' type='button' onClick={()=>this.createCounter()}>Create new Counter</button>
        <hr />
        {this.state.counter}
        <ul key={1} className='flex space-y-1 flex-col '>
        {
          this.state.counters.map((item, index) => (
            <li key={index}  className='flex space-x-2 items-center  ' >
            <button className=' active:bg-green-600 bg-green-400 ring-2 active:ring-4 ring-green-300 p-[20px] text-2xl ' id="add" onClick={()=>this.plus(item, index)}>+</button>
            <p className='font-bold text-3xl'>
            {item}
            </p>
            <button className='active:bg-red-600 bg-red-400 ring-2 active:ring-4 ring-red-300 text-2xl p-[20px] ' id="minus" onClick={()=>this.minus(item, index)}>-</button>
            </li>
            ))
          }
          </ul>
          </div>
          {/* Stopwatch & Timer */}
          <div className='flex '>
          <div className='flex w-[50%] flex-col items-center'>
          <h1 className='text-4xl font-bold text-zinc-500'>StopWatch</h1>
          <p className='text-3xl text-blue-800 m-3 mt-0 font-bold' >
          <span>{this.state.hours}</span>:
          <span>{this.state.minutes}</span>:
          <span >{this.state.seconds}</span>
          </p>
          <div className='relative' style={{display: "flex", gap: "20px"}}>
          <button disabled={this.state.startBtn} onClick={()=> this.Start()} id='start' className='btn btn-blue py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75' type='button'>Start</button>
          <button onClick={()=> this.stop()} id='stop' className='btn py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75' type='button'>Stop</button>
          <button id='interval' onClick={()=>this.saveInterval()} className='btn py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75' type='button'>Interval</button>
          <button onClick={()=> this.Reset()} id='reset' className='btn py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75' type='button'>Reset</button>
          <p className='absolute left-[75%] text-4xl top-[-52px]'>{this.state.time}</p>
          </div>
          </div>
          {/* Timer */}
          <div className='flex w-[50%] flex-col items-center'>
          <h1 className='text-4xl font-bold text-zinc-500'>Timer</h1>
          <p className='text-3xl p-6 relative text-blue-800 m-3 mt-0 font-bold' >
          <span>{this.state.timerHours}</span> : 
          <span> {this.state.timerMinutes}</span> :
          <span> {this.state.timerSeconds}</span>
          <span onClick={()=>this.increaseHours()} className='top-0 absolute rotate-90 flex cursor-pointer ring-2 justify-center items-center '>&lt;</span>
          <audio autoPlay={this.state.play} src={this.state.audio}></audio>
          </p>
          <div className='relative' style={{display: "flex", gap: "20px"}}>
          <button onClick={()=> this.StartTimer()} className='btn btn-blue py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75' type='button'>Start</button>
          <button onClick={()=> this.stopTimer()} className='btn py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75' type='button'>Stop</button>
          <button onClick={()=> this.ResetTimer()} className='btn py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75' type='button'>Reset</button>
          </div>
          </div>
          </div>
          <FirstComp text={this.state.word} func={this.func} />
          {/* Cards */}
          <div className="row flex-wrap space-y-2 flex m-1 space-x-2">
          <div className="col-4 rounded-md p-11 bg-slate-400">
          <Card1 src={img1} bg={" text-gray-400 p-2 bg-slate-100 m-3"} bg2={`flex text-center rounded bg-slate-100 p-2`} style={`flex flex-col items-center`} cost={"$30.00"} text={"FRESH FRUIT"}/>
          </div>
          <div className="col-4 rounded-md p-11 bg-slate-400">
          <Card1 src={img2} bg={" text-gray-400 p-2 bg-slate-100 m-3"} bg2={`flex text-center rounded bg-slate-100 p-2`} style={`flex flex-col items-center`} cost={"$24.50"} text={"DRIED FRUIT"}/>
          </div>
          <div className="col-4 rounded-md p-11 bg-slate-400">
          <Card1 src={img3} bg={" text-gray-400 p-2 bg-slate-100 m-3"} bg2={`flex text-center rounded bg-slate-100 p-2`} style={`flex flex-col items-center`} cost={"$49.99"} text={"VEGETABLES"}/>
          </div>
          <div className="col-4 rounded-md p-11 bg-slate-400">
          <Card1 src={img4} bg={" text-gray-400 p-2 bg-slate-100 m-3"} bg2={`flex text-center rounded bg-slate-100 p-2`} style={`flex flex-col items-center`} cost={"$20.00"} text={"DRINK FRUITS"}/>
          </div>
          </div>
          <div className="row flex flex-wrap space-y-2  space-x-2 m-3 ">
          <div className="col-4 content-center rounded-md flex items-center">
          <Card1 bg={" text-gray-400 p-2 bg-slate-100 m-3"} bg2={`text-red-300`} src={img1} style={`flex content-between shadow-md`} cost={"$90.00"} text={"FRESH FRUIT"}/>
          </div>
          <div className="col-4 rounded-md flex items-center p-2">
          <Card1 src={img2} bg={" text-gray-400 p-2 bg-slate-100 m-3"} bg2={`flex text-center text-red-400 p-2`} style={`flex content-between shadow-md`} cost={"$94.50"} text={"DRIED FRUIT"}/>
          </div>
          <div className="col-4 rounded-md flex items-center p-2">
          <Card1 src={img3} bg={" text-gray-400 p-2 bg-slate-100 m-3"} bg2={`flex text-center text-red-300 p-2`} style={`flex content-between shadow-md`} cost={"$99.99"} text={"VEGETABLES"}/>
          </div>
          <div className="col-4 rounded-md flex items-center p-2">
          <Card1 src={img4} bg={" text-gray-400 p-2 bg-slate-100 m-3"} bg2={`flex text-center text-red-300 p-2`} style={`flex content-between shadow-md`} cost={"$90.00"} text={"DRINK FRUITS"}/>
          </div>
          </div>
          {/* Animals */}
          <div className=' flex justify-between relative pt-4'>
          <p className='text-4xl absolute top-[-20px] font-bold text-green-600 left-[40%]'>Animals</p>
          <Card2 Name={"Lion"} typeOff="Pantereo Leo" mass="140kg" eats="Meat" />
          <Card2 Name={"Gorilla"} typeOff="Gorilla beringei" mass="205kg" eats="Plants, insects" />
          <Card2 Name={"Zebra"} typeOff="Equus Guaga" mass="322kg" eats="Plants" />
          </div>
          {/* Semantig tags */}
          <div className='flex flex-col space-x-2 space-y-2'>
          <Header/>
          <div className='flex w-[100%] h-[600px]'>
          <Nav/>
          <Main/>
          </div>
          <Footer/>
          </div> 
          {/* table */}
          <div className="flex items-center justify-center flex-col mx-auto w-[300px]" >
          <div
          className="flex space-x-3 mt-4 transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
          >
          <button
          className="w-[200px] bg-blue-400 text-4xl p-0  rounded-l bg-blue px-6 pt-2.5 pb-2 font-medium uppercase leading-normal text-black transition duration-150 ease-in-out hover:bg-blue-600 focus:bg-blue-600 focus:outline-none focus:ring-0 active:bg-blue-700"
          onClick={()=>this.filtBySection1()}
          >
          Firth
          </button>
          <button
          className="w-[200px] bg-blue-400 text-4xl p-0  bg-blue px-6 pt-2.5 pb-2 font-medium uppercase leading-normal text-black transition duration-150 ease-in-out hover:bg-blue-600 focus:bg-blue-600 focus:outline-none focus:ring-0 active:bg-blue-700"
          onClick={()=>this.filtBySection2()}
          >
          Second
          </button>
          <button
          className="w-[200px] bg-blue-400 text-4xl p-0  rounded-r bg-blue px-6 pt-2.5 pb-2 font-medium uppercase leading-normal text-black transition duration-150 ease-in-out hover:bg-blue-600 focus:bg-blue-600 focus:outline-none focus:ring-0 active:bg-blue-700"
          onClick={()=>this.filtBySection3()}
          >
          Third
          </button>
          <button
          className="w-[200px] bg-blue-400 text-4xl p-0  rounded-r bg-blue px-6 pt-2.5 pb-2 font-medium uppercase leading-normal text-black transition duration-150 ease-in-out hover:bg-blue-600 focus:bg-blue-600 focus:outline-none focus:ring-0 active:bg-blue-700"
          onClick={()=>this.filtBySection4()}
          >
          Fourth 
          </button>
          </div>
          <div className='flex w-[1200px] space-x-2 pt-3 ring-2 items-start justify-between'>
          <div className='w-[40%] ring-2 p-3 flex flex-col space-y-2'>
          <div className='p-3 ring-2 text-left flex flex-col space-y-2 text-4xl'>Delivery <br />
          (Customer Details)
          <textarea className='ring-2 outline-emerald-500 px-2' cols="10" rows="1"></textarea>
          </div>
          <div className='p-3 flex flex-col ring-2 text-left space-y-2 text-4xl'>Invoice Customer <br />
          (Customer Details)
          <textarea className='ring-2 outline-emerald-500 px-2' cols="10" rows="1"></textarea>
          </div>
          <div className='p-3 ring-2 text-left text-4xl'>Invoice Calculation</div>
          </div>
          <div className="w-[60%] flex flex-col space-y-2">
          <div className='flex ring-2 text-3xl p-2 flex-col space-x-2'>
          {this.state.product}
          <div className='space-y-2 ring-1 text-2xl p-2 flex flex-col'>
          <h2>Product details</h2>
          <textarea className='ring-2 outline-emerald-500 px-2' placeholder='Details...' cols="30" rows="1"></textarea>
          </div>
          </div>
          <div className='flex ring-2 text-3xl p-2 flex-col space-x-2'>
          {this.state.product}
          <div className='space-y-2 ring-1 text-2xl p-2 flex flex-col'>
          <h2>Product details</h2>
          <textarea className='ring-2 outline-emerald-500 px-2' placeholder='Details...' cols="30" rows="1"></textarea>
          </div>
          </div>
          <div className='flex ring-2 text-3xl p-2 flex-col space-x-2'>
          {this.state.product}
          <div className='space-y-2 ring-1 text-2xl p-2 flex flex-col'>
          <h2>Product details</h2>
          <textarea className='ring-2 outline-emerald-500 px-2' placeholder='Details...' cols="30" rows="1"></textarea>
          </div>
          </div>
          </div>
          </div>
          </div>
          {/* To do list simple */}
          <Task1/>
          {/*  */}
          <Hw8/>
          {/* Table HW */}
          <Table />
          {/* Extra 9 */}
          <ExtraLesson9/>
          </div>
          )
        }
      }
      
      export default App