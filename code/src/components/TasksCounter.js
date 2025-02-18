import React from "react";
import { useSelector } from "react-redux";
import styled from 'styled-components'


  const TasksLeft = styled.p`
  font-size: 15px;
  color: #4c4c4c;
  padding: 0 30px;
  font-weight: 200;
  font-style: italic;
  text-align: center;
  `
  const TaskNone = styled(TasksLeft)`

  `

  const Amount = styled.span`
  color: #000172;
  font-weight: 300;
  
  `


const TasksCounter = () => {
  const taskCount = useSelector((store) => store.todos.items)
  const taskToDo = taskCount.filter((toDo) => toDo.isDone === false)
 

  if (taskCount.length > 1) {

    return(
    <div>
      <TasksLeft>You have <Amount>{taskToDo.length}</Amount> things to do</TasksLeft>
    </div>
    )
     
} else if (taskCount.length === 1) {
  return(
    <div>
    <TasksLeft>You have <Amount>{taskToDo.length}</Amount> thing to do</TasksLeft>
  </div>

  )
} else {
  
  return(
  <div>
  <TaskNone>There is always something to do..</TaskNone>
  </div>
  )
}
 
}

export default TasksCounter