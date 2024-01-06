
// UpdateTask.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function UpdateTask() {
  const [taskName, setTaskName] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the task details including task name and completion status
    axios.get(`http://localhost:8081/update/${id}`)
      .then(res => {
        setTaskName(res.data.Tasks);
        setIsComplete(res.data.isComplete);
      })
      .catch(err => console.log(err));
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(`http://localhost:8081/update/${id}`, { tasks: taskName, isComplete })
      .then(res => {
        console.log(res);
        navigate('/');
      })
      .catch(err => {
        if (err.response && err.response.status === 404) {
          // Handle 404 error, e.g., redirect or show an error message
          console.error('Resource not found:', err.response.data);
        } else {
          // Handle other errors
          console.error('AxiosError:', err);
        }
      });
  };

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <form onSubmit={handleSubmit}>
          <h2>Update Task</h2>
          <div className='mb-2'>
            <label htmlFor=''>Task</label>
            <input
              type='text'
              placeholder='Enter Task'
              className='form-control'
              value={taskName}
              onChange={e => setTaskName(e.target.value)}
            />
          </div>
          <div className='mb-2'>
            <label>
              Mark as Complete:
              <input
                type='checkbox'
                checked={isComplete}
                onChange={() => setIsComplete(!isComplete)}
              />
            </label>
          </div>
          <button className='btn btn-success'>Update</button>
        </form>
      </div>
    </div>
  );
}

export default UpdateTask;
