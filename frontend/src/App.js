import {BrowserRouter, Routes, Route} from 'react-router-dom' 
//BrowserRouter for wraps the router everywhere we want to use the router
//Routes wraps all of our individual routes
//Route component to create a single route

//Pages and components
import Home from './pages/Home'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <div className='pages'>
        <Routes>
          <Route
           path='/'
           element={<Home/>}  //That need to be render on path

          />
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
