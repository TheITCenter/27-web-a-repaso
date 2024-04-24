import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'

import 'bulma/css/bulma.css'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { Chat } from './pages/Chat'
import { PrivateRouter } from './router/PrivateRouter'
import { Prueba } from './pages/Prueba'
import { AuthProvider } from './context/AuthProvider.jsx'

import './App.scss'

function App() {

  return (
    <div className='App'>
      <Router>
        <AuthProvider>
          <Routes>
            <Route element={ <PrivateRouter/> } >
              <Route path='/' element={ <Chat/> } exact />
            </Route>
            <Route path='/login' element={ <Login/> } />
            <Route path='/register' element={ <Register/> } />
            <Route path='/prueba/:pruebaId' element={ <Prueba/> } />
            <Route path='*' element={ <h1>404</h1> } />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  )
}

export default App
