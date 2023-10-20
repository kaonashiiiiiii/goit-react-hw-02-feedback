import styles from './feedbackOptions.module.css'

const FeedbackOptions = ({ options, onLeaveFeedback}) => {
  return (
    <div>
      <div className={styles.options}>
        {options.map((option) => (
          <button key={option} onClick={() => onLeaveFeedback(option)}>{option}</button>
        ))}
      </div>
    </div>
  )
}

export default FeedbackOptions