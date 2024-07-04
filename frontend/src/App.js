import React , { Suspense, lazy } from 'react'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import ProtectedRoutes from './components/auth/ProtectedRoutes.js'
import { LayoutLoader } from './components/layout/loaders.js'
// import NotFound from './pages/NotFound.js'
// import Home from './pages/Home'
// import About from './pages/About'

const Home = lazy(() => import('./pages/Home.js'))
const Login = lazy(() => import('./pages/Login.js'))
const Chat = lazy(() => import('./pages/Chat.js'))
const Group = lazy(() => import('./pages/Group.js'))
const NotFound = lazy(() => import('./pages/NotFound.js'))

let user = true;

const App = () => {
  return (
    <div>
      <Router>
        <Suspense fallback={<LayoutLoader/>}>
        <Routes>
        <Route  element={<ProtectedRoutes user={user}/>}>
        <Route path='/' element={<Home/>}/>
          <Route path='/chat:chatId' element={<Chat/>}/>
          <Route path='/group' element={<Group/>}/>
        </Route>
        <Route  element={<ProtectedRoutes user={!user}>
          <Login/>
        </ProtectedRoutes>}/>

        {/* <Route path='/login' element={<Login/>}/> */}
          <Route path='*' element={<NotFound/>}/>
        </Routes>
        </Suspense>
      </Router>
    </div>
  )
}

export default App