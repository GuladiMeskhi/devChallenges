import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ActivePage from './pages/ActivePage';
import { Active } from './pages/Active';
import Finished from './pages/Finished'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <span style={{fontWeight:'600',fontSize:'16px',justifySelf:'center',marginBlock:'20px'}}>Created by <a href='#'>Guladi Meskhi</a> - devChallenges.io</span>
          <h1>#todo</h1>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Finished/>}/>
            <Route path='/active' element={<ActivePage/>}/>
            <Route path='/Finished' element={<Active/>}/>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
