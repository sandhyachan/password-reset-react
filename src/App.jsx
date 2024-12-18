import './App.css';
import NotFound from './pages/NotFound.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import ResetPassword from './pages/ResetPassword.jsx';
import { Routes, Route } from 'react-router-dom';

function App () {
   return<>
   <Routes>
      <Route Component={Signup} path='/signup'/>
      <Route Component={Login} path='/login'/>
      <Route Component={ResetPassword} path='/resetpassword'/>
      <Route Component={NotFound} path='*'/>
   </Routes>
   </>
}

export default App;
