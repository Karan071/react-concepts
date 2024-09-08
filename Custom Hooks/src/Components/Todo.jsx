import React from 'react'

function Todo({ todo }) {
    return (
      <div style={{border : "1px white solid", width : "100%"}}>
        {todo.id}
        <br />
        {todo.title}
        <br />
        {todo.completed ? "Completed" : "Not Completed"}
      </div>
    )
  }
export default Todo