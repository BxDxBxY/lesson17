import React, { Component } from 'react'

export default class Main extends Component {
    render() {
        return (
            <div className=' w-[100%] '>
                <div className='flex mt-2 ml-2 w-[100%]'>
                    <div className='w-[30%]  flex justify-center items-center p-5 bg-green-400'>Figure</div>
                    <div className='w-[100%] flex flex-col'>
                        <header className='w-[100%] flex justify-center items-center p-5 bg-gray-200'> Header </header>
                        <article className='w-[100%] flex justify-center items-center p-5 bg-blue-200'> Article </article>
                        <footer className='flex justify-center items-center p-5 bg-yellow-300'> Footer </footer>
                    </div>
                </div>
                <div className='flex mt-2 ml-2 bg-black w-[100%]'>
                    <div className='w-[30%] flex justify-center items-center p-5 bg-green-400'>Figure</div>
                    <div className='w-[100%] flex flex-col'>
                        <header className='w-[100%] flex justify-center items-center p-5 bg-gray-200'> Header </header>
                        <article className='w-[100%] flex justify-center items-center p-5 bg-blue-200'> Article </article>
                        <footer className='flex justify-center items-center p-5 bg-yellow-300'> Footer </footer>
                    </div>
                </div>
                <div className='flex mt-2 ml-2 bg-black w-[100%]'>
                    <div className='w-[30%] flex justify-center items-center p-5 bg-green-400'>Figure</div>
                    <div className='w-[100%] flex flex-col'>
                        <header className='w-[100%] flex justify-center items-center p-5 bg-slate-200'> Header </header>
                        <article className='w-[100%] flex justify-center items-center p-5 bg-blue-200'> Article </article>
                        <footer className='flex justify-center items-center p-5 bg-yellow-300'> Footer </footer>
                    </div>
                </div>
            </div>
            )
        }
    }
    