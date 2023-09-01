
import './App.css';
import Home from './pages/home/Home';
import TopBar from './components/topbar/TopBar';
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import Setting from './pages/setting/Setting';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import {Route,Routes} from 'react-router-dom'
function App() {
  const user=false;
  return (
    <>
      <TopBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/post/:postId' element={<Single/>}/>
        <Route path='/write' element={user ? <Write/> :<Register/>}/>
        <Route path='/setting' element={user ? <Setting/> : <Register/>}/>
        <Route path='/login' element={user ? <Home/> : <Login/>}/>
        <Route path='/register' element={user ? <Home/> :  <Register/>}/>
        <Route path='*' element={<h1>404 error page</h1>}/>
      </Routes>
    </>
  );
}

export default App;
