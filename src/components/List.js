import React from 'react'

const List = ({ todos, updateTodo }) => {
    return (
        <ul>
            {todos.map(({ title, _id, completed }, index) => {
                return (<li key={index} className={completed ? 'done' : ''} onClick={(e) => updateTodo(_id)}>{title}</li>);
            })}
        </ul>
    )
}

export default List