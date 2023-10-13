import React, { memo, useEffect, useState } from 'react'
import styles from './feedbackOptions.module.css'
const FeedbackOptions = memo((props) => {
  const { options, onLeaveFeedback} = props
  const [optionsArray, setOptionsArray] = useState([])
  
  function mapOptionsToArray (options) {
    return Object.keys(options)
  }

  useEffect(() => {
    const resultArray = mapOptionsToArray(options)
    setOptionsArray(resultArray)
  }, [options])

  return (
    <div>
      <div className={styles.options}>
        {optionsArray.map((option) => (
          <button key={option} onClick={() => onLeaveFeedback(option)}>{option}</button>
        ))}
      </div>
    </div>
  )
})

export default FeedbackOptions