import {Component} from 'react';
import { Link } from 'react-router-dom'
import { ArrowNarrowUpIcon, ArrowNarrowDownIcon } from '@heroicons/react/outline';
import Context from './Context';

class Set extends Component{
    static contextType = Context;
    render(){
        return(
            <Context.Consumer>
                {({zeroHour,hours,minutes, seconds,increase, decrease, startClock, countDown, stopClock,reset, stopWatch}) => {
                    return(
                     <div className='w-full h-screen flex content-center justify-center flex-col z-20 bg-white' > 
                     <div className='w-10/12 h-14 md:w-6/12 rounded-2xl mx-auto bg-gray-100 px-5 p-3 shadow-sm flex content-center justify-between'>
                       <Link to='timer'>
                       <p className="text-2xl ">Timer</p>
                       </Link>
                       <Link to='/'>
                       <p className="text-2xl ">Stop watch</p>
                       </Link>
                     </div>
                     <div className="w-7/12 h-auto mx-auto mt-48 mb-28 flex content-center justify-between">
                      <label className=" w-3/12 h-auto p-1 mr-1 flex  flex-col">
                      <button className=" bg-zinc-100 rounded-sm shadow-sm p-1" onClick={ e => {increase('hours', 24)}}><ArrowNarrowUpIcon className="w-5 h-5 mx-auto"/></button>
                       <button disabled className="rounded-sm  text-4xl my-3 p-3 bg-gray-100"> { hours } </button> 
                      <button className="bg-zinc-100 rounded-sm shadow-sm p-1" onClick={e => {decrease("hours", 24)}}><ArrowNarrowDownIcon className="w-5 h-5 mx-auto"/></button>
                      </label>
                      <span className="text-5xl mt-12">:</span>
                      <label className=" w-3/12 h-auto p-1 mr-1 flex flex-col">
                      <button className="bg-zinc-100 rounded-sm shadow-sm p-1" onClick={ e => {increase('minutes', 59)}}><ArrowNarrowUpIcon className="w-5 h-5 mx-auto"/></button>
                       <button disabled className="rounded-sm text-4xl my-3 p-3 bg-gray-100">{minutes}</button> 
                      <button className="bg-zinc-100 rounded-sm shadow-sm p-1" onClick={e => {decrease("minutes", 59)}}><ArrowNarrowDownIcon className="w-5 h-5 mx-auto"/></button>
                      </label>
                      <span className="text-5xl mt-12">:</span>
                      <label className=" w-3/12 h-auto p-1 mr-1 flex flex-col">
                      <button className="bg-zinc-100 rounded-sm shadow-sm p-1" onClick={ e => {increase('seconds')}}><ArrowNarrowUpIcon className="w-5 h-5 mx-auto"/></button>
                       <button disabled className="rounded-sm text-4xl my-3 p-3 bg-gray-100">{seconds}</button> 
                      <button className="bg-zinc-100 rounded-sm shadow-sm p-1" onClick={e => {decrease("seconds")}}><ArrowNarrowDownIcon className="w-5 h-5 mx-auto"/></button>
                      </label>
                       </div>
                       <button className="w-3/12 mx-auto h-auto px-8 py-2 shadow-sm text-white rounded-3xl m-2 bg-pink-500" onClick={e => { startClock()}}>Start</button>
                      {countDown && (
                        <div className='w-screen absolute z-30 bg-white h-screen p-1 flex content-center justify-around flex-col'>
                      <div className='w-10/12 h-14 md:w-6/12 rounded-2xl mx-auto bg-gray-100 px-5 p-3 shadow-sm flex content-center justify-between'>
                      <Link to='/timer'>
                       <p className="text-2xl ">Timer</p>
                       </Link>
                       <Link to='/'>
                       <p className="text-2xl ">Stop Watch</p>
                       </Link> 
                      </div>
                      <div className='w-auto h-auto  p-14  rounded-full flex content-center justify-center  mx-auto my-5 shadow-md bg-gray-200'> 
                        <p className="text-5xl ">{hours}</p>
                        <span className="text-4xl mr-1">:</span>
                        <p className="text-5xl ">{minutes}</p>
                        <span className="text-4xl mr-1">:</span>
                        <p className="text-5xl ">{seconds}</p>
                      </div>
                      <div className='w-10/12 h-auto md:w-4/12  p-1 mx-auto flex content-center justify-between'>
                      {stopWatch ? <button onClick={stopClock}  className="px-8 py-2 shadow-sm text-white rounded-3xl m-2 bg-red-400">Stop</button>
                        : 
                        <button onClick={startClock}  className="px-8 py-2 shadow-sm text-white rounded-3xl m-2 bg-blue-500">Resume</button>
                        }
                        <button onClick={reset} className="px-8 py-2 shadow-sm text-white rounded-3xl m-2 bg-pink-500">Cancel</button>
                      </div>
                    </div>
                      )}
                     </div>
                    )
                }}
            </Context.Consumer>
        )
    }
}

export default Set;