import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UserService from './service/UserSevice';
import DeviceService from './service/DeviceService';

export const Context = createContext(null)
const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(process.env.REACT_APP_API_URL)
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode> // old render
        <Context.Provider value={{
            user: new UserService(),
            device: new DeviceService(),
        }}>
            <App />
        </Context.Provider>,
      // document.getElementById('root') //warning
);