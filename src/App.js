import Welcome from './components/Welcome'
import Counter from './components/Counter'
import './App.css'

const App = () => {
  return (
    <div className="app-container">
      <Welcome name="Rajesh" />
      <Counter />
    </div>
  )
}
export default App
