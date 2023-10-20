import { Component }  from 'react'
import styles from './feedbackOptions.module.css'
class FeedbackOptions extends Component {
  constructor(props) {
    super(props);

    console.log(this.props);

    this.state = {
      optionsArray: []
    };
  }
  
  mapOptionsToArray (options) {
    return Object.keys(options)
  }

  render () {
    return (
      <div>
        <div className={styles.options}>
          {this.mapOptionsToArray(this.props.options || {}).map((option) => (
            <button key={option} onClick={() => this.props.onLeaveFeedback(option)}>{option}</button>
          ))}
        </div>
      </div>
    )
  }
}

export default FeedbackOptions