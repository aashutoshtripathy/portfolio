import React , { lazy } from 'react'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
// import Home from './pages/Home'
// import About from './pages/About'

const Home = lazy(() => import('./pages/Home.js'))
const Login = lazy(() => import('./pages/Login.js'))
const Chat = lazy(() => import('./pages/Chat.js'))
const Group = lazy(() => import('./pages/Group.js'))

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/chat:chatId' element={<Chat/>}/>
          <Route path='/group' element={<Group/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App