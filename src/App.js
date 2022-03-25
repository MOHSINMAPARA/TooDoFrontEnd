import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddTask from './pages/AddTask';
import Home from './pages/Home';
import EditTask from './pages/EditTask';
import Schedule from './pages/Schedule';


function App() {
  return (
        <div>
          <BrowserRouter>  
             <Routes>
               
              <Route path="/AddTask" element={<AddTask />}/> 
             
              <Route path="/" element={<Home/>}/> 
           
              <Route path="/Schedule" element={<Schedule/>}/>
           
              <Route path="/EditTask/:userId" element= {<EditTask />} />

             </Routes>
          </BrowserRouter>
         
 
        </div>
  );
}

export default App;
