import React, { useState, useEffect } from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
	NavLink,
} from "react-router-dom";

import Home from "./Components/Home";

export default function App() {
	return (
		<Router>
			<div className="bg-fixed flex justify-between pb-2 w-full pt-4 text-center mx-auto grid grid-cols-3  bg-green-900 text-white">
				<div>
					<NavLink
						to="#"
						className="font-mono py-2 font-semibold text-xl text-center col-span-2"
					>
						The Protector
					</NavLink>
				</div>
				<div className="w-full  text-center mx-auto grid grid-cols-4 ">
					<NavLink to="#" className="py-2 ">
						Home
					</NavLink>
					<NavLink to="#" className="py-2 ">
						About
					</NavLink>
					<NavLink to="#" className="py-2 ">
						Blog
					</NavLink>
					<NavLink to="#" className="py-2 ">
						Contact
					</NavLink>
				</div>
				<div className="text-center">
					<NavLink to="#" className="py-2 mx-2">
						<button className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-500 hover:text-white px-8 py-2 rounded-full">
							Sign up
						</button>
					</NavLink>
					<NavLink to="#" className="py-2 mx-2">
						<button className="bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white px-8 py-2 rounded-full">
							Login
						</button>
					</NavLink>
				</div>
			</div>

			<Home />

			{/* 	<Routes> */}
			{/* 		<Route path="/home" element={<Home />} /> */}
			{/* 	</Routes> */}
		</Router>
	);
}
