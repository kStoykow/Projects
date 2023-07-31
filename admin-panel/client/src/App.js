import "./App.css";

import { Header } from "./components/Header/Header";
import { Search } from "./components/Search/Search";
import { Table } from "./components/Table/Table";
import { Pagination } from "./components/Pagination/Pagination";
import { UserDetails } from "./components/UserDetails/UserDetails";
import { UserSaveForm } from "./components/UserSaveForm/UserSaveForm";
import { DeleteUserModal } from "./components/DeleteUserModal/DeleteUserModal";
import { Footer } from "./components/Footer/Footer";


function App() {
	return (
		<>
			<Header />
			<main className="main">
				<section className="card users-container">
					<Search />
					<Table />
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
