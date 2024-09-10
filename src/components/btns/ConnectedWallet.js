import React from "react";
import "./Btns.css";

export default function ConnectedWallet({
	isBlack = false,
	avatar,
	wallet,
	...props
}) {
	return (
		<button
			className={`w-full max-lg:mt-auto duration-300 ease-in-out text-sm 
            h-12 lg:w-60 text-white bg-[#141414] flex items-center py-1 px-3 lg:-ml-[55px]
			${isBlack && " !mt-8"}
            `}
			{...props}
		>
			<>
				<img
					src={avatar}
					alt="avatar-img"
					className="h-full object-contain z-30 mr-2 lg:mr-auto"
				/>

				{wallet}

				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="ml-auto lg:ml-2"
				>
					<path
						d="M5 12L19 12M19 12L12 5M19 12L12 19"
						stroke="white"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</>
		</button>
	);
}
