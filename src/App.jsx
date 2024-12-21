import './App.css';
import NotFound from './pages/NotFound.jsx';
import Login from './pages/Login/Login.jsx';
import Signup from './pages/Signup/Signup.jsx';
import ResetPassword from './pages/ResetPassword/ResetPassword.jsx';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import ForgotPassword from './pages/ResetPassword/ForgotPassword.jsx';

function App () {
   return<>
   <Routes>
      <Route Component={Signup} path='/signup'/>
      <Route Component={Login} path='/'/>
      <Route Component={ResetPassword} path='/resetpassword'/>
      <Route Component={ForgotPassword} path='/forgotpassword'/>
      <Route Component={NotFound} path='*'/>
      <Route Component={Home} path='/home'/>
   </Routes>
   </>
}

export default App;
