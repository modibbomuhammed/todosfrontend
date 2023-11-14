import React from 'react'

const List = ({ todos, updateTodo, deleteTodo }) => {
    return (
        <ul className='list'>
            {todos.map(({ title, _id, completed }, index) => {
                return (
                    <li key={index} className={completed ? 'task done' : 'task'} onClick={(e) => updateTodo(_id)}>
                        {title}
                        <span onClick={(e) => deleteTodo(_id, e)}>X</span>
                    </li>
                );
            })}
        </ul>
    )
}

export default List