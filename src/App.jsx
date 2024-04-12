import 'bulma/css/bulma.css'
import { Counter } from './components/Counter'

function App() {

  return (
    <>
      <div>
        <h1 className='title is-1 '>App</h1>
        <Counter title={"Algo mas"} initialCounter ={ 0 } />
      </div>
    </>
  )
}

export default App
