import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'

import 'bulma/css/bulma.css'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { Chat } from './pages/Chat'
import { PrivateRouter } from './router/PrivateRouter'
import { Prueba } from './pages/Prueba'

function App() {

  return (
    <div>
      <header> Header</header>
      <Router>
        <Routes>
          <Route element={ <PrivateRouter/> } >
            <Route path='/' element={ <Chat/> } exact />
            <Route path='/prueba' element={ <Prueba/> } />
          </Route>
          <Route path='/login' element={ <Login/> } />
          <Route path='/register' element={ <Register/> } />
        </Routes>
      </Router>
      <footer>Footer</footer>
    </div>
  )
}

export default App
