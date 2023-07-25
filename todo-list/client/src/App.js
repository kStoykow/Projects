import { useState, useEffect } from 'react';

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Spinner } from "./components/Spinner";
import { Table } from "./components/Table";

function App() {

	const [todos, setTodos] = useState([]);

	useEffect(() => {
		fetch('http://localhost:3030/jsonstore/todos')
			.then(res => res.json())
			.then(data => Object.values(data))
			.then(todos => setTodos(todos));
	}, []);

	return (
		<>
			<Header />

			<main className="main">

				<section className="todo-list-container">
					<h1>Todo List</h1>

					<div className="add-btn-container">
						<button className="btn">+ Add new Todo</button>
					</div>

					<div className="table-wrapper">

						{todos ? <Table todos={todos} /> : <Spinner />}


					</div>
				</section>
			</main>

			<Footer />
		</>
	);
}

export default App;
