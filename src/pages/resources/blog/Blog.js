import React, { useState } from "react";
import { platformBg } from "../../../assets";
import { Footer } from "../../../components";
import { useNavigate } from "react-router-dom";

const content = [
	{
		id: "blog-1",
		date: "15 Sep, 2022",
		name: "The Merge",
		type: "news",
		text: "The Merge is finally here. While the Ethereum community celebrates the coming of the Merge, some people are still wondering how we got here, what the Merge actually is, and what it all means for the future of Ethereum. Let's jump right in.",
		isNew: false,
	},
	{
		id: "blog-2",
		date: "12 Sep, 2023",
		name: "The Merge",
		type: "news",
		text: "The Merge is finally here. While the Ethereum community celebrates the coming of the Merge, some people are still wondering how we got here, what the Merge actually is, and what it all means for the future of Ethereum. Let's jump right in.",
		isNew: true,
	},
];

export default function Blog() {
	const navigate = useNavigate();
	const [tab, setTab] = useState("all");
	const [blogs, setBlogs] = useState(content);

	// handle tab
	const handleTab = (type) => {
		setTab(type);
		if (type === "all") {
			setBlogs(content);
		} else if (type === "new") {
			setBlogs(content.filter((x) => x.isNew === true));
		}
	};

	// handle click
	const handleClick = (id) => {
		navigate("/resources/blog/" + id);
	};

	// styles
	const buttonStyles =
		"max-md:flex-1 py-1.5 px-5 text-white  font-normal hover:bg-white hover:bg-opacity-30 hover:text-black duration-300 ease-in-out";
	const activeStyles = " !bg-white !text-black";
	const dividerStyles = "bg-white w-[1px]";

	return (
		<div className="PlatformPage bg-black relative">
			{/* bg image */}
			<div
				style={{
					backgroundImage: `url(${platformBg})`,
				}}
				className="h-[500px]
				bg-no-repeat bg-center bg-cover
				absolute top-0 left-0 w-full z-0
				"
			/>

			{/* content */}
			<div className="z-10 px-8 xl:px-16 pt-32">
				{/* top */}
				<div className="flex max-md:flex-col md:items-center justify-between w-full ">
					{/* main text */}
					<div>
						<h1 className="text-5xl font-light text-white hover:opacity-80">
							Blog
						</h1>

						<p className="text-[#FF003C] pt-2">
							{"/// The latest news from VIG"}
						</p>
					</div>

					{/* tabs */}
					<div
						className="flex max-md:w-full
                        border border-white
                        z-20 max-md:mt-8
                        "
					>
						<button
							className={
								tab === "all" ? buttonStyles + activeStyles : buttonStyles
							}
							onClick={() => handleTab("all")}
						>
							All
						</button>

						<div className={dividerStyles} />

						<button
							className={
								tab === "new" ? buttonStyles + activeStyles : buttonStyles
							}
							onClick={() => handleTab("new")}
						>
							New
						</button>
					</div>
				</div>

				{/* blogs */}
				<div className="flex flex-col my-16">
					{blogs?.map(({ id, name, date, type, text }, index) => (
						<div
							key={index}
							className="w-full py-4 max-md:mb-10 mb-5 z-10
                            flex max-md:flex-col justify-between
                             text-white 
                            border-b border-white border-opacity-10
                            "
						>
							{/* date & btn */}
							<div className="flex flex-col text-sm justify-between flex-1 max-md:hidden">
								<h1 className=" pb-3">{date}</h1>

								{/* md:button */}
								<button
									className="bg-[#FF003C] flex items-center justify-center text-black p-2 w-fit
                                    hover:bg-white duration-300 ease-in-out
                                    "
									onClick={() => handleClick(id)}
								>
									Read&nbsp;
									<svg
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M4 12H20M20 12L14 6M20 12L14 18"
											stroke="black"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</button>
							</div>

							{/* type & name */}
							<div className="flex-1">
								<h1 className="text-xs text-[#FF003C]">
									{"//// "}
									{type}
								</h1>
								<h1 className="text-lg">{name}</h1>
							</div>

							{/* max-md:date */}
							<h1 className="md:hidden">{date}</h1>

							{/* text */}
							<p className="opacity-75 flex-1 max-md:mt-8">{text}</p>

							{/* max-md:button */}
							<button
								className="bg-[#FF003C] flex items-center justify-center text-black p-2 w-fit
                                    hover:opacity-80 duration-300 ease-in-out md:hidden mt-8
                                    "
								onClick={() => handleClick(id)}
							>
								Read&nbsp;
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M4 12H20M20 12L14 6M20 12L14 18"
										stroke="black"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</button>
						</div>
					))}
				</div>
			</div>
			{/* footer */}
			<Footer platform />
		</div>
	);
}
