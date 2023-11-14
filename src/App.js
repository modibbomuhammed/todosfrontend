import './App.css';
import axios from "axios"
import Header from "./components/Header";
import Section from "./components/Section";
import List from "./components/List";
import { useState, useEffect } from 'react';

function App() {
  const api = 'http://localhost:5000/api/todos/';
  const [state, setState] = useState([]);

  const addTodo = async (newTask) => {
    const newTodo = (await axios.post(api, { message: newTask })).data;
    setState([...state, newTodo]);
  }
  const updateTodo = async (id) => {
    await axios.put(`${api}${id}`);
    setState(state.map(el => {
      if (el._id === id) return { ...el, completed: !el.completed };
      return { ...el }
    }))
  };

  const deleteTodo = async (id, event) => {
    event.stopPropagation();
    await axios.delete(`${api}${id}`);
    setState(state.filter(el => el._id !== id));
  };

  useEffect(() => {
    async function fetchTodos() {
      const { data } = await axios.get(api);
      setState(data);
    }
    fetchTodos();
  }, []);

  return (
    <div>
      <Header />
      <Section addTodo={addTodo} />
      <List className="list" todos={state} updateTodo={updateTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
