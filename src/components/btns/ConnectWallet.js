import React from "react";
import "./Btns.css";

export default function ConnectWallet({ isBlack = false, ...props }) {
	return (
		<div
			className={`wallet-button relative h-12 max-lg:mt-auto duration-300 ease-in-out text-black fill-[#FF003C] hover:fill-white
            flex gap-0.5 !cursor-pointer
            ${isBlack && " !fill-black !text-white !mt-8"}
            `}
			{...props}
		>
			{/* lg: main button */}
			<svg
				width="173"
				height="48"
				viewBox="0 0 173 48"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className="max-lg:hidden fill-inherit"
			>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M7.01292 2.00899L0.0159378 8.99996L0 8.98404V48H97.0092L98.9949 46.0169V45.9909H165.987L172.984 38.9999L173 39.0157V0H75.9908L74.0053 1.98297V2.00899H7.01292Z"
					fill="inherit"
				/>
			</svg>

			{/* max-lg: main button */}
			<svg
				width="329"
				height="48"
				viewBox="0 0 329 48"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className="h-full lg:hidden fill-inherit"
			>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M7.01269 2.00905L0.0157089 9.00002L0 8.98432V48H253.009L254.995 46.0167V45.9907H321.987L328.984 38.9998L329 39.0155V0H75.9906L74.0051 1.98303V2.00905H7.01269Z"
					fill="inherit"
				/>
			</svg>

			{/* right rectangle 1 */}
			<svg
				width="4"
				height="20"
				viewBox="0 0 4 20"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className={`wallet-rectangle-1 duration-100
                ${isBlack && " !fill-black"}
                `}
			>
				<rect width="4" height="20" fill="inherit" />
			</svg>
			{/* right rectangle 2 */}
			<svg
				width="4"
				height="4"
				viewBox="0 0 4 4"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className={`wallet-rectangle-2 duration-100
                ${isBlack && " !fill-black"}
                `}
			>
				<rect width="4" height="4" fill="inherit" />
			</svg>

			<span className="absolute top-0 left-0 h-full w-full flex items-center justify-center text-sm pr-5">
				Connect Wallet
			</span>
		</div>
	);
}
