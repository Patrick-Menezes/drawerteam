import './App.css';
import{BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Drawer from './pages/Drawer';
 import Logo from './components/logo';
import { Team } from './pages/Team';
function App() {
  return (
    <div className="App">
    <Logo></Logo>

<BrowserRouter>
<Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/drawer' element={<Drawer/>} />
  <Route path='/team' element={<Team/>}/>
</Routes>

</BrowserRouter>

    </div>
  );
}

export default App;
