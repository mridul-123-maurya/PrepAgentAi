import { Routes ,Route} from 'react-router-dom';
import './App.css'
import Home from './pages/home';
import Dashboard from './pages/Dashboard';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>


        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </>
  )
}

export default App
