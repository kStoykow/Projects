import { Spinner } from "./components/Spinner";
import { Table } from "./components/Table";

function App() {
	return (
		<>
			<header className="navigation-header">
				<span className="navigation-logo">
					<img src="/static/images/todo-icon.png" alt="todo-logo" />
				</span>
				<span className="spacer"></span>
				<span className="navigation-description">Todo List</span>
			</header>

			<main className="main">

				<section className="todo-list-container">
					<h1>Todo List</h1>

					<div className="add-btn-container">
						<button className="btn">+ Add new Todo</button>
					</div>

					<div className="table-wrapper">

						{/* <Spinner /> */}

						{/* <!-- Todo list table --> */}
						<Table />
					</div>
				</section>
			</main>

			{/* <!-- Footer --> */}
			<footer className="footer">
				<p>Copyright © designed by Mihail Valkov</p>
			</footer>
		</>
	);
}

export default App;
