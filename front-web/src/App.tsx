import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import Routes from './Routes';

//import NavBar from './NavBar';

function App() {
  return (
    <>
   <Routes />
   <ToastContainer />
   </>
  );
}

export default App;
