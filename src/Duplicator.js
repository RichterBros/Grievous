import React, {useState, props} from 'react'
import PullRelease from './PullRelease'
import PullRelease2 from './PullRelease2'
import arm2_red from './arm2_red.png'
import './index.css'
import grievous3 from './grievous3.png'
import arm1 from './arm1.png'
import { useSpring, to, animated, config, Spring , animated as a } from 'react-spring'
import {TestRotate} from './PullRelease'
import Flip from './Flip'
import DemoColor from './DemoColor'
const Duplicator = (props) => {
    const [styler, setStyler] = useState('green')
    const [ copy, copySet ] = useState([])
    const [ copy2, copySet2] = useState([])
    
    
    const makeCopy = (props) => {
      const newCopy = copy.concat(<PullRelease item2={styler} />)
      copySet(newCopy)
      console.log(copy)
    }
    const makeCopy2 = (props) => {
      const newCopy2 = copy2.concat(<PullRelease2 />)
      copySet2(newCopy2)
      console.log(newCopy2)
    }
    
   
    
    
  
    return(
    <>
    
      
   {/* <DemoColor item3={'test'} /> */}
      
       
        <div className='left' >
          {copy}
         
        </div>
        <div className='right'>
          
          {copy2}
          
        </div>
      <div >
      {/* <TestRotate style='rot' /> */}
        <img src={grievous3}></img>
      </div>
        
      

      <div className='footer'>
        <button onClick={makeCopy}>click for left!</button>
        <button onClick={() => setStyler('red')}>click for red</button>
        <button onClick={() => setStyler('green')}>click for green</button>
        <button onClick={makeCopy2}>click for right!</button>
      <h1 style={{padding:0, margin: 0}} >current selected color: {styler}</h1>
      </div>
    </>
  )

}
      
      
        
      
      
        
        
      
      

export default Duplicator