import React, { useContext, useState } from 'react'
import { TodoContext } from './main'

const App = () => {
  const {todo,newTodo,setNewTodo,addTodo,editTodo,deleteTodo} = useContext(TodoContext);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='background-dark'>

      <h1 className="text-center fw-bold text-white my-2">Todos :</h1>
      <div className="d-flex justify-content-end">
        <button className='btn btn-info m-2' onClick={()=>setShowModal(true)}><i className='fa fa-solid fa-plus' /></button>
      </div>

      <table className='table table-dark border border-2 text-center'>
        <thead>
          <tr>
            <th>Task Id</th>
            <th>Task Name</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            todo.map((val) => {
              return (
                <tr key={val.id}>
                  <td>{val.id}</td>
                  <td>{val.taskname}</td>
                  <td className={val.status ? "text-success" : "text-warning"}>{val.status ? "Done" : "Pending"}</td>
                  <td>
                    <button className='btn btn-outline-warning' onClick={()=>{editTodo(val.id,val.status)}}><i className={val.status?"fa-solid fa-x text-danger":"fa fa-check text-success"} /></button>
                    <button className='btn btn-danger mx-2' onClick={()=>{deleteTodo(val.id)}}><i className='fa fa-trash' /></button>
                  </td>

                </tr>
              )
            })
          }

        </tbody>
      </table>

      {showModal && (
        <div className="modal show d-flex" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  <input type='text' placeholder='Enter todo...' value={newTodo.taskname}
                  onChange={(e)=>setNewTodo({...newTodo,taskname:e.target.value})}/>
                </h5>
                
              </div>
              {/* <div className="modal-body">
                <p>Modal body text goes here.</p>
              </div> */}
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" onClick={()=>{addTodo(),setShowModal(false)}} >Save changes</button>
                <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={()=>setShowModal(false)}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App