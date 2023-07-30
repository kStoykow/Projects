import "./App.css";

import { Header } from "./components/Header/Header";
import { Table } from "./components/Table/Table";
import { FeedbackIcons } from "./components/FeedbackIcons/FeedbackIcons";
import { DeleteUserModal } from "./components/DeleteUserModal/DeleteUserModal";
import { Footer } from "./components/Footer/Footer";
import { Search } from "./components/Search/Search";
import { Pagination } from "./components/Pagination/Pagination";
import { UserSaveForm } from "./components/UserSaveForm/UserSaveForm";
import { UserDetails } from "./components/UserDetails/UserDetails";


function App() {
	return (
		<>
			<Header />

			<main className="main">
				<section className="card users-container">
					<Search />

					<div className="table-wrapper">
						{/* <FeedbackIcons /> */}
						<Table />
					</div>
					<button className="btn-add btn">Add new user</button>

					<Pagination />
				</section >

				{/* <UserDetails /> */}
				{/* <UserSaveForm/>  create/edit */}
				{/* <DeleteUserModal /> */}
			</main >
			<Footer />
		</>
	);
}

export default App;
