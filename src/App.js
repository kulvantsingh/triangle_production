import React, { useContext } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer, SlideShow } from './components'
import AuthContext from './context/auth_context'
import {Home,About,Error, ServicePage, GetYourJob,AuthPage, SignUpPage} from './pages'
import Solutions from './pages/Solutions'
function App() {

  const authContext=useContext(AuthContext);
  return(
  <Router>
    <Navbar/>
    <Sidebar/>
    <Switch>
      <Route exact path='/'>
        <Home/>
      </Route>
      <Route exact path='/about'>
        <About/>
      </Route>
      <Route exact path='/services'>
        <ServicePage/>
      </Route>
      <Route exact path='/getyourjob'>
        {authContext.isLoggedIn&&
        <GetYourJob/>}
        {!authContext.isLoggedIn&&
        <AuthPage/>}

      </Route>
      <Route exact path='/solutions'>
        <Solutions/>
      </Route>
      
      <Route exact path='/auth'>
        <AuthPage/>
      </Route>
      <Route exact path='/signUp'>
        <SignUpPage/>
      </Route>
      <Route exact path='*'>
        <Error/>
      </Route>
    </Switch>
    <Footer/>
  </Router>
  )
}

export default App
