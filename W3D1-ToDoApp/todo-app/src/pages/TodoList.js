import React from 'react'
import Todo from './Todo'
import {connect} from 'react-redux'
import {getToDosByVisibiltyFilter} from '../redux/todoSelectors'
const TodoList = ({todos}) => {
    console.log(todos, "todos")
    return (
        <ul>
            {todos && todos.length 
                ? todos.map(todo =>{
                    console.log(todos, "map todos")
                 return <Todo
                  key={`todo-${todo.id}`}
                   todo={todo}
                  />
                }): null}
        </ul>
    )
}
const mapStateToProps = (state)=>{
    const {visibiltyFilter} = state
    const todos = getToDosByVisibiltyFilter(state, visibiltyFilter)
    return {todos}
}

export default connect(mapStateToProps)(TodoList) 
