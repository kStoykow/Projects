import "./App.css";
import { DeleteUserModal } from "./components/DeleteUserModal/DeleteUserModal";
import { FeedbackIcons } from "./components/FeedbackIcons/FeedbackIcons";

import { Footer } from "./components/Footer/Footer";
import { Table } from "./components/Table/Table";


function App() {
	return (
		<>
			{/* <!-- Header component --> */}
			<header className="header">
				<div className="logo">
					<span className="course">React Course - June 2022</span>
					<span className="description">User List Demo</span>
				</div>
			</header>

			{/* <!-- Main component  --> */}
			<main className="main">

				{/* <!-- Section component  --> */}
				<section className="card users-container">
					{/* <!-- Search bar component --> */}
					<form className="search-form">
						<h2>
							<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user"
								className="svg-inline--fa fa-user SearchBar_icon__cXpTg" role="img" xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 448 512">
								<path fill="currentColor"
									d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z">
								</path>
							</svg>
							<span>Users</span>
						</h2>
						<div className="search-input-container">
							<input type="text" placeholder="Please, select the search criteria" name="search" />
							{/* <!-- Show the clear button only if input field length !== 0 --> */}
							<button className="btn close-btn">
								<i className="fa-solid fa-xmark"></i>
							</button>

							<button className="btn" title="Please, select the search criteria">
								<i className="fa-solid fa-magnifying-glass"></i>
							</button>
						</div>

						<div className="filter">
							<span>Search Criteria:</span>
							<select name="criteria" className="criteria" value="">
								<option value="">Not selected</option>
								<option value="">First Name</option>
								<option value="">Last Name</option>
								<option value="">Email</option>
								<option value="">Phone</option>
							</select>
						</div>
					</form>

					{/* Table component */}
					<div className="table-wrapper">
						{/* <FeedbackIcons /> */}
						<Table />
					</div>

					{/* <!-- New user button  --> */}
					<button className="btn-add btn">Add new user</button>

					{/* <!-- Pagination component  --> */}
					<div className="pagination position">
						<div className="limits">
							<span>Items per page:</span>
							<select name="limit" className="limit" value="5">
								<option value="5">5</option>
								<option value="5">10</option>
								<option value="5">15</option>
								<option value="5">20</option>
							</select>
						</div>
						<p className="pages">1 - 1 of 1</p>
						<div className="actions">
							<button className="btn" title="First Page">
								<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angles-left"
									className="svg-inline--fa fa-angles-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
									<path fill="currentColor"
										d="M77.25 256l137.4-137.4c12.5-12.5 12.5-32.75 0-45.25s-32.75-12.5-45.25 0l-160 160c-12.5 12.5-12.5 32.75 0 45.25l160 160C175.6 444.9 183.8 448 192 448s16.38-3.125 22.62-9.375c12.5-12.5 12.5-32.75 0-45.25L77.25 256zM269.3 256l137.4-137.4c12.5-12.5 12.5-32.75 0-45.25s-32.75-12.5-45.25 0l-160 160c-12.5 12.5-12.5 32.75 0 45.25l160 160C367.6 444.9 375.8 448 384 448s16.38-3.125 22.62-9.375c12.5-12.5 12.5-32.75 0-45.25L269.3 256z">
									</path>
								</svg>
							</button>

							<button className="btn" title="Previous Page">
								<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-left"
									className="svg-inline--fa fa-angle-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
									<path fill="currentColor"
										d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z">
									</path>
								</svg>
							</button>
							<button className="btn" title="Next Page">
								<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right"
									className="svg-inline--fa fa-angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
									<path fill="currentColor"
										d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z">
									</path>
								</svg>
							</button>

							<button className="btn" title="Last Page">
								<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angles-right"
									className="svg-inline--fa fa-angles-right" role="img" xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 448 512">
									<path fill="currentColor"
										d="M246.6 233.4l-160-160c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L178.8 256l-137.4 137.4c-12.5 12.5-12.5 32.75 0 45.25C47.63 444.9 55.81 448 64 448s16.38-3.125 22.62-9.375l160-160C259.1 266.1 259.1 245.9 246.6 233.4zM438.6 233.4l-160-160c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L370.8 256l-137.4 137.4c-12.5 12.5-12.5 32.75 0 45.25C239.6 444.9 247.8 448 256 448s16.38-3.125 22.62-9.375l160-160C451.1 266.1 451.1 245.9 438.6 233.4z">
									</path>
								</svg>
							</button>
						</div>
					</div>
				</section >

				{/* <!-- User details component  --> */}
				{/*<div className="overlay">
	 	<div className="backdrop"></div>
	 	<div className="modal">
	 		<div className="detail-container">
	 			<header className="headers">
	 				<h2>User Detail</h2>
	 				<button className="btn close">
	 					<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="xmark"
																className="svg-inline--fa fa-xmark" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
																<path fill="currentColor"
																	d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z">
																</path>
															</svg>
														</button>
													</header>
													<div className="content">
														<div className="image-container">
															<img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt=""
																className="image" />
														</div>
														<div className="user-details">
															<p>User Id: <strong>62bb0c0eda039e2fdccba57b</strong></p>
															<p>
																Full Name:
																<strong> Peter Johnson </strong>
															</p>
															<p>Email: <strong>peter@abv.bg</strong></p>
															<p>Phone Number: <strong>0812345678</strong></p>
															<p>
																Address:
																<strong> Bulgaria, Sofia, Aleksandar Malinov 78 </strong>
															</p>

															<p>Created on: <strong>Wednesday, June 28, 2022</strong></p>
															<p>Modified on: <strong>Thursday, June 29, 2022</strong></p>
														</div>
													</div>
												</div>
											</div>
										</div> -->*/ }


				{/* <!-- Create/Edit Form component  --> */}
				{/*  <div className="overlay"> 
											<div className="backdrop"></div>
											<div className="modal">
												<div className="user-container">
													<header className="headers">
														<h2>Edit User/Add User</h2>
														<button className="btn close">
															<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="xmark"
																className="svg-inline--fa fa-xmark" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
																<path fill="currentColor"
																	d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z">
																</path>
															</svg>
														</button>
													</header>
													<form>
														<div className="form-row">
															<div className="form-group">
																<label htmlFor="firstName">First name</label>
																<div className="input-wrapper">
																	<span><i className="fa-solid fa-user"></i></span>
																	<input id="firstName" name="firstName" type="text" />
																</div>
																<p className="form-error">
																	First name should be at least 3 characters long!
																</p>
															</div>
															<div className="form-group">
																<label htmlFor="lastName">Last name</label>
																<div className="input-wrapper">
																	<span><i className="fa-solid fa-user"></i></span>
																	<input id="lastName" name="lastName" type="text" />
																</div>
																<p className="form-error">
																	Last name should be at least 3 characters long!
																</p>
															</div>
														</div>

														<div className="form-row">
															<div className="form-group">
																<label htmlFor="email">Email</label>
																<div className="input-wrapper">
																	<span><i className="fa-solid fa-envelope"></i></span>
																	<input id="email" name="email" type="text" />
																</div>
																<p className="form-error">Email is not valid!</p>
															</div>
															<div className="form-group">
																<label htmlFor="phoneNumber">Phone number</label>
																<div className="input-wrapper">
																	<span><i className="fa-solid fa-phone"></i></span>
																	<input id="phoneNumber" name="phoneNumber" type="text" />
																</div>
																<p className="form-error">Phone number is not valid!</p>
															</div>
														</div>

														<div className="form-group long-line">
															<label htmlFor="imageUrl">Image Url</label>
															<div className="input-wrapper">
																<span><i className="fa-solid fa-image"></i></span>
																<input id="imageUrl" name="imageUrl" type="text" />
															</div>
															<p className="form-error">ImageUrl is not valid!</p>
														</div>

														<div className="form-row">
															<div className="form-group">
																<label htmlFor="country">Country</label>
																<div className="input-wrapper">
																	<span><i className="fa-solid fa-map"></i></span>
																	<input id="country" name="country" type="text" />
																</div>
																<p className="form-error">
																	Country should be at least 2 characters long!
																</p>
															</div>
															<div className="form-group">
																<label htmlFor="city">City</label>
																<div className="input-wrapper">
																	<span><i className="fa-solid fa-city"></i></span>
																	<input id="city" name="city" type="text" />
																</div>
																<p className="form-error">
																	City should be at least 3 characters long!
																</p>
															</div>
														</div>

														<div className="form-row">
															<div className="form-group">
																<label htmlFor="street">Street</label>
																<div className="input-wrapper">
																	<span><i className="fa-solid fa-map"></i></span>
																	<input id="street" name="street" type="text" />
																</div>
																<p className="form-error">
																	Street should be at least 3 characters long!
																</p>
															</div>
															<div className="form-group">
																<label htmlFor="streetNumber">Street number</label>
																<div className="input-wrapper">
																	<span><i className="fa-solid fa-house-chimney"></i></span>
																	<input id="streetNumber" name="streetNumber" type="text" />
																</div>
																<p className="form-error">
																	Street number should be a positive number!
																</p>
															</div>
														</div>
														<div id="form-actions">
															<button id="action-save" className="btn" type="submit">Save</button>
															<button id="action-cancel" className="btn" type="button">
																Cancel
															</button>
														</div>
													</form>
												</div>
											</div>
										</div> */ }


				{/* <DeleteUserModal /> */}

			</main >
			<Footer />
		</>
	);
}

export default App;
