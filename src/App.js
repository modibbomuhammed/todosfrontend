import './App.css';
import axios from "axios"
import Header from "./components/Header";
import Section from "./components/Section";
import List from "./components/List";
import { useState, useEffect } from 'react';

function App() {
  const [state, setState] = useState([]);
  useEffect(() => {
    async function fetchTodos() {
      const { data } = await axios.get('http://localhost:5000/api/todos/');
      console.log({ data });
      setState(data);
    }
    fetchTodos();
  });

  return (
    <div>
      <Header />
      <Section />
      <List className="list" todos={state} />
    </div>
  );
}

export default App;
