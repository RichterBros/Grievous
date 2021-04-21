import { render } from 'react-dom'
import React, {useState,props} from 'react'
import { useSpring, to, animated, config } from 'react-spring'
import { scale, dist } from 'vec-la'
import { useDrag } from 'react-use-gesture'
import './index.css'
import styles from './index.css'
import r from './r.png'
import grievous2 from './grievous2.png'
import arm2 from './arm2.png'
import arm2_red from './arm2_red.png'


const TestRotate = (props) => {
  const [pressed, setPressed] = useState(0);
  
  const spring = useSpring({
    from: {
      transform: `rotateZ(${pressed}deg)`
    },
    to: {
      transform: `rotateZ(${pressed  }deg)`
    },
    config: {
      mass: 1,
      tension: 10,
      friction: 10
    }
  
})
// console.log(pressed)

// let btnClass = clasNames({
//   'rot'
// })



return(
 
 
 <div >
   
  <animated.div className={props.item3}   style={spring} onWheel={(e) => { 
  if (e.nativeEvent.wheelDelta > 0) {
  setPressed(pressed + 5)
  } else {
    setPressed(pressed - 5)
  }
}}
>
  {/* <div className={props.item3}></div> */}
</animated.div>
</div> 
)
};





const PullRelease = (props) => {
  
  
 
  
  
  
  
 
  
  const [{ pos }, set] = useSpring(() => ({ pos: [0, 0] }))
  let [{ angle }, setAngle] = useSpring(() => ({ angle: 0 , config: config.wobbly }))
  // direction calculates pointer direction
  // memo is like a cache, it contains the values that you return inside "set"
  // this way we can inject the springs current coordinates on the initial event and
  // add movement to it for convenience

  const bind = useDrag(
    ({ xy, previous, down, movement: pos, velocity, direction }) => {
      set({ pos, immediate: down,  })
      // if (dist(xy, previous) > 10 || !down) setAngle({ angle: Math.atan2(direction[0], -direction[1]) })
      if (dist(xy, previous) > 10 || !down) setAngle({ angle: "5%" })
    },
    { initial: () => pos.get() }
  )

  

  return (
    <>
    
    <div  className='copy'>
      <animated.div 
        
        {...bind()}
        style={{  transform: to([pos, angle], ([x, y], a) => `translate3d(${x}px,${y}px,0) rotate(${a}rad)`) }}
      >
    
    
        <TestRotate item3={props.item2}/>
      </animated.div >
          
       
      
    </div>
    </>
  )
}
   
      
    
   




export default PullRelease