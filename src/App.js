import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Reviews from './Components/Reviews/Reviews';
import Dashboard from './Components/Dashboard/Dashboard';
import Blogs from './Components/BLogs/Blogs';
import About from './Components/Abaut/About';
import NothingPage from './Components/NothingPage/NothingPage';

function App() {
  return (
    <div className="App">
      <Header></Header>
      {/* <Home></Home> */}
      
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/reviews' element={<Reviews></Reviews>}></Route>
      <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
      <Route path='/blogs' element={<Blogs></Blogs>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/*' element={<NothingPage></NothingPage>}></Route>

    </Routes>
    </div>
  );
}

export default App;
