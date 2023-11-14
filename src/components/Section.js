import { useState } from 'react'

const Section = ({ addTodo }) => {
    const [state, setState] = useState('');
    const handleChange = (e) => {
        setState(e.target.value);
    };
    const handleKeyDown = (e) => {
        if (e.keyCode === 13) {
            addTodo(state);
            setState('');
        }
    };
    return (
        <section className='form'>
            <input onChange={handleChange} onKeyDown={handleKeyDown} type="text" id="todoInput" placeholder="Insert your task here..." value={state} />
        </section>
    )
}

export default Section