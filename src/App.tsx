import './App.css'
import { Icon } from './Icon'

function App() {
  return (
    <div className="App">
      <div className="Icons-wrapper">
        <div>
          <Icon name="Empty" />
        </div>
        <div>
          <Icon name="Happy" className="Icon-orange" />
        </div>
        <div>
          <Icon name="Sad" size={100} />
        </div>
      </div>
    </div>
  )
}

export default App
