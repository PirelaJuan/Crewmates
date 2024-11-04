import amongus from './assets/amongus.webp'  
import amonguship from './assets/amonguship.jpeg'
import './App.css'

function App() {
  

  return (
  <div className='whole-page'>
    <div>
      <div className='home-page'>
        <h1>Welcome to the Crewmate Creator!</h1>
        <h3>Here is where you can create your very own set of crewmates before sending them off into space</h3>
        <img src={amongus} />
        <br />
        
      </div>
    </div>
  </div>
  )
}

export default App
