import React, { useEffect, useState } from "react";
import { contactBg, contactMobileBg } from "../../assets";
import { Footer, Line } from "../../components";

export default function Contact() {
	const dividerStyles = "bg-[#1A1A1A] max-lg:h-[2px] lg:w-[2px]";
	// to update bg image
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	useEffect(() => {
		const handleResize = () => setWindowWidth(window.innerWidth);
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const url = windowWidth >= 768 ? contactBg : contactMobileBg;

	return (
		<div className="ContactPage bg-black relative">
			{/* bg image */}
			<div
				style={{
					backgroundImage: `url(${url})`,
				}}
				className="min-h-[750px] md:min-h-[420px] lg:min-h-[370px] 
				bg-no-repeat bg-center bg-cover
				absolute top-0 left-0 w-full z-0
				"
			/>

			{/* content */}
			<div className="min-h-[500px] px-8 md:px-16 pt-32 relative z-10">
				{/* main text */}
				<h1 className=" text-5xl font-light text-white cursor-default md:text-center hover:opacity-80 mb-20">
					Let's <br /> collaborate{" "}
				</h1>

				{/* inputs */}
				<div
					className="flex max-lg:flex-col
					border-2 border-[#1A1A1A]
					mb-8
					"
				>
					<InputField first label="NAME" placeholder={"YOUR NAME"} />
					<div className={dividerStyles} />

					<InputField label="EMAIL" placeholder={"EMAIL ADDRESS"} />
					<div className={dividerStyles} />

					<InputField label="PHONE" placeholder={"PHONE NUMBER"} />
					<div className={dividerStyles} />

					<InputField last label="COMPANY" placeholder={"COMPANY NAME"} />
				</div>

				{/* btn */}
				<div className="flex max-lg:flex-col pb-4">
					<button
						className=" bg-[#FF003C] w-full lg:w-[50%]
						flex items-center justify-center py-2
						text-sm font-medium
						hover:bg-white duration-300 ease-in-out
						cursor-pointer
						"
					>
						Submit&nbsp;
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

					<div className="flex items-center w-full lg:w-[50%] cursor-default max-lg:mt-4">
						<svg
							width="48"
							height="48"
							viewBox="0 0 48 48"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className="lg:ml-5 min-h-[48px] min-w-[48px]"
						>
							<path
								d="M32 18L21 29L16 24"
								stroke="#51B900"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<rect x="0.5" y="0.5" width="47" height="47" stroke="#51B900" />
						</svg>

						<p className="text-sm text-white  pl-5">
							By clicking on the button you consent to the processing of
							personal data
						</p>
					</div>
				</div>

				{/* line */}
				<Line name={"CONTACT"} />

				{/* contacts */}
				<div
					className="flex max-lg:flex-col
					mb-28
					"
				>
					<div
						className="flex flex-col 
						text-white p-6 w-full md:flex-1 
						overflow-hidden cursor-default"
					>
						<h6 className=" text-sm">email</h6>
						<h1 className=" text-lg font-light">VIG@gmail.com</h1>
					</div>

					<div
						className="flex flex-col 
						text-white p-6 w-full md:flex-1 
						overflow-hidden cursor-default"
					>
						<h6 className=" text-sm">Location</h6>
						<h1 className=" text-lg font-light">TX, United States</h1>
					</div>

					<div
						className="flex flex-col 
						text-white p-6 w-full md:flex-1 
						overflow-hidden cursor-default"
					>
						<h6 className=" text-sm">Phone</h6>
						<h1 className=" text-lg font-light">+34 658 342 34 43</h1>
					</div>

					{/* icons */}
					<div
						className="flex items-center md:justify-end p-6 w-full md:flex-1 
						overflow-hidden"
					>
						<svg
							width="52"
							height="52"
							viewBox="0 0 52 52"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className="cursor-pointer hover:opacity-80 duration-300 ease-in-out"
						>
							<path
								d="M47.6673 26.1315C47.6673 14.092 37.9679 4.33337 26.0007 4.33337C14.0334 4.33337 4.33398 14.092 4.33398 26.1315C4.33398 37.0139 12.2553 46.0316 22.6149 47.6667V32.4336H17.1144V26.13H22.6149V21.3287C22.6149 15.8658 25.849 12.8469 30.7991 12.8469C33.168 12.8469 35.6495 13.273 35.6495 13.273V18.6377H32.9152C30.2242 18.6377 29.3864 20.319 29.3864 22.0437V26.1315H35.3953L34.4348 32.4322H29.3864V47.6667C39.746 46.0316 47.6673 37.0139 47.6673 26.1315Z"
								fill="white"
							/>
						</svg>

						<svg
							width="52"
							height="52"
							viewBox="0 0 52 52"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className="mx-2 cursor-pointer hover:opacity-80 duration-300 ease-in-out"
						>
							<path
								d="M45.5 9.36765V42.6324C45.5 43.3929 45.1979 44.1223 44.6601 44.6601C44.1223 45.1979 43.3929 45.5 42.6324 45.5H9.36765C8.6071 45.5 7.8777 45.1979 7.33991 44.6601C6.80213 44.1223 6.5 43.3929 6.5 42.6324V9.36765C6.5 8.6071 6.80213 7.8777 7.33991 7.33991C7.8777 6.80213 8.6071 6.5 9.36765 6.5H42.6324C43.3929 6.5 44.1223 6.80213 44.6601 7.33991C45.1979 7.8777 45.5 8.6071 45.5 9.36765ZM17.9706 21.4118H12.2353V39.7647H17.9706V21.4118ZM18.4868 15.1029C18.4898 14.6691 18.4073 14.2389 18.2441 13.837C18.0809 13.435 17.8401 13.0691 17.5354 12.7603C17.2308 12.4514 16.8683 12.2055 16.4686 12.0367C16.069 11.8679 15.64 11.7795 15.2062 11.7765H15.1029C14.2207 11.7765 13.3746 12.1269 12.7508 12.7508C12.1269 13.3746 11.7765 14.2207 11.7765 15.1029C11.7765 15.9852 12.1269 16.8313 12.7508 17.4551C13.3746 18.0789 14.2207 18.4294 15.1029 18.4294C15.5368 18.4401 15.9685 18.3652 16.3734 18.2089C16.7783 18.0527 17.1484 17.8182 17.4627 17.5189C17.7769 17.2196 18.0291 16.8613 18.2048 16.4644C18.3805 16.0676 18.4763 15.64 18.4868 15.2062V15.1029ZM39.7647 28.6153C39.7647 23.0979 36.2547 20.9529 32.7676 20.9529C31.6259 20.8958 30.4891 21.139 29.4707 21.6582C28.4523 22.1775 27.5878 22.9547 26.9635 23.9124H26.8029V21.4118H21.4118V39.7647H27.1471V30.0032C27.0642 29.0035 27.3791 28.0114 28.0234 27.2425C28.6677 26.4736 29.5894 25.99 30.5882 25.8968H30.8062C32.63 25.8968 33.9835 27.0438 33.9835 29.9344V39.7647H39.7188L39.7647 28.6153Z"
								fill="white"
							/>
						</svg>

						<svg
							width="52"
							height="52"
							viewBox="0 0 52 52"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className="cursor-pointer hover:opacity-80 duration-300 ease-in-out"
						>
							<path
								d="M41.0175 12.2232C38.2556 10.9559 35.2938 10.0222 32.1971 9.48747C32.1407 9.47715 32.0844 9.50294 32.0554 9.55453C31.6744 10.232 31.2525 11.1158 30.9571 11.8105C27.6264 11.3119 24.3128 11.3119 21.0504 11.8105C20.7549 11.1004 20.3176 10.232 19.935 9.55453C19.906 9.50467 19.8496 9.47887 19.7932 9.48747C16.6983 10.0205 13.7365 10.9542 10.9729 12.2232C10.949 12.2335 10.9285 12.2507 10.9149 12.2731C5.29705 20.6659 3.7581 28.8525 4.51306 36.9376C4.51648 36.9772 4.53868 37.015 4.56943 37.039C8.27589 39.761 11.8662 41.4135 15.3899 42.5087C15.4463 42.526 15.5061 42.5053 15.5419 42.4589C16.3755 41.3206 17.1185 40.1204 17.7555 38.8582C17.7931 38.7843 17.7572 38.6966 17.6804 38.6674C16.5019 38.2203 15.3797 37.6752 14.3002 37.0563C14.2148 37.0064 14.2079 36.8843 14.2865 36.8258C14.5137 36.6556 14.7409 36.4785 14.9578 36.2996C14.997 36.267 15.0517 36.2601 15.0979 36.2807C22.1896 39.5186 29.8673 39.5186 36.8754 36.2807C36.9216 36.2584 36.9763 36.2653 37.0172 36.2979C37.2342 36.4767 37.4613 36.6556 37.6902 36.8258C37.7688 36.8843 37.7636 37.0064 37.6783 37.0563C36.5988 37.6873 35.4766 38.2203 34.2963 38.6657C34.2195 38.6949 34.1853 38.7843 34.2229 38.8582C34.8736 40.1186 35.6166 41.3188 36.4348 42.4572C36.4689 42.5053 36.5304 42.526 36.5868 42.5087C40.1276 41.4135 43.7179 39.761 47.4243 37.039C47.4568 37.015 47.4773 36.9789 47.4807 36.9393C48.3843 27.5921 45.9674 19.4726 41.0738 12.2748C41.0619 12.2507 41.0414 12.2335 41.0175 12.2232ZM18.8146 32.0146C16.6795 32.0146 14.9202 30.0544 14.9202 27.6471C14.9202 25.2398 16.6454 23.2796 18.8146 23.2796C21.0008 23.2796 22.7431 25.257 22.7089 27.6471C22.7089 30.0544 20.9838 32.0146 18.8146 32.0146ZM33.2134 32.0146C31.0783 32.0146 29.3191 30.0544 29.3191 27.6471C29.3191 25.2398 31.0442 23.2796 33.2134 23.2796C35.3997 23.2796 37.1419 25.257 37.1078 27.6471C37.1078 30.0544 35.3997 32.0146 33.2134 32.0146Z"
								fill="white"
							/>
						</svg>
					</div>
				</div>
			</div>
			{/* footer */}
			<Footer />
		</div>
	);
}

function InputField({ first = false, last = false, label, placeholder }) {
	return (
		<div
			className={`flex flex-col 
			p-6 w-full md:flex-1 overflow-hidden
			`}
		>
			<label
				className="text-sm text-white  
				pb-4
				"
			>
				{label}
			</label>
			<input
				className="bg-transparent placeholder:text-white placeholder:text-opacity-30 
				text-white text-lg font-light pb-1
				focus:outline-none focus:!border-b-2  focus:!border-white
				"
				type="text"
				placeholder={placeholder}
			/>
		</div>
	);
}
