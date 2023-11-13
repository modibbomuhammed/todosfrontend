import React from 'react'

const List = ({ todos }) => {
    return (
        <ul>
            {todos.map((el, index) => {
                return (<li key={index}>el</li>)
            })}
        </ul>
    )
}

export default List