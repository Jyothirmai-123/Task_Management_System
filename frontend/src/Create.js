//Create.js
import axios from 'axios';

import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom';

function Create() {
    const [tasks, setTasks] = useState('')    
       
    const navigate = useNavigate();
    function handleSubmit(event) {    
           event.preventDefault();  
           
               axios.post('http://localhost:8081/create', {tasks})     
                .then(res => {     
                    console.log(res);       
                    navigate('/');    
                })
                .catch(err => console.log(err));  
              }  
              return (  
                <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>      
                <div className='w-50 bg-white rounded p-3'>            
                <form onSubmit={handleSubmit}>               
                    <h2>Add Task</h2>   
                    <div className='mb-2'>      
                        <label htmlFor="">Task</label>                
                            <input type="text" placeholder='Enter Task' className='form-control'             
                                onChange={e => setTasks(e.target.value)}              
                            />        
                    </div>               
                               
                <button  className='btn btn-success'>Submit</button>       
                </form>      
                </div>  
                </div>
                )}



export default Create
