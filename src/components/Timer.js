import { Component} from 'react';
import { Link } from 'react-router-dom';
import Context from './Context';

class Timer extends Component {
    static contextType = Context;
    render(){
        return(
            <Context.Consumer>
                {({secTimer, minTimer, hrsTimer, startTimer,timerStart,stopTimer, lapIteams, lap,restTimer,miliTimer}) => {
                       return ( <div className='w-screen relative h-screen p-1 flex content-center flex-col'>
                        <div className='w-10/12 h-14 md:w-6/12 rounded-2xl mx-auto mt-8 bg-gray-100 px-5 p-3 shadow-sm flex content-center justify-between'>
                              <Link to='timer'>
                               <p className="text-2xl ">Timer</p>
                               </Link>
                               <Link to='/'>
                               <p className="text-2xl ">Stop Watch</p>
                               </Link>
                              </div>
                        <div className='w-11/12 h-auto md:w-4/12  p-14 mt-20  rounded-full flex content-center justify-center  mx-auto my-5 shadow-md bg-gray-200'>
                            <p className='text-5xl text-slate-900'>{minTimer}</p>
                            <span className='text-4xl mx-4'>:</span>
                            <p className='text-5xl text-slate-900'>{secTimer}</p>
                        </div>
                        <div className='w-10/12 h-auto md:w-6/12 mt-9  p-1 mx-auto flex content-center justify-between'>
                            {timerStart ?    <button onClick={stopTimer} className=" px-8 py-2 shadow-sm text-white rounded-3xl m-2 bg-blue-500">Stop</button> :
                             <button onClick={startTimer} className=" px-8 py-2 shadow-sm text-white rounded-3xl m-2 bg-blue-500">Start</button>
                            }
                            {timerStart? <button onClick={lap} className=" px-8 py-2 shadow-sm text-black rounded-3xl m-2 bg-zinc-300">Lap</button> :
                                  <button onClick={restTimer} className=" px-8 py-2 shadow-sm text-white rounded-3xl m-2 bg-red-600">Reset</button>
                            }
                          </div>
                        <div className='w-full h-auto md:w-7/12 mx-auto mt-8'>
                            <div className='w-full h-8 px-2  mx-auto flex items-center justify-between border-y-2 border-gray-300'>
                                <div className='w-4/12 mx-auto h-auto flex items-center justify-center'>
                                    <p className=''>Lap</p>
                                </div>
                                <div className='w-4/12 mx-auto h-auto flex items-center justify-center'>
                                    <p className=''>Lap Times</p>
                                </div>
                                <div className='w-4/12 mx-auto h-auto flex items-center justify-center'>
                                    <p className=''>Overall Lap</p>
                                </div>
                            </div>
                            {
                                lapIteams.map((lap, index) => {
                                    return <div key={index + 1} className='w-full h-8 mx-auto px-8 flex items-center justify-between mt-4'>
                                             <div className='w-4/12 mx-auto h-auto  flex items-center justify-center'>
                                                <p className='text-xl mx-auto'>#{index + 1}</p>
                                             </div>
                                             <div className='w-4/12 mx-auto h-auto flex items-start justify-center'>
                                             <p className='text-xl mx-auto'>{ lapIteams[index - 1]}</p>
                                             </div>
                                             <div className='w-4/12 mx-auto h-auto flex items-start justify-center'>
                                                <p className='text-xl mx-auto'>{ lap}</p>
                                             </div>
                                            </div>
                                })
                            }
                        </div>
                        </div>
                       )
                }}
            </Context.Consumer>
        )
    }
}
export default Timer;