import React from 'react'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
 import './App.css'
 import Header from './Component/Header/Header'
import BottomNav from './Component/Navbar/BottomNav'
 
import {Container} from '@material-ui/core'
import Trading from './pages/Trading/Trading'
import Movies from './pages/Movies/Movies'
import TvSeries from './pages/TvSeries/TvSeries'
import Search from './pages/Search/Search'

const App = () => {
    return (
        <>
          <Router> 
           <Header/>
           <div className='app'>
            <Container>
              
                    <Switch>
                        <Route exact path='/'><Trading/></Route>
                        <Route exact path='/movies'><Movies/></Route>
                        <Route exact path='/tvSeries'><TvSeries/></Route>
                        <Route exact path='/search'><Search/></Route>
                        
                    </Switch>
              
            </Container>
          
         </div>
         <BottomNav/>
         </Router>
        </>
      
    )
}

export default App
