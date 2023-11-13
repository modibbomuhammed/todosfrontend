import React from 'react'

const List = ({ todos }) => {
    return (
        <ul>
            {todos.map(({ title }, index) => {
                return (<li key={index}>{title}</li>);
            })}
        </ul>
    )
}

export default List