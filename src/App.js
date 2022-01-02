import './main.css';
import { Component, lazy, Suspense} from 'react';
import { Switch as Routes, Route, BrowserRouter as Router } from 'react-router-dom'

import Context from './components/Context.js'
import Loader from "./components/Loader.js"
const Timer = lazy(e => import('./components/Timer.js'))
const Set = lazy(e => import('./components/Set.js'))
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        hours:0,
        minutes: 0,
        seconds: 0,
        secTimer: 0,
        minTimer: 0,
        hrsTimer:0,
        timerStart: false,
        stopWatch: false,
        countDown: false,
        miliTimer: 0,
        lapIteams: [],
        lap: () => {
          this.setState((prev) => ({
            lapIteams: [...prev.lapIteams,  this.state.hrsTimer  + ":" + this.state.minTimer+ ":" +  this.state.secTimer]
          }))
          
        },
        increase: (time, no) => {
        this.setState({
          [time]: this.state[time] === no? 0 : this.state[time] + 1,
        })
       },
        decrease: (time, no) =>{
        this.setState({
        [time]: this.state[time] === 0 ? no : this.state[time] - 1,
          })
        },
        startTimer: () => {
                this.setState({
                  timerStart:true
                })
              this.timer = setInterval(() => {
                this.setState({
                  secTimer: this.state.secTimer === 59? 0 : this.state.secTimer+1,
                  minTimer: this.state.secTimer ===59? this.state.minTimer+1 : this.state.minTimer,
                  hrsTimer: this.state.minTimer === 59? this.state.hrsTimer+1 : this.state.hrsTimer
                })
              }, 1000)
        },
        stopTimer: () => {
          this.setState({
            timerStart: false
          })
          clearInterval(this.timer)
        },
        restTimer: () => {
            this.setState({
              secTimer:0,
              minTimer:0,
              hrsTimer:0
            })
        },
        startClock : () => {
          this.setState({
            countDown: true,
            stopWatch: true
          })
          this.clock = setInterval(() => {
            if(this.state.seconds === 0){
              if(this.state.minutes !== 0){
                this.setState({
                  seconds: 59,
                  minutes:  this.state.minutes - 1,
                  })
              }else if(this.state.minutes === 0 && this.state.hours !== 0){
                  this.setState({
                    seconds: 59,
                    minutes: 59,
                    hours: this.state.hours - 1
                  })
              }
              else{
                clearInterval(this.clock)
                alert("Timer has stopped")
                this.setState({
                  stopWatch: false,
                  countDown: false
                })
              }
            }else{
              this.setState({
                seconds: this.state.seconds - 1
              })
            }
          }, 1000);
        },
        reset:() =>{
          clearInterval(this.clock)
          this.setState({
            seconds:0,
            minutes:0,
            hours: 0,
            countDown: false
          })
        },
        stopClock:() =>{
          this.setState({
            stopWatch: false
          })
          clearInterval(this.clock)
        },
    }
  }
  render(){
    return (
      <Context.Provider value={this.state}>
      <Router>
      <Suspense fallback={<Loader/>}>
      <Routes>
      <Route exact path='/'>
        <Set/>
      </Route>
      <Route exact path='/timer'>
        <Timer/>
      </Route>
      <Route path='*'>
        <p> 404 </p>
      </Route>
      </Routes>
      </Suspense>
      </Router>
      </Context.Provider>
  )
  }
}

export default App;
 /* 
    */