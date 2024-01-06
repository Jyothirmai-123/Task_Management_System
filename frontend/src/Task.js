// Task.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Task() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8081/')
      .then(res => setTasks(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8081/task/${id}`);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <Link to="/create" className='btn btn-success'>Add +</Link>
        <table className='table'>
          <thead>
            <tr>
              <th>Tasks</th>
              <th>Status</th> {/* Added Status column */}
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((data, i) => (
              <tr key={i}>
                <td>{data.Tasks}</td>
                <td>{data.isComplete ? 'Completed' : 'Incomplete'}</td>
                <td>
                  <Link to={`update/${data.ID}`} className='btn btn-primary me-2'>Update</Link>
                  <button className='btn btn-danger ms-2' onClick={() => handleDelete(data.ID)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Task;
