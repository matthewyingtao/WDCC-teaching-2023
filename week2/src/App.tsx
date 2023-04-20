import { useState } from "react";
import Pfp from "./assets/pfp.jpg";
import "./styles.css";

function App() {
	const [select, setSelect] = useState(true);

	const people = [
		{
			name: "Alexis Ohanian",
			stage: "Pre-Revenue",
			location: "Colorado",
			recentActivity: "Recently Added",
		},
		{
			name: "Alexis Ohanian",
			stage: "Pre-Revenue",
			location: "Colorado",
			recentActivity: "Recently Added",
		},
		{
			name: "Alexis Ohanian",
			stage: "Pre-Revenue",
			location: "Colorado",
			recentActivity: "Recently Added",
		},
	];

	return (
		<div className="modal">
			<header className="modal__header">
				<h2>Table</h2>
				<div className="modal__buttons">
					<button>Cancel</button>
					<button className="primary">Add element</button>
				</div>
			</header>
			<section>
				<div className="table-wrapper">
					<table>
						<thead>
							<tr>
								<th className="text-center">
									<button
										className="checkbox"
										onClick={() => setSelect((prev) => !prev)}
										style={{
											background: select ? "red" : "white",
										}}
									></button>
									<input
										type="checkbox"
										name=""
										id=""
										style={{ display: "none" }}
										value={select ? "on" : "off"}
									/>
								</th>
								<th>Name</th>
								<th>Stage</th>
								<th>Location</th>
								<th>Recent activity</th>
							</tr>
						</thead>
						<tbody>
							{people.map((person) => (
								<tr>
									<td className="text-center">1</td>
									<td>
										<span className="avatar-wrapper">
											<img className="avatar" src={Pfp} alt="" />
										</span>
										Alexis Ohanian
									</td>
									<td>Pre-Revenue</td>
									<td>Colorado</td>
									<td>Recently Added</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</section>
			<aside>
				<h3>Source</h3>
				<div className="input-box mb-2">
					<img className="icon" src="./icons/close-circle-outline.svg" alt="" />
					<span>People</span>
					<img
						className="icon ml-auto"
						src="./icons/chevron-down-outline.svg"
						alt=""
					/>
				</div>
				<button className="filter">Filter</button>

				<h3>Records</h3>
				<div className="input-box mb-2 justify-between">
					<span>All records</span>
					<div className="circle-outer">
						<div className="circle-inner"></div>
					</div>
				</div>
				<div className="input-box">
					<span>Specific records</span>
				</div>

				<h3>Fields</h3>
				<div className="input-box">Search</div>
			</aside>
		</div>
	);
}

export default App;
