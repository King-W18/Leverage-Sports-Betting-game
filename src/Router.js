import React from "react";
import { Route, Routes } from "react-router-dom";
import {
	Blog,
	BlogDetail,
	ChangeLog,
	Contact,
	Faqs,
	Home,
	Platform,
} from "./pages";

export default function Router() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/platform-solutions" element={<Platform />} />
			<Route path="/contact" element={<Contact />} />
			<Route path="resources/faq" element={<Faqs />} />
			<Route path="resources/blog" element={<Blog />} />
			<Route path="resources/blog/:id" element={<BlogDetail />} />
			<Route path="resources/changelog" element={<ChangeLog />} />
			<Route
				path="*"
				element={
					<div
						className="h-screen w-full 
						flex items-center justify-center bg-black"
					>
						<h1
							className="text-3xl md:text-5xl 
							text-white text-center
							p-5 text-opacity-50
							border-2 border-white border-opacity-10
							"
						>
							404 <br /> Page Not Found
						</h1>
					</div>
				}
			/>
		</Routes>
	);
}
