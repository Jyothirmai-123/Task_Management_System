//App.js
import 'bootstrap/dist/css/bootstrap.min.css'

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import './App.css';
import Create from './Create';
import Task from './Task';

import UpdateTask from './UpdateTask';

function App() { 
   return (  
      <div className="App">  
          <BrowserRouter>    
              <Routes>    
                  <Route path='/' element={<Task />}></Route>          
                  <Route path='/create' element={<Create />}></Route>          
                  <Route path='/update/:id' element={<UpdateTask />}></Route>        
              </Routes>     
         </BrowserRouter>    
      </div> 
       );
      }
export default App