import { render } from 'react-dom'
import React, {useState, props} from 'react'
import { useSpring, to, animated, config } from 'react-spring'
import { scale, dist } from 'vec-la'
import { useDrag } from 'react-use-gesture'
// import './index.css'
import PullRelease from './PullRelease'
import Duplicator, { makeCopy } from './Duplicator'
import DemoColor from './DemoColor'
function App(props) {
  
  const [color, setColor] = useState({
    red: 'red',
    blue: 'blue',
    green: 'green',
  })
  return (
   <>
    {/* <DemoColor item={'test'}/> */}
    <Duplicator />
  
   </>
  )
}


export default App;
    
    
   
