import logo from './logo.svg';
import './App.css';
import { Outlet, RouterProvider } from 'react-router-dom';
import { Router } from './routes/Router';

function App() {
  return (
    <Outlet/>

  );
}

export default App;