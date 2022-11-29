// import logo from './logo.svg';
// import './App.css';
import { observer } from 'mobx-react-lite';
import React, {useContext, useEffect, useState} from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import NavBar from './components/Navbar';
import {Context} from "./index";
import {check} from "./http/userAPI";
import {Spinner} from "react-bootstrap";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//           <p>
//             First commit
//           </p>
//           <div></div>
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
const App = observer(() => {
  const {user} = useContext(Context)
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    check().then(data => {
        user.setUser(true)
        user.setIsAuth(true)
    }).finally(() => setLoading(false))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  if (loading) {
    return <Spinner animation={"grow"}/>
  }
  return (
      <BrowserRouter>
          <NavBar />
          <AppRouter />
      </BrowserRouter>
  );
});

export default App;
