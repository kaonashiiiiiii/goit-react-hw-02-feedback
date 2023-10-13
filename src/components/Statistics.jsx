import React from 'react'
import styles from './feedbackOptions.module.css'

const Statistics = (props) => {
  const { good, neutral, bad, total, positivePercentage } = props

  return (
    <div>
      <ul className={styles.statlist}>
        <li key='good'>Good: {good}</li>
        <li key='neutral'>Neutral: {neutral}</li>
        <li key='bad'>Bad: {bad}</li>
        <li key='total'>Total: {total}</li>
        <li key='positive'>Positive feedback: {positivePercentage.toFixed(0)}%</li>
      </ul>
    </div>
  )
}

export default Statistics