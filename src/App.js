import './App.css';
import axios from "axios"
import Header from "./components/Header";
import Section from "./components/Section";
import List from "./components/List";
import { useState, useEffect } from 'react';

function App() {
  const [state, setState] = useState([]);
  const addTodo = async (newTask) => {
    const newTodo = (await axios.post('http://localhost:5000/api/todos/', { message: newTask })).data;
    setState([...state, newTodo]);
  }
  const updateTodo = async (id) => {
    await axios.put(`http://localhost:5000/api/todos/${id}`);
    setState(state.map(el => {
      if (el._id === id) return { ...el, completed: !el.completed };
      return { ...el }
    }))
  };
  useEffect(() => {
    async function fetchTodos() {
      const { data } = await axios.get('http://localhost:5000/api/todos/');
      setState(data);
    }
    fetchTodos();
  }, []);
  console.log({ state });
  return (
    <div>
      <Header />
      <Section addTodo={addTodo} />
      <List className="list" todos={state} updateTodo={updateTodo} />
    </div>
  );
}

export default App;
