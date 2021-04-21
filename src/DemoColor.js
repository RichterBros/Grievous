import { render } from 'react-dom'
import React, {useState, props} from 'react'
import { useSpring, to, animated, config } from 'react-spring'
import { scale, dist } from 'vec-la'
import { useDrag } from 'react-use-gesture'
import './index.css'
import styles from './index.css'
import r from './r.png'
import grievous2 from './grievous2.png'


const DemoColor = (props) => {
  return(
    <div className={props.item3}>hello</div>
  )
}

export default DemoColor