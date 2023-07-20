import {Component} from 'react'
import './index.css'

class Counter extends Component {
  state = {Count: 0}
  onIncrement = () => {
    this.setState(prevState => {
      console.log(`Previous State Count is: ${prevState.Count}`)
      return {Count: prevState.Count + 1}
    })
  }
  onDecrement = () => {
    this.setState(prevState => {
      console.log(`Previous State Count is: ${prevState.Count}`)
      return {Count: prevState.Count - 1}
    })
  }
  render() {
    const {Count} = this.state
    return (
      <div className="container">
        <h1 className="heading"> Counter </h1>
        <p className="count"> {Count} </p>
        <div>
          <button className="button" onClick={this.onIncrement}>
            Increase
          </button>
          <button className="button" onClick={this.onDecrement}>
            Decrease
          </button>
        </div>
      </div>
    )
  }
}

export default Counter
