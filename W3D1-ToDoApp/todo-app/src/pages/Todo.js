import React from 'react'
import cx from "classnames"
import {toggleTodo} from "../redux/actions/actions"
import {connect} from "react-redux"
// const Todo = ({onClick, completed, text}) => {
//     return (
//         <li
//         onClick={onClick}
//         style={{
//             textDecoration: completed ? 'line-through' : 'none'
//         }}
//         >
//            {text} 
//         </li>
//     )
// }

// export default Todo
const Todo = ({todo, toggleTodo}) => {
    return (
        <li onClick={()=> toggleTodo(todo.id)}>
           {todo && todo.completed ? "O" : "X"}{" "}
           <span
           className={cx(
               "todo-item__text",
               todo&& todo.completed && "todo-item__text--completed"
           )}
           >
           {todo.content}
           </span>
        </li>
    )
}

export default connect(null, {toggleTodo})(Todo)
