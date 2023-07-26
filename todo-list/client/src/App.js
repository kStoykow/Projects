import { useState, useEffect } from 'react';
import { AddForm } from './components/AddForm';

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Spinner } from "./components/Spinner";
import { Table } from "./components/Table";

function App() {

	const [todos, setTodos] = useState([]);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		fetch('http://localhost:3030/jsonstore/todos')
			.then(res => res.json())
			.then(data => Object.values(data))
			.then(todos => setTodos(todos))
			.catch(err => {
				console.log('err ' + err.message);
			});
	}, []);

	function onChangeStatus(id) {
		console.log(id);
		setTodos(todosState => todosState.map(e => e._id === id ? { ...e, isComplete: !e.isComplete } : e))
	}

	function onAddTodoClick() {
		setIsVisible(state => !state);
	}

	function onTodoSubmit(e, data) {
		e.preventDefault();

		fetch('http://localhost:3030/jsonstore/todos',
			{
				method: 'POST',
				body: JSON.stringify({ text: data, isComplete: false })
			}
		).then(res => setTodos(state => [...state, { _id: `todo_${todos.length}`, text: data, isComplete: false }]));

		setIsVisible(state => !state);
	}

	return (
		<>
			<Header />

			<main className="main">

				<section className="todo-list-container">
					<h1>Todo List</h1>

					<div className="add-btn-container">
						<button className="btn" onClick={onAddTodoClick}>+ Add new Todo</button>
					</div>

					{isVisible && <AddForm onTodoSubmit={onTodoSubmit} />}

					<div className="table-wrapper">
						{todos ? <Table todos={todos} onChangeStatus={onChangeStatus} /> : <Spinner />}
					</div>
				</section>
			</main>

			<Footer />
		</>
	);
}

export default App;
